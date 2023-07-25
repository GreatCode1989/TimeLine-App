<script setup>
import { ref } from "vue";
import { isTimelineItems, validateSelectOptions } from "../validators";
import BaseSelect from "./BaseSelect.vue";
import TimelineHour from "./TimelineHour.vue";

defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItems,
  },
  activitySelectOptions: {
    type: Array,
    required: true,
    validator: validateSelectOptions,
  },
});

const selectedActivityId = ref(0);
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      placeholder="Rest"
      :selected="selectedActivityId"
      :options="activitySelectOptions"
      @select="selectedActivityId = $event"
    />
  </li>
</template>
