<template>
  <div class="m-7">
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
      />
    </ul>
  </div>
</template>

<script setup>
import { validateTimeLineItems } from "../validators";
import TimelineItem from "../components/TimelineItem.vue";

const props = defineProps({
  timelineItems: {
    type: Array,
    required: true,
    validator: validateTimeLineItems,
  },
});
</script>
