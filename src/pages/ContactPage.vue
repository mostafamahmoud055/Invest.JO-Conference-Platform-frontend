<script setup lang="ts">
import { ref } from 'vue'

const faqs = ref([
  "Who should attend this conference?",
  "What is the registration fee?",
  "Will there be translation services?",
  "Can I schedule one-on-one meetings?",
  "Is accommodation included?",
  "What COVID-19 safety measures will be in place?",
  "Can I get a visa to attend?",
  "Will presentations be available after the conference?"
])

const openIndex = ref<number | null>(null)

const toggle = (i:number)=>{
  openIndex.value = openIndex.value === i ? null : i
}
</script>
<template>
<div class="contact-page">

  <!-- HERO -->
  <section class="hero">
    <div class="container">
      <h1>Contact Us</h1>
      <div class="underline"></div>
      <p>Have questions? We're here to help</p>
    </div>
  </section>

  <!-- FORM + INFO -->
  <section class="contact-section">
    <div class="container contact-grid">

      <!-- LEFT FORM -->
      <div class="card form-card">
        <h2>Send Us a Message</h2>

        <div class="row">
          <div>
            <label>First Name *</label>
            <input placeholder="John" />
          </div>

          <div>
            <label>Last Name *</label>
            <input placeholder="Doe" />
          </div>
        </div>

        <label>Email Address *</label>
        <input placeholder="john.doe@example.com" />

        <label>Organization</label>
        <input placeholder="Your Company" />

        <label>Subject *</label>
        <input placeholder="How can we help?" />

        <label>Message *</label>
        <textarea placeholder="Your message..."></textarea>

        <button class="send-btn">
          <i class="mdi mdi-send-outline"></i>
          Send Message
        </button>
      </div>

      <!-- RIGHT INFO -->
      <div class="card info-card">
        <h2>Get in Touch</h2>

        <div class="info-item">
          <div class="icon">
            <i class="mdi mdi-email-outline"></i>
          </div>
          <div>
            <strong>Email</strong>
            <p>info@jordan-eu-conference.jo</p>
            <p>partnerships@jordan-eu-conference.jo</p>
          </div>
        </div>

        <div class="info-item">
          <div class="icon">
            <i class="mdi mdi-phone-outline"></i>
          </div>
          <div>
            <strong>Phone</strong>
            <p>+962 6 123 4567</p>
            <p>+962 6 987 6543</p>
          </div>
        </div>

        <div class="info-item">
          <div class="icon">
            <i class="mdi mdi-map-marker-outline"></i>
          </div>
          <div>
            <strong>Address</strong>
            <p>King Hussein Bin Talal Convention Centre</p>
            <p>Dead Sea Road, Sweimeh</p>
            <p>Amman, Jordan</p>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- FAQ -->
  <section class="faq-section">
    <div class="container faq-wrapper">

      <h2>Frequently Asked Questions</h2>

      <div 
        v-for="(q,i) in faqs" 
        :key="i"
        class="faq-item"
        @click="toggle(i)"
      >
        <div class="faq-title">
          {{ q }}
          <i class="mdi" :class="openIndex===i ? 'mdi-chevron-up' : 'mdi-chevron-down'"></i>
        </div>

        <div v-if="openIndex===i" class="faq-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Detailed answer goes here.
        </div>
      </div>

    </div>
  </section>

</div>
</template>
<style scoped>
.contact-page{
  font-family:Inter, sans-serif;
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
}

.underline{
  width:70px;
  height:3px;
  background:#ef4444;
  margin:18px 0;
}

.hero p{
  color:#e2e8f0;
}

/* CONTACT SECTION */
.contact-section{
  padding:80px 0;
}

.contact-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:40px;
}

@media (max-width:1024px){
  .contact-grid{
    gap:28px;
  }
}

@media (max-width:900px){
  .contact-grid{
    grid-template-columns:1fr;
  }
}

.card{
  background:#eef2f7;
  border-radius:26px;
  padding:36px;
  box-shadow:0 8px 25px rgba(0,0,0,0.05);
}

.card h2{
  margin-bottom:24px;
  font-size:22px;
  font-weight:700;
}

/* FORM */
.row{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:20px;
}

@media (max-width:600px){
  .row{
    grid-template-columns:1fr;
  }
}
@media (max-width:768px){
  .card{
    padding:24px;
    border-radius:18px;
  }

  .card h2{
    font-size:18px;
  }
}
@media (max-width:600px){
  .info-item{
    flex-direction:column;
    gap:10px;
  }

  .icon{
    width:38px;
    height:38px;
  }
}
@media (max-width:768px){
  .faq-wrapper{
    padding:24px;
    border-radius:18px;
  }

  .faq-item{
    padding:16px 18px;
  }

  .faq-title{
    font-size:14px;
  }

  .faq-content{
    font-size:13px;
  }
}

label{
  font-size:14px;
  font-weight:500;
  display:block;
  margin:12px 0 6px;
}

input, textarea{
  width:100%;
  padding:12px;
  border-radius:10px;
  border:1px solid #e2e8f0;
  background:white;
  font-size:14px;
}

textarea{
  height:100px;
  resize:none;
}

.send-btn{
  margin-top:20px;
  background:#123e8a;
  color:white;
  border:none;
  padding:14px;
  width:100%;
  border-radius:10px;
  font-weight:600;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:8px;
}

/* INFO */
.info-item{
  display:flex;
  gap:16px;
  margin-bottom:28px;
}

.icon{
  width:44px;
  height:44px;
  background:#dbeafe;
  border-radius:12px;
  display:flex;
  align-items:center;
  justify-content:center;
  color:#123e8a;
}

/* FAQ */
.faq-section{
  padding:60px 0;
}

.faq-wrapper{
  background:#e9edf3;
  padding:40px;
  border-radius:26px;
}

.faq-wrapper h2{
  text-align:center;
  margin-bottom:30px;
}

.faq-item{
  background:white;
  padding:18px 24px;
  border-radius:14px;
  margin-bottom:16px;
  cursor:pointer;
  box-shadow:0 6px 18px rgba(0,0,0,0.04);
}

.faq-title{
  display:flex;
  justify-content:space-between;
  font-weight:500;
}

.faq-content{
  margin-top:12px;
  font-size:14px;
  color:#64748b;
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
    font-size:14px;
  }
}
</style>