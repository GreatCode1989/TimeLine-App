<template>
  <TheHeader />

  <main class="flex flex-grow flex-col">Lorem ipsum</main>

  <TheNav :navItems="navItems" />
</template>

<script setup>
import TheNav from "./components/TheNav.vue";
import TheHeader from "./components/TheHeader.vue";
import {
  ClockIcon,
  ListBulletIcon,
  ChartBarIcon,
} from "@heroicons/vue/24/outline";

const navItems = {
  timeline: ClockIcon,
  activities: ListBulletIcon,
  progress: ChartBarIcon,
};
</script>

<style scoped></style>
