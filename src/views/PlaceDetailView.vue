<template>
  <main v-if="place">
    <h1 class="text-2xl font-bold">{{ place.name }}</h1>

    <div class="bg-gray-100 p-4 rounded-lg mt-4">
      <h2>Location</h2>
      <p>Latitude: {{ place.coordinates.lat }}</p>
      <p>Longitude: {{ place.coordinates.lng }}</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import useFormStore from '@/stores/formStore';

const route = useRoute();
const formStore = useFormStore();

const place = computed(() => {
  return formStore.placesData.find(p => p.id === Number(route.params.id));
});
</script>
