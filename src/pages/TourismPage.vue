<script setup lang="ts">
import DestinationCard from "@/components/DestinationCard.vue";
import HotelCard from "@/components/Hotel.vue";

const destinations = [
  {
    title: "Petra - The Rose City",
    img: "/images/tourism/img-1.jpg",
  },
  {
    title: "Wadi Rum Desert",
    img: "/images/tourism/img-2.jpg",
  },
  {
    title: "Dead Sea",
    img: "/images/tourism/img-3.jpg",
  },
  {
    title: "Jerash",
    img: "/images/tourism/img-4.jpg",
  },
  {
    title: "Aqaba & Red Sea",
    img: "/images/tourism/img-5.jpg",
  },
  {
    title: "Amman",
    img: "/images/tourism/img-6.jpg",
  },
];

const hotels = [
  {
    name: "Kempinski Hotel Ishtar Dead Sea",
    price: "JOD 140",
    img: "/images/tourism/bg-1.png",
  },
  {
    name: "Hilton Dead Sea Resort & Spa",
    price: "JOD 130",
    img: "/images/tourism/bg-2.png",
  },
  {
    name: "Movenpick Resort & Spa Dead Sea",
    price: "JOD 255",
    img: "/images/tourism/bg-3.png",
  },
  {
    name: "Marriott Dead Sea Resort & Spa",
    price: "JOD 100",
    img: "/images/tourism/bg-4.png",
  },
];
</script>

<template>
  <div class="tourism">
    <!-- HERO -->
    <section class="hero">
      <div class="container">
        <h1>Experience Jordan</h1>
        <div class="underline"></div>
        <p>
          Discover ancient wonders, stunning landscapes, and warm hospitality
        </p>
      </div>
    </section>

    <!-- WHY VISIT -->
    <section class="why-section">
      <div class="container center">
        <h2>Why Visit Jordan?</h2>

        <p class="why-text">
          Jordan offers a unique blend of ancient history, natural beauty, and
          modern hospitality. From the iconic ruins of Petra to the serene
          waters of the Dead Sea. Extend your conference stay and explore a land
          where history comes alive.
        </p>

        <div class="why-features">
          <div class="feature">
            <div class="icon-circle">
              <i class="mdi mdi-map-marker-outline"></i>
            </div>
            <h4>Easy to Explore</h4>
            <span>
              Compact geography makes it easy to visit multiple sites in a
              short time
            </span>
          </div>

          <div class="feature">
            <div class="icon-circle">
              <i class="mdi mdi-star-outline"></i>
            </div>
            <h4>World Heritage Sites</h4>
            <span>Home to 5 UNESCO World Heritage Sites including Petra</span>
          </div>

          <div class="feature">
            <div class="icon-circle">
              <i class="mdi mdi-camera-outline"></i>
            </div>
            <h4>Incredible Scenery</h4>
            <span>From deserts to seas, mountains to valleys</span>
          </div>
        </div>
      </div>
    </section>

    <!-- DESTINATIONS -->
    <section class="destinations">
      <div class="container">
        <h2 class="center">Must-Visit Destinations</h2>

        <div class="dest-grid">
          <DestinationCard
            v-for="(item, index) in destinations"
            :key="index"
            :title="item.title"
            :img="item.img"
          />
        </div>
      </div>
    </section>

    <!-- HOTELS -->
    <section class="hotels">
      <div class="container">
        <h2>Partner Hotels with Special Conference Rates</h2>
        <div class="red-line"></div>
        <p class="hotels-subtitle">
          Use the booking links below to access the conference rates
        </p>

        <div class="hotel-grid">
          <HotelCard
            v-for="hotel in hotels"
            :key="hotel.name"
            :name="hotel.name"
            :price="hotel.price"
            :img="hotel.img"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.tourism {
  font-family: Inter, sans-serif;
  background: #f5f7fa;
  color: #1e293b;
}

.container {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
}

.center {
  text-align: center;
}

/* HERO */
.hero {
  background: #123e8a;
  padding: 90px 0;
  color: #fff;
}

.hero h1 {
  font-size: 48px;
  margin: 0;
}

.underline {
  width: 80px;
  height: 3px;
  background: #ef4444;
  margin: 15px 0;
}

/* WHY SECTION */
.why-section {
  background: #eef2f7;
  padding: 80px 0;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}

.why-text {
  max-width: 700px;
  margin: 20px auto 50px;
  color: #64748b;
}

.why-features {
  display: flex;
  justify-content: center;
  gap: 70px;
  flex-wrap: wrap;
}
@media (max-width: 1024px) {
  .why-features {
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .why-features {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .feature {
    width: 100%;
    max-width: 320px;
  }
}
.feature {
  text-align: center;
  width: 250px;
}

.icon-circle {
  width: 70px;
  height: 70px;
  background: #dbeafe;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}

.icon-circle i {
  font-size: 30px;
  color: #123e8a;
}

/* DESTINATIONS */
.destinations {
  padding: 80px 0;
}

.dest-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin-top: 50px;
}

@media (max-width: 1024px) {
  .dest-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .dest-grid {
    grid-template-columns: 1fr;
  }
}

.dest-card {
  background: #fff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: 0.3s;
}

.dest-card:hover {
  transform: translateY(-6px);
}

.dest-card img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

.dest-body {
  padding: 25px;
}

/* HOTELS */
.hotels {
  padding: 80px 0;
}

.red-line {
  width: 60px;
  height: 3px;
  background: #ef4444;
  margin: 15px 0 40px;
}

.hotels-subtitle {
  margin: -20px 0 32px;
  color: #4a5565;
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 29.25px;
  letter-spacing: -0.439px;
}

.hotel-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}

@media (max-width: 900px) {
  .hotel-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 768px) {
  .hotel-card {
    flex-direction: column;
    text-align: center;
  }

  .hotel-img {
    width: 100%;
    height: 220px;
  }
}
.hotel-card {
  background: #fff;
  border-radius: 20px;
  display: flex;
  padding: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  align-items: center;
  gap: 20px;
}

.hotel-img {
  width: 200px;
  height: 200px;
  border-radius: 20px;
  background: linear-gradient(45deg, #dbeafe, #93c5fd);
}

.hotel-info h4 {
  margin: 0 0 5px;
}

.stars {
  color: #facc15;
  margin-bottom: 5px;
}

.price {
  color: #ef4444;
  font-weight: 700;
}

button {
  margin-top: 15px;
  background: #123e8a;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
}
@media (max-width: 1024px) {
  .hero {
    padding: 70px 0;
  }

  .hero h1 {
    font-size: 36px;
  }
}

@media (max-width: 600px) {
  .hero {
    padding: 60px 0;
    text-align: center;
  }

  .hero h1 {
    font-size: 28px;
  }

  .underline {
    margin: 15px auto;
  }
}
</style>
