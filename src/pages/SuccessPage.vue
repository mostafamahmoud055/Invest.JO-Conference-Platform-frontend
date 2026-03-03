<template>
  <div class="success-wrapper">
    <div class="success-card">

      <div class="success-icon">
        <v-icon size="48" color="white">mdi-check</v-icon>
      </div>

      <h1 class="success-title">Application Successful!</h1>

      <p class="success-text">
        Thank you for your interest in JEIC 2026. Your request is under
        process. We will notify you shortly.
      </p>

      <p class="success-email">
        You can reach us at
        <a href="mailto:info@jeic.invest.jo">info@jeic.invest.jo</a>
      </p>

      <div class="success-actions">
        <v-btn
          variant="outlined"
          color="primary"
          class="rounded-lg px-6"
          @click="$router.push('/')"
        >
          <v-icon start>mdi-home-outline</v-icon>
          Return to Home Page
        </v-btn>

        <v-btn
          color="#0d47a1"
          class="rounded-lg px-6 text-white"
        >
          <v-icon start>mdi-map-marker-outline</v-icon>
          Explore Tourism in Jordan
        </v-btn>
      </div>

    </div>
  </div>
</template>

<style scoped>

.success-wrapper {
  background: #f3f4f6;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
}

/* ===== CARD ===== */

.success-card {
  background: #ffffff;
  border-radius: 28px;
  padding: 100px 80px;
  text-align: center;
  width: 100%;
  box-shadow: 0 30px 80px rgba(16, 24, 40, 0.08);
}

/* ===== ICON ===== */

.success-icon {
  width: 120px;
  height: 120px;
  background: #8bc34a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 40px auto;
  box-shadow: 0 15px 35px rgba(139, 195, 74, 0.35);
}

.success-icon .v-icon {
  font-size: 60px !important;
}

/* ===== TITLE ===== */

.success-title {
  font-size: 42px;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 24px;
  letter-spacing: -0.5px;
}

/* ===== TEXT ===== */

.success-text {
  font-size: 18px;
  line-height: 1.7;
  color: #475467;
  max-width: 520px;
  margin: 0 auto 16px auto;
}

.success-email {
  font-size: 16px;
  color: #475467;
  margin-bottom: 40px;
}

.success-email a {
  color: #1d4ed8;
  font-weight: 500;
  text-decoration: underline;
}

/* ===== BUTTONS ===== */

.success-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.success-actions .v-btn {
  height: 56px;
  font-size: 15px;
  font-weight: 600;
  padding: 0 32px;
  border-radius: 12px;
  text-transform: none;
}

/* Outline button look like image */
.success-actions .v-btn--variant-outlined {
  border: 2px solid #1d4ed8;
  color: #1d4ed8 !important;
}

/* Primary button like image */
.success-actions .v-btn:not(.v-btn--variant-outlined) {
  background: #1d4ed8 !important;
  box-shadow: 0 8px 20px rgba(29, 78, 216, 0.35);
}
</style>