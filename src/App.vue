<template>
  <TheHeader @navigate="goTo($event)" />

  <main class="flex flex-grow flex-col">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
    />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav
    :nav-items="NAV_ITEMS"
    :current-page="currentPage"
    @navigate="goTo($event)"
  />
</template>

<script setup>
import { NAV_ITEMS } from "./constants";
import { normalizePageHash, generationtimelineItems } from "./functions";
import { ref } from "vue";
import TheProgress from "./pages/TheProgress.vue";
import TheActivities from "./pages/TheActivities.vue";
import TheTimeline from "./pages/TheTimeline.vue";
import TheNav from "./components/TheNav.vue";
import TheHeader from "./components/TheHeader.vue";
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from "./constants";

const currentPage = ref(normalizePageHash());

const timelineItems = generationtimelineItems();

function goTo(page) {
  currentPage.value = page;
}
</script>

<style scoped></style>
