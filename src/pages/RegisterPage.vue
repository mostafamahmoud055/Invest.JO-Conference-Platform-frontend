<template>
  <v-container fluid class="registration-wrapper pa-0 fill-height align-start">
    <!-- Top App Bar -->
    <v-container fluid class="pa-6">
      <v-row align="center" no-gutters>
        <v-col>
          <router-link to="/" class="text-decoration-none">
            <v-btn
              variant="text"
              prepend-icon="mdi-arrow-left"
              class="text-none text-white"
              color="white"
            >
              Back to Home
            </v-btn>
          </router-link>
        </v-col>
        <v-spacer></v-spacer>

        <!-- Removed MENU -->
      </v-row>
    </v-container>

    <!-- Header Text -->
    <v-container>
      <div class="text-start text-white ml-5 max-content-container">
        <h1 class="text-h3 font-weight-bold mb-4">
          Welcome to JEIC 2026 Registration
        </h1>
        <p class="text-subtitle-1 mb-3 opacity-90">
          Thank you for your interest in the Jordan-EU Investment Conference.
          Please review and agree to our data protection policies before
          proceeding.
        </p>
      </div>

      <!-- Success Alert -->
      <v-snackbar v-model="showSuccessMessage" color="success" location="top">
        <template v-slot:default>
          <v-icon class="me-2">mdi-check-circle</v-icon>
          You have successfully registered!
        </template>
      </v-snackbar>
      <v-snackbar v-model="showErrorMessage" color="error" location="top">
        <template v-slot:default>
          <v-icon class="me-2">mdi-alert-circle</v-icon>
          {{ errorMessage }}
        </template>
      </v-snackbar>

      <!-- Registration Card -->
      <v-row class="px-4 pb-12 d-block">
        <v-col cols="12">
          <v-card
            class="registration-card rounded-xl pa-6 pa-md-10"
            elevation="0"
          >
            <!-- Stepper -->
            <v-row class="mb-10 justify-center">
              <v-col cols="12">
                <div class="stepper-container">
                  <div
                    v-for="(step, index) in steps"
                    :key="index"
                    class="stepper-item"
                    :class="{
                      active: currentStep === index + 1,
                      completed: currentStep > index + 1,
                    }"
                  >
                    <div class="step-circle">
                      <v-icon
                        v-if="currentStep > index + 1"
                        icon="mdi-check"
                        size="small"
                      ></v-icon>
                      <span v-else>{{ index + 1 }}</span>
                    </div>
                    <div class="step-label d-none d-sm-block">
                      <div class="label-title">{{ step.title }}</div>
                      <div class="label-subtitle">{{ step.subtitle }}</div>
                    </div>
                    <div
                      v-if="index < steps.length - 1"
                      class="step-line"
                    ></div>
                  </div>
                </div>
              </v-col>
            </v-row>

            <!-- Form Windows -->
            <v-window v-model="currentStep">
              <!-- Step 1: Personal Information -->
              <v-window-item :value="1">
                <h2 class="text-h5 font-weight-bold mb-6">
                  Personal Information
                </h2>
                <v-form @submit.prevent>
                  <v-row>
                    <v-col cols="12" md="6">
                      <label class="input-label">Nationality *</label>
                      <v-select
                        v-model="formData.nationality"
                        label="Select nationality"
                        variant="outlined"
                        :items="[
                          'Jordanian',
                          'European',
                          'United Arab Emirates',
                          'Saudi Arabia',
                          'Qatar',
                          'Kuwait',
                          'Bahrain',
                          'Oman',
                          'Palestine',
                          'United Kingdom',
                          'Germany',
                          'France',
                          'Italy',
                          'Spain',
                          'Netherlands',
                          'Sweden',
                          'Switzerland',
                          'United States',
                          'Canada',
                          'Australia',
                          'Other',
                        ]"
                      ></v-select>
                    </v-col>
                  </v-row>

                  <!-- Jordanian Fields -->
                  <v-row v-if="formData.nationality === 'Jordanian'">
                    <v-col cols="12" md="6">
                      <label class="input-label">First Name *</label>
                      <v-text-field
                        v-model="formData.firstName"
                        placeholder="Enter your first name"
                        variant="outlined"
                        density="comfortable"
                        :rules="[(v) => !!v || 'First Name is required']"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <label class="input-label">Father’s Name *</label>
                      <v-text-field
                        v-model="formData.middleName"
                        placeholder="Enter your father's name"
                        variant="outlined"
                        density="comfortable"
                        :rules="[(v) => !!v || 'Father’s Name is required']"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <label class="input-label">Grandfather’s Name *</label>
                      <v-text-field
                        v-model="formData.nationalId"
                        placeholder="Enter your Grandfather’s Name"
                        variant="outlined"
                        density="comfortable"
                        :rules="[
                          (v) => !!v || 'Grandfather’s Name is required',
                        ]"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <label class="input-label">Family Name *</label>
                      <v-text-field
                        v-model="formData.familyName"
                        placeholder="Enter your family name"
                        variant="outlined"
                        density="comfortable"
                        :rules="[(v) => !!v || 'Family Name is required']"
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <!-- European Fields -->
                  <v-row v-if="formData.nationality === 'European'">
                    <v-col cols="12">
                      <label class="input-label">Passport Copy *</label>
                      <v-file-upload
                        v-model="formData.passportFile"
                        density="compact"
                        variant="compact"
                        accept="image/jpeg,image/png,image/jpg"
                      ></v-file-upload>
                    </v-col>
                    <v-col cols="12" md="6">
                      <label class="input-label">First Name *</label>
                      <v-text-field
                        v-model="formData.firstName"
                        placeholder="Enter your first name"
                        variant="outlined"
                        density="comfortable"
                        :rules="[(v) => !!v || 'First Name is required']"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <label class="input-label">Last Name *</label>
                      <v-text-field
                        v-model="formData.lastName"
                        placeholder="Enter your last name"
                        variant="outlined"
                        density="comfortable"
                        :rules="[(v) => !!v || 'Last Name is required']"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-form>
              </v-window-item>

              <!-- Step 2: Contact Information -->
              <v-window-item :value="2">
                <h2 class="text-h5 font-weight-bold mb-6">
                  Contact Information
                </h2>
                <v-form @submit.prevent>
                  <v-row>
                    <v-col cols="12" md="6">
                      <label class="input-label">Email Address *</label>
                      <v-text-field
                        v-model="formData.email"
                        placeholder="your.email@company.com"
                        variant="outlined"
                        density="comfortable"
                        type="email"
                        :rules="[
                          (v) => !!v || 'Email is required',
                          (v) =>
                            /^\S+@\S+\.\S+$/.test(v) || 'Email must be valid',
                        ]"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <label class="input-label">Phone Number (Optional)</label>
                      <v-row no-gutters>
                        <v-col cols="4" class="pe-2">
                          <v-select
                            v-model="formData.phoneCode"
                            :items="[
                              '+962',
                              '+44',
                              '+1',
                              '+93',
                              '+355',
                              '+213',
                              '+376',
                              '+244',
                              '+54',
                              '+374',
                              '+61',
                              '+43',
                              '+994',
                              '+973',
                              '+880',
                              '+375',
                              '+32',
                              '+501',
                              '+229',
                              '+975',
                              '+591',
                              '+387',
                              '+267',
                              '+55',
                              '+673',
                              '+359',
                              '+226',
                              '+257',
                              '+855',
                              '+237',
                              '+1',
                              '+238',
                              '+236',
                              '+235',
                              '+56',
                              '+86',
                              '+57',
                              '+269',
                              '+242',
                              '+506',
                              '+225',
                              '+385',
                              '+53',
                              '+357',
                              '+420',
                              '+45',
                              '+253',
                              '+1',
                              '+593',
                              '+20',
                              '+503',
                              '+240',
                              '+291',
                              '+372',
                              '+251',
                              '+679',
                              '+358',
                              '+33',
                              '+241',
                              '+220',
                              '+995',
                              '+49',
                              '+233',
                              '+30',
                              '+502',
                              '+224',
                              '+245',
                              '+592',
                              '+509',
                              '+504',
                              '+36',
                              '+354',
                              '+91',
                              '+62',
                              '+98',
                              '+964',
                              '+353',
                              '+972',
                              '+39',
                              '+81',
                              '+7',
                              '+254',
                              '+965',
                              '+996',
                              '+856',
                              '+371',
                              '+961',
                              '+266',
                              '+231',
                              '+218',
                              '+423',
                              '+370',
                              '+352',
                              '+261',
                              '+265',
                              '+60',
                              '+960',
                              '+223',
                              '+356',
                              '+222',
                              '+230',
                              '+52',
                              '+373',
                              '+377',
                              '+976',
                              '+382',
                              '+212',
                              '+258',
                              '+95',
                              '+264',
                              '+977',
                              '+31',
                              '+64',
                              '+505',
                              '+227',
                              '+234',
                              '+850',
                              '+47',
                              '+968',
                              '+92',
                              '+970',
                              '+507',
                              '+675',
                              '+595',
                              '+51',
                              '+63',
                              '+48',
                              '+351',
                              '+974',
                              '+40',
                              '+7',
                              '+250',
                              '+966',
                              '+221',
                              '+381',
                              '+248',
                              '+232',
                              '+65',
                              '+421',
                              '+386',
                              '+252',
                              '+27',
                              '+82',
                              '+211',
                              '+34',
                              '+94',
                              '+249',
                              '+597',
                              '+46',
                              '+41',
                              '+963',
                              '+886',
                              '+992',
                              '+255',
                              '+66',
                              '+228',
                              '+216',
                              '+90',
                              '+993',
                              '+256',
                              '+380',
                              '+971',
                              '+598',
                              '+998',
                              '+678',
                              '+58',
                              '+84',
                              '+967',
                              '+260',
                              '+263',
                            ]"
                            label="Choose Country"
                            variant="outlined"
                            density="comfortable"
                            prepend-inner-icon="mdi-flag-outline"
                          ></v-select>
                        </v-col>
                        <v-col cols="8">
                          <v-text-field
                            v-model="formData.phoneNumber"
                            placeholder="000 0000"
                            variant="outlined"
                            density="comfortable"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-form>
              </v-window-item>

              <!-- Step 3: Professional Details -->
              <v-window-item :value="3">
                <h2 class="text-h5 font-weight-bold mb-6">
                  Professional Details
                </h2>
                <v-form @submit.prevent>
                  <v-row>
                    <v-col cols="12" md="6">
                      <label class="input-label">Job Title *</label>
                      <v-text-field
                        v-model="formData.jobTitle"
                        placeholder="e.g., Managing Director"
                        variant="outlined"
                        density="comfortable"
                        :rules="[(v) => !!v || 'Job Title is required']"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <label class="input-label">Entity *</label>
                      <v-text-field
                        v-model="formData.company"
                        placeholder="Your Entity name"
                        variant="outlined"
                        density="comfortable"
                        :rules="[(v) => !!v || 'Entity is required']"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <label class="input-label">Official Website *</label>
                      <v-text-field
                        v-model="formData.website"
                        placeholder="Provide URL"
                        variant="outlined"
                        density="comfortable"
                        type="url"
                        :rules="[(v) => !!v || 'Website is required']"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <label class="input-label">Sector *</label>
                      <v-select
                        v-model="formData.industry"
                        label="Select an Sector"
                        :items="[
                          'Investment',
                          'Tech',
                          'Trade',
                          'Finance',
                          'Manufacturing',
                          'Governmental',
                          'Humanitarian',
                          'Digital & Technology',
                          'Water',
                          'Energy',
                          'Transport & Logistic',
                          'Regional Gateways',
                          'High value Industries',
                          'Financial Institutions',
                          'Other',
                        ]"
                        variant="outlined"
                        density="comfortable"
                        :rules="[(v) => !!v || 'Industry is required']"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" md="6">
                      <label class="input-label">Country *</label>
                      <v-select
                        v-model="formData.country"
                        label="Select your country"
                        :items="countries"
                        variant="outlined"
                        density="comfortable"
                        :rules="[(v) => !!v || 'Country is required']"
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-form>
              </v-window-item>

              <!-- Step 4: About You -->
              <v-window-item :value="4">
                <h2 class="text-h5 font-weight-bold mb-6">About You</h2>
                <v-form @submit.prevent>
                  <v-row>
                    <v-col cols="12" md="6">
                      <label class="input-label"
                        >LinkedIn Profile URL (Optional)</label
                      >
                      <v-text-field
                        v-model="formData.linkedinUrl"
                        placeholder="https://linkedin.com/in/yourprofile"
                        variant="outlined"
                        density="comfortable"
                        type="url"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <label class="input-label"
                        >Professional Bio (Optional)</label
                      >
                      <v-textarea
                        v-model="formData.bio"
                        placeholder="Share your professional background (optional)"
                        variant="outlined"
                        density="comfortable"
                        rows="6"
                        counter="500"
                        maxlength="500"
                      ></v-textarea>
                      <p class="text-caption text-grey mt-2">
                        {{ formData.bio ? formData.bio.length : 0 }} characters
                      </p>
                    </v-col>
                  </v-row>
                </v-form>
              </v-window-item>

              <!-- Step 5: Travel Information -->
              <v-window-item :value="5">
                <h2 class="text-h5 font-weight-bold mb-6">
                  Travel Information
                </h2>
                <v-form @submit.prevent>
                  <v-row>
                    <v-col cols="12" md="6">
                      <label class="input-label">Arrival *</label>
                      <v-text-field
                        v-model="formData.arrivalDate"
                        prepend-inner-icon="mdi-calendar"
                        placeholder="Select date (YYYY-MM-DD)"
                        variant="outlined"
                        density="comfortable"
                        type="date"
                        :rules="[(v) => !!v || 'Arrival date is required']"
                      ></v-text-field>
                      <v-text-field
                        v-model="formData.arrivalTime"
                        prepend-inner-icon="mdi-clock-outline"
                        placeholder="Select time (HH:MM)"
                        variant="outlined"
                        density="comfortable"
                        type="time"
                        class="mt-3"
                        :rules="[(v) => !!v || 'Arrival time is required']"
                      ></v-text-field>
                      <p class="text-caption text-grey mt-2">
                        Queen Alia International Airport (AMM)
                      </p>
                    </v-col>
                    <v-col cols="12" md="6">
                      <label class="input-label">Departure *</label>
                      <v-text-field
                        v-model="formData.departureDate"
                        prepend-inner-icon="mdi-calendar"
                        placeholder="Select date (YYYY-MM-DD)"
                        variant="outlined"
                        density="comfortable"
                        type="date"
                        :rules="[(v) => !!v || 'Departure date is required']"
                      ></v-text-field>
                      <v-text-field
                        v-model="formData.departureTime"
                        prepend-inner-icon="mdi-clock-outline"
                        placeholder="Select time (HH:MM)"
                        variant="outlined"
                        density="comfortable"
                        type="time"
                        class="mt-3"
                        :rules="[(v) => !!v || 'Departure time is required']"
                      ></v-text-field>
                      <p class="text-caption text-grey mt-2">
                        Queen Alia International Airport (AMM)
                      </p>
                    </v-col>
                  </v-row>
                  <v-alert
                    color="#f8faf0"
                    class="mt-6 border-none text-black airport-alert"
                    rounded="lg"
                  >
                    <div
                      class="text-subtitle-2 font-weight-bold text-light-green-darken-3"
                    >
                      Airport Transfer Service
                    </div>
                    <div class="text-body-2 text-light-green-darken-2">
                      Complimentary pickup and drop-off to Dead Sea
                    </div>
                    <div class="text-caption text-light-green-darken-1">
                      A driver will meet you at the arrivals hall with your name
                      displayed. Travel time approximately 45 minutes.
                    </div>
                  </v-alert>
                </v-form>
              </v-window-item>
            </v-window>

            <!-- Navigation Buttons -->
            <v-divider class="my-8"></v-divider>
            <div class="d-flex align-center">
              <router-link to="/" class="text-decoration-none">
                <v-btn
                  variant="outlined"
                  color="primary"
                  class="text-none px-8 rounded-lg border-opacity-100"
                >
                  Cancel
                </v-btn>
              </router-link>
              <v-spacer></v-spacer>
              <v-btn
                v-if="currentStep > 1"
                variant="tonal"
                class="text-none px-8 rounded-lg me-4 text-black"
                @click="currentStep--"
              >
                <v-icon start icon="mdi-arrow-left"></v-icon> Back
              </v-btn>
              <v-btn
                v-if="currentStep < 5"
                color="#003192"
                class="text-none px-10 rounded-lg text-white"
                elevation="0"
                :disabled="!isCurrentStepValid()"
                @click="currentStep++"
              >
                Next <v-icon end icon="mdi-arrow-right"></v-icon>
              </v-btn>
              <v-btn
                v-else
                color="#003192"
                class="text-none px-10 rounded-lg text-white"
                elevation="0"
                :disabled="!isCurrentStepValid() || isSubmitting"
                :loading="isSubmitting"
                @click="submitForm"
              >
                <v-icon start icon="mdi-check-circle-outline"></v-icon> Submit
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const currentStep = ref(1);
const showSuccessMessage = ref(false);
const showErrorMessage = ref(false);
const errorMessage = ref("");
const isSubmitting = ref(false);
const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Côte d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const formData = ref({
  // Step 1
  nationality: "",
  firstName: "",
  middleName: "",
  familyName: "",
  nationalId: "",
  lastName: "",
  passportFile: [],
  // Step 2
  email: "",
  phoneCode: "+962",
  phoneNumber: "",
  // Step 3
  jobTitle: "",
  company: "",
  website: "",
  industry: "",
  country: "",
  // Step 4
  linkedinUrl: "",
  bio: "",
  // Step 5
  arrivalDate: "",
  arrivalTime: "",
  departureDate: "",
  departureTime: "",
});

