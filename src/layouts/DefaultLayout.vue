<template>
  <div class="default-layout">
    <SiteHeader :overlay="isHomeRoute" />
    <main class="layout-main" :class="{ 'layout-main--offset': !isHomeRoute }">
      <router-view />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import SiteHeader from "../components/layout/SiteHeader.vue";
import SiteFooter from "../components/layout/SiteFooter.vue";

const route = useRoute();
const isHomeRoute = computed(() => route.name === "Home");
</script>

<style scoped>
.default-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f4f7fb;
}

.layout-main {
  flex: 1;
}

.layout-main--offset {
  padding-top: 86px;
}

@media (max-width: 960px) {
  .layout-main--offset {
    padding-top: 74px;
  }
}
</style>
