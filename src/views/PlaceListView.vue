<template>
  <main>
    <h1>Cookie Places in Lyon</h1>
    <div class="flex flex-col gap-4">
      <div v-for="place in formStore.placesData" :key="place.id"
        class="flex flex-col gap-2 bg-gray-100 hover:bg-gray-200 rounded-lg p-4">
        <router-link :to="`/place/${place.id}`" class="no-underline text-gray-900">
          <h2>{{ place.name }}</h2>
          <p class="text-gray-500 text-sm">
            {{ place.coordinates.lat.toFixed(3) }}, {{ place.coordinates.lng.toFixed(3) }}
          </p>
        </router-link>
        <a :href="`https://www.google.com/maps?q=${place.coordinates.lat},${place.coordinates.lng}`" target="_blank"
          class="text-blue-500 text-sm hover:underline">
          View on Google Maps
        </a>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import useFormStore from '@/stores/formStore';

const formStore = useFormStore();
</script>
