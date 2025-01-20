import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Rating } from '@/types/rating';
import { fetchRatings } from '@/api/rating';

export const useRatingStore = defineStore('rating', () => {
  const ratings = ref<Rating[]>([]);

  const getRatings = () => {
    fetchRatings((newRatings) => {
      ratings.value = newRatings;
    });
  };

  return { ratings, getRatings };
});
