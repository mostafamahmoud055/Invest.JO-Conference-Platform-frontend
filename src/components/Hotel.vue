<template>
  <div class="hotel-card">
    <div class="hotel-image">
      <img :src="img" />
    </div>

    <div class="hotel-content">
      <h3>{{ name }}</h3>

      <div class="stars">
        ★ ★ ★ ★ ★
      </div>

      <div class="starting">Starting</div>

      <div class="price-row">
        <span class="price">{{ price }} / night</span>
        <span class="tax">+ JOD 18.20 taxes & fees</span>
      </div>

      <div class="location">
        <i class="mdi mdi-map-marker-outline"></i>
        3 min from venue
      </div>

      <button class="book-btn">Book Now</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  price: String,
  img: {
    type: String,
    default: "/images/partners/bg-1.png"
  }
})
</script>

<style scoped>

/* CARD */
.hotel-card{
  display:flex;
  gap:22px;
  background:#eef2f7;
  border-radius:26px;
  padding:22px;
  align-items:center;
  box-shadow:0 10px 28px rgba(0,0,0,0.06);
  transition:.3s ease;
}

.hotel-card:hover{
  transform:translateY(-4px);
}

/* IMAGE */
.hotel-image{
  width:210px;
  height:210px;
  border-radius:24px;
  overflow:hidden;
  flex-shrink:0;
}

.hotel-image img{
  width:100%;
  height:100%;
  object-fit:cover;
}

/* CONTENT */
.hotel-content{
  flex:1;
}

.hotel-content h3{
  font-size:20px;
  font-weight:700;
  margin-bottom:8px;
  color:#1e293b;
}

/* STARS */
.stars{
  color:#fbbf24;
  font-size:16px;
  margin-bottom:10px;
}

/* STARTING */
.starting{
  font-size:14px;
  color:#64748b;
  margin-bottom:4px;
}

/* PRICE */
.price-row{
  margin-bottom:12px;
}

.price{
  font-size:18px;
  font-weight:700;
  color:#ef4444;
  margin-right:6px;
}

.tax{
  font-size:14px;
  color:#64748b;
}

/* LOCATION */
.location{
  font-size:14px;
  color:#64748b;
  display:flex;
  align-items:center;
  gap:6px;
  margin-bottom:16px;
}

/* BUTTON */
.book-btn{
  background:#123e8a;
  color:white;
  border:none;
  padding:12px 28px;
  border-radius:10px;
  font-weight:600;
  cursor:pointer;
  transition:.3s;
}

.book-btn:hover{
  background:#0f2f6a;
}

</style>