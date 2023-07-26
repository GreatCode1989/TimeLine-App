<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER" @click="emit('delete')">
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="truncate text-xl"> {{ activity }} </span>
    </div>
    <div>
      <BaseSelect
        class="font-mono"
        placeholder="h:mm"
        :options="PERIOD_SELECT_OPTIONS"
        :selected="secondsToComplite"
        @select="secondsToComplite = $event"
      />
    </div>
  </li>
</template>

<script setup>
import { isActivityValid, isUndefined } from "../validators";
import { PERIOD_SELECT_OPTIONS, BUTTON_TYPE_DANGER } from "../constants";
import { ref } from "vue";
import { TrashIcon } from "@heroicons/vue/24/outline";
import BaseSelect from "./BaseSelect.vue";
import BaseButton from "./BaseButton.vue";

const props = defineProps({
  activity: {
    type: String,
    required: true,
    validator: isActivityValid,
  },
});

const emit = defineEmits({
  delete: isUndefined,
});

const secondsToComplite = ref(null);
</script>
