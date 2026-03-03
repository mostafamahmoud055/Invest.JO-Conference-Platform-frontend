<template>
<div class="project">

  <!-- ================= HERO ================= -->
  <section class="hero">
    <div class="container">

      <div class="back-link">
        ← Back to Investment Opportunities
      </div>

      <div class="tags">
        <span class="tag outline">Regional Gateways</span>
        <span class="tag red">PPP Project</span>
      </div>

      <h1>Amman Bridge</h1>
      <div class="hero-line"></div>

      <p class="hero-sub">
        A 15.8 km Elevated Expressway Transforming Amman's North–South Mobility
      </p>

      <div class="stats">
        <div class="stat">
          <span>Investment</span>
          <strong>$662M</strong>
        </div>
        <div class="stat">
          <span>Target IRR</span>
          <strong>14%</strong>
        </div>
        <div class="stat">
          <span>Breakeven</span>
          <strong>7 Years</strong>
        </div>
        <div class="stat">
          <span>Concession</span>
          <strong>30 Years</strong>
        </div>
      </div>

    </div>
  </section>

  <!-- ================= CONTENT ================= -->

  <section class="section container">
    <h2>Opportunity Overview</h2>
    <p class="lead">
      The Amman Bridge is a 15.8 km elevated expressway developed under a PPP model.
    </p>

    <div class="grid-2">
      <div class="card soft-blue">
        <h3>Strategic Objectives</h3>
        <ul>
          <li>Reduce traffic congestion</li>
          <li>Improve travel efficiency</li>
          <li>Support urban development</li>
          <li>Integrate with future Bus Rapid Transit (BRT)</li>
          <li>Generate stable toll-based revenues</li>
        </ul>
      </div>

      <div class="card soft-green">
        <h3>Strategic Importance</h3>
        <p>
          Once operational, the bridge will act as a primary arterial connection
          between north and south Amman, serving major economic zones.
        </p>
      </div>
    </div>
  </section>

  <!-- Geographic -->
  <section class="section gray">
    <div class="container">
      <h2>Geographic & Corridor Coverage</h2>

      <div class="geo-box">
        <div class="geo-location">
          <strong>Location</strong>
          <span>Western Corridor – Amman, Jordan</span>
        </div>

        <div class="geo-areas">
          <div class="pill">King Hussein Medical City</div>
          <div class="pill">King Hussein Business Park</div>
          <div class="pill">Governmental Entities</div>
          <div class="pill">Multinational Headquarters</div>
          <div class="pill">Commercial & Shopping Centers</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Scope -->
  <section class="section container">
    <h2>Project Scope</h2>

    <div class="grid-2">
      <div class="card soft-blue">
        <h3>Infrastructure Components</h3>
        <ul>
          <li>15.8 km dual carriageway</li>
          <li>Two lanes per direction</li>
          <li>13 stations</li>
          <li>Pedestrian bridges</li>
          <li>9 main entrances</li>
          <li>6 exits</li>
        </ul>
      </div>

      <div class="card soft-green">
        <h3>Operational Infrastructure</h3>
        <ul>
          <li>Traffic management systems</li>
          <li>ITS integration</li>
          <li>Sustainability integration</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Timeline -->
  <section class="section container">
    <h2>Tentative Timeline</h2>

    <div class="timeline">
      <div class="t-row"><span>RFQ</span><strong>Q4 – Year 1</strong></div>
      <div class="t-row"><span>RFP</span><strong>Q2 – Year 2</strong></div>
      <div class="t-row"><span>Contract Award</span><strong>Q3 – Year 2</strong></div>
      <div class="t-row"><span>Construction</span><strong>Q1 – Year 3</strong></div>
      <div class="t-row"><span>Commercial Operations</span><strong>Q1 – Year 6</strong></div>
    </div>
  </section>

  <!-- Why Jordan -->
  <section class="why">
    <div class="container">
      <h2>Why Jordan?</h2>

      <div class="why-grid">
        <div class="why-card">
          <h3>Economic Strength</h3>
          <p>GDP (2024): $53.4B</p>
        </div>

        <div class="why-card">
          <h3>Investment Climate</h3>
          <p>Modern PPP & regulatory framework</p>
        </div>

        <div class="why-card">
          <h3>Workforce Advantage</h3>
          <p>70% under 34 years old</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta">
    <div class="container">
      <h2>Invest with Confidence</h2>
      <p>Be part of a transformative infrastructure opportunity shaping mobility.</p>

      <div class="cta-box">
        <div class="contact">
          www.invest.jo • info@moin.gov.jo • +962 6 5608400
        </div>

        <div class="cta-buttons">
          <button class="btn-primary">Contact Us</button>
          <button class="btn-outline">View Opportunities</button>
        </div>
      </div>
    </div>
  </section>

