<template>
  <section class="generic-page">
    <v-container class="py-14 py-md-16">
      <div class="generic-card">
        <p class="generic-eyebrow">JEIC 2026</p>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const title = computed(() => route.meta?.title || "Page");
const description = computed(
  () =>
    route.meta?.description ||
    "This section is ready and can be expanded with full content from Figma."
);
</script>

<style scoped>
.generic-page {
  min-height: 65vh;
  background: linear-gradient(180deg, #f4f7fb 0%, #edf3fb 100%);
}

.generic-card {
  max-width: 860px;
  margin: 0 auto;
  padding: 44px 36px;
  border-radius: 18px;
  background: #fff;
  border: 1px solid #dbe6f8;
  box-shadow: 0 16px 38px rgba(15, 53, 120, 0.08);
}

.generic-eyebrow {
  margin: 0 0 10px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.76rem;
  color: #3a62a7;
  font-weight: 700;
}

h1 {
  margin: 0 0 12px;
  color: #12387c;
  font-size: clamp(1.7rem, 3.1vw, 2.5rem);
}

p {
  margin: 0;
  color: #5a7098;
  line-height: 1.8;
}
</style>
