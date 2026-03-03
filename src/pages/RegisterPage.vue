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
        <v-col class="text-right">
          <v-btn
            variant="text"
            class="text-white font-weight-bold"
            size="large"
          >
            MENU
            <v-icon end icon="mdi-menu" color="amber-darken-2"></v-icon>
          </v-btn>
        </v-col>
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
                        :items="nationalities"
                      ></v-select>
                    </v-col>
                  </v-row>

                  <!-- Jordanian Fields -->
                  <v-row v-if="formData.nationality === 'Jordan'">
                    <v-col cols="12">
                      <div class="full-name-box">
                        <div class="full-name-title">Full Name</div>

                        <v-row>
                          <v-col cols="12" md="6">
                            <label class="input-label">First Name *</label>
                            <v-text-field
                              v-model="formData.firstName"
                              placeholder="Enter your first name"
                              variant="outlined"
                              density="comfortable"
                              :rules="[(v) => !!v || 'First Name is required']"
                            />
                          </v-col>

                          <v-col cols="12" md="6">
                            <label class="input-label">Father's Name *</label>
                            <v-text-field
                              v-model="formData.father_name"
                              placeholder="Enter your father's name"
                              variant="outlined"
                              density="comfortable"
                              :rules="[
                                (v) => !!v || 'Father\'s Name is required',
                              ]"
                            />
                          </v-col>

                          <v-col cols="12" md="6">
                            <label class="input-label"
                              >Grandfather's Name *</label
                            >
                            <v-text-field
                              v-model="formData.grandfather_name"
                              placeholder="Enter grandfather's name"
                              variant="outlined"
                              density="comfortable"
                              :rules="[
                                (v) => !!v || 'Grandfather\'s Name is required',
                              ]"
                            />
                          </v-col>

                          <v-col cols="12" md="6">
                            <label class="input-label">Family Name *</label>
                            <v-text-field
                              v-model="formData.familyName"
                              placeholder="Enter family name"
                              variant="outlined"
                              density="comfortable"
                              :rules="[(v) => !!v || 'Family Name is required']"
                            />
                          </v-col>
                        </v-row>
                      </div>
                    </v-col>

                    <!-- National ID -->
                    <v-col cols="12">
                      <div class="national-box">
                        <label class="input-label">
                          National Number (10 digits) *
                        </label>

                        <v-text-field
                          v-model="formData.nationalId"
                          placeholder="Enter 10 digit national number"
                          variant="outlined"
                          density="comfortable"
                          maxlength="10"
                          type="text"
                          :rules="[
                            (v) => !!v || 'National Number is required',
                            (v) =>
                              /^\d{10}$/.test(v) || 'Must be exactly 10 digits',
                          ]"
                        />
                      </div>
                    </v-col>
                  </v-row>

                  <!-- European Fields -->
                  <v-row
                    v-if="
                      formData.nationality !== 'Jordan' &&
                      formData.nationality !== ''
                    "
                  >
                    <v-col cols="12" md="6">
                      <label class="input-label"
                        >Passport Copy (for visa waiver purposes) *
                      </label>
                      <v-file-upload
                        v-model="formData.passportFile"
                        density="compact"
                        variant="compact"
                        accept="image/jpeg,image/png,application/pdf"
                      ></v-file-upload>
                    </v-col>
                    <v-col cols="12">
                      <div class="full-name-wrapper">
                        <div class="mb-4 font-weight-medium">Full Name</div>
                        <v-row>
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
                      </div>
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
                              '+971',
                              '+966',
                              '+965',
                              '+974',
                              '+973',
                              '+968',
                              '+964',
                              '+20',
                              '+44',
                              '+49',
                              '+33',
                              '+39',
                              '+34',
                              '+31',
                              '+1',
                              '+92',
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
                        placeholder="Enter entity"
                        variant="outlined"
                        density="comfortable"
                        :rules="[(v) => !!v || 'Entity is required']"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <label class="input-label"
                        >Official Website (Optional)</label
                      >
                      <v-text-field
                        v-model="formData.website"
                        placeholder="Provide URL"
                        variant="outlined"
                        density="comfortable"
                        type="url"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <label class="input-label">Sector *</label>
                      <v-select
                        v-model="formData.industry"
                        label="Select an industry"
                        :items="[
                          'Digital & Technology',
                          'Water',
                          'Energy',
                          'Transport & Logistic',
                          'Regional Gateways',
                          'High value Industries',
                          'Financial Institutions',
                          'Governmental',
                          'Humanitarian',
                        ]"
                        variant="outlined"
                        density="comfortable"
                        :rules="[(v) => !!v || 'Sector is required']"
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-form>
              </v-window-item>

              <!-- Step 4: About You -->
              <v-window-item :value="4">
                <div class="inner-section-card">
                  <h2 class="section-title">About You</h2>

                  <v-form @submit.prevent>
                    <v-row class="mt-6">
                      <v-col cols="12" md="6">
                        <label class="section-label">
                          Professional Bio (Optional)
                        </label>
                        <v-textarea
                          v-model="formData.bio"
                          placeholder="Share your professional background"
                          variant="outlined"
                          density="comfortable"
                          rows="4"
                          counter="500"
                          maxlength="500"
                        />
                        <div class="section-counter">
                          {{ formData.bio.length }} characters (minimum 20
                          required)
                        </div>
                      </v-col>
                      <v-col cols="12" md="6">
                        <label class="section-label">
                          LinkedIn Profile URL (Optional)
                        </label>
                        <v-text-field
                          v-model="formData.linkedinUrl"
                          placeholder="https://linkedin.com/in/yourprofile"
                          variant="outlined"
                          density="comfortable"
                          type="url"
                        />
                      </v-col>
                    </v-row>
                  </v-form>
                </div>
              </v-window-item>

              <!-- Step 5: Travel Information -->
              <v-window-item :value="5">
                <div class="travel-card">
                  <h2 class="section-title">Travel Details</h2>

                  <v-form @submit.prevent>
                    <v-row>
                      <v-col cols="12" md="6">
                        <label class="section-label">
                          Arrival <span class="required">*</span>
                        </label>

                        <div class="field-label">Date</div>

                        <v-text-field
                          v-model="formData.arrivalDate"
                          prepend-inner-icon="mdi-calendar"
                          placeholder="Select date"
                          variant="outlined"
                          density="comfortable"
                          type="date"
                          :rules="[(v) => !!v || 'Arrival date is required']"
                        />

                        <div class="field-label mt-4">Time</div>

                        <v-text-field
                          v-model="formData.arrivalTime"
                          prepend-inner-icon="mdi-clock-outline"
                          placeholder="Select time"
                          variant="outlined"
                          density="comfortable"
                          type="time"
                          :rules="[(v) => !!v || 'Arrival time is required']"
                        />

                        <div class="airport-text">
                          Queen Alia International Airport (AMM)
                        </div>
                      </v-col>

                      <v-col cols="12" md="6">
                        <label class="section-label">
                          Departure <span class="required">*</span>
                        </label>

                        <div class="field-label">Date</div>

                        <v-text-field
                          v-model="formData.departureDate"
                          prepend-inner-icon="mdi-calendar"
                          placeholder="Select date"
                          variant="outlined"
                          density="comfortable"
                          type="date"
                          :rules="[(v) => !!v || 'Departure date is required']"
                        />

                        <div class="field-label mt-4">Time</div>

                        <v-text-field
                          v-model="formData.departureTime"
                          prepend-inner-icon="mdi-clock-outline"
                          placeholder="Select time"
                          variant="outlined"
                          density="comfortable"
                          type="time"
                          :rules="[(v) => !!v || 'Departure time is required']"
                        />

                        <div class="airport-text">
                          Queen Alia International Airport (AMM)
                        </div>
                      </v-col>
                    </v-row>
                    <v-row class="mt-6">
                      <v-col cols="12" md="6">
                        <label class="section-label">
                          Hotel Name
                          <span class="optional">(if already booked)</span>
                        </label>

                        <v-select
                          v-model="formData.hotel"
                          :items="hotels"
                          placeholder="Select hotel"
                          variant="outlined"
                          density="comfortable"
                          hide-details
                        />
                      </v-col>

                      <v-col cols="12" md="6" v-if="formData.hotel === 'Other'">
                        <label class="section-label invisible-label">
                          Custom Hotel
                        </label>

                        <v-text-field
                          v-model="formData.hotel_name"
                          placeholder="Enter hotel name"
                          variant="outlined"
                          density="comfortable"
                          clearable
                          hide-details
                        />
                      </v-col>
                    </v-row>

                    <div class="hotel-link">
                      Haven't booked yet?
                      <a href="#"
                        >Explore Partner Hotels with Special Conference Rates</a
                      >
                    </div>
                    <div class="transfer-box mt-8">
                      <div class="transfer-title">Airport Transfer Service</div>
                      <div class="transfer-sub">
                        Complimentary pickup and drop-off to Dead Sea
                      </div>
                      <div class="transfer-note">
                        A driver will meet you at the arrivals hall with your
                        name displayed. Travel time approximately 45 minutes.
                      </div>
                    </div>
                  </v-form>
                </div>
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
                :loading="isSubmitting"
                :disabled="!isCurrentStepValid() || isSubmitting"
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
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { submitRegistration } from "@/services/registrationApi";

