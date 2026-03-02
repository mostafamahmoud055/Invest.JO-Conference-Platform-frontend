<template>
  <footer class="site-footer">
    <v-container>
      <v-row class="py-10" dense>
        <v-col cols="12" md="4">
          <h3 class="footer-brand">Jordan-EU Investment Conference</h3>
          <p class="footer-text">
            Hosted by the Ministry of Investment, Jordan. A focused platform for
            investors, policymakers, and private sector leaders.
          </p>
        </v-col>

        <v-col cols="6" md="2">
          <h4 class="footer-title">Pages</h4>
          <ul class="footer-list">
            <li v-for="link in pageLinks" :key="link.label">
              <RouterLink :to="link.to">{{ link.label }}</RouterLink>
            </li>
          </ul>
        </v-col>

        <v-col cols="6" md="3">
          <h4 class="footer-title">Contact</h4>
          <ul class="footer-list">
            <li>Email: info@jeic.jo</li>
            <li>Phone: +962 6 500 8080</li>
            <li>Dead Sea, Jordan</li>
          </ul>
        </v-col>

        <v-col cols="12" md="3">
          <h4 class="footer-title">Conference Dates</h4>
          <p class="footer-text">April 20-21, 2026</p>
          <RouterLink :to="{ name: 'StartRegister' }" class="text-decoration-none">
            <v-btn
              variant="flat"
              color="white"
              class="text-none footer-cta"
              rounded="pill"
              size="small"
            >
              Apply Now
            </v-btn>
          </RouterLink>
        </v-col>
      </v-row>

      <v-divider class="footer-divider" />

      <div class="footer-bottom">
        <span>© 2026 Jordan-EU Investment Conference. All rights reserved.</span>
        <div class="bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </v-container>
  </footer>
</template>

<script setup>
const pageLinks = [
  { label: "Home", to: { name: "Home" } },
  { label: "About", to: { name: "About" } },
  { label: "Register", to: { name: "StartRegister" } },
];
</script>

<style scoped>
.site-footer {
  background: linear-gradient(160deg, #0a2e75 0%, #072657 100%);
  color: #dfe9ff;
}

.footer-brand {
  color: #fff;
  font-size: 1.05rem;
  margin-bottom: 10px;
}

.footer-title {
  color: #fff;
  font-size: 0.95rem;
  margin-bottom: 12px;
}

.footer-text {
  color: #b7c8ef;
  font-size: 0.88rem;
  line-height: 1.7;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 8px;
  font-size: 0.88rem;
  color: #b7c8ef;
}

.footer-list a {
  color: #b7c8ef;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-list a:hover {
  color: #fff;
}

.footer-cta {
  color: #0a2f71 !important;
  font-weight: 700;
}

.footer-divider {
  border-color: rgba(255, 255, 255, 0.18);
}

.footer-bottom {
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: #a9bee8;
  font-size: 0.78rem;
}

.bottom-links {
  display: flex;
  align-items: center;
  gap: 16px;
}

.bottom-links a {
  color: #a9bee8;
  text-decoration: none;
}

@media (max-width: 960px) {
  .footer-bottom {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 14px 0;
  }
}
</style>
