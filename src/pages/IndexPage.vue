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
            <v-btn color="white" variant="flat" class="text-none hero-primary-btn" rounded="pill">
              Register Now
            </v-btn>
          </RouterLink>
          <RouterLink :to="{ name: 'About' }" class="text-decoration-none">
            <v-btn variant="outlined" color="white" class="text-none px-7" rounded="pill">
              Learn More
            </v-btn>
          </RouterLink>
        </div>
      </v-container>

      <div class="hero-wave"></div>
    </section>

    <section id="countdown" class="countdown-section">
      <v-container>
        <h2 class="section-title text-center text-white">The Countdown Has Begun</h2>
        <div class="counter-grid">
          <article v-for="item in countdownItems" :key="item.label" class="counter-card">
            <div class="counter-value">{{ item.value }}</div>
            <div class="counter-label">{{ item.label }}</div>
          </article>
        </div>
      </v-container>
    </section>

    <section class="conference-section">
      <v-container>
        <v-row align="center" class="conference-card" dense>
          <v-col cols="12" md="7" class="pa-6 pa-md-8">
            <p class="conference-kicker">Jordan-EU Investment Conference 2026</p>
            <h2 class="conference-title">Shaping investment partnerships for sustainable growth.</h2>
            <p class="conference-description">
              JEIC 2026 brings public and private sector leaders together to
              accelerate investment across strategic sectors and unlock regional
              opportunities.
            </p>
            <div class="stats-grid">
              <article v-for="stat in highlightStats" :key="stat.label" class="stat-card">
                <h3>{{ stat.value }}</h3>
                <p>{{ stat.label }}</p>
              </article>
            </div>
          </v-col>

          <v-col cols="12" md="5" class="conference-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1e2?q=80&w=1000&auto=format&fit=crop"
              alt="Jordan-EU conference visual"
              class="conference-image"
            />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section id="sectors" class="sectors-section">
      <v-container>
        <div class="section-head text-center">
          <h2 class="section-title">Key Investment Sectors</h2>
          <p>Priority sectors designed to attract long-term and high-value investments.</p>
        </div>

        <v-row dense>
          <v-col cols="12" sm="6" md="3" v-for="sector in sectors" :key="sector.title">
            <article class="sector-card">
              <v-icon :icon="sector.icon" color="primary" size="24" />
              <h3>{{ sector.title }}</h3>
              <p>{{ sector.description }}</p>
            </article>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section id="opportunities" class="opportunities-section">
      <v-container>
        <div class="section-head text-center">
          <h2 class="section-title">Signature Investment Opportunities</h2>
          <p>Projects aligned with Jordan's growth strategy and regional demand.</p>
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
      <v-container class="text-center">
        <h2>Ready to Join Us?</h2>
        <p>Start your application and reserve your spot at JEIC 2026.</p>
        <RouterLink :to="{ name: 'StartRegister' }" class="text-decoration-none">
          <v-btn color="white" variant="flat" class="text-none join-btn" rounded="pill">
            Start Application
          </v-btn>
        </RouterLink>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const eventDate = new Date("2026-04-20T09:00:00+03:00");
const now = ref(Date.now());
let timerId = null;

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
  { value: "500+", label: "Expected Participants" },
  { value: "25+", label: "Countries Represented" },
  { value: "$30B+", label: "Projects Pipeline" },
];

