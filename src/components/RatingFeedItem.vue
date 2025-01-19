<template>
  <article>
    <header class="flex items-center gap-3 mb-4">
      <div class="flex items-center gap-2">
        <DataPill variant="user">
          {{ rating.userId === currentUserId ? 'you' : rating.userName }}
        </DataPill>
        <span class="text-gray-400">rated</span>
        <DataPill variant="cookie">{{ rating.cookie }}</DataPill>
        <span class="text-gray-400">from</span>
        <DataPill variant="store">{{ rating.place }}</DataPill>
      </div>
    </header>

    <div class="grid grid-cols-3 gap-4">
      <div>
        <div class="text-sm text-gray-400 mb-1">Flavor</div>
        <RatingStars :modelValue="rating.flavor" />
      </div>
      <div>
        <div class="text-sm text-gray-400 mb-1">Look</div>
        <RatingStars :modelValue="rating.look" />
      </div>
      <div>
        <div class="text-sm text-gray-400 mb-1">Texture</div>
        <RatingStars :modelValue="rating.texture" />
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Rating } from '@/types/Rating';
import RatingStars from './RatingStars.vue';
import DataPill from './DataPill.vue';

defineProps<{
  rating: Rating;
  currentUserId: string;
}>();
</script>
