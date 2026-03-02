<template>
  <div class="home-page">
    <section class="hero-section">
      <video autoplay muted loop playsinline class="hero-video">
        <source src="/5787553-hd_1920_1080_24fps.mp4" type="video/mp4" />
      </video>
      <div class="hero-overlay"></div>

      <v-container class="hero-content">
        <p class="hero-kicker">Ministry of Investment, Jordan</p>
        <h1 class="hero-title">Jordan-EU Investment Conference 2026</h1>
        <p class="hero-subtitle">Dead Sea, Jordan | April 20-21, 2026</p>
        <div class="hero-actions">
          <RouterLink :to="{ name: 'StartRegister' }" class="text-decoration-none">
            <v-btn color="primary" variant="flat" class="text-none hero-primary-btn">
              Register Invitation
            </v-btn>
          </RouterLink>
        </div>
      </v-container>

      <div class="hero-wave"></div>
    </section>

    <section id="countdown" class="countdown-section">
      <div class="countdown-ticker" aria-hidden="true">
        <div class="countdown-ticker-track">
          <span v-for="(item, index) in marqueeItems" :key="`top-${index}`">{{ item }}</span>
        </div>
      </div>

      <v-container class="countdown-content">
        <h2 class="countdown-title text-center">The Countdown has begun!</h2>
        <div class="counter-grid">
          <article v-for="item in countdownItems" :key="item.label" class="counter-card">
            <div class="counter-value">{{ item.value }}</div>
            <div class="counter-label">{{ item.label }}</div>
          </article>
        </div>
      </v-container>

      <div class="countdown-ticker countdown-ticker-bottom" aria-hidden="true">
        <div class="countdown-ticker-track">
          <span v-for="(item, index) in marqueeItems" :key="`bottom-${index}`">{{ item }}</span>
        </div>
      </div>
    </section>

    <section class="conference-section">
      <v-container>
        <article class="conference-showcase">
          <div class="conference-top">
            <h2 class="conference-title">
              Join Global Investors at the
              <span>Jordan-EU Investment Conference 2026</span>
            </h2>
            <p class="conference-description">
              The Jordan-EU Investment Conference 2026 brings together policymakers,
              European investors, financial institutions, and private sector leaders to
              explore strategic, bankable opportunities across key sectors driving Jordan's growth.
            </p>
          </div>

          <img
            src="/images/image.png"
            alt="Jordan-EU Investment Conference leaders"
            class="conference-image"
          />

          <div class="stats-grid">
            <article
              v-for="(stat, index) in highlightStats"
              :key="stat.label"
              class="stat-card"
              :class="{ 'stat-card--primary': index === 0 }"
            >
              <h3>{{ stat.value }}</h3>
              <p>{{ stat.label }}</p>
            </article>
          </div>
        </article>
      </v-container>
    </section>

    <section id="sectors" class="sectors-section">
      <v-container>
        <div class="section-head sectors-head">
          <h2 class="section-title sectors-title">
            Key Investment Sectors
            <span>Driving Jordan's Economic Future</span>
          </h2>
          <p class="sectors-intro">
            From digital innovation to strategic infrastructure, Jordan's priority sectors offer
            structured, bankable opportunities designed to strengthen economic resilience, attract
            long-term capital, and deepen regional and European partnership
          </p>
        </div>

        <v-row dense>
          <v-col cols="12" sm="6" md="4" v-for="sector in sectors" :key="sector.title">
            <article class="sector-card">
              <img
                v-if="sector.icon.startsWith('/icon/')"
                :src="sector.icon"
                :alt="`${sector.title} icon`"
                class="sector-icon-image"
              />
              <v-icon v-else :icon="sector.icon" color="primary" size="24" />
              <h3>{{ sector.title }}</h3>
              <p>{{ sector.description }}</p>
            </article>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section id="opportunities" class="opportunities-section">
      <v-container>
        <div class="section-head opportunities-head">
          <div class="opportunities-copy">
            <h2 class="section-title">Signature Investment Opportunities</h2>
            <p class="opportunities-subtitle">
              Projects aligned with Jordan's growth strategy and regional demand.
            </p>
          </div>
          <p class="opportunities-intro">
            Access bankable projects across key sectors while discovering the cultural and natural
            assets that position Jordan as a regional hub for opportunity and growth
          </p>
        </div>

        <v-row dense>
          <v-col cols="12" md="6" v-for="item in opportunities" :key="item.title">
            <article class="opportunity-card">
              <img :src="item.image" :alt="item.title" class="opportunity-image" />
              <div class="opportunity-content">
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </div>
            </article>
          </v-col>
          
        </v-row>
      </v-container>
    </section>

    <section class="join-section">
      <v-container class="text-center join-container">
        <div class="join-panel">
          <h2>Ready to Join Us?</h2>
          <p>Secure your spot at Jordan's premier investment event. Limited seats available.</p>
          <RouterLink :to="{ name: 'StartRegister' }" class="text-decoration-none">
            <v-btn color="primary" variant="flat" class="text-none join-btn">
              Request Invitation
            </v-btn>
          </RouterLink>
        </div>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const eventDate = new Date("2026-04-20T09:00:00+03:00");
