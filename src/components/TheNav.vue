<template>
  <nav class="sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center justify-around border-t">
      <NavItem
        v-for="page in Object.keys(navItems)"
        :key="page"
        :href="`#${page}`"
        :class="{ 'pointer-events-none bg-gray-200': page === currentPage }"
        @click="emit('navigate', page)"
      >
        <component :is="navItems[page]" class="h-7 w-7" /> {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>

<script setup>
import NavItem from "./NavItem.vue";

const props = defineProps({
  navItems: {
    type: Object,
    required: true,
  },
  currentPage: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["navigate"]);
</script>