const steps = [
  { title: "Personal Info", subtitle: "Basic details" },
  { title: "Contact Info", subtitle: "Communication" },
  { title: "Professional", subtitle: "Your role" },
  { title: "About You", subtitle: "Your profile" },
  { title: "Travel", subtitle: "Planning" },
];

const isCurrentStepValid = () => {
  switch (currentStep.value) {
    case 1:
      if (!formData.value.nationality) return false;
      if (formData.value.nationality === "Jordanian") {
        return !!(
          formData.value.firstName &&
          formData.value.middleName &&
          formData.value.familyName &&
          formData.value.nationalId
        );
      } else if (formData.value.nationality === "European") {
        return !!(
          formData.value.firstName &&
          formData.value.lastName &&
          formData.value.passportFile.length > 0
        );
      }
      return false;
    case 2:
      return (
        !!formData.value.email && /^\S+@\S+\.\S+$/.test(formData.value.email)
      );
    case 3:
      return !!(
        formData.value.jobTitle &&
        formData.value.company &&
        formData.value.website &&
        formData.value.industry &&
        formData.value.country
      );
    case 4:
      return true; // All fields optional
    case 5:
      return !!(
        formData.value.arrivalDate &&
        formData.value.arrivalTime &&
        formData.value.departureDate &&
        formData.value.departureTime
      );
    default:
      return false;
  }
};

