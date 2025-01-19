<template>
  <div class="flex flex-col gap-2">
    <label :for="id" class="text-base font-medium">{{ label }}</label>
    <input :id="id" :name="id" :type="type" :min="min" :max="max" :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" class="w-full rounded-lg border-2 border-gray-300 px-4 py-3
             focus:border-blue-500 focus:ring-blue-500 hover:border-gray-400
             transition-colors duration-200">
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: string;
  label: string;
  modelValue: string | number;
  type?: string;
  min?: string | number;
  max?: string | number;
}>();

defineEmits(['update:modelValue']);
</script>
