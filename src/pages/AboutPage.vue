<template>
  <section class="about-page">
    <v-container class="py-14 py-md-16">
      <div class="about-intro">
        <p class="about-eyebrow">About JEIC 2026</p>
        <h1 class="about-title">A regional platform that turns dialogue into investment action.</h1>
        <p class="about-lead">
          The Jordan-EU Investment Conference connects decision-makers, investors,
          institutions, and project owners to unlock high-impact opportunities in
          Jordan and the wider region.
        </p>
      </div>

      <v-row class="mt-8" dense>
        <v-col cols="12" md="4" v-for="item in pillars" :key="item.title">
          <v-card class="pillar-card pa-6" elevation="0">
            <v-icon :icon="item.icon" size="28" color="primary" class="mb-4" />
            <h3 class="pillar-title">{{ item.title }}</h3>
            <p class="pillar-text">{{ item.text }}</p>
          </v-card>
        </v-col>
      </v-row>

      <div class="about-cta mt-12">
        <h2>Ready to participate?</h2>
        <p>Start your application and secure your place at JEIC 2026.</p>
        <RouterLink :to="{ name: 'StartRegister' }" class="text-decoration-none">
          <v-btn color="primary" class="text-none px-8" rounded="pill">
            Apply for Invitation
          </v-btn>
        </RouterLink>
      </div>
    </v-container>
  </section>
</template>

<script setup>
const pillars = [
  {
    title: "Investment Matchmaking",
    text: "Curated B2B and B2G sessions focused on real investment pipelines.",
    icon: "mdi-handshake-outline",
  },
  {
    title: "Policy & Reform Dialogue",
    text: "Focused discussions on Jordan's reforms, incentives, and growth agenda.",
    icon: "mdi-scale-balance",
  },
  {
    title: "Sector Acceleration",
    text: "Sector-specific tracks in tourism, manufacturing, tech, and logistics.",
    icon: "mdi-chart-line",
  },
];
</script>

<style scoped>
.about-page {
  background: linear-gradient(180deg, #f4f7fb 0%, #eef3f9 100%);
  min-height: 70vh;
}

.about-intro {
  max-width: 760px;
}

.about-eyebrow {
  margin: 0 0 12px;
  font-size: 0.86rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #3865b5;
  font-weight: 700;
}

.about-title {
  margin: 0;
  font-size: clamp(1.8rem, 3.2vw, 2.8rem);
  line-height: 1.15;
  color: #0f2f72;
}

.about-lead {
  margin-top: 18px;
  color: #4a5f87;
  font-size: 1rem;
  line-height: 1.75;
}

.pillar-card {
  border-radius: 16px;
  height: 100%;
  border: 1px solid #dce7f7;
  background: #fff;
}

.pillar-title {
  margin: 0 0 8px;
  color: #102e69;
  font-size: 1.1rem;
}

.pillar-text {
  margin: 0;
  color: #566c95;
  line-height: 1.7;
  font-size: 0.92rem;
}

.about-cta {
  text-align: center;
  padding: 42px 20px;
  border-radius: 20px;
  background: linear-gradient(130deg, #0f387f 0%, #164da9 100%);
  color: #fff;
}

.about-cta h2 {
  margin: 0;
}

.about-cta p {
  margin: 12px 0 22px;
  color: #d6e5ff;
}
</style>
