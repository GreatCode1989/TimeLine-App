<template>
  <TheHeader
    @goToTimeline="goTo(PAGE_TIMELINE)"
    @goToProgress="goTo(PAGE_PROGRESS)"
  />

  <main class="flex flex-grow flex-col">
    <TheTimeline v-show="currentPage === PAGE_TIMELINE" />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav
    :navItems="NAV_ITEMS"
    :currentPage="currentPage"
    @navigate="goTo($event)"
  />
</template>

<script setup>
import { NAV_ITEMS } from "./constants";
import { normalizePageHash } from "./functions";
import { ref } from "vue";
import TheProgress from "./pages/TheProgress.vue";
import TheActivities from "./pages/TheActivities.vue";
import TheTimeline from "./pages/TheTimeline.vue";
import TheNav from "./components/TheNav.vue";
import TheHeader from "./components/TheHeader.vue";
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from "./constants";

const currentPage = ref(normalizePageHash());

function goTo(page) {
  currentPage.value = page;
}
</script>

<style scoped></style>