</div>
</template>
<style scoped>

.project {
  font-family: Inter, system-ui;
  background:#f4f6f9;
  color:#1e293b;
}

.container{
  max-width:1180px;
  margin:auto;
}

.section{
  padding:90px 0;
}

.gray{
  background:#eef2f6;
}

/* HERO */
.hero{
  background:linear-gradient(180deg,#123e8a 0%,#0e3473 100%);
  padding:110px 0 80px;
  color:white;
}

.back-link{
  opacity:.75;
  margin-bottom:18px;
}

.tags{
  display:flex;
  gap:12px;
}

.tag{
  padding:6px 16px;
  font-size:13px;
  border-radius:20px;
}

.tag.outline{
  background:rgba(255,255,255,.15);
}

.tag.red{
  background:#ef4444;
}

.hero h1{
  font-size:52px;
  font-weight:700;
  margin:20px 0 8px;
}

.hero-line{
  width:80px;
  height:3px;
  background:#ef4444;
  margin-bottom:18px;
}

.hero-sub{
  max-width:640px;
  opacity:.85;
}

.stats{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:24px;
  margin-top:40px;
}

.stat{
  background:rgba(255,255,255,.08);
  padding:22px;
  border-radius:16px;
  backdrop-filter:blur(6px);
}

/* CARDS */
.grid-2{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:28px;
  margin-top:40px;
}

.card{
  padding:28px;
  border-radius:18px;
  line-height:1.7;
}

.soft-blue{ background:#e9f0fb; }
.soft-green{ background:#e6f3ea; }

/* GEO */
.geo-box{
  background:white;
  padding:30px;
  border-radius:18px;
}

.geo-areas{
  margin-top:20px;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:16px;
}

.pill{
  background:#f1f5f9;
  padding:12px 16px;
  border-radius:12px;
}

/* TIMELINE */
.timeline{
  background:white;
  border-radius:16px;
  overflow:hidden;
}

.t-row{
  display:flex;
  justify-content:space-between;
  padding:18px 22px;
  border-bottom:1px solid #e2e8f0;
}

/* WHY */
.why{
  background:linear-gradient(180deg,#123e8a,#0e3473);
  padding:100px 0;
  color:white;
}

.why-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:28px;
  margin-top:40px;
}

.why-card{
  background:rgba(255,255,255,.08);
  padding:28px;
  border-radius:18px;
}

/* CTA */
.cta{
  background:#f8fafc;
  padding:100px 0;
  text-align:center;
}

.cta-box{
  margin-top:40px;
  background:white;
  padding:40px;
  border-radius:20px;
  box-shadow:0 20px 50px rgba(0,0,0,.06);
}

.cta-buttons{
  margin-top:24px;
  display:flex;
  justify-content:center;
  gap:18px;
}

.btn-primary{
  background:#1e40af;
  color:white;
  padding:12px 28px;
  border-radius:30px;
}

.btn-outline{
  background:#e2e8f0;
  padding:12px 28px;
  border-radius:30px;
}

/* RESPONSIVE */
@media(max-width:992px){
  .stats{grid-template-columns:1fr 1fr;}
  .grid-2{grid-template-columns:1fr;}
  .geo-areas{grid-template-columns:1fr 1fr;}
  .why-grid{grid-template-columns:1fr;}
}

</style>