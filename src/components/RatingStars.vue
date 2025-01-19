<template>
  <div class="flex gap-1">
    <StarIcon v-for="i in 5" :key="i" :class="[
      'w-5 h-5',
      i <= modelValue ? 'text-yellow-400' : 'text-gray-300'
    ]" />
  </div>
</template>

<script setup lang="ts">
import { StarIcon } from './icons';

defineProps<{
  modelValue: number;
}>();
</script>
