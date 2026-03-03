<script setup>
const partnerGroups = [
  {
    title: "Strategic Partners",
    partners: [
      {
        name: "European Investment Bank",
        image: "/images/partners/european.png",
      },
      {
        name: "World Bank Group",
        image: "/images/partners/world.png",
      },
    ],
  },
  {
    title: "Institutional Partners",
    partners: [
      {
        name: "Jordan Investment Commission",
        image: "/images/partners/nvestment-commission.png",
      },
      {
        name: "Central Bank of Jordan",
        image: "/images/partners/central_bank.png",
      },
      {
        name: "Amman Chamber of Commerce",
        image: "/images/partners/Amman_Chamber.png",
      },
    ],
  },
  {
    title: "Gold Partners",
    partners: [
      {
        name: "Jordan Telecom Group",
        image: "/images/partners/Jordan_Telecom.png",
      },
      {
        name: "Arab Bank",
        image: "/images/partners/Arab_Bank.png",
      },
      {
        name: "Hikma Pharmaceuticals",
        image: "/images/partners/Hikma.png",
      },
    ],
  },
  {
    title: "Silver Partners",
    partners: [
      {
        name: "Jordan Dubai Islamic Bank",
        image: "/images/partners/Dubai_Islamic_Bank.png",
      },
      {
        name: "Aqaba Development Corporation",
        image: "/images/partners/Aqaba.png",
      },
      {
        name: "National Electric Power Company",
        image: "/images/partners/National.png",
      },
      {
        name: "Royal Jordanian Airlines",
        image: "/images/partners/Royal.png",
      },
    ],
  },
];
</script>

<template>
  <div class="partners-page">
    <section class="partners-hero">
      <div class="page-container">
        <h1>Our Partners</h1>
        <p>Thank you to our partners for making this conference possible</p>
      </div>
    </section>

    <section class="partners-content">
      <div class="page-container">
        <div class="partners-group" v-for="group in partnerGroups" :key="group.title">
          <h2
            :class="{
              'partner-tier-title': ['Institutional Partners', 'Gold Partners', 'Silver Partners'].includes(group.title),
            }"
          >
            {{ group.title }}
          </h2>

          <div
            class="partners-grid"
            :class="[
              `cols-${group.partners.length}`,
              { 'strategic-grid': group.title === 'Strategic Partners' },
            ]"
          >
            <article class="partner-card" v-for="partner in group.partners" :key="partner.name">
              <div class="partner-logo-wrap">
                <img
                  class="partner-logo"
                  :src="partner.image"
                  :alt="partner.name"
                  loading="lazy"
                />
              </div>
              <p class="partner-name">{{ partner.name }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.partners-page {
  --brand-blue: #0d3f9f;
  --text-dark: #1a2d4f;
  --text-muted: #6b7792;
  --panel-bg: #eceef3;
  --card-bg: #f7f8fb;
  --card-border: #e1e5ee;
  min-height: 100%;
  background: #f2f4f8;
}

.page-container {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
}

.partners-hero {
  background: linear-gradient(180deg, #0c3a97 0%, #1147aa 100%);
  color: #fff;
  padding: 44px 0 52px;
}

.partners-hero h1 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800;
}

.partners-hero p {
  margin: 12px 0 0;
  max-width: 560px;
  font-size: 1rem;
  color: #dbe8ff;
}

.partners-content {
  padding: 26px 0 60px;
}

.partners-group {
  background: var(--panel-bg);
  border-radius: 12px;
  padding: 14px 14px 16px;
}

.partners-group + .partners-group {
  margin-top: 14px;
}

.partners-group h2 {
  margin: 2px 6px 12px;
  color: var(--text-dark);
  font-size: 1rem;
  font-weight: 700;
}

.partners-group h2.partner-tier-title {
  color: #101828;
  text-align: left;
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: -0.439px;
}

.partners-grid {
  display: grid;
  gap: 12px;
}

.partners-grid.cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.partners-grid.cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.partners-grid.cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.partner-card {
  min-height: 206px;
  border-radius: 10px;
  border: 1px solid var(--card-border);
  background: var(--card-bg);
  padding: 10px 10px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.partner-logo-wrap {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 4px 10px;
}

.partner-logo {
  width: min(100%, 271.865px);
  flex: 1 0 0;
  aspect-ratio: 23 / 22;
  max-width: 100%;
  max-height: none;
  object-fit: contain;
}

.partner-name {
  margin: 0;
  color: #101828;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.449px;
  text-align: left;
}

.strategic-grid .partner-card {
  min-height: 310px;
}

.strategic-grid .partner-logo-wrap {
  padding: 8px;
}

.strategic-grid .partner-logo {
  width: min(100%, 442.882px);
  flex: 1 0 0;
  aspect-ratio: 23 / 22;
  max-height: none;
}

@media (max-width: 1024px) {
  .partners-grid.cols-4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .page-container {
    width: min(1180px, calc(100% - 24px));
  }

  .partners-hero {
    padding: 30px 0 36px;
  }

  .partners-grid.cols-3,
  .partners-grid.cols-2,
  .partners-grid.cols-4 {
    grid-template-columns: 1fr;
  }

  .partner-card {
    min-height: 156px;
  }

  .strategic-grid .partner-card {
    min-height: 240px;
  }
}
</style>
