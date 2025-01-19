<template>
  <main class="max-w-2xl mx-auto">
    <h1 class="text-2xl font-bold mb-6">Rate a cookie</h1>

    <form @submit.prevent="handleSubmit">
      <div class="flex flex-wrap items-center gap-2">
        <span>I'm rating a</span>
        <div class="relative flex-1">
          <CustomSelect id="cookie" v-model="selectedCookie" :options="cookieOptions"
            class="w-full px-3 py-2 rounded-xl bg-brown-100 text-brown-700 border-none focus:ring-2 focus:ring-brown-200" />
          <CookieIcon class="absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
        <span>from</span>
        <div class="relative flex-1">
          <CustomSelect id="place" v-model="selectedPlace" :options="placeOptions"
            class="w-full px-3 py-2 rounded-xl bg-blue-100 text-blue-600 border-none focus:ring-2 focus:ring-blue-200" />
          <StoreIcon class="absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <div>
          <label for="flavor" class="block mb-2">Flavor</label>
          <StarRating v-model="flavor" />
        </div>
        <div>
          <label for="look" class="block mb-2">Look</label>
          <StarRating v-model="look" />
        </div>
        <div>
          <label for="texture" class="block mb-2">Texture</label>
          <StarRating v-model="texture" />
        </div>
      </div>

      <div class="flex justify-end">
        <CustomButton :text="isLoading ? 'Saving...' : 'Add Rating'" :disabled="isLoading || !isFormValid" type="submit"
          class="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl transition-colors duration-200 disabled:opacity-50" />
      </div>
    </form>
  </main>
</template>

<script setup lang="ts">
import CustomButton from '@/components/CustomButton.vue';
import CustomSelect from '@/components/CustomSelect.vue';
import StarRating from '@/components/StarRating.vue';
import useFormStore from '@/stores/formStore';
import { ref, computed } from 'vue';
import { CookieIcon, StoreIcon } from '@/components/icons'
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';

const formStore = useFormStore();

const selectedCookie = ref('');
const selectedPlace = ref('');

const cookieOptions = computed(() =>
  formStore.cookies.map(cookie => ({
    value: cookie,
    text: cookie
  }))
);

const placeOptions = computed(() =>
  formStore.places.map(place => ({
    value: place,
    text: place
  }))
);

const flavor = ref(0);
const look = ref(0);
const texture = ref(0);

const isLoading = ref(false);

const isFormValid = computed(() => {
  return selectedCookie.value &&
    selectedPlace.value &&
    flavor.value > 0 &&
    look.value > 0 &&
    texture.value > 0;
});

async function handleSubmit() {
  if (!isFormValid.value) return;

  isLoading.value = true;
  try {
    const rating = {
      cookie: selectedCookie.value,
      place: selectedPlace.value,
      flavor: flavor.value,
      look: look.value,
      texture: texture.value,
      createdAt: new Date(),
    };

    await addDoc(collection(db, 'ratings'), rating);

    // Reset form
    selectedCookie.value = '';
    selectedPlace.value = '';
    flavor.value = 0;
    look.value = 0;
    texture.value = 0;

  } catch (error) {
    console.error('Error saving rating:', error);
  } finally {
    isLoading.value = false;
  }
}
</script>
