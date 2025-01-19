<template>
  <main>
    <h1 class="text-2xl font-bold mb-6">Cookie Ratings</h1>

    <div v-for="group in groupedRatings" :key="group.date">
      <h3 class="text-lg font-medium">{{ formatRelativeDate(group.date) }}</h3>
      <div class="space-y-3">
        <RatingFeedItem v-for="rating in group.ratings" :key="rating.id" :rating="rating" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRatingStore } from '@/stores/ratingStore';
import RatingFeedItem from '@/components/RatingFeedItem.vue';
import { computed, onMounted } from 'vue';
import { formatRelativeDate } from '@/utils/dateFormatter';
import type { Rating } from '@/types/Rating';

const ratingStore = useRatingStore();

onMounted(() => {
  ratingStore.fetchRatings();
});

const groupedRatings = computed(() => {
  const groups: { [key: string]: Rating[] } = {};
  ratingStore.ratings.forEach(rating => {
    const date = rating.createdAt.toISOString().split('T')[0];
    if (!groups[date]) groups[date] = [];
    groups[date].push(rating);
  });

  return Object.entries(groups)
    .sort(([a], [b]) => new Date(b).getTime() - new Date(a).getTime())
    .map(([date, ratings]) => ({ date, ratings }));
});
</script>
