<template>
  <div class="flex flex-wrap gap-2 bg-gray-100 p-4 rounded-lg">
    <router-link :to="`/user/${note.userId}`"
      class="px-2 py-1 bg-red-100 text-red-600 rounded no-underline hover:underline">
      {{ note.user }}
    </router-link>
    <span>rated</span>
    <span class="px-2 py-1 bg-brown-100 text-brown-700 rounded">{{ note.product }}</span>
    <span>from</span>
    <router-link :to="`/place/${note.placeId}`"
      class="px-2 py-1 bg-blue-100 text-blue-600 rounded no-underline hover:underline">
      {{ note.place }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
import type { Note } from '@/types/note';

defineProps<{ note: Note }>();
</script>

<style lang="scss" scoped>
.note-feed-item {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  background: #F5F5F5;
  padding: 10px;
  border-radius: 20px;
}

span {
  &.tag {
    padding: 3px 5px;
    background: rgba(255, 0, 0, 0.3);
    color: #FF0000;
    border-radius: 7px;
  }

  &.tag-product {
    background: rgba(165, 42, 42, 0.3);
    color: #A52A2A;
  }

  &.tag-place {
    background: rgba(0, 0, 255, 0.3);
    color: #0000FF;
  }
}
</style>
