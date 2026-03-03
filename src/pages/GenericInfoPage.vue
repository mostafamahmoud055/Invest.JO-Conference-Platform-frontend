<template>
  <section class="agenda-page">
    <!-- HERO -->
    <div class="agenda-hero">
      <v-container>
        <h1>Conference Agenda</h1>
        <p>Two days packed with insights, networking, and investment opportunities</p>
      </v-container>
    </div>

<!-- FILTER BAR -->
<v-container class="agenda-filter">
  <div class="filter-left">
    <button class="tab active">All</button>
    <button class="tab">Monday, 20th April</button>
    <button class="tab">Tuesday, 21st April</button>
  </div>

  <div class="filter-right">
    <input type="text" placeholder="Search Sessions" />
  </div>
</v-container>

<!-- AGENDA WRAPPER -->
<v-container class="agenda-wrapper">

  <!-- DAY -->
  <div class="day-card">
    <div class="day-header">
      <div class="day-icon">📅</div>
      <div>
        <h3>Day 1</h3>
        <span>April 20, 2026</span>
      </div>
    </div>

    <!-- SESSION -->
    <div class="session">
      <div class="time">08:00 AM</div>

      <div class="details">
        <h4>Registration & Welcome Coffee</h4>
        <p>All Attendees • Main Lobby</p>
      </div>

      <div class="badge green">Registration</div>
    </div>

    <div class="session">
      <div class="time">09:00 AM</div>

      <div class="details">
        <h4>Opening Keynote: The Future of Investment in Jordan</h4>
        <p>H.E. Minister of Investment • Philadelphia Hall</p>
      </div>

      <div class="badge purple">Keynote</div>
    </div>

    <div class="session">
      <div class="time">10:00 AM</div>

      <div class="details">
        <h4>Panel Discussion: EU-Jordan Economic Partnership</h4>
        <p>EU Delegation & Government Officials • Philadelphia Hall</p>
      </div>

      <div class="badge blue">Panel</div>
    </div>

  </div>

  <!-- DAY 2 -->
  <div class="day-card">
    <div class="day-header">
      <div class="day-icon">📅</div>
      <div>
        <h3>Day 2</h3>
        <span>April 21, 2026</span>
      </div>
    </div>

    <div class="session">
      <div class="time">09:00 AM</div>

      <div class="details">
        <h4>Healthcare & Life Sciences Investment Landscape</h4>
        <p>Ministry of Health • Philadelphia Hall</p>
      </div>

      <div class="badge green">Presentation</div>
    </div>

  </div>

</v-container>

  </section>
</template>

<style scoped>
.agenda-page {
  background: #f3f5f8;
}

/* HERO */
.agenda-hero {
  background: linear-gradient(180deg,#1d4ea3,#163d82);
  color: white;
  padding: 60px 0;
}

.agenda-hero h1 {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 10px;
  position: relative;
}

.agenda-hero h1::after {
  content:"";
  width:70px;
  height:3px;
  background:#ef4444;
  display:block;
  margin-top:10px;
}

/* FILTER */
.agenda-filter {
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-top:-28px;
}

.tab {
  padding:10px 18px;
  border-radius:8px;
  border:1px solid #d1d5db;
  background:white;
  margin-right:8px;
  cursor:pointer;
}

.tab.active {
  background:#1d4ea3;
  color:white;
}

/* SEARCH */
.filter-right input {
  width:280px;
  padding:10px 14px;
  border-radius:8px;
  border:1px solid #d1d5db;
}

/* WRAPPER */
.agenda-wrapper {
  margin-top:30px;
  padding:30px;
  background:#e9edf3;
  border-radius:16px;
}

/* DAY CARD */
.day-card {
  background:white;
  padding:22px;
  border-radius:14px;
  margin-bottom:24px;
}

.day-header {
  display:flex;
  gap:14px;
  align-items:center;
  margin-bottom:20px;
}

.day-header h3 {
  margin:0;
}

/* SESSION */
.session {
  display:flex;
  align-items:center;
  padding:18px;
  border-radius:12px;
  background:#f8fafc;
  margin-bottom:12px;
}

.time {
  width:110px;
  font-weight:600;
  color:#1d4ea3;
}

.details {
  flex:1;
}

.details h4 {
  margin:0;
}

.details p {
  margin:4px 0 0;
  color:#64748b;
}

/* BADGES */
.badge {
  padding:6px 12px;
  border-radius:999px;
  font-size:12px;
  font-weight:600;
}

.badge.green { background:#d1fae5; color:#047857; }
.badge.purple { background:#ede9fe; color:#6d28d9; }
.badge.blue { background:#dbeafe; color:#1d4ed8; }

/* ================================= */
/* RESPONSIVE ADDITIONS — DO NOT EDIT */
/* ================================= */

/* Large Tablet */
@media (max-width: 1200px) {

  .agenda-wrapper {
    padding:24px;
  }

  .agenda-hero h1 {
    font-size:34px;
  }
}

/* Tablet Layout */
@media (max-width: 960px) {

  .agenda-filter {
    flex-direction:column;
    align-items:flex-start;
    gap:14px;
    margin-top:-20px;
  }

  .filter-right input {
    width:100%;
  }

  .agenda-wrapper {
    padding:20px;
  }

  .session {
    padding:16px;
  }

  .time {
    width:90px;
  }
}

/* Mobile */
@media (max-width: 600px) {

  /* HERO */
  .agenda-hero {
    padding:40px 0;
  }

  .agenda-hero h1 {
    font-size:26px;
    line-height:1.3;
  }

  .agenda-hero h1::after {
    width:55px;
  }

  /* FILTER BAR STACK */
  .agenda-filter {
    margin-top:-16px;
  }

  .filter-left {
    display:flex;
    flex-wrap:wrap;
    gap:8px;
  }

  .tab {
    padding:8px 14px;
    font-size:13px;
  }

  /* WRAPPER */
  .agenda-wrapper {
    padding:14px;
    border-radius:12px;
  }

  /* DAY CARD */
  .day-card {
    padding:16px;
  }

  .day-header {
    gap:10px;
  }

  .day-header h3 {
    font-size:18px;
  }

  /* SESSION STACK */
  .session {
    flex-direction:column;
    align-items:flex-start;
    gap:10px;
  }

  .time {
    width:auto;
    font-size:14px;
  }

  .details h4 {
    font-size:15px;
    line-height:1.4;
  }

  .details p {
    font-size:13px;
  }

  .badge {
    align-self:flex-start;
  }
}

/* Very Small Devices */
@media (max-width: 420px) {

  .agenda-hero h1 {
    font-size:22px;
  }

  .tab {
    font-size:12px;
    padding:6px 10px;
  }

  .details h4 {
    font-size:14px;
  }

  .agenda-wrapper {
    padding:10px;
  }
}
</style>
