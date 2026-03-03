<template>
  <section class="speakers-page">

    <!-- HERO -->
    <div class="speakers-hero">
      <v-container class="hero-container">
        <h1 class="hero-title">Meet Our Speakers</h1>
        <p class="hero-subtitle">
          Learn from industry leaders, policymakers, and investment experts
        </p>
      </v-container>
    </div>

    <!-- CONTENT -->
    <v-container class="speakers-content">

      <!-- SEARCH -->
      <div class="search-wrapper">
        <v-icon icon="mdi-magnify" class="search-icon" />
        <input
          class="search-input"
          placeholder="Search Sessions"
          type="text"
        />
      </div>

      <!-- GRID -->
      <div class="speakers-grid">
        <div
          v-for="(speaker, i) in speakers"
          :key="i"
          class="speaker-card"
        >
          <div class="speaker-img">
            <!-- نفس الصورة مكررة مثل التصميم -->
            <img src="/images/image1.png" />
          </div>

          <div class="speaker-info">
            <h3>{{ speaker.name }}</h3>
            <p>{{ speaker.title }}</p>
          </div>
        </div>
      </div>

    </v-container>

  </section>
</template>

<script setup>
const speakers = [
  { name: "Frank Wouters", title: "Clean Energy - Chairman - Director - Investor - Advisor" },
  { name: "Mohammad Khraiwish", title: "Founder @ Smartdots" },
  { name: "Sarah Mitchell", title: "Director of Renewable Energy @ European Development Bank" },
  { name: "Henrick Andersen", title: "CX & Communications @ Smartdots" },
  { name: "Mahdi Daoud", title: "CX & Communications @ Smartdots" },
  { name: "Sarah Mitchell", title: "Clean Energy - Chairman - Director - Investor - Advisor" }
];
</script>

<style scoped>

/* ================= PAGE ================= */

.speakers-page {
  background: #f3f4f6;
}


/* ================= HERO ================= */

.speakers-hero {
  background: linear-gradient(180deg, #1f4fa3 0%, #17418a 100%);
  padding: 72px 0 64px;
  color: #fff;
}

.hero-container {
  max-width: 1180px;
}

.hero-title {
  font-size: 42px;
  font-weight: 700;
  margin: 0 0 12px;
  letter-spacing: -0.3px;
}
.hero-title::after {
    content: "";
    width: 72px;
    height: 3px;
    background: #ef4444;
    display: block;
    margin-top: 14px;
}
.hero-subtitle {
  font-size: 16px;
  opacity: 0.9;
  margin: 0;
}


/* ================= CONTENT ================= */

.speakers-content {
  max-width: 1180px;
  padding: 48px 0 80px;
}


/* ================= SEARCH ================= */

.search-wrapper {
  width: 340px;
  height: 46px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 0 14px;
  margin-bottom: 34px;
}

.search-icon {
  color: #94a3b8;
}

.search-input {
  border: none;
  outline: none;
  width: 100%;
  font-size: 14px;
  color: #334155;
  background: transparent;
}


/* ================= GRID ================= */

.speakers-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}


/* ================= CARD ================= */

.speaker-card {
  background: #ffffff;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  transition: 0.25s ease;
}

.speaker-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 34px rgba(0,0,0,0.08);
}


/* ================= IMAGE ================= */

.speaker-img {
  width: 100%;
  height: 240px;   /* مهم جدا لتطابق Figma */
  overflow: hidden;
}

.speaker-img img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* نفس cropping التصميم */
}


/* ================= INFO ================= */

.speaker-info {
  padding: 18px 20px 22px;
}

.speaker-info h3 {
  margin: 0 0 6px;
  font-size: 16px;
  font-weight: 700;
  color: #1f2937;
}

.speaker-info p {
  margin: 0;
  font-size: 13px;
  color: #6b7280;
  line-height: 1.6;
}


/* ================= RESPONSIVE ================= */

@media (max-width: 1024px) {
  .speakers-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .speakers-grid {
    grid-template-columns: 1fr;
  }

  .search-wrapper {
    width: 100%;
  }
}

/* ================================= */
/* FULL RESPONSIVE LAYER – ADD ONLY */
/* ================================= */

/* Large Tablet */
@media (max-width: 1200px) {

  .speakers-content {
    padding: 40px 20px 70px;
  }

  .hero-title {
    font-size: 36px;
  }

}

/* Tablet */
@media (max-width: 960px) {

  .speakers-hero {
    padding: 60px 0 50px;
  }

  .hero-title {
    font-size: 30px;
  }

  .hero-subtitle {
    font-size: 15px;
  }

  .speakers-content {
    padding: 36px 20px 60px;
  }

  .search-wrapper {
    width: 100%;
    max-width: 420px;
  }

}

/* Mobile */
@media (max-width: 640px) {

  /* HERO */
  .speakers-hero {
    padding: 40px 0;
  }

  .hero-title {
    font-size: 24px;
    line-height: 1.3;
  }

  .hero-title::after {
    width: 55px;
    margin-top: 10px;
  }

  .hero-subtitle {
    font-size: 14px;
  }

  /* CONTENT */
  .speakers-content {
    padding: 28px 16px 50px;
  }

  /* SEARCH */
  .search-wrapper {
    height: 42px;
    padding: 0 12px;
    margin-bottom: 24px;
  }

  .search-input {
    font-size: 13px;
  }

  /* CARD */
  .speaker-card {
    border-radius: 14px;
  }

  .speaker-img {
    height: 200px;
  }

  .speaker-info {
    padding: 16px;
  }

  .speaker-info h3 {
    font-size: 15px;
  }

  .speaker-info p {
    font-size: 12px;
  }

}

/* Very Small Devices */
@media (max-width: 420px) {

  .hero-title {
    font-size: 21px;
  }

  .hero-subtitle {
    font-size: 13px;
  }

  .speaker-img {
    height: 180px;
  }

  .speaker-info h3 {
    font-size: 14px;
  }

  .speaker-info p {
    font-size: 11.5px;
  }

}
</style>