const sectors = [
  {
    title: "Tourism",
    description: "High-growth opportunities in hospitality and destination development.",
    icon: "mdi-beach",
  },
  {
    title: "Tech & Digital",
    description: "Innovation hubs, SaaS growth, and digital infrastructure projects.",
    icon: "mdi-laptop",
  },
  {
    title: "Green Energy",
    description: "Utility-scale renewable projects and clean transition programs.",
    icon: "mdi-leaf",
  },
  {
    title: "Logistics",
    description: "Regional trade connectivity and supply chain optimization.",
    icon: "mdi-truck-fast-outline",
  },
  {
    title: "Manufacturing",
    description: "Industrial expansion backed by strategic geographic access.",
    icon: "mdi-factory",
  },
  {
    title: "Healthcare",
    description: "Medical services, biotech collaboration, and health innovation.",
    icon: "mdi-hospital-box-outline",
  },
  {
    title: "AgriBusiness",
    description: "Food security and value-chain focused agricultural investments.",
    icon: "mdi-sprout-outline",
  },
  {
    title: "Financial Services",
    description: "Fintech development and cross-border financing opportunities.",
    icon: "mdi-bank-outline",
  },
];

const opportunities = [
  {
    title: "Northern Innovation Corridor",
    description:
      "A mixed-use growth zone focused on advanced manufacturing and startup incubation.",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Dead Sea Premium Tourism District",
    description:
      "Integrated hospitality and wellness projects designed for international tourism demand.",
    image:
      "https://images.unsplash.com/photo-1630060383258-44d7f5b4576d?q=80&w=1200&auto=format&fit=crop",
  },
];
</script>

<style scoped>
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
  color: #0e367f !important;
  font-weight: 700;
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
  background: linear-gradient(150deg, #0f3d8d 0%, #0b3378 100%);
  padding: 72px 0 58px;
}

.section-title {
  margin: 0;
  color: #123675;
  font-size: clamp(1.4rem, 2.5vw, 2rem);
}

.counter-grid {
  margin-top: 28px;
  display: grid;
  grid-template-columns: repeat(4, minmax(80px, 1fr));
  gap: 14px;
}

.counter-card {
  text-align: center;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 16px 12px;
}

.counter-value {
  font-size: clamp(1.6rem, 3vw, 2.1rem);
  color: #fff;
  font-weight: 700;
}

.counter-label {
  margin-top: 4px;
  text-transform: uppercase;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  color: #d5e3ff;
}

.conference-section {
  padding: 50px 0 28px;
}

.conference-card {
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 22px 50px rgba(14, 39, 88, 0.1);
  overflow: hidden;
}

.conference-kicker {
  margin: 0;
  color: #4c6fa8;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
  font-weight: 700;
}

.conference-title {
  margin: 16px 0 14px;
  color: #153a84;
  line-height: 1.2;
}

.conference-description {
  color: #4f6285;
  line-height: 1.8;
  font-size: 0.95rem;
}

.stats-grid {
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(3, minmax(110px, 1fr));
  gap: 12px;
}

.stat-card {
  border: 1px solid #d8e4f7;
  border-radius: 14px;
  padding: 14px 12px;
  background: #f8fbff;
}

.stat-card h3 {
  margin: 0;
  color: #103474;
  font-size: 1.25rem;
}

.stat-card p {
  margin: 4px 0 0;
  color: #59719f;
  font-size: 0.8rem;
}

.conference-image-wrap {
  min-height: 280px;
}

.conference-image {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 280px;
  object-fit: cover;
}

.sectors-section {
  padding: 58px 0 20px;
}

.section-head p {
  margin: 10px 0 24px;
  color: #5a7098;
  font-size: 0.95rem;
}

.sector-card {
  height: 100%;
  background: #fff;
  border: 1px solid #dbe6f8;
  border-radius: 14px;
  padding: 18px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
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
  margin: 52px 0 0;
  padding: 54px 0 70px;
  background: radial-gradient(circle at 30% 20%, #2d63c0 0%, #16499f 65%, #0d356f 100%);
  color: #fff;
}

.join-section h2 {
  margin: 0;
}

.join-section p {
  margin: 12px auto 22px;
  max-width: 540px;
  color: #cfddfb;
}

.join-btn {
  color: #0f397e !important;
  font-weight: 700;
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
    grid-template-columns: repeat(2, minmax(120px, 1fr));
  }

  .stats-grid {
    grid-template-columns: repeat(1, minmax(120px, 1fr));
  }
}
</style>