const router = useRouter();
const currentStep = ref(1);
const showSuccessMessage = ref(false);
const showErrorMessage = ref(false);
const errorMessage = ref("Failed to submit the form. Please try again.");
const isSubmitting = ref(false);

const nationalities = [
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
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Congo-Brazzaville)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "Côte d'Ivoire",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
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
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
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
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
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
  "Other",
];

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
  father_name: "",
  grandfather_name: "",
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
  hotel: "",
  hotel_name: "",
});
const hotels = [
  "Mövenpick Resort & Spa Dead Sea",
  "Hilton Dead Sea",
  "Dead Sea Marriott Resort & Spa",
  "Kempinski Hotel Ishtar Dead Sea",
  "Other",
];
const steps = [
  { title: "Personal Info", subtitle: "Basic details" },
  { title: "Contact Info", subtitle: "Communication" },
  { title: "Professional", subtitle: "Your role" },
  { title: "About You", subtitle: "Your profile" },
  { title: "Travel", subtitle: "Planning" },
];
watch(
  () => formData.value.hotel,
  (val) => {
    if (val !== "Other") {
      formData.value.hotel_name = "";
    }
  },
);
const isCurrentStepValid = () => {
  switch (currentStep.value) {
    case 1:
      if (!formData.value.nationality) return false;
      if (formData.value.nationality === "Jordan") {
        return !!(
          formData.value.firstName &&
          formData.value.father_name &&
          formData.value.grandfather_name &&
          formData.value.familyName &&
          formData.value.nationalId
        );
      } else if (formData.value.nationality !== "Jordan") {
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
        formData.value.industry
      );
    case 4:
      return true; // All fields optional, so always valid
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

const submitForm = async () => {
  if (!isCurrentStepValid() || isSubmitting.value) return;

  try {
    isSubmitting.value = true;
    showErrorMessage.value = false;

    const response = await submitRegistration(formData.value);
    const apiStatus = response?.status?.toString().toLowerCase();
    const isApiSuccess =
      response == null ||
      response?.success === true ||
      apiStatus === "success" ||
      apiStatus === "ok";

    if (!isApiSuccess) {
      throw new Error(response?.message || "Registration failed.");
    }

    showSuccessMessage.value = true;
    router.push({ name: "Success" });
  } catch (error) {
    const validationErrors = error?.data?.errors;
    if (
      validationErrors &&
      typeof validationErrors === "object" &&
      Object.keys(validationErrors).length > 0
    ) {
      const firstField = Object.keys(validationErrors)[0];
      const firstMessage = validationErrors[firstField]?.[0];
      errorMessage.value =
        firstMessage || "Please check your form data and try again.";
    } else {
      errorMessage.value =
        error?.message || "Failed to submit the form. Please try again.";
    }
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
  color: white;
  border-color: #1f2937;
  transform: scale(1.15);
}

.completed .step-circle {
  color: white;
  border-color: #1f2937;
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
.registration-wrapper {
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  padding: 40px 0;
}

/* ================= CARD ================= */

.registration-card {
  border-radius: 20px !important;
  border: 1px solid #e5e7eb;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05) !important;
}
.registration-card:hover {
  transform: none !important;
}

/* ================= STEPPER ================= */

.stepper-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #e9eef5;
  padding: 16px 24px;
  border-radius: 14px;
}

.stepper-item {
  display: flex;
  align-items: center;
  flex: 1;
}

.step-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #d1d5db;
  color: #6b7280;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}

.active .step-circle {
  background: #1f2937;
  border-color: #1f2937;
  color: white;
}

.completed .step-circle {
  background: #1f2937;
  color: white;
}

.step-line {
  height: 2px;
  background: #1f2937;
  flex: 1;
  margin: 0 12px;
}

.completed .step-line {
  background: #1f2937 !important;
}

.label-title {
  font-size: 13px;
  font-weight: 600;
  color: #374151;
}

.label-subtitle {
  font-size: 12px;
  color: #9ca3af;
}

/* ================= TITLES ================= */

h2 {
  font-size: 20px !important;
  font-weight: 600 !important;
  color: #1f2937 !important;
}

/* ================= LABELS ================= */

.input-label {
  font-size: 13px;
  font-weight: 600;
  color: #1e3a8a;
  margin-bottom: 6px;
}

/* ================= INPUTS ================= */

:deep(.v-field--variant-outlined) {
  border-radius: 10px;
  background: #ffffff;
}

:deep(.v-field__outline) {
  color: #e5e7eb;
}

:deep(.v-field--focused .v-field__outline) {
  color: #1e3a8a;
}

:deep(.v-field--focused) {
  box-shadow: none !important;
}

/* Upload Zone */

:deep(.v-file-upload .v-field__input) {
  border: 2px dashed #d1d5db !important;
  padding: 45px !important;
  background: #f9fafb !important;
  text-align: center;
}

/* ================= FULL NAME BOX ================= */

.full-name-wrapper {
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
}

/* ================= ALERT ================= */

.airport-alert {
  border-left: 4px solid #84cc16 !important;
  background: #f8faf0 !important;
  box-shadow: none !important;
  border-radius: 12px !important;
}

/* ================= BUTTONS ================= */

:deep(.v-btn) {
  text-transform: none;
  font-weight: 600;
  border-radius: 10px;
  box-shadow: none !important;
}

:deep(.v-btn--variant-outlined) {
  border: 1px solid #1e3a8a;
  color: #1e3a8a !important;
  background: white;
}

:deep(.v-btn--variant-outlined:hover) {
  background: #f3f4f6;
}

:deep(.v-btn[color="#003192"]),
:deep(.v-btn--color-primary) {
  background: #1e3a8a !important;
}

:deep(.v-btn[color="#003192"]:hover),
:deep(.v-btn--color-primary:hover) {
  background: #1e40af !important;
}

:deep(.v-divider) {
  border-color: #e5e7eb;
}

/* ================= REMOVE ANIMATION ================= */

:deep(.v-window-item) {
  animation: none !important;
}
/* INPUT & SELECT BORDER FIX */

:deep(.v-field--variant-outlined .v-field__outline) {
  color: #94a3b8 !important;
  opacity: 1 !important;
}

:deep(.v-field:hover .v-field__outline) {
  color: #94a3b8 !important;
}

:deep(.v-field--focused .v-field__outline) {
  color: #1e3a8a !important;
}

:deep(.v-field--focused) {
  box-shadow: none !important;
}
/* ================= GLOBAL TEXT COLOR ================= */

.registration-card {
  color: #374151 !important;
}

.registration-card h2 {
  color: #1f2937 !important;
  font-weight: 600;
}

/* Labels */
.input-label {
  color: #374151 !important;
  font-weight: 600;
}

/* Placeholder */
:deep(input::placeholder),
:deep(textarea::placeholder) {
  color: #9ca3af !important;
  opacity: 1;
}

:deep(.v-text-field input),
:deep(.v-textarea textarea),
:deep(.v-select .v-field__input) {
  color: #374151 !important;
  font-weight: 500;
}

.label-title {
  color: #374151 !important;
}

.label-subtitle {
  color: #9ca3af !important;
}

.registration-card * {
  color: inherit;
}

.active + .step-line,
.active .step-line {
  background: #dc2626 !important;
}
/* ===== INNER CARD EXACT MATCH ===== */

.inner-section-card {
  background: #f5f6f8;
  border: 1px solid #e4e7ec;
  border-radius: 14px;
  padding: 32px;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04);
}

/* Title */
.section-title {
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 24px;
}

/* Labels */
.section-label {
  font-size: 13px;
  font-weight: 500;
  color: #344054;
  margin-bottom: 6px;
  display: block;
  text-transform: uppercase;
  letter-spacing: 0.4px;
}

/* Counter */
.section-counter {
  font-size: 12px;
  color: #98a2b3;
  margin-top: 6px;
}

/* ===== INPUT EXACT STYLE ===== */

.inner-section-card :deep(.v-field--variant-outlined) {
  background: #ffffff;
  border-radius: 10px;
}

.inner-section-card :deep(.v-field__outline) {
  color: #d0d5dd !important;
}

.inner-section-card :deep(.v-field:hover .v-field__outline) {
  color: #cbd5e1 !important;
}

.inner-section-card :deep(.v-field--focused .v-field__outline) {
  color: #1f2937 !important;
}

.inner-section-card :deep(input),
.inner-section-card :deep(textarea) {
  font-size: 14px;
  font-weight: 400;
  color: #344054;
}

.inner-section-card :deep(input::placeholder),
.inner-section-card :deep(textarea::placeholder) {
  color: #98a2b3;
  opacity: 1;
}

/* textarea height match */
.inner-section-card :deep(.v-textarea textarea) {
  min-height: 110px;
}
/* ===== CARD WRAPPER ===== */

.travel-card {
  background: #f5f6f8;
  border: 1px solid #e4e7ec;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04);
}

/* ===== TITLE ===== */

.section-title {
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 24px;
}

/* ===== LABELS ===== */

.section-label {
  font-size: 14px;
  font-weight: 600;
  color: #344054;
  margin-bottom: 12px;
  display: block;
}

.required {
  color: #dc2626;
}

.field-label {
  font-size: 12px;
  color: #98a2b3;
  margin-bottom: 6px;
}

.airport-text {
  font-size: 12px;
  color: #98a2b3;
  margin-top: 8px;
}

/* ===== INPUT STYLE ===== */

.travel-card :deep(.v-field--variant-outlined) {
  background: #ffffff;
  border-radius: 12px;
}

.travel-card :deep(.v-field__outline) {
  color: #d0d5dd !important;
}

.travel-card :deep(.v-field--focused .v-field__outline) {
  color: #1f2937 !important;
}

.travel-card :deep(input) {
  font-size: 14px;
  color: #344054;
}

/* ===== TRANSFER BOX ===== */

.transfer-box {
  background: #f2f4f7;
  border: 1px solid #e4e7ec;
  border-radius: 14px;
  padding: 20px;
}

.transfer-title {
  font-weight: 600;
  color: #344054;
}

.transfer-sub {
  font-size: 14px;
  margin-top: 4px;
  color: #344054;
}

.transfer-note {
  font-size: 13px;
  color: #667085;
  margin-top: 6px;
}
.optional {
  font-weight: 400;
  font-size: 12px;
  color: #98a2b3;
}

.invisible-label {
  visibility: hidden;
}

.hotel-link {
  margin-top: 10px;
  font-size: 13px;
  color: #344054;
}

.hotel-link a {
  color: #1d4ed8;
  font-weight: 500;
  text-decoration: underline;
}

/* Dropdown style match */
.travel-card :deep(.v-select .v-field__outline) {
  color: #d0d5dd !important;
}

.travel-card :deep(.v-list-item) {
  font-size: 14px;
  color: #344054;
}
/* ===== FULL NAME BOX ===== */

.full-name-box {
  background: #e9eef5;
  border: 1px solid #d0d5dd;
  border-radius: 16px;
  padding: 24px;
}

.full-name-title {
  font-size: 14px;
  font-weight: 600;
  color: #344054;
  margin-bottom: 16px;
}

/* ===== NATIONAL BOX ===== */

.national-box {
  background: #ffffff;
  border-radius: 16px;
  padding: 20px 24px;
  border: 1px solid #d0d5dd;
}

/* Input consistency */

.national-box :deep(.v-field--variant-outlined),
.full-name-box :deep(.v-field--variant-outlined) {
  background: #ffffff;
  border-radius: 12px;
}

.national-box :deep(.v-field__outline),
.full-name-box :deep(.v-field__outline) {
  color: #cbd5e1 !important;
}

.national-box :deep(.v-field--focused .v-field__outline),
.full-name-box :deep(.v-field--focused .v-field__outline) {
  color: #1f2937 !important;
}
</style>
