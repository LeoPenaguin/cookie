<template>
  <div class="flex flex-wrap gap-2 items-center bg-gray-100 p-4 rounded-2xl">
    <DataPill :to="`/user/${note.userId}`" variant="user">
      {{ note.user }}
    </DataPill>
    <span>rated</span>
    <DataPill variant="cookie">
      {{ note.product }}
    </DataPill>
    <span>from</span>
    <DataPill :to="`/place/${note.placeId}`" variant="store">
      {{ note.place }}
    </DataPill>
  </div>
</template>

<script setup lang="ts">
import type { Note } from '@/types/note';
import DataPill from './DataPill.vue';

defineProps<{ note: Note }>();
</script>
