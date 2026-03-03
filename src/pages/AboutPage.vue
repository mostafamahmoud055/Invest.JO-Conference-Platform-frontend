<template>
  <section class="about-page">
    <!-- HERO -->
    <div class="about-hero">
      <img src="/images/about-hero.jpg" class="hero-img" />

      <div class="hero-overlay"></div>

      <v-container class="hero-content">
        <h1 class="hero-title">About the Conference</h1>
      </v-container>
    </div>

    <!-- CONTENT -->
    <v-container class="about-content">
      <v-row>
        <!-- LEFT TEXT -->
        <v-col cols="12" md="7">
          <h2 class="section-title">A Gateway to Investment in Jordan</h2>

          <p class="section-text">
            The Jordan–Europe Investment Conference is a high-level
            international forum dedicated to showcasing Jordan's dynamic
            business environment. Bringing together government officials,
            corporate leaders, and global investors, the event focuses on
            strategic Public-Private Partnerships (PPP) and direct investment
            opportunities.
          </p>

          <p class="section-text">
            Beyond the sessions, the conference features dedicated B2B and G2B
            matchmaking tracks, ensuring that every interaction translates into
            tangible economic partnerships.
          </p>

          <!-- BULLETS -->
          <div class="feature">
            <v-icon
              icon="mdi-check-circle-outline"
              size="22"
              class="feature-icon"
            />
            <div>
              <h4>Strategic PPP Projects</h4>
              <p>
                Discover vetted public-private partnership opportunities across
                key sectors
              </p>
            </div>
          </div>

          <div class="feature">
            <v-icon
              icon="mdi-check-circle-outline"
              size="22"
              class="feature-icon"
            />
            <div>
              <h4>B2B & G2B Matchmaking</h4>
              <p>
                Pre-scheduled meetings with government officials and business
                leaders
              </p>
            </div>
          </div>

          <div class="feature">
            <v-icon
              icon="mdi-check-circle-outline"
              size="22"
              class="feature-icon"
            />
            <div>
              <h4>High-Level Networking</h4>
              <p>
                Connect with decision-makers and industry leaders from across
                Europe and Jordan
              </p>
            </div>
          </div>
        </v-col>

        <!-- RIGHT CARD -->
        <v-col cols="12" md="5">
          <div class="glance-card">
            <h3>Conference at a Glance</h3>

            <div class="glance-row">
              <span>Date</span>
              <strong>April 20-21, 2026</strong>
            </div>

            <div class="glance-row">
              <span>Location</span>
              <strong
                >King Hussein Bin Talal Convention Centre, Dead Sea</strong
              >
            </div>

            <div class="glance-row">
              <span>Expected Attendees</span>
              <strong>500+ Investors & Officials</strong>
            </div>

            <div class="glance-row">
              <span>Investment Opportunities</span>
              <strong>50+ PPP Opportunities</strong>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<style scoped>
.about-page {
  background: #f3f4f6;
}

.hero-title {
  position: relative;
  color: #fff;
  font-size: 44px;
  font-weight: 700;
}

.hero-title::after {
  content: "";
  width: 70px;
  height: 3px;
  background: #e53935;
  display: block;
  margin-top: 12px;
}

/* CONTENT */
.about-content {
  padding: 70px 0;
}

.section-title {
  font-size: 34px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 20px;
}

.section-text {
  color: #64748b;
  line-height: 1.8;
  margin-bottom: 20px;
}

/* FEATURES */
.feature {
  display: flex;
  gap: 14px;
  margin-top: 20px;
}

.feature .v-icon {
  color: #1d4ed8;
  margin-top: 2px;
}

.feature h4 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.feature p {
  margin: 4px 0 0;
  color: #64748b;
}

/* RIGHT CARD */
.glance-card {
  background: linear-gradient(180deg, #144a8b, #0e3b73);
  color: white;
  padding: 28px;
  border-radius: 14px;
}

.glance-card h3 {
  margin-bottom: 20px;
  font-size: 20px;
}

.glance-row {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 14px 0;
}

.glance-row span {
  color: #cbd5e1;
}
.about-hero {
  position: relative;
  height: 340px;
  overflow: hidden;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 65%;
}

.hero-overlay {
  background: linear-gradient(
    90deg,
    rgba(8, 23, 49, 0.85) 0%,
    rgba(8, 23, 49, 0.55) 45%,
    rgba(8, 23, 49, 0.2) 75%,
    rgba(8, 23, 49, 0) 100%
  );
}
.about-hero {
  height: 380px;
}
.about-content {
  padding: 90px 0;
}
.hero-content {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
}

.hero-title {
  color: #fff;
  font-size: 42px;
  font-weight: 700;
  letter-spacing: -0.01em;
  position: relative;
}

.hero-title::after {
  content: "";
  width: 72px;
  height: 3px;
  background: #ef4444;
  display: block;
  margin-top: 14px;
}
.feature-icon {
  color: #1d4ed8;
  min-width: 22px;
  margin-top: 3px;
}
.feature {
  overflow: visible;
}
/* ============================= */
/* RESPONSIVE FIXES — ADD ONLY   */
/* ============================= */

/* Large Tablets */
@media (max-width: 1260px) {
  .about-content {
    padding: 70px 20px;
  }
}

/* Tablet */
@media (max-width: 960px) {

  .about-hero {
    height: 300px;
  }

  .hero-title {
    font-size: 34px;
  }

  .section-title {
    font-size: 28px;
  }

  .glance-card {
    margin-top: 30px;
  }
}

/* Mobile */
@media (max-width: 600px) {

  /* HERO */
  .about-hero {
    height: 240px;
  }

  .hero-img {
    object-position: center;
  }

  .hero-title {
    font-size: 26px;
    line-height: 1.3;
  }

  .hero-title::after {
    width: 55px;
  }

  /* CONTENT */
  .about-content {
    padding: 40px 16px;
  }

  .section-title {
    font-size: 24px;
    line-height: 1.4;
  }

  .section-text {
    font-size: 14px;
  }

  /* FEATURES */
  .feature {
    gap: 10px;
    margin-top: 16px;
  }

  .feature h4 {
    font-size: 15px;
  }

  .feature p {
    font-size: 13px;
  }

  /* RIGHT CARD */
  .glance-card {
    padding: 20px;
    border-radius: 12px;
  }

  .glance-card h3 {
    font-size: 18px;
  }

  .glance-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .glance-row strong {
    font-size: 14px;
  }
}

/* Very Small Devices */
@media (max-width: 420px) {

  .hero-title {
    font-size: 22px;
  }

  .section-title {
    font-size: 21px;
  }

  .glance-card {
    padding: 16px;
  }
}
</style>