const getPassportFile = () => {
  if (
    !Array.isArray(formData.value.passportFile) ||
    formData.value.passportFile.length === 0
  ) {
    return null;
  }

  const raw = formData.value.passportFile[0];
  return raw?.raw || raw?.file || raw;
};

const buildRegistrationPayload = () => {
  const payload = new FormData();
  const isJordanian = formData.value.nationality === "Jordanian";
  const lastName = isJordanian
    ? formData.value.familyName
    : formData.value.lastName;
  const normalizedPhone = formData.value.phoneNumber
    ? `${formData.value.phoneCode}${formData.value.phoneNumber}`.replace(
        /\s+/g,
        "",
      )
    : "";

  payload.append("email", formData.value.email);
  payload.append("first_name", formData.value.firstName);
  payload.append("last_name", lastName || "");
  payload.append("job_title", formData.value.jobTitle);
  payload.append("company", formData.value.company);
  payload.append("industry", formData.value.industry);
  payload.append("website", formData.value.website);
  payload.append("nationality", formData.value.nationality);
  payload.append("country", formData.value.country);
  payload.append("arrival_date", formData.value.arrivalDate);
  payload.append("arrival_time", formData.value.arrivalTime);
  payload.append("departure_date", formData.value.departureDate);
  payload.append("departure_time", formData.value.departureTime);

  if (normalizedPhone) payload.append("phone", normalizedPhone);
  if (formData.value.bio) payload.append("bio", formData.value.bio);
  if (formData.value.linkedinUrl)
    payload.append("linked_in_profile", formData.value.linkedinUrl);

  if (isJordanian) {
    payload.append("middle_name", formData.value.middleName);
    payload.append("family_name", formData.value.familyName);
    payload.append("national_id", formData.value.nationalId);
  } else {
    const passport = getPassportFile();
    if (passport) payload.append("passport_image", passport);
  }

  return payload;
};

