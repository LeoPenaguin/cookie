<template>
  <div class="flex items-center gap-1">
    <button v-for="star in 5" :key="star" @click="updateRating(star)" @mouseenter="hoveredRating = star"
      @mouseleave="hoveredRating = 0" class="p-1 focus:outline-none hover:scale-110 transition-transform" type="button">
      <svg class="w-8 h-8 transition-colors duration-200" :class="[
        star <= (hoveredRating || modelValue) ? 'text-yellow-400' : 'text-gray-300',
        'hover:text-yellow-400'
      ]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';

defineProps<{
  modelValue: number;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void;
}>();

const hoveredRating = ref(0);

const updateRating = (star: number) => {
  emit('update:modelValue', star);
};
</script>

<style scoped>
button {
  background: none;
  border: none;
  cursor: pointer;
}
</style>
