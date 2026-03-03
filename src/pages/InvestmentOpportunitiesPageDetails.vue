<template>
<div class="project">

  <!-- ================= HERO ================= -->
  <section class="hero">
    <div class="container">
      <div class="back-link">
        <router-link
          :to="{ name: 'InvestmentOpportunities' }"
          class="back-link-anchor"
        >
          &larr; Back to Investment Opportunities
        </router-link>
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
          <div class="stat-top">
            <v-icon icon="mdi-currency-usd" size="14" class="stat-icon" />
            <span>Investment</span>
          </div>
          <strong>$662M</strong>
        </div>
        <div class="stat">
          <div class="stat-top">
            <v-icon icon="mdi-chart-line" size="14" class="stat-icon" />
            <span>Target IRR</span>
          </div>
          <strong>14%</strong>
        </div>
        <div class="stat">
          <div class="stat-top">
            <v-icon icon="mdi-clock-outline" size="14" class="stat-icon" />
            <span>Breakeven</span>
          </div>
          <strong>7 Years</strong>
        </div>
        <div class="stat">
          <div class="stat-top">
            <v-icon icon="mdi-calendar-blank-outline" size="14" class="stat-icon" />
            <span>Concession</span>
          </div>
          <strong>30 Years</strong>
        </div>
      </div>

    </div>
  </section>

  <!-- ================= CONTENT ================= -->

  <section class="section container overview-section">
    <h2 class="overview-title">Opportunity Overview</h2>
    <p class="lead overview-lead">
      The Amman Bridge is a 15.8 km elevated expressway developed under a Public-Private Partnership (PPP) model.
      The project will be constructed above the existing King Abdullah II Road within the same right-of-way,
      enhancing Amman's western north-south mobility corridor.
    </p>

    <div class="grid-2 overview-grid">
      <div class="card soft-blue overview-card">
        <h3 class="overview-card-title">
          <v-icon icon="mdi-check-circle-outline" size="22" class="overview-card-icon" />
          Strategic Objectives
        </h3>
        <ul class="overview-list">
          <li>Reduce traffic congestion</li>
          <li>Improve travel efficiency</li>
          <li>Support urban development</li>
          <li>Integrate with future Bus Rapid Transit (BRT)</li>
          <li>Generate stable toll-based revenues</li>
        </ul>
      </div>

      <div class="card soft-green overview-card">
        <h3 class="overview-card-title">
          <v-icon icon="mdi-map-marker-outline" size="22" class="overview-card-icon" />
          Strategic Importance
        </h3>
        <p class="overview-importance">
          Once operational, the bridge will act as a primary arterial connection
          between north and south Amman, serving key areas including King Hussein
          Medical City, King Hussein Business Park, governmental entities,
          multinational headquarters, and major commercial centers.
        </p>
      </div>
    </div>
  </section>
  <!-- Geographic -->
  <section class="section gray geo-section">
    <div class="container">
      <div class="geo-panel">
        <h2 class="geo-title">Geographic & Corridor Coverage</h2>

        <div class="geo-box">
          <div class="geo-location">
            <div class="geo-location-label">
              <v-icon icon="mdi-map-marker-outline" size="16" class="geo-location-icon" />
              <strong>Location</strong>
            </div>
            <span>Western Corridor - Amman, Jordan</span>
          </div>

          <h3 class="geo-areas-title">Key Areas Served:</h3>
          <div class="geo-areas">
            <div class="pill">
              <v-icon icon="mdi-check-circle-outline" size="15" class="pill-icon" />
              <span>King Hussein Medical City</span>
            </div>
            <div class="pill">
              <v-icon icon="mdi-check-circle-outline" size="15" class="pill-icon" />
              <span>King Hussein Business Park</span>
            </div>
            <div class="pill">
              <v-icon icon="mdi-check-circle-outline" size="15" class="pill-icon" />
              <span>Governmental Entities</span>
            </div>
            <div class="pill">
              <v-icon icon="mdi-check-circle-outline" size="15" class="pill-icon" />
              <span>Multinational Headquarters</span>
            </div>
            <div class="pill">
              <v-icon icon="mdi-check-circle-outline" size="15" class="pill-icon" />
              <span>Commercial & Shopping Centers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Scope -->
  <section class="section container scope-section">
    <h2 class="scope-title">Project Scope</h2>

    <div class="grid-2 scope-grid">
      <div class="card soft-blue scope-card">
        <h3 class="scope-card-title">
          <v-icon icon="mdi-office-building-outline" size="18" class="scope-card-icon" />
          Infrastructure Components
        </h3>
        <ul class="scope-list">
          <li>15.8 km dual carriageway</li>
          <li>Two lanes per direction</li>
          <li>Mixed vehicle + BRT traffic support</li>
          <li>13 stations</li>
          <li>Pedestrian bridges</li>
          <li>Acceleration & deceleration lanes</li>
          <li>9 main entrances</li>
          <li>6 exits</li>
        </ul>
      </div>

      <div class="card soft-green scope-card">
        <h3 class="scope-card-title">
          <v-icon icon="mdi-cog-outline" size="18" class="scope-card-icon" />
          Operational Infrastructure
        </h3>
        <ul class="scope-list">
          <li>Traffic management systems</li>
          <li>O&amp;M facilities for concessionaire</li>
          <li>Intelligent Transport Systems (ITS)</li>
          <li>Sustainability integration</li>
        </ul>
      </div>
    </div>

    <div class="framework-panel">
      <h3 class="framework-title">Implementation Framework</h3>

      <div class="framework-box">
        <h4>PPP Model</h4>
        <p class="framework-pill">
          DBFOMT (Design, Build, Finance, Operate, Maintain, Transfer)
        </p>
      </div>

      <h4 class="phases-title">Project Phases</h4>

      <div class="phase-card">
        <div class="phase-heading">
          <span class="phase-number">1</span>
          <h5>Transaction Preparation & Investor Onboarding</h5>
        </div>
        <div class="phase-items phase-items-2">
          <div class="phase-item">
            <v-icon icon="mdi-check-circle-outline" size="14" class="phase-item-icon" />
            <span>Feasibility study finalization</span>
          </div>
          <div class="phase-item">
            <v-icon icon="mdi-check-circle-outline" size="14" class="phase-item-icon" />
            <span>Due diligence</span>
          </div>
          <div class="phase-item">
            <v-icon icon="mdi-check-circle-outline" size="14" class="phase-item-icon" />
            <span>PPP documentation</span>
          </div>
          <div class="phase-item">
            <v-icon icon="mdi-check-circle-outline" size="14" class="phase-item-icon" />
            <span>Investor selection</span>
          </div>
        </div>
      </div>

      <div class="phase-card">
        <div class="phase-heading">
          <span class="phase-number">2</span>
          <h5>Construction Phase (~36 months)</h5>
        </div>
        <div class="phase-items phase-items-3">
          <div class="phase-item">
            <v-icon icon="mdi-check-circle-outline" size="14" class="phase-item-icon" />
            <span>Detailed engineering</span>
          </div>
          <div class="phase-item">
            <v-icon icon="mdi-check-circle-outline" size="14" class="phase-item-icon" />
            <span>Civil works</span>
          </div>
          <div class="phase-item">
            <v-icon icon="mdi-check-circle-outline" size="14" class="phase-item-icon" />
            <span>System installation</span>
          </div>
        </div>
      </div>

      <div class="phase-card">
        <div class="phase-heading">
          <span class="phase-number">3</span>
          <h5>Operation & Maintenance Phase (30 years)</h5>
        </div>
        <div class="phase-items phase-items-3">
          <div class="phase-item">
            <v-icon icon="mdi-check-circle-outline" size="14" class="phase-item-icon" />
            <span>Tolling management</span>
          </div>
          <div class="phase-item">
            <v-icon icon="mdi-check-circle-outline" size="14" class="phase-item-icon" />
            <span>Maintenance</span>
          </div>
          <div class="phase-item">
            <v-icon icon="mdi-check-circle-outline" size="14" class="phase-item-icon" />
            <span>Asset performance optimization</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Timeline + Highlights -->
  <section class="section container timeline-highlights-section">
    <h2 class="timeline-title">Tentative Timeline</h2>

    <div class="timeline-table">
      <div class="timeline-table-head">
        <span>Milestone</span>
        <span>Timeline</span>
      </div>
      <div class="timeline-table-row"><span>RFQ</span><span>Q4 - Year 1</span></div>
      <div class="timeline-table-row"><span>RFP</span><span>Q2 - Year 2</span></div>
      <div class="timeline-table-row"><span>Contract Award</span><span>Q3 - Year 2</span></div>
      <div class="timeline-table-row"><span>Works Commencement</span><span>Q1 - Year 3</span></div>
      <div class="timeline-table-row"><span>Commercial Operations</span><span>Q1 - Year 6</span></div>
    </div>

    <div class="highlights-panel">
      <h3 class="highlights-title">Investment Highlights</h3>
      <div class="highlights-grid">
        <div class="highlight-item">
          <v-icon icon="mdi-currency-usd" size="18" class="highlight-icon" />
          <span>USD 662M total investment</span>
        </div>
        <div class="highlight-item">
          <v-icon icon="mdi-chart-line" size="18" class="highlight-icon" />
          <span>14% Internal Rate of Return</span>
        </div>
        <div class="highlight-item">
          <v-icon icon="mdi-clock-outline" size="18" class="highlight-icon" />
          <span>7-year breakeven</span>
        </div>
        <div class="highlight-item">
          <v-icon icon="mdi-calendar-blank-outline" size="18" class="highlight-icon" />
          <span>Long-term 30-year operational concession</span>
        </div>
        <div class="highlight-item">
          <v-icon icon="mdi-ribbon-outline" size="18" class="highlight-icon" />
          <span>Stable toll-based revenue stream</span>
        </div>
        <div class="highlight-item">
          <v-icon icon="mdi-map-marker-outline" size="18" class="highlight-icon" />
          <span>Strategic location within capital mobility corridor</span>
        </div>
      </div>
    </div>
  </section>

  <section class="section container incentives-section">
    <h2 class="incentives-title">Incentives</h2>

    <div class="grid-2 incentives-grid">
      <div class="card soft-blue incentives-card">
        <h3 class="incentives-card-title">Under the PPP Law</h3>
        <ul class="incentives-list">
          <li>
            <v-icon icon="mdi-check-circle-outline" size="14" class="incentive-icon" />
            <span>Tax exemptions</span>
          </li>
          <li>
            <v-icon icon="mdi-check-circle-outline" size="14" class="incentive-icon" />
            <span>Customs duty exemptions</span>
          </li>
          <li>
            <v-icon icon="mdi-check-circle-outline" size="14" class="incentive-icon" />
            <span>Sales tax exemptions</span>
          </li>
        </ul>
      </div>

      <div class="card soft-green incentives-card">
        <h3 class="incentives-card-title">Potential Qualification</h3>
        <ul class="incentives-list">
          <li>
            <v-icon icon="mdi-check-circle-outline" size="14" class="incentive-icon" />
            <span>JIF Law (Direct Investment)</span>
          </li>
          <li>
            <v-icon icon="mdi-check-circle-outline" size="14" class="incentive-icon" />
            <span>Additional incentive packages</span>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section class="why-jordan-block">
    <div class="container">
      <h2 class="why-jordan-title">Why Jordan?</h2>

      <div class="why-jordan-grid">
        <div class="why-jordan-card">
          <v-icon icon="mdi-trending-up" size="20" class="why-jordan-icon" />
          <h3>Economic Strength</h3>
          <ul>
            <li>GDP (2023): $51.1B</li>
            <li>GDP (2024): $53.4B</li>
            <li>Target (2033): $81.8B</li>
            <li>CAGR: 4.82%</li>
          </ul>
        </div>

        <div class="why-jordan-card">
          <v-icon icon="mdi-earth" size="20" class="why-jordan-icon" />
          <h3>Investment Climate</h3>
          <ul>
            <li>Stable fiscal & monetary policy</li>
            <li>Modern PPP and investment laws</li>
            <li>Strong FDI/FDI partnerships</li>
            <li>Special economic zones</li>
            <li>Pro-business regulatory framework</li>
          </ul>
        </div>

        <div class="why-jordan-card">
          <v-icon icon="mdi-account-group-outline" size="20" class="why-jordan-icon" />
          <h3>Workforce Advantage</h3>
          <ul>
            <li>70% under 34 years old</li>
            <li>22% STEM graduates</li>
            <li>English widely spoken</li>
            <li>Skilled and globally connected talent base</li>
          </ul>
        </div>
      </div>

      <div class="vision-panel">
        <h3>Economic Modernization Vision (2023-2033)</h3>
        <p class="vision-quote">"A Better Future"</p>
        <div class="vision-pill-grid">
          <div class="vision-pill">
            <v-icon icon="mdi-check-circle-outline" size="14" />
            <span>Accelerated economic growth</span>
          </div>
          <div class="vision-pill">
            <v-icon icon="mdi-check-circle-outline" size="14" />
            <span>Improved quality of life</span>
          </div>
          <div class="vision-pill">
            <v-icon icon="mdi-check-circle-outline" size="14" />
            <span>Sustainability-driven development</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section container confidence-section">
    <div class="confidence-panel">
      <h2>Invest with Confidence</h2>
      <p>Be part of a transformative infrastructure opportunity shaping the future of mobility in Amman.</p>

      <div class="confidence-contact-box">
        <h3>Contact</h3>
        <div class="confidence-contact-row">
          <div class="confidence-contact-item">
            <v-icon icon="mdi-web" size="14" />
            <span>www.invest.jo</span>
          </div>
          <div class="confidence-contact-item">
            <v-icon icon="mdi-email-outline" size="14" />
            <span>info@moin.gov.jo</span>
          </div>
          <div class="confidence-contact-item">
            <v-icon icon="mdi-phone-outline" size="14" />
            <span>+962 6 5608400</span>
          </div>
        </div>
        <div class="confidence-actions">
          <RouterLink
            :to="{ name: 'Contact' }"
            class="confidence-btn confidence-btn-primary confidence-btn-contact"
          >
            <span>Contact Us</span>
            <v-icon icon="mdi-arrow-right" size="24" />
          </RouterLink>
          <button class="confidence-btn confidence-btn-link">View All Investment Opportunities</button>
        </div>
      </div>
    </div>
  </section>
