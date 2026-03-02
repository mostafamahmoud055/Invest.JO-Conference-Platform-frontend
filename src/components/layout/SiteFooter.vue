<template>
  <footer class="site-footer">
    <v-container>
      <v-row class="footer-main" dense>
        <v-col cols="12" sm="6" md="3">
          <h3 class="footer-brand">Jordan-EU Investment Conference 2026</h3>
          <p class="footer-text footer-text--narrow">
            Connecting European investors with Jordan's most promising investment opportunities.
          </p>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <h4 class="footer-title">Quick Links</h4>
          <ul class="footer-list">
            <li v-for="link in quickLinks" :key="link.label">
              <a :href="link.href">{{ link.label }}</a>
            </li>
          </ul>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <h4 class="footer-title">Participate</h4>
          <ul class="footer-list">
            <li v-for="link in participateLinks" :key="link.label">
              <a :href="link.href">{{ link.label }}</a>
            </li>
          </ul>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <h4 class="footer-title">Contact</h4>
          <ul class="footer-list footer-contact">
            <li>
              <v-icon icon="mdi-email-outline" size="18" />
              <a href="mailto:info@jordan-eu-conference.jo">info@jordan-eu-conference.jo</a>
            </li>
            <li>
              <v-icon icon="mdi-phone-outline" size="18" />
              <a href="tel:+96261234567">+962 6 123 4567</a>
            </li>
            <li>
              <v-icon icon="mdi-map-marker-outline" size="18" />
              <span>Amman, Jordan</span>
            </li>
          </ul>

          <div class="social-links" aria-label="Social media links">
            <a href="#" aria-label="LinkedIn">
              <v-icon icon="mdi-linkedin" size="20" />
            </a>
            <a href="#" aria-label="Twitter">
              <v-icon icon="mdi-twitter" size="20" />
            </a>
            <a href="#" aria-label="Facebook">
              <v-icon icon="mdi-facebook" size="20" />
            </a>
          </div>
        </v-col>
      </v-row>

      <v-divider class="footer-divider" />

      <div class="footer-bottom">
        <span>&copy; 2026 Jordan-EU Investment Conference. All rights reserved.</span>
      </div>
    </v-container>
  </footer>
</template>

<script setup>
const quickLinks = [
  { label: "About Conference", href: "#" },
  { label: "Agenda", href: "#" },
  { label: "Speakers", href: "#" },
  { label: "Investment Opportunities", href: "#" },
];

const participateLinks = [
  { label: "Register", href: "#" },
  { label: "Book a Meeting", href: "#" },
  { label: "Partners", href: "#" },
  { label: "Contact Us", href: "#" },
];
</script>

<style scoped>
.site-footer {
  background: #0a468f;
  color: #d8e4f8;
}

.footer-main {
  padding: 46px 0 34px;
}

.footer-brand {
  color: #f6f9ff;
  font-size: 2rem;
  line-height: 1.2;
  font-weight: 700;
  margin: 0 0 12px;
}

.footer-title {
  color: #f6f9ff;
  font-size: 1.35rem;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 12px;
}

.footer-text {
  color: #c5d5f1;
  font-size: 1.1rem;
  line-height: 1.7;
  margin: 0;
}

.footer-text--narrow {
  max-width: 270px;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
  font-size: 1.08rem;
  color: #c5d5f1;
}

.footer-list a {
  color: #c5d5f1;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-list a:hover {
  color: #ffffff;
}

.footer-contact li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #c5d5f1;
}

.social-links {
  margin-top: 14px;
  display: flex;
  gap: 12px;
}

.social-links a {
  color: #ffffff;
  text-decoration: none;
}

.footer-divider {
  border-color: rgba(255, 255, 255, 0.22);
}

.footer-bottom {
  min-height: 68px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c0d2f0;
  font-size: 1rem;
  text-align: center;
}

@media (max-width: 960px) {
  .footer-main {
    padding: 34px 0 24px;
    row-gap: 18px;
  }

  .footer-brand {
    font-size: 1.55rem;
  }

  .footer-title {
    font-size: 1.18rem;
  }

  .footer-text,
  .footer-list {
    font-size: 0.98rem;
  }

  .footer-bottom {
    min-height: 58px;
    font-size: 0.9rem;
  }
}
</style>
