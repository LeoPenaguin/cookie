import { defineStore } from 'pinia';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '@/firebase/config';
import type { Rating } from '@/types/rating';
import { ref } from 'vue';

export const useRatingStore = defineStore('rating', () => {
  const ratings = ref<Rating[]>([]);

  const fetchRatings = () => {
    const q = query(collection(db, 'ratings'), orderBy('createdAt', 'desc'));

    onSnapshot(q, (snapshot) => {
      ratings.value = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        // createdAt: doc.data().createdAt.toDate()
      })) as Rating[];
    });
  };

  return { ratings, fetchRatings };
});