</div>
</template>
<style scoped>

.project {
  font-family: Inter, system-ui;
  background:#fff;
  color:#1e293b;
}

.container{
  max-width:1180px;
  margin:auto;
}

.section{
  padding:56px 0;
}

.gray{
  background:#fff;
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

.back-link-anchor{
  color:inherit;
  text-decoration:none;
}

.back-link-anchor:hover{
  text-decoration:underline;
}

.back-link-anchor:focus-visible{
  outline:2px solid #fff;
  outline-offset:3px;
  border-radius:4px;
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
  max-width:700px;
  opacity:.92;
  font-size:24px;
  line-height:1.45;
  margin-bottom:26px;
}

.stats{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:14px;
  margin-top:0;
}

.stat{
  background:rgba(255,255,255,.1);
  border:1px solid rgba(255,255,255,.1);
  padding:16px 18px;
  border-radius:10px;
}

.stat-top{
  display:flex;
  align-items:center;
  gap:8px;
  color:rgba(255,255,255,.82);
  font-size:11px;
  margin-bottom:8px;
}

.stat-icon{
  color:rgba(255,255,255,.9);
}

.stat strong{
  display:block;
  font-size:32px;
  line-height:1.1;
  font-weight:700;
  color:#fff;
}

/* OVERVIEW */
.overview-section{
  padding-top:34px;
}

.overview-title{
  margin:0;
  font-size:42px;
  line-height:1.1;
  font-weight:800;
  letter-spacing:-.02em;
  color:#0f172a;
}

.overview-lead{
  max-width:980px;
  margin:12px 0 26px;
  font-size:15px;
  line-height:1.85;
  color:#334155;
}

.overview-grid{
  margin-top:0;
  gap:16px;
}

.overview-card{
  border-radius:10px;
  box-shadow:none;
  border:1px solid transparent;
}

.soft-blue.overview-card{
  background:#dbe6f4;
  border-color:#cfdeef;
}

.soft-green.overview-card{
  background:#dfece5;
  border-color:#d4e3d9;
}

.overview-card-title{
  margin:0 0 18px;
  display:flex;
  align-items:center;
  gap:10px;
  font-size:31px;
  line-height:1.18;
  font-weight:700;
  color:#0f172a;
}

.overview-card-icon{
  color:#0d4ba1;
}

.overview-list{
  list-style:none;
  margin:0;
  padding:0;
}

.overview-list li{
  position:relative;
  padding-left:24px;
  font-size:17px;
  line-height:1.85;
  color:#334155;
}

.overview-list li::before{
  content:"\2713";
  position:absolute;
  left:0;
  top:0;
  color:#0d4ba1;
  font-weight:700;
}

.overview-importance{
  margin:0;
  font-size:17px;
  line-height:1.85;
  color:#334155;
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
  border:1px solid #e2e8f0;
  box-shadow:0 10px 30px rgba(15,23,42,.06);
}

.soft-blue{ background:#f4f8ff; }
.soft-green{ background:#eef9f2; }

/* SCOPE */
.scope-section{
  padding-top:30px;
}

.scope-title{
  margin:0;
  font-size:42px;
  line-height:1.1;
  font-weight:800;
  letter-spacing:-.02em;
  color:#0f172a;
}

.scope-grid{
  margin-top:14px;
  gap:18px;
}

.scope-card{
  border-radius:10px;
  box-shadow:none;
  border:1px solid transparent;
  min-height:290px;
}

.soft-blue.scope-card{
  background:#dbe6f4;
  border-color:#cfdeef;
}

.soft-green.scope-card{
  background:#dfece5;
  border-color:#d4e3d9;
}

.scope-card-title{
  margin:0 0 14px;
  display:flex;
  align-items:center;
  gap:8px;
  font-size:30px;
  line-height:1.2;
  font-weight:700;
  color:#0f172a;
}

.scope-card-icon{
  color:#0d4ba1;
}

.scope-list{
  list-style:none;
  margin:0;
  padding:0;
}

.scope-list li{
  position:relative;
  padding-left:14px;
  font-size:16px;
  line-height:1.9;
  color:#334155;
}

.scope-list li::before{
  content:"";
  position:absolute;
  left:0;
  top:.9em;
  width:4px;
  height:4px;
  border-radius:999px;
  background:#0d4ba1;
}

.framework-panel{
  margin-top:20px;
  background:#f0f1f3;
  border-radius:12px;
  padding:22px 18px 16px;
}

.framework-title{
  margin:0 0 14px;
  font-size:44px;
  line-height:1.08;
  font-weight:800;
  letter-spacing:-.02em;
  color:#0f172a;
}

.framework-box{
  background:#fff;
  border:1px solid #dde2e8;
  border-radius:10px;
  padding:16px 16px 14px;
}

.framework-box h4{
  margin:0;
  font-size:31px;
  line-height:1.2;
  font-weight:700;
  color:#111827;
}

.framework-pill{
  margin:12px 0 0;
  background:#e3e8f1;
  border-radius:8px;
  padding:10px 12px;
  font-size:16px;
  line-height:1.5;
  font-weight:700;
  color:#0d4ba1;
}

.phases-title{
  margin:14px 0 10px;
  font-size:36px;
  line-height:1.15;
  font-weight:700;
  color:#0f172a;
}

.phase-card{
  background:#fff;
  border:1px solid #dde2e8;
  border-radius:10px;
  padding:14px 16px 12px;
}

.phase-card + .phase-card{
  margin-top:10px;
}

.phase-heading{
  display:flex;
  align-items:center;
  gap:10px;
  margin-bottom:8px;
}

.phase-number{
  width:22px;
  height:22px;
  border-radius:999px;
  background:#0d4ba1;
  color:#fff;
  font-size:12px;
  font-weight:700;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  flex-shrink:0;
}

.phase-heading h5{
  margin:0;
  font-size:28px;
  line-height:1.2;
  font-weight:700;
  color:#111827;
}

.phase-items{
  display:grid;
  gap:8px 24px;
  padding-left:26px;
}

.phase-items-2{
  grid-template-columns:repeat(2,minmax(0,1fr));
}

.phase-items-3{
  grid-template-columns:repeat(3,minmax(0,1fr));
}

.phase-item{
  display:flex;
  align-items:flex-start;
  gap:5px;
  font-size:14px;
  line-height:1.5;
  color:#334155;
}

.phase-item-icon{
  color:#16a34a;
  margin-top:2px;
  flex-shrink:0;
}

/* GEO */
.geo-section{
  padding-top:12px;
}

.geo-panel{
  background:#f0f1f3;
  border-radius:12px;
  padding:22px 18px 18px;
}

.geo-title{
  margin:0 0 16px;
  font-size:40px;
  line-height:1.1;
  font-weight:800;
  letter-spacing:-.02em;
  color:#0f172a;
}

.geo-box{
  background:#fff;
  padding:18px 16px 16px;
  border-radius:10px;
  border:1px solid #dfe3e8;
  box-shadow:0 1px 0 rgba(15,23,42,.02);
}

.geo-location{
  margin-bottom:12px;
}

.geo-location-label{
  display:flex;
  align-items:center;
  gap:6px;
  margin-bottom:4px;
  color:#111827;
  font-size:20px;
  font-weight:700;
}

.geo-location-icon{
  color:#0d4ba1;
}

.geo-location span{
  display:block;
  padding-left:22px;
  font-size:14px;
  line-height:1.6;
  color:#475569;
}

.geo-areas-title{
  margin:0 0 10px;
  font-size:15px;
  line-height:1.4;
  font-weight:700;
  color:#1f2937;
}

.geo-areas{
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:10px;
}

.pill{
  background:#f3f4f6;
  padding:12px 14px;
  border-radius:8px;
  display:flex;
  align-items:center;
  gap:6px;
  color:#374151;
  font-size:14px;
  line-height:1.4;
}

.pill-icon{
  color:#16a34a;
  flex-shrink:0;
}

/* TIMELINE + HIGHLIGHTS */
.timeline-highlights-section{
  padding-top:22px;
}

.timeline-title{
  margin:0 0 14px;
  font-size:42px;
  line-height:1.1;
  font-weight:800;
  letter-spacing:-.02em;
  color:#0f172a;
}

.timeline-table{
  border-radius:10px;
  overflow:hidden;
  border:1px solid #d9dee5;
  background:#fff;
}

.timeline-table-head,
.timeline-table-row{
  display:grid;
  grid-template-columns:1fr 1fr;
}

.timeline-table-head{
  background:#0d4ba1;
  color:#fff;
  font-size:14px;
  font-weight:700;
}

.timeline-table-head span{
  padding:14px 18px;
}

.timeline-table-row{
  border-top:1px solid #e4e7eb;
  font-size:14px;
  color:#111827;
}

.timeline-table-row span{
  padding:13px 18px;
}

.timeline-table-row span:last-child{
  color:#475569;
}

.highlights-panel{
  margin-top:22px;
  background:#f0f1f3;
  border-radius:12px;
  padding:20px 18px 18px;
}

.highlights-title{
  margin:0 0 14px;
  font-size:44px;
  line-height:1.08;
  font-weight:800;
  letter-spacing:-.02em;
  color:#0f172a;
}

.highlights-grid{
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:10px;
}

.highlight-item{
  background:#fff;
  border:1px solid #dfe3e8;
  border-radius:10px;
  padding:12px 12px;
  display:flex;
  align-items:center;
  gap:8px;
  font-size:14px;
  line-height:1.45;
  color:#334155;
}

.highlight-icon{
  color:#0d4ba1;
  flex-shrink:0;
}

/* INCENTIVES */
.incentives-section{
  padding-top:14px;
}

.incentives-title{
  margin:0;
  font-size:42px;
  line-height:1.1;
  font-weight:800;
  letter-spacing:-.02em;
  color:#0f172a;
}

.incentives-grid{
  margin-top:14px;
  gap:18px;
}

.incentives-card{
  border-radius:10px;
  box-shadow:none;
  border:1px solid transparent;
}

.soft-blue.incentives-card{
  background:#dbe6f4;
  border-color:#cfdeef;
}

.soft-green.incentives-card{
  background:#dfece5;
  border-color:#d4e3d9;
}

.incentives-card-title{
  margin:0 0 12px;
  font-size:31px;
  line-height:1.2;
  font-weight:700;
  color:#111827;
}

.incentives-list{
  list-style:none;
  margin:0;
  padding:0;
  display:grid;
  gap:8px;
}

.incentives-list li{
  display:flex;
  align-items:flex-start;
  gap:6px;
  font-size:16px;
  line-height:1.5;
  color:#334155;
}

.incentive-icon{
  color:#16a34a;
  margin-top:2px;
  flex-shrink:0;
}

/* WHY JORDAN */
.why-jordan-block{
  background:#0d4ba1;
  padding:38px 0 34px;
  color:#fff;
}

.why-jordan-title{
  margin:0;
  font-size:42px;
  line-height:1.1;
  font-weight:800;
  letter-spacing:-.02em;
}

.why-jordan-grid{
  margin-top:14px;
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:18px;
}

.why-jordan-card{
  background:rgba(255,255,255,.12);
  border:1px solid rgba(255,255,255,.08);
  border-radius:12px;
  padding:16px 16px 14px;
}

.why-jordan-icon{
  color:#fff;
}

.why-jordan-card h3{
  margin:10px 0 8px;
  font-size:28px;
  line-height:1.2;
  font-weight:700;
  color:#fff;
}

.why-jordan-card ul{
  list-style:none;
  margin:0;
  padding:0;
}

.why-jordan-card li{
  position:relative;
  padding-left:12px;
  font-size:15px;
  line-height:1.75;
  color:rgba(255,255,255,.92);
}

.why-jordan-card li::before{
  content:"\\2022";
  position:absolute;
  left:0;
  top:0;
  color:#cde0ff;
}

.vision-panel{
  margin-top:18px;
  background:rgba(255,255,255,.12);
  border:1px solid rgba(255,255,255,.08);
  border-radius:12px;
  padding:16px 16px 14px;
}

.vision-panel h3{
  margin:0;
  font-size:36px;
  line-height:1.15;
  font-weight:700;
  color:#fff;
}

.vision-quote{
  margin:8px 0 14px;
  font-size:27px;
  line-height:1.2;
  color:#d9e6ff;
  font-style:italic;
}

.vision-pill-grid{
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:10px;
}

.vision-pill{
  display:flex;
  align-items:center;
  gap:7px;
  background:#0b3f88;
  border:1px solid rgba(255,255,255,.08);
  border-radius:10px;
  padding:10px 12px;
  font-size:14px;
  line-height:1.35;
  color:#eaf2ff;
}

.vision-pill .v-icon{
  color:#cde0ff;
  flex-shrink:0;
}

/* CONFIDENCE */
.confidence-section{
  padding:20px 0 38px;
}

.confidence-panel{
  background:#eceef1;
  border-radius:14px;
  padding:20px 20px 16px;
  text-align:center;
}

.confidence-panel h2{
  margin:0;
  font-size:46px;
  line-height:1.1;
  font-weight:800;
  letter-spacing:-.02em;
  color:#111827;
}

.confidence-panel > p{
  margin:10px auto 14px;
  max-width:760px;
  font-size:17px;
  line-height:1.6;
  color:#334155;
}

.confidence-contact-box{
  background:#fff;
  border:1px solid #2f67b6;
  border-radius:12px;
  padding:14px 14px 12px;
}

.confidence-contact-box h3{
  margin:0;
  font-size:31px;
  line-height:1.2;
  font-weight:700;
  color:#111827;
}

.confidence-contact-row{
  margin-top:10px;
  display:flex;
  justify-content:center;
  gap:18px;
  flex-wrap:wrap;
}

.confidence-contact-item{
  display:flex;
  align-items:center;
  gap:6px;
  font-size:14px;
  line-height:1.4;
  color:#0f3f87;
}

.confidence-actions{
  margin-top:10px;
  display:flex;
  justify-content:center;
  gap:10px;
  flex-wrap:wrap;
}

.confidence-btn{
  border:none;
  border-radius:999px;
  padding:8px 14px;
  font-size:12px;
  line-height:1;
  cursor:pointer;
  text-decoration:none;
}

.confidence-btn-primary{
  background:#0d4ba1;
  color:#fff;
}

.confidence-btn-contact{
  display:inline-flex;
  align-items:center;
  gap:14px;
  padding:14px 28px;
  font-size:20px;
  font-weight:500;
  line-height:1;
}

.confidence-btn-contact .v-icon{
  color:#fff;
}

.confidence-btn-link{
  background:transparent;
  color:#111827;
  text-decoration:underline;
}

/* RESPONSIVE */
@media(max-width:992px){
  .stats{grid-template-columns:1fr 1fr;}
  .grid-2{grid-template-columns:1fr;}
  .geo-areas{grid-template-columns:1fr 1fr;}
  .overview-title{font-size:34px;}
  .overview-card-title{font-size:26px;}
  .overview-list li{font-size:15px;}
  .overview-importance{font-size:15px;}
  .geo-title{font-size:32px;}
  .scope-title{font-size:34px;}
  .scope-card-title{font-size:24px;}
  .scope-list li{font-size:15px;}
  .framework-title{font-size:34px;}
  .framework-box h4{font-size:25px;}
  .framework-pill{font-size:15px;}
  .phases-title{font-size:30px;}
  .phase-heading h5{font-size:22px;}
  .phase-items-3{grid-template-columns:repeat(2,minmax(0,1fr));}
  .timeline-title{font-size:34px;}
  .highlights-title{font-size:34px;}
  .highlights-grid{grid-template-columns:repeat(2,minmax(0,1fr));}
  .incentives-title{font-size:34px;}
  .incentives-card-title{font-size:24px;}
  .incentives-list li{font-size:15px;}
  .why-jordan-title{font-size:34px;}
  .why-jordan-grid{grid-template-columns:1fr;}
  .why-jordan-card h3{font-size:24px;}
  .vision-panel h3{font-size:30px;}
  .vision-quote{font-size:22px;}
  .vision-pill-grid{grid-template-columns:1fr;}
  .confidence-panel h2{font-size:34px;}
  .confidence-panel > p{font-size:15px;}
  .confidence-contact-box h3{font-size:24px;}
  .confidence-btn-contact{font-size:18px; padding:12px 22px;}
}

@media(max-width:640px){
  .hero-sub{font-size:18px;}
  .stats{grid-template-columns:1fr;}
  .stat strong{font-size:28px;}
  .overview-title{font-size:28px;}
  .overview-card-title{font-size:22px;}
  .geo-title{font-size:26px;}
  .geo-areas{grid-template-columns:1fr;}
  .scope-title{font-size:28px;}
  .scope-card-title{font-size:21px;}
  .framework-title{font-size:28px;}
  .framework-box h4{font-size:21px;}
  .phases-title{font-size:24px;}
  .phase-heading h5{font-size:18px;}
  .phase-items{padding-left:0;}
  .phase-items-2{grid-template-columns:1fr;}
  .phase-items-3{grid-template-columns:1fr;}
  .timeline-title{font-size:28px;}
  .timeline-table-head,
  .timeline-table-row{grid-template-columns:1fr;}
  .timeline-table-head span,
  .timeline-table-row span{padding:11px 14px;}
  .highlights-title{font-size:28px;}
  .highlights-grid{grid-template-columns:1fr;}
  .incentives-title{font-size:28px;}
  .incentives-card-title{font-size:21px;}
  .why-jordan-title{font-size:28px;}
  .why-jordan-card h3{font-size:21px;}
  .why-jordan-card li{font-size:14px;}
  .vision-panel h3{font-size:24px;}
  .vision-quote{font-size:18px;}
  .confidence-panel{padding:16px 12px 12px;}
  .confidence-panel h2{font-size:28px;}
  .confidence-contact-box h3{font-size:21px;}
  .confidence-contact-row{justify-content:flex-start;}
  .confidence-actions{justify-content:flex-start;}
  .confidence-btn-contact{font-size:16px; padding:10px 18px;}
}

</style>






