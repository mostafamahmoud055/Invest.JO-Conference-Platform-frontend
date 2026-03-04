<script setup lang="ts">

const news = [
  {
    title: "Transportation Arrangements Confirmed",
    date: "April 18, 2026",
    time: "8:00 AM",
    text: "Complimentary shuttle service will be provided between major hotels and the conference venue. Detailed schedules will be shared with registered participants."
  },
  {
    title: "VIP Investor Dinner – Invitation Only",
    date: "April 16, 2026",
    time: "4:00 PM",
    text: "An exclusive VIP dinner will be held on the evening of June 14, 2026, featuring senior government officials and leading investors. Invitations will be sent to qualified participants."
  },
  {
    title: "Final Program Schedule Released",
    date: "March 26, 2026",
    time: "9:00 AM",
    text: "The complete conference program has been published, including all panel sessions, workshops, and networking events. View the full schedule on our agenda page."
  },
  {
    title: "Exhibitor Spaces Filling Fast",
    date: "March 26, 2026",
    time: "11:00 AM",
    text: "Only 15 exhibition spaces remain available. Companies interested in showcasing their products and services should secure their booth soon."
  }
]

</script>
<template>
  <div class="news-page">

    <!-- HERO -->
    <section class="hero">
      <div class="container">
        <h1>News Updates</h1>
        <div class="underline"></div>
        <p>
          Stay updated with the latest news and important information about the conference
        </p>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="news-section">
      <div class="container">

        <div class="news-wrapper">
          <div 
            v-for="(item,index) in news" 
            :key="index"
            class="news-card"
          >
            <h3>{{ item.title }}</h3>

            <div class="meta">
              <div class="meta-item">
                <i class="mdi mdi-calendar-blank-outline"></i>
                {{ item.date }}
              </div>

              <div class="meta-item">
                <i class="mdi mdi-clock-outline"></i>
                {{ item.time }}
              </div>
            </div>

            <p class="description">
              {{ item.text }}
            </p>

          </div>
        </div>

      </div>
    </section>

  </div>
</template>
<style scoped>
.news-page{
  font-family: Inter, sans-serif;
  background:#f5f7fa;
  color:#1e293b;
}

.container{
  width:100%;
  max-width:1240px;
  margin:auto;
  padding:0 20px;
}

/* HERO */
.hero{
  background:#123e8a;
  padding:95px 0;
  color:white;
}

.hero h1{
  font-size:44px;
  font-weight:700;
  margin:0;
}

.underline{
  width:70px;
  height:3px;
  background:#ef4444;
  margin:18px 0;
}

.hero p{
  max-width:600px;
  color:#e2e8f0;
  font-size:16px;
}

/* SECTION */
.news-section{
  padding:80px 0;
}

.news-wrapper{
  background:#e9edf3;
  padding:40px;
  border-radius:26px;
}

/* CARD */
.news-card{
  background:white;
  padding:28px 32px;
  border-radius:18px;
  box-shadow:0 8px 20px rgba(0,0,0,0.05);
  margin-bottom:26px;
  transition:.3s;
}

.news-card:hover{
  transform:translateY(-4px);
}

/* TITLE */
.news-card h3{
  font-size:18px;
  font-weight:600;
  margin-bottom:14px;
}

/* META */
.meta{
  display:flex;
  gap:22px;
  margin-bottom:14px;
  font-size:14px;
  color:#64748b;
}

.meta-item{
  display:flex;
  align-items:center;
  gap:6px;
}

/* DESCRIPTION */
.description{
  font-size:15px;
  line-height:1.7;
  color:#475569;
}
@media (max-width:1024px){
  .hero{
    padding:75px 0;
  }

  .hero h1{
    font-size:36px;
  }
}

@media (max-width:600px){
  .hero{
    padding:60px 0;
    text-align:center;
  }

  .hero h1{
    font-size:28px;
  }

  .underline{
    margin:18px auto;
  }

  .hero p{
    margin:auto;
    font-size:14px;
  }
}
@media (max-width:1024px){
  .news-wrapper{
    padding:30px;
  }
}

@media (max-width:768px){
  .news-wrapper{
    padding:22px;
    border-radius:18px;
  }
}
@media (max-width:768px){
  .news-card{
    padding:22px;
  }

  .news-card h3{
    font-size:16px;
  }

  .description{
    font-size:14px;
  }
}
@media (max-width:600px){
  .meta{
    flex-direction:column;
    gap:8px;
  }

  .meta-item{
    font-size:13px;
  }
}
</style>