const now = ref(Date.now());
let timerId = null;
const marqueeItems = [
  "Jordan-EU Investment Conference 2026",
  "Jordan-EU Investment Conference 2026",
  "Jordan-EU Investment Conference 2026",
  "Jordan-EU Investment Conference 2026",
  "Jordan-EU Investment Conference 2026",
  "Jordan-EU Investment Conference 2026",
  "Jordan-EU Investment Conference 2026",
  "Jordan-EU Investment Conference 2026",
];

onMounted(() => {
  timerId = window.setInterval(() => {
    now.value = Date.now();
  }, 1000);
});

onBeforeUnmount(() => {
  if (timerId) {
    window.clearInterval(timerId);
  }
});

const countdownItems = computed(() => {
  const diff = Math.max(0, eventDate.getTime() - now.value);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return [
    { label: "Days", value: String(days).padStart(2, "0") },
    { label: "Hours", value: String(hours).padStart(2, "0") },
    { label: "Minutes", value: String(minutes).padStart(2, "0") },
    { label: "Seconds", value: String(seconds).padStart(2, "0") },
  ];
});

const highlightStats = [
  { value: "500+", label: "Global Investors" },
  { value: "25+", label: "Investment Opportunities" },
  { value: "$20M+", label: "Investment Opportunities" },
];

const sectors = [
  {
    title: "Transport & Logistics",
    icon: "/icon/1.png",
  },
  {
    title: "High Value Industries",
    icon: "/icon/2.png",
  },
  {
    title: "Water",
    icon: "/icon/3.png",
  },
  {
    title: "Digital & Technology",
    icon: "/icon/4.png",
  },
  {
    title: "Regional Gateways",
    icon: "/icon/5.png",
  },
  {
    title: "Energy",
    icon: "/icon/6.png",
  },
  
  
];

const opportunities = [
  {
    title: "Northern Innovation Corridor",
    description:
      "A mixed-use growth zone focused on advanced manufacturing and startup incubation.",
    image:
      "/images/investment.png",
  },
  {
    title: "Dead Sea Premium Tourism District",
    description:
      "Integrated hospitality and wellness projects designed for international tourism demand.",
    image:
      "/images/experience.png",
  },
];
</script>

<style scoped>
.home-page {
  background: linear-gradient(to left, #ffffff 0%, #ffffff 100%);
}

.hero-section {
  position: relative;
  min-height: 86vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #113a84;
}

.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(110deg, rgba(7, 31, 75, 0.82) 10%, rgba(10, 58, 136, 0.45) 80%);
}

.hero-content {
  position: relative;
  z-index: 2;
  color: #fff;
  padding-top: 120px;
  padding-bottom: 120px;
}

.hero-kicker {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-weight: 600;
  font-size: 0.78rem;
}

.hero-title {
  margin: 18px 0 14px;
  max-width: 700px;
  line-height: 1.06;
  font-size: clamp(2rem, 5.5vw, 4rem);
}

.hero-subtitle {
  margin: 0;
  color: #d8e7ff;
  font-size: 1.02rem;
}

