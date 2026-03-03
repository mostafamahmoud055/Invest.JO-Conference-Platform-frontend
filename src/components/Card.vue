<template>
  <div class="card">
    <img :src="img" />
    <div class="body">
      <h3>{{ title }}</h3>
      <p>
        Experience one of Jordan's most iconic destinations with unforgettable scenery.
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps(['title','img'])
</script>