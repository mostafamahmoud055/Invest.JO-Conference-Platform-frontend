<template>
  <div class="card">
    <div class="card-image">
      <img :src="img" />
    </div>

    <div class="card-body">
      <h3>{{ title }}</h3>

      <p class="description">
        Float in the world's saltiest body of water and experience therapeutic
        mud baths at the lowest point on Earth.
      </p>

      <div class="highlights">
        <strong>Highlights:</strong>
        <ul>
          <li>Spa resorts</li>
          <li>Mineral-rich mud</li>
          <li>Unique floating experience</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['title','img'])
</script>

<style scoped>

/* CARD */
.card{
  background:#eef2f7;
  border-radius:24px;
  overflow:hidden;
  box-shadow:0 8px 24px rgba(0,0,0,0.06);
  transition:.3s ease;
}

.card:hover{
  transform:translateY(-5px);
}

/* IMAGE */
.card-image{
  height:240px;
  overflow:hidden;
}

.card-image img{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
}

/* BODY */
.card-body{
  padding:28px;
}

.card-body h3{
  font-size:20px;
  font-weight:700;
  margin-bottom:14px;
  color:#1e293b;
}

.description{
  font-size:15px;
  color:#64748b;
  line-height:1.7;
  margin-bottom:20px;
}

/* HIGHLIGHTS */
.highlights strong{
  display:block;
  margin-bottom:8px;
  font-size:14px;
  color:#334155;
}

.highlights ul{
  padding-left:18px;
  margin:0;
}

.highlights li{
  margin-bottom:6px;
  font-size:14px;
  color:#334155;
}

</style>