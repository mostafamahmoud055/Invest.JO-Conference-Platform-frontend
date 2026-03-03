<template>
  <div class="agenda-item">
    <div class="time">
      <v-icon icon="mdi-clock-outline" />
      {{ time }}
    </div>

    <div class="details">
      <h4>{{ title }}</h4>
      <p>
        <v-icon icon="mdi-map-marker-outline" size="16" />
        {{ location }}
      </p>
    </div>

    <v-chip :color="color" variant="tonal">{{ tag }}</v-chip>
  </div>
</template>

<script setup>
defineProps({
  time: String,
  title: String,
  location: String,
  tag: String,
  color: String
});
</script>