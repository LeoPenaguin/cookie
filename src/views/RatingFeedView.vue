<template>
  <main>
    <h1 class="text-2xl font-bold mb-6">Cookie Ratings</h1>

    <div class="space-y-3">
      <RatingFeedItem v-for="rating in ratingStore.ratings" :key="rating.id" :rating="rating"
        :current-user-id="currentUserId" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRatingStore } from '@/stores/ratingStore';
import RatingFeedItem from '@/components/RatingFeedItem.vue';
import { onMounted, computed } from 'vue';
import { getAuth } from 'firebase/auth';

const ratingStore = useRatingStore();
const currentUserId = computed(() => {
  const auth = getAuth();
  return auth.currentUser?.uid ?? '';
});

onMounted(() => {
  ratingStore.fetchRatings();
});
</script>