const getApiErrorMessage = (result) => {
  if (result?.errors && typeof result.errors === "object") {
    const firstKey = Object.keys(result.errors)[0];
    if (
      firstKey &&
      Array.isArray(result.errors[firstKey]) &&
      result.errors[firstKey][0]
    ) {
      return result.errors[firstKey][0];
    }
  }

  return result?.message || "Failed to submit registration form.";
};

const submitForm = async () => {
  if (!isCurrentStepValid() || isSubmitting.value) return;

  isSubmitting.value = true;
  showErrorMessage.value = false;
  errorMessage.value = "";

  try {
    const response = await fetch(`${apiBaseUrl}/api/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: buildRegistrationPayload(),
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(getApiErrorMessage(result));
    }

    showSuccessMessage.value = true;
    setTimeout(() => {
      router.push("/");
    }, 2000);
  } catch (error) {
    errorMessage.value =
      error?.message || "Something went wrong while submitting the form.";
    showErrorMessage.value = true;
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.registration-wrapper {
  background: linear-gradient(135deg, #001a4d 0%, #0047ab 50%, #0066cc 100%);
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  position: relative;
  overflow-y: auto;
  padding: 20px 0;
}

.registration-wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(
      circle at 20% 50%,
      rgba(255, 255, 255, 0.15) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 80%,
      rgba(255, 255, 255, 0.08) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 40% 10%,
      rgba(135, 206, 250, 0.1) 0%,
      transparent 40%
    );
  pointer-events: none;
}

.registration-wrapper::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120px;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 26, 77, 0.3) 100%
  );
  pointer-events: none;
}

.registration-card {
  background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%) !important;
  box-shadow:
    0 30px 80px rgba(0, 26, 77, 0.35),
    0 1px 3px rgba(0, 26, 77, 0.2) !important;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px !important;
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.registration-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #003192 0%, #0047ab 50%, #8bc34a 100%);
}

.registration-card:hover {
  box-shadow:
    0 40px 100px rgba(0, 26, 77, 0.4),
    0 2px 8px rgba(0, 26, 77, 0.25) !important;
  transform: translateY(-4px);
}

.input-label {
  display: block;
  font-size: 0.85rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: #003192;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  opacity: 0.9;
}

/* Custom Stepper Styling */
.stepper-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  padding: 20px 0;
}

.stepper-item {
  display: flex;
  align-items: center;
  position: relative;
  flex: 1;
  min-width: 80px;
}

.stepper-item:last-child {
  flex: none;
}

.step-circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2.5px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  background: linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%);
  color: #999;
  z-index: 2;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  font-size: 14px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
}

.active .step-circle {
  background: linear-gradient(135deg, #003192 0%, #0052cc 100%);
  color: white;
  border-color: #003192;
  box-shadow: 0 8px 24px rgba(0, 49, 146, 0.5);
  transform: scale(1.15);
}

.completed .step-circle {
  background: linear-gradient(135deg, #7cb342 0%, #9ccc65 100%);
  color: white;
  border-color: #7cb342;
  box-shadow: 0 6px 18px rgba(139, 195, 74, 0.4);
  animation: checkPulse 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes checkPulse {
  0% {
    transform: scale(0.7);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.step-label {
  margin-left: 14px;
  margin-right: 14px;
  white-space: nowrap;
}

.label-title {
  font-size: 0.85rem;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: 0.3px;
}

.label-subtitle {
  font-size: 0.75rem;
  color: #999;
  margin-top: 2px;
  font-weight: 500;
}

.step-line {
  flex-grow: 1;
  min-width: 30px;
  height: 3px;
  background: linear-gradient(90deg, #e8e8e8 0%, #f0f0f0 100%);
  margin: 0 10px;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  border-radius: 2px;
}

.completed .step-line {
  background: linear-gradient(90deg, #7cb342 0%, #9ccc65 100%);
  box-shadow: 0 2px 8px rgba(139, 195, 74, 0.4);
}

.upload-zone :deep(.v-field__input) {
  border: 2px dashed #c5cae9 !important;
  padding: 45px !important;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, #f8f9fb 0%, #f0f4f9 100%) !important;
  transition: all 0.3s ease;
  cursor: pointer;
}

.upload-zone :deep(.v-field:hover .v-field__input) {
  border-color: #003192;
  background: linear-gradient(135deg, #e3f2fd 0%, #e8f5e9 100%) !important;
  box-shadow: inset 0 0 10px rgba(0, 49, 146, 0.1);
}

.airport-alert {
  border-left: 5px solid #7cb342 !important;
  background: linear-gradient(135deg, #f8faf0 0%, #fafbf5 100%) !important;
  box-shadow: 0 6px 20px rgba(139, 195, 74, 0.2) !important;
  border-radius: 12px !important;
  transition: all 0.3s ease;
}

.airport-alert:hover {
  box-shadow: 0 8px 25px rgba(139, 195, 74, 0.3) !important;
}

/* Form Field Enhancements */
:deep(.v-field--variant-outlined) {
  border-radius: 10px;
  transition: all 0.3s ease;
}

:deep(.v-field--focused) {
  box-shadow: 0 0 0 4px rgba(0, 49, 146, 0.12);
}

:deep(.v-field__outline) {
  color: #d0d0d0;
  transition: all 0.3s ease;
}

:deep(.v-field--focused .v-field__outline) {
  color: #003192;
  transition: color 0.2s ease;
}

:deep(.v-text-field input) {
  font-weight: 500;
  letter-spacing: 0.2px;
  color: #1a1a1a;
}

:deep(.v-textarea textarea) {
  font-weight: 500;
  letter-spacing: 0.2px;
  color: #1a1a1a;
}

:deep(.v-select) {
  border-radius: 10px;
}

:deep(.v-btn) {
  text-transform: none;
  letter-spacing: 0.4px;
  font-weight: 700;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

:deep(.v-btn:disabled) {
  opacity: 0.45 !important;
  cursor: not-allowed !important;
}

/* Button Enhancements */
:deep(.v-btn--variant-outlined) {
  border: 2px solid #003192;
  color: #003192 !important;
}

:deep(.v-btn--variant-outlined:hover:not(:disabled)) {
  background-color: rgba(0, 49, 146, 0.1);
  box-shadow: 0 6px 16px rgba(0, 49, 146, 0.2);
  transform: translateY(-2px);
}

:deep(.v-btn--color-primary) {
  background: linear-gradient(135deg, #003192 0%, #0052cc 100%) !important;
  min-width: 140px;
}

:deep(.v-btn--color-primary:hover:not(:disabled)) {
  box-shadow: 0 10px 30px rgba(0, 49, 146, 0.4);
  transform: translateY(-3px);
}

:deep(.v-divider) {
  border-color: rgba(0, 0, 0, 0.08);
  opacity: 1;
  margin: 30px 0 !important;
}

/* Animation for form entrance */
:deep(.v-window-item) {
  animation: slideInUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 960px) {
  .step-label {
    display: none !important;
  }

  .step-circle {
    width: 44px;
    height: 44px;
    font-size: 12px;
  }

  .step-line {
    display: none;
  }

  .registration-card {
    border-radius: 16px !important;
  }
}
</style>
