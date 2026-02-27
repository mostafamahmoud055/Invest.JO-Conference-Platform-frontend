<template>
  <v-container fluid class="pa-0 landing-hero">
    <!-- Video Background -->
    <video autoplay muted loop playsinline class="video-background">
      <source src="/5787553-hd_1920_1080_24fps.mp4" type="video/mp4" />
    </video>

    <v-row no-gutters class="fill-height">
      <v-col cols="12" md="6" class="hero-image-side d-flex flex-column pa-8 pa-md-12">
        <router-link to="/start-register" class="text-decoration-none">
          <v-btn
            color="white"
            variant="flat"
            class="text-none register-btn align-self-start"
            rounded="lg"
            size="large"
          >
            Request Invitation
          </v-btn>
        </router-link>
      </v-col>

      <v-col cols="12" md="6" class="hero-content-side d-flex flex-column justify-center px-8 px-md-16 py-12">
        <div class="menu-container d-flex justify-end mb-auto pt-4">
          <v-btn variant="text" color="white" class="text-none font-weight-bold letter-spacing-1">
            MENU
            <v-icon right icon="mdi-menu" class="ml-2"></v-icon>
          </v-btn>
        </div>

        <div class="content-wrapper position-fixed py-12" style="bottom: 0;">

          <div class="text-white">
            <p class="text-subtitle-1 mb-1 font-weight-medium">
              Ministry of Investment, Jordan
            </p>
            <p class="text-subtitle-1 mb-10 opacity-80">
              April 20–21, 2026 • Dead Sea
            </p>
            
            <h1 class="hero-title font-weight-bold line-height-tight">
              Jordan-EU<br />
              Investment<br />
              Conference 2026
            </h1>
          </div>

          <div class="stars-decoration">
            <v-icon 
              v-for="i in 15" 
              :key="i" 
              icon="mdi-star-four-points" 
              class="star-icon"
              :style="getStarStyle(i)"
            ></v-icon>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const getStarStyle = (i) => {
  const row = Math.floor(i / 5);
  const col = i % 5;
  return {
    opacity: 0.3 + (col * 0.15),
    transform: `translate(${col * 25}px, ${row * 25 + (col * 10)}px) scale(${0.5 + (col * 0.1)})`,
    color: i % 2 === 0 ? '#FFFFFF' : '#FFD700'
  };
};
</script>

<style scoped>
.landing-hero {
  height: 100vh;
  background-color: #0d3b94;
  overflow: hidden;
  position: relative;
}

/* Video Background */
.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

/* Hero content layers above video */
.hero-image-side,
.hero-content-side {
  position: relative;
  z-index: 1;
}

.hero-image-side {
  background-image: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)),
                    url('https://images.unsplash.com/photo-1544910793-1896a77d5494?q=80&w=2071&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
}

.hero-content-side {
  background-color: rgba(13, 66, 174, 0.85); /* semi-transparent so video shows through */
  border-top-left-radius: 50% 100%;
}

/* Mobile adjustments */
@media (max-width: 960px) {
  .hero-content-side {
    border-top-left-radius: 0;
    margin-top: -100px;
    padding-top: 150px !important;
  }
}

.register-btn {
  color: #0d42ae !important;
  font-weight: 700;
  padding: 0 40px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  letter-spacing: -1px;
}

.accent-line {
  position: absolute;
  left: -24px;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: #fcc419;
  height: 60px;
}

.opacity-80 {
  opacity: 0.8;
}

.line-height-tight {
  line-height: 1.1;
}

.menu-container {
  position: absolute;
  top: 20px;
  right: 40px;
}

.stars-decoration {
  position: absolute;
  right: 0;
  bottom: 10%;
  width: 200px;
  height: 200px;
  pointer-events: none;
}

.star-icon {
  position: absolute;
}
</style>