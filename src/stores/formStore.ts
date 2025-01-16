import type { Place } from '@/types/place';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export default defineStore('formStore', () => {
  const placesData = ref<Place[]>([
    {
      id: 1,
      name: 'Bakery Delight',
      coordinates: { lat: 45.767, lng: 4.836 }  // Place Bellecour
    },
    {
      id: 2,
      name: 'Cookie Corner',
      coordinates: { lat: 45.769, lng: 4.832 }  // Place des Terreaux
    },
    {
      id: 3,
      name: 'Sweet Treats Cafe',
      coordinates: { lat: 45.763, lng: 4.833 }  // Place Carnot
    },
    {
      id: 4,
      name: "Grandma's Kitchen",
      coordinates: { lat: 45.778, lng: 4.833 }  // Croix-Rousse
    },
    {
      id: 5,
      name: 'Cookie Factory',
      coordinates: { lat: 45.751, lng: 4.829 }  // Perrache
    },
    {
      id: 6,
      name: 'The Cookie Jar',
      coordinates: { lat: 45.759, lng: 4.842 }  // Part-Dieu
    },
    {
      id: 7,
      name: 'Biscuit Boutique',
      coordinates: { lat: 45.773, lng: 4.830 }  // Pentes de la Croix-Rousse
    },
    {
      id: 8,
      name: 'Doughy Delights',
      coordinates: { lat: 45.757, lng: 4.831 }  // Place Guichard
    },
    {
      id: 9,
      name: 'Crumbly Creations',
      coordinates: { lat: 45.768, lng: 4.846 }  // Brotteaux
    },
    {
      id: 10,
      name: 'Pastry Palace',
      coordinates: { lat: 45.762, lng: 4.828 }  // Confluence
    }
  ]);

  // For the select options, we just need the names
  const places = ref<string[]>(placesData.value.map(place => place.name));
  const cookies = ref<string[]>([
    'Chocolate Chip',
    'Oatmeal Raisin',
    'Peanut Butter',
    'Snickerdoodle',
    'Sugar Cookie',
    'Double Chocolate',
    'White Chocolate Macadamia',
    'Gingerbread',
    'Shortbread',
    'Molasses'
  ]);

  return { places, placesData, cookies };
});