.hero-actions {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.hero-primary-btn {
  background: #003399 !important;
  color: #ffffff !important;
  font-weight: 700;
  font-size: 1.05rem;
  min-height: 56px;
  min-width: 250px;
  padding-inline: 34px !important;
  border-radius: 10px !important;
}

.hero-wave {
  position: absolute;
  z-index: 2;
  left: -5%;
  right: -5%;
  bottom: -88px;
  height: 170px;
  border-radius: 50% 50% 0 0;
  background: #f4f7fb;
}

.countdown-section {
  background: linear-gradient(180deg, #0a4ea0 0%, #0a4a99 100%);
  overflow: hidden;
}

.countdown-content {
  padding: 56px 0 50px;
}

.countdown-title {
  margin: 0;
  color: #f4f8ff;
  font-size: clamp(2rem, 4.4vw, 3rem);
  font-weight: 700;
}

.countdown-ticker {
  overflow: hidden;
  white-space: nowrap;
  background: #000000;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.countdown-ticker-track {
  width: max-content;
  display: flex;
  align-items: center;
  gap: 36px;
  padding: 12px 0;
  animation: countdown-marquee 26s linear infinite;
}

.countdown-ticker-track span {
  font-size: 1.2rem;
  font-weight: 700;
  color: #f3f7ff;
}

.countdown-ticker-bottom .countdown-ticker-track {
  animation-direction: reverse;
}

.section-title {
  margin: 0;
  color: #123675;
  font-size: clamp(1.4rem, 2.5vw, 2rem);
}

.counter-grid {
  max-width: 1020px;
  margin: 32px auto 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(150px, 1fr));
  gap: 18px;
}

.counter-card {
  text-align: center;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 18px 16px 14px;
}

.counter-value {
  font-size: clamp(2rem, 3.2vw, 3rem);
  color: #fff;
  font-weight: 700;
}

.counter-label {
  margin-top: 8px;
  font-size: 1rem;
  letter-spacing: 0.02em;
  color: #d5e3ff;
}

@keyframes countdown-marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.conference-section {
  padding: 54px 0 30px;
  background: transparent;
}

.conference-showcase {
  background: transparent;
  padding: 0;
}

.conference-top {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: 22px;
  align-items: start;
  margin-bottom: 18px;
}

.conference-title {
  margin: 0;
  color: #2e3f59;
  line-height: 1.2;
  font-size: clamp(1.3rem, 2.6vw, 2.3rem);
  font-weight: 800;
  max-width: 560px;
}

.conference-title span {
  color: #6a7c95;
  display: block;
}

.conference-description {
  margin: 0 auto;
  color: #6e7f96;
  line-height: 1.75;
  font-size: 1.04rem;
  font-weight: 500;
  max-width: 520px;
  text-align: center;
}

.stats-grid {
  margin-top: 14px;
  display: grid;
  grid-template-columns: repeat(3, minmax(180px, 1fr));
  gap: 14px;
}

.stat-card {
  border-radius: 12px;
  padding: 18px 20px;
  background: #f5f5f5;
  border: 1px solid #dbe2ea;
}

.stat-card h3 {
  margin: 0;
  color: #1f2d43;
  font-size: 2rem;
  font-weight: 700;
}

.stat-card p {
  margin: 6px 0 0;
  color: #6a7b91;
  font-size: 0.82rem;
}

.stat-card--primary {
  background: #101828;
}

.stat-card--primary h3,
.stat-card--primary p {
  color: #ffffff;
}

.conference-image {
  display: block;
  width: 100%;
  height: clamp(240px, 42vw, 420px);
  object-fit: cover;
  border-radius: 14px;
}

.sectors-section {
  padding: 58px 0 20px;
  background: linear-gradient(to left, #f5f5f5 0%, #f5f5f5 100%);
}

.section-head p {
  margin: 10px 0 24px;
  color: #5a7098;
  font-size: 0.95rem;
}

.sectors-head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: start;
  gap: 28px;
  margin-bottom: 28px;
}

.sectors-title {
  text-align: left;
  line-height: 1.1;
  font-size: clamp(1.9rem, 3.1vw, 3.25rem);
  color: #0e1c35;
}

.sectors-title span {
  display: block;
  color: #8a95a6;
}

.sectors-intro {
  max-width: 620px;
  margin: 4px 0 0;
  justify-self: end;
  text-align: center;
  line-height: 1.75;
  color: #6e7a8a;
  font-size: 1.02rem;
}

.sector-card {
  height: 100%;
  background: #fff;
  border: 1px solid #dbe6f8;
  border-radius: 14px;
  padding: 18px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.sector-icon-image {
  width: 28px;
  height: 28px;
  object-fit: contain;
  display: block;
}

.sector-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 26px rgba(14, 42, 94, 0.1);
}

.sector-card h3 {
  margin: 14px 0 8px;
  color: #16397d;
  font-size: 1rem;
}

.sector-card p {
  margin: 0;
  color: #5f759d;
  font-size: 0.87rem;
  line-height: 1.65;
}

.opportunities-section {
  padding: 48px 0 12px;
}

.opportunities-head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: start;
  gap: 24px;
  margin-bottom: 18px;
}

