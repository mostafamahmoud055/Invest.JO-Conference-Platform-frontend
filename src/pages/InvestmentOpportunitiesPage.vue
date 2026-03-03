<template>
  <section class="invest-page">

    <!-- HERO -->
    <div class="invest-hero">
      <v-container class="hero-container">
        <h1>Investment Opportunities</h1>
        <p>
          Explore priority PPP projects across key sectors with clear
          investment opportunities
        </p>
      </v-container>
    </div>

    <!-- CONTENT -->
    <v-container class="invest-content">

      <!-- SEARCH -->
      <div class="search-box">
        <v-icon icon="mdi-magnify" class="search-icon" />
        <input placeholder="Search opportunities" />
      </div>

      <!-- GRID -->
      <div class="opportunities-grid">

        <div
          v-for="(item, i) in opportunities"
          :key="i"
          class="opportunity-card"
          role="button"
          tabindex="0"
          @click="goToOpportunityDetails"
          @keyup.enter="goToOpportunityDetails"
        >
          <div class="card-header">

            <span
              class="badge"
              :class="item.typeClass"
            >
              <v-icon :icon="item.icon" size="14" />
              {{ item.type }}
            </span>

            <v-icon icon="mdi-arrow-right" class="arrow" />
          </div>

          <h3>{{ item.title }}</h3>

          <p class="desc">
            {{ item.description }}
          </p>

          <div class="location">
            <v-icon icon="mdi-map-marker-outline" size="16" />
            {{ item.location }}
          </div>
        </div>

      </div>

    </v-container>

  </section>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToOpportunityDetails = () => {
  router.push({ name: "InvestmentOpportunitiesDetails" });
};

const opportunities = [
  {
    type: "Technology & Innovation",
    typeClass: "tech",
    icon: "mdi-chip",
    title: "Amman Bridge",
    description:
      "The Amman Bridge is a 15.8 km elevated expressway developed under a Public-Private Partnership (PPP) model. The project will enhance Amman's western north–south mobility corridor.",
    location: "Amman",
  },
  {
    type: "Healthcare",
    typeClass: "health",
    icon: "mdi-hospital-box-outline",
    title: "KHCF Project",
    description:
      "A 15.8 km PPP expressway connecting north and south Amman, easing congestion, integrating with BRT, and delivering stable toll-based returns for investors",
    location: "Amman",
  },
  {
    type: "Renewable Energy",
    typeClass: "energy",
    icon: "mdi-solar-power",
    title: "Petra Solar Energy Park",
    description:
      "Large-scale solar energy facility to generate clean power and position Jordan as a regional renewable energy hub.",
    location: "Ma'an Governorate",
  },
  {
    type: "Tourism & Hospitality",
    typeClass: "tourism",
    icon: "mdi-beach",
    title: "Dead Sea Resort & Wellness Complex",
    description:
      "Luxury resort and wellness destination leveraging the unique properties of the Dead Sea for health and tourism.",
    location: "Dead Sea",
  },
  {
    type: "Technology & Innovation",
    typeClass: "tech2",
    icon: "mdi-laptop",
    title: "Jordan Tech Valley",
    description:
      "Innovation hub and technology park to nurture startups, attract tech companies, and build a thriving digital economy.",
    location: "Irbid",
  },
  {
    type: "Agriculture",
    typeClass: "agri",
    icon: "mdi-sprout",
    title: "Sustainable Agriculture Project",
    description:
      "Modern irrigation systems and vertical farming to enhance food security and export high-value agricultural products.",
    location: "Jordan Valley",
  },
];
</script>

<style scoped>

/* PAGE */
.invest-page {
  background: #f3f4f6;
}

/* HERO */
.invest-hero {
  background: linear-gradient(180deg, #1f4fa3 0%, #17418a 100%);
  padding: 72px 0 64px;
  color: #fff;
}

.hero-container {
  max-width: 1180px;
}

.invest-hero h1 {
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 10px;
}

.invest-hero p {
  font-size: 16px;
  opacity: 0.9;
  max-width: 560px;
}

/* CONTENT */
.invest-content {
  max-width: 1180px;
  padding: 46px 0 80px;
}

/* SEARCH */
.search-box {
  width: 360px;
  height: 46px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  padding: 0 14px;
  margin-bottom: 32px;
}

.search-box input {
  border: none;
  outline: none;
  width: 100%;
  font-size: 14px;
}

/* GRID */
.opportunities-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 26px;
}

/* CARD */
.opportunity-card {
  background: #fff;
  border-radius: 16px;
  padding: 22px 22px 20px;
  border: 1px solid #e5e7eb;
  transition: 0.25s ease;
  cursor: pointer;
}

.opportunity-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 28px rgba(0,0,0,0.06);
}

.opportunity-card:focus-visible {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}

/* HEADER */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.arrow {
  color: #94a3b8;
}

/* TITLE */
.opportunity-card h3 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 6px;
  color: #111827;
}

/* DESCRIPTION */
.desc {
  font-size: 14px;
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 14px;
}

/* LOCATION */
.location {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #64748b;
  font-size: 13px;
}

/* BADGES */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  font-size: 12px;
  border-radius: 20px;
  font-weight: 500;
}

/* COLORS MATCH FIGMA */
.tech { background:#e0f2fe; color:#0284c7; }
.health { background:#f1f5f9; color:#64748b; }
.energy { background:#fef3c7; color:#d97706; }
.tourism { background:#fce7f3; color:#db2777; }
.tech2 { background:#ffe4e6; color:#ea580c; }
.agri { background:#ecfccb; color:#65a30d; }

/* RESPONSIVE */
@media (max-width:900px){
  .opportunities-grid {
    grid-template-columns:1fr;
  }
}
/* ================================= */
/* FULL RESPONSIVE — ADD ONLY */
/* ================================= */


/* Large Tablet */
@media (max-width:1200px){

  .invest-content {
    padding:40px 20px 70px;
  }

  .invest-hero h1 {
    font-size:36px;
  }

}


/* Tablet */
@media (max-width:960px){

  .invest-hero {
    padding:60px 0 50px;
  }

  .invest-hero h1 {
    font-size:30px;
  }

  .invest-hero p {
    font-size:15px;
    max-width:100%;
  }

  .invest-content {
    padding:36px 20px 60px;
  }

  .search-box {
    width:100%;
    max-width:420px;
  }

}


/* Mobile */
@media (max-width:640px){

  /* HERO */
  .invest-hero {
    padding:42px 0;
  }

  .invest-hero h1 {
    font-size:24px;
    line-height:1.3;
  }

  .invest-hero p {
    font-size:14px;
  }

  /* CONTENT */
  .invest-content {
    padding:28px 16px 50px;
  }

  /* SEARCH */
  .search-box {
    width:100%;
    height:42px;
    padding:0 12px;
    margin-bottom:24px;
  }

  .search-box input {
    font-size:13px;
  }

  /* CARD */
  .opportunity-card {
    padding:18px 16px;
    border-radius:14px;
  }

  .opportunity-card h3 {
    font-size:16px;
  }

  .desc {
    font-size:13px;
  }

  .location {
    font-size:12px;
  }

}


/* Very Small Devices */
@media (max-width:420px){

  .invest-hero h1 {
    font-size:21px;
  }

  .invest-hero p {
    font-size:13px;
  }

  .opportunity-card {
    padding:16px 14px;
  }

  .badge {
    font-size:11px;
    padding:5px 8px;
  }

}
</style>
