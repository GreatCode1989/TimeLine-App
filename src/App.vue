<template>
  <TheHeader @navigate="goTo($event)" />

  <main class="flex flex-grow flex-col">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      :activity-select-options="activitySelectOptions"
    />
    <TheActivities
      v-show="currentPage === PAGE_ACTIVITIES"
      :activities="activities"
      @delete-activity="deleteActivity"
      @create-activity="createActivity"
    />
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
import {
  normalizePageHash,
  generationtimelineItems,
  generateActivitySelectOptions,
} from "./functions";
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

function createActivity(activity) {
  activities.value.push(activity);
}

function deleteActivity(activity) {
  activities.value.splice(activities.value.indexOf(activity), 1);
}

const activities = ref(["Coding", "Reading", "Training"]);

const activitySelectOptions = generateActivitySelectOptions(activities.value);
</script>

<style scoped></style>
