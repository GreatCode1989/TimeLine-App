<template>
  <div class="flex grow flex-col">
    <ul v-if="activities.length > 0" class="grow divide-y">
      <ActivityItem
        v-for="activity in activities"
        :key="activity"
        :activity="activity"
        @delete="emit('deleteActivity', activity)"
      />
    </ul>
    <TheActivitiesEmptyState v-else />
    <TheActivityForm @submit="emit('createActivity', $event)" />
  </div>
</template>

<script setup>
import TheActivityForm from "../components/TheActivityForm.vue";
import { isActivityValid, validateActivities } from "../validators";
import ActivityItem from "../components/ActivityItem.vue";
import TheActivitiesEmptyState from "../components/TheActivitiesEmptyState.vue";

const props = defineProps({
  activities: {
    type: Array,
    required: true,
    validator: validateActivities,
  },
});

const emit = defineEmits({
  deleteActivity: isActivityValid,
  createActivity: isActivityValid,
});
</script>
