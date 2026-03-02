<template>
  <header
    class="site-header"
    :class="{
      'site-header--overlay': overlay,
      'site-header--solid': !overlay || isScrolled,
    }"
  >
    <v-container class="header-inner">
      <RouterLink class="brand-logo" :to="{ name: 'Home' }" aria-label="Jordan-EU Investment Conference home">
        <img
          v-if="!logoMissing"
          :src="logoSrc"
          alt="Jordan-EU Investment Conference"
          class="brand-logo-image"
          @error="handleLogoError"
        />

        <template v-else>
          <div class="brand-main">
            <div class="brand-title">
              <span class="brand-line brand-line--strong">JORDAN-EU</span>
              <span class="brand-line">INVESTMENT</span>
              <span class="brand-line">CONFERENCE</span>
            </div>
            <div class="brand-arrow" aria-hidden="true"></div>
          </div>
          <div class="brand-meta">
            <p class="brand-date">21.04.2026</p>
            <p class="brand-place">DEAD SEA</p>
          </div>
        </template>
      </RouterLink>

      <nav class="desktop-nav">
        <RouterLink
          v-for="link in navLinks"
          :key="link.label"
          :to="link.to"
          class="nav-link"
          active-class="is-active"
          exact-active-class="is-active"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <div class="header-actions">
        <v-menu location="bottom end" class="mobile-nav-menu">
          <template #activator="{ props }">
            <v-btn
              v-bind="props"
              variant="text"
              icon="mdi-menu"
              size="small"
              class="mobile-nav-toggle"
            />
          </template>

          <v-list min-width="220">
            <v-list-item
              v-for="link in navLinks"
              :key="`mobile-${link.label}`"
              :to="link.to"
              link
            >
              <v-list-item-title>{{ link.label }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-container>
  </header>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

defineProps({
  overlay: {
    type: Boolean,
    default: false,
  },
});

const isScrolled = ref(false);
const logoMissing = ref(false);
const logoSourceIndex = ref(0);
const logoSources = ["/images/logo.png", "/images/image.png"];
const logoSrc = computed(() => logoSources[logoSourceIndex.value]);

const navLinks = [
  { label: "Home", to: { name: "Home" } },
  { label: "About", to: { name: "About" } },
  { label: "Agenda", to: { name: "Agenda" } },
  { label: "Speakers", to: { name: "Speakers" } },
  { label: "Investment Opportunities", to: { name: "InvestmentOpportunities" } },
  { label: "Tourism", to: { name: "Tourism" } },
  { label: "Partners", to: { name: "Partners" } },
  { label: "News Updates", to: { name: "NewsUpdates" } },
  { label: "Contact", to: { name: "Contact" } },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 32;
};

const handleLogoError = () => {
  if (logoSourceIndex.value < logoSources.length - 1) {
    logoSourceIndex.value += 1;
    return;
  }

  logoMissing.value = true;
};

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.site-header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  transition: background-color 0.25s ease, box-shadow 0.25s ease, backdrop-filter 0.25s ease;
}

.site-header--overlay {
  background: #0c45b5;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.14);
}

.site-header--solid {
  background: #0c45b5;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.18);
}

.header-inner {
  min-height: 86px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
}

.brand-logo {
  color: #fff;
  text-decoration: none;
  min-width: 220px;
  display: grid;
  gap: 4px;
}

.brand-logo-image {
  width: 150px;
  max-width: 100%;
  height: auto;
  display: block;
}

.brand-main {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-title {
  line-height: 1.05;
}

.brand-line {
  display: block;
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  color: #ffffff;
  font-weight: 500;
}

.brand-line--strong {
  font-size: 0.7rem;
  font-weight: 700;
}

.brand-arrow {
  width: 58px;
  height: 40px;
  background-image: radial-gradient(circle, #ffe15b 1.35px, transparent 1.45px);
  background-size: 8px 8px;
  clip-path: polygon(0 0, 100% 50%, 0 100%, 26% 50%);
  opacity: 0.95;
  flex-shrink: 0;
}

.brand-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #dbe7ff;
  font-size: 0.6rem;
  letter-spacing: 0.08em;
}

.brand-meta p {
  margin: 0;
  line-height: 1.1;
}

.brand-date {
  font-weight: 700;
}

.brand-place {
  font-weight: 600;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: center;
}

.nav-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  min-height: 40px;
  padding: 0 2px;
  color: #d9e8ff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -6px;
  height: 2px;
  border-radius: 999px;
  background: #f23b44;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.2s ease;
}

.nav-link:hover,
.nav-link.is-active {
  color: #fff;
}

.nav-link:hover::after,
.nav-link.is-active::after {
  transform: scaleX(1);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.mobile-nav-toggle {
  color: #fff;
  display: none;
}

@media (max-width: 1120px) {
  .brand-meta {
    display: none;
  }

  .brand-logo {
    min-width: 190px;
  }

  .brand-logo-image {
    width: 170px;
  }
}

@media (max-width: 960px) {
  .header-inner {
    min-height: 74px;
  }

  .brand-logo {
    min-width: auto;
  }

  .brand-logo-image {
    width: 140px;
  }

  .brand-arrow {
    width: 42px;
    height: 32px;
  }

  .brand-line,
  .brand-line--strong {
    font-size: 0.62rem;
  }

  .desktop-nav {
    display: none;
  }

  .mobile-nav-toggle {
    display: inline-flex;
  }
}
</style>
