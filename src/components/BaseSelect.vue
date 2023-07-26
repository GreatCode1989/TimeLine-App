<template>
  <div class="flex gap-2">
    <BaseButton :type="BUTTON_TYPE_NEUTRAL" @click="emit('select', null)">
      <XMarkIcon class="h-8" />
    </BaseButton>
    <select
      class="w-full truncate rounded bg-gray-100 px-2 py-1 text-xl tracking-[.10em]"
      @change="emit('select', +$event.target.value)"
    >
      <option :selected="isNotSelected" disabled value="">
        {{ placeholder }}
      </option>
      <option
        v-for="{ value, label } in options"
        :key="value"
        :value="value"
        :selected="value === selected"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { computed } from "vue";
import {
  validateSelectOptions,
  isUndefinedOrNull,
  isNumberOrNull,
} from "../validators";
import BaseButton from "./BaseButton.vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { BUTTON_TYPE_NEUTRAL } from "../constants";

const props = defineProps({
  options: {
    type: Array,
    required: true,
    validator: validateSelectOptions,
  },
  placeholder: {
    type: String,
    required: true,
  },
  selected: {
    type: Number,
    required: false,
    validator: isNumberOrNull,
  },
});

const emit = defineEmits({
  select: isNumberOrNull,
});

const isNotSelected = computed(() => isUndefinedOrNull(props.selected));
</script>
