<template>
  <main>
    <div class="max-w-2xl mx-auto">
      <h1>Add a New Note</h1>

      <form>
        <CustomSelect id="cookie" label="Choose Cookie" v-model="selectedCookie" :options="cookieOptions" />
        <CustomSelect id="place" label="Choose Place" v-model="selectedPlace" :options="placeOptions" />

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CustomInput id="taste" label="Taste (0-5):" type="number" min="0" max="5" v-model="taste" />
          <CustomInput id="appearance" label="Appearance (0-5):" type="number" min="0" max="5" v-model="appearance" />
          <CustomInput id="texture" label="Texture (0-5):" type="number" min="0" max="5" v-model="texture" />
        </div>

        <div class="pt-4">
          <CustomButton text="Add Note" />
        </div>
      </form>
    </div>
  </main>
</template>

<script setup lang="ts">
import CustomButton from '@/components/CustomButton.vue';
import CustomSelect from '@/components/CustomSelect.vue';
import CustomInput from '@/components/CustomInput.vue';
import useFormStore from '@/stores/formStore';
import { ref, computed } from 'vue';

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

const taste = ref(0);
const appearance = ref(0);
const texture = ref(0);
</script>
