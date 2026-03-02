<template>
  <v-main class="registration-bg d-flex flex-column">
      <v-container class="flex-grow-1 d-flex flex-column justify-start px-4 py-10">
        <!-- Header Text -->
        <div class="text-white w-100 mb-6">
          <h1 class="text-h3 font-weight-bold mb-4">
            Welcome to JEIC 2026
          </h1>
          <p class="text-subtitle-1 opacity-90">
            Thank you for your interest in the Jordan-EU Investment Conference. Please review and agree to our data
            protection policies before proceeding.
          </p>
        </div>

        <!-- Registration Card -->
        <v-card class="rounded-xl pa-6 pa-md-10 registration-card w-100" elevation="0">
          <v-card variant="flat" color="blue-lighten-5" class="rounded-lg pa-6 mb-6 border-light">
            <div class="d-flex flex-column flex-md-row align-start mb-4">
              <v-icon icon="mdi-shield-outline" color="primary" class="mr-3 mt-1"></v-icon>
              <div>
                <h3 class="text-h6 font-weight-bold text-blue-grey-darken-4 mb-2">
                  Data Protection Notice
                </h3>
                <p class="text-body-2 text-blue-grey-darken-2 leading-relaxed">
                  Your personal information will be processed in accordance with applicable data protection laws. We
                  collect and process your data solely for conference registration, participant communication, and
                  B2B matchmaking purposes.
                </p>
              </div>
            </div>

            <v-list bg-color="transparent" density="compact" class="pa-0">
              <v-list-item class="px-0 min-h-0">
                <template v-slot:prepend>
                  <v-icon icon="mdi-check-circle-outline" color="success" size="small"></v-icon>
                </template>
                <v-list-item-title class="text-body-2 text-blue-grey-darken-2 ml-2">
                  Your data will be stored securely and encrypted
                </v-list-item-title>
              </v-list-item>

              <v-list-item class="px-0 min-h-0">
                <template v-slot:prepend>
                  <v-icon icon="mdi-check-circle-outline" color="success" size="small"></v-icon>
                </template>
                <v-list-item-title class="text-body-2 text-blue-grey-darken-2 ml-2">
                  We will not share your information with third parties without consent
                </v-list-item-title>
              </v-list-item>

              <v-list-item class="px-0 min-h-0">
                <template v-slot:prepend>
                  <v-icon icon="mdi-check-circle-outline" color="success" size="small"></v-icon>
                </template>
                <v-list-item-title class="text-body-2 text-blue-grey-darken-2 ml-2">
                  You can request data deletion at any time
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>

          <!-- Card Actions -->
          <v-card-actions class="pa-0 justify-end flex-wrap gap-2">
            <router-link to="/" class="text-decoration-none">
              <v-btn variant="outlined" color="primary" class="text-none px-8 rounded-lg">
                Cancel
              </v-btn>
            </router-link>
            <router-link to="/register" class="text-decoration-none">
              <v-btn color="indigo-darken-4" class="text-none px-8 rounded-lg" variant="flat"
                append-icon="mdi-arrow-right">
                Start Application
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-container>
  </v-main>
</template>

<script setup>
// Static layout, no logic needed
</script>

<style scoped>
.registration-bg {
  background: linear-gradient(135deg, #001a4d 0%, #0047ab 50%, #003d82 100%);
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
  padding: 0;
}

.registration-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 30%, rgba(135, 206, 250, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(100, 149, 237, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 10% 80%, rgba(65, 105, 225, 0.08) 0%, transparent 40%);
  pointer-events: none;
}

.registration-bg::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 150px;
  background: linear-gradient(to bottom, transparent 0%, rgba(0, 26, 77, 0.4) 100%);
  pointer-events: none;
}

.max-card-width {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 16px;
}

.max-content-container {
  max-width: 700px;
}

.border-light {
  border: 1px solid rgba(144, 202, 249, 0.4) !important;
}

.opacity-90 {
  opacity: 0.9;
}

.leading-relaxed {
  line-height: 1.7;
}

/* Card Enhancement */
:deep(.v-card) {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
}

:deep(.v-card:not(.registration-card)) {
  border-radius: 16px !important;
  background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%) !important;
  box-shadow: 0 20px 50px rgba(0, 26, 77, 0.25) !important;
}

.registration-card {
  background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%) !important;
  box-shadow: 0 30px 80px rgba(0, 26, 77, 0.35),
    0 1px 3px rgba(0, 26, 77, 0.15) !important;
  border: 1px solid rgba(255, 255, 255, 0.6) !important;
  border-radius: 20px !important;
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
}

.registration-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #003192 0%, #0047ab 50%, #7cb342 100%);
}

.registration-card:hover {
  box-shadow: 0 40px 100px rgba(0, 26, 77, 0.4),
    0 2px 8px rgba(0, 26, 77, 0.2) !important;
  transform: translateY(-6px);
}

/* List Item Styling */
:deep(.v-list-item) {
  transition: all 0.3s ease;
  border-radius: 8px !important;
  margin-bottom: 8px;
}

:deep(.v-list-item:hover) {
  background-color: rgba(0, 49, 146, 0.05);
  padding-left: 12px;
}

:deep(.v-list-item__spacer) {
  width: 12px !important;
}

/* Icon Styling */
:deep(.v-icon) {
  transition: all 0.3s ease;
}

:deep(.v-list-item:hover .v-icon) {
  transform: scale(1.1) translateX(2px);
}

/* Text Content */
:deep(.v-card-text) {
  line-height: 1.7;
  color: #333;
}

/* Button Styling */
:deep(.v-card-actions .v-btn) {
  border-radius: 12px !important;
  font-weight: 700;
  letter-spacing: 0.4px;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  min-width: 130px;
}

:deep(.v-card-actions .v-btn--variant-outlined) {
  border: 2px solid #003192;
  color: #003192 !important;
}

:deep(.v-card-actions .v-btn--variant-outlined:hover) {
  background-color: rgba(0, 49, 146, 0.1);
  box-shadow: 0 6px 16px rgba(0, 49, 146, 0.2);
  transform: translateY(-2px);
}

:deep(.v-card-actions .v-btn--variant-flat) {
  background: linear-gradient(135deg, #003192 0%, #0052cc 100%) !important;
  color: white !important;
  box-shadow: 0 4px 12px rgba(0, 49, 146, 0.3);
}

:deep(.v-card-actions .v-btn--variant-flat:hover) {
  box-shadow: 0 10px 30px rgba(0, 49, 146, 0.4);
  transform: translateY(-3px);
}

/* Header Enhancement */
:deep(.v-container) {
  position: relative;
  z-index: 1;
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .max-card-width {
    padding: 12px;
  }

  .registration-card {
    border-radius: 16px !important;
  }

  :deep(.v-card-actions) {
    flex-direction: column;
    gap: 12px;
  }

  :deep(.v-card-actions .v-btn) {
    width: 100%;
  }
}

@media (max-width: 600px) {
  .registration-bg {
    min-height: auto;
  }

  .max-content-container {
    margin-left: 0;
  }

  :deep(.v-list-item) {
    padding: 12px 8px !important;
  }
}
</style>
