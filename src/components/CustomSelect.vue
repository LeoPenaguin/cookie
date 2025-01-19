<template>
  <div class="flex flex-col gap-2">
    <label :for="id" class="text-base font-medium">{{ label }}</label>
    <select :id="id" :name="id" :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)" class="w-full rounded-lg border-2 border-gray-300 px-4 py-3
             focus:border-blue-500 focus:ring-blue-500 hover:border-gray-400
             transition-colors duration-200">
      <option v-for="option in options" :key="option.value" :value="option.value" class="py-2">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  id: string;
  label: string;
  modelValue: string;
  options: Array<{ value: string, text: string }>;
}>();

const emit = defineEmits(['update:modelValue']);

const updateValue = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLSelectElement).value);
};
</script>