.opportunities-copy {
  text-align: left;
}

.opportunities-subtitle {
  margin: 10px 0 0;
  color: #5a7098;
  font-size: 0.95rem;
}

.opportunities-intro {
  margin: 0;
  justify-self: end;
  max-width: 620px;
  text-align: right;
  line-height: 1.75;
  color: #6e7a8a;
  font-size: 1.02rem;
}

.opportunity-card {
  height: 100%;
  border-radius: 16px;
  background: #fff;
  border: 1px solid #dbe6f8;
  overflow: hidden;
}

.opportunity-image {
  width: 100%;
  height: 230px;
  object-fit: cover;
  display: block;
}

.opportunity-content {
  padding: 18px;
}

.opportunity-content h3 {
  margin: 0;
  color: #113273;
}

.opportunity-content p {
  margin: 8px 0 0;
  color: #5f759d;
  line-height: 1.7;
  font-size: 0.9rem;
}

.join-section {
  margin: 40px 0 0;
  padding: 20px 0 56px;
  background: transparent;
}

.join-container {
  max-width: 1260px;
}

.join-panel {
  background: #f3f4f6;
  border-radius: 14px;
  padding: 52px 20px 50px;
}

.join-section h2 {
  margin: 0;
  color: #1a2438;
  font-size: clamp(2rem, 3vw, 2.8rem);
  font-weight: 800;
}

.join-section p {
  margin: 10px auto 18px;
  max-width: 660px;
  color: #6f7c8d;
  font-size: 0.98rem;
}

.join-btn {
  background: #0b49b4 !important;
  color: #ffffff !important;
  font-weight: 700;
  border-radius: 12px !important;
  min-height: 44px;
  min-width: 180px;
  padding-inline: 22px !important;
}

@media (max-width: 960px) {
  .hero-content {
    padding-top: 104px;
    padding-bottom: 90px;
  }

  .hero-wave {
    bottom: -95px;
  }

  .counter-grid {
    max-width: 520px;
    grid-template-columns: repeat(2, minmax(140px, 1fr));
  }

  .countdown-content {
    padding: 44px 0 42px;
  }

  .countdown-ticker-track span {
    font-size: 0.95rem;
  }

  .conference-showcase {
    padding: 20px;
  }

  .conference-top {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .sectors-head {
    grid-template-columns: 1fr;
    gap: 12px;
    margin-bottom: 22px;
  }

  .sectors-title {
    text-align: center;
  }

  .sectors-intro {
    justify-self: center;
    margin-top: 0;
  }

  .opportunities-head {
    grid-template-columns: 1fr;
    gap: 12px;
    margin-bottom: 16px;
  }

  .opportunities-copy,
  .opportunities-intro {
    text-align: center;
  }

  .opportunities-intro {
    justify-self: center;
  }

  .join-section {
    padding: 14px 0 44px;
  }

  .join-panel {
    padding: 38px 16px 34px;
  }

  .join-btn {
    min-width: 168px;
  }

  .stats-grid {
    grid-template-columns: repeat(1, minmax(140px, 1fr));
  }
}
</style>
