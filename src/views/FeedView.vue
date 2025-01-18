<template>
  <main>
    <h1 class="text-2xl font-bold">Feed view</h1>

    <div v-for="group in groupedNotes" :key="group.date" class="space-y-3">
      <h3 class="text-lg text-gray-600">{{ formatRelativeDate(group.date) }}</h3>
      <div class="space-y-3">
        <NoteFeedItem v-for="note in group.notes" :key="note.id" :note="note" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import useNoteStore from '@/stores/noteStore';
import NoteFeedItem from '@/components/NoteFeedItem.vue';
import { computed } from 'vue';
import { formatRelativeDate } from '@/utils/dateFormatter';
import type { Note } from '@/types/note';

const noteStore = useNoteStore();

const groupedNotes = computed(() => {
  const groups: { [key: string]: Note[] } = {};
  noteStore.sortedNotes.forEach(note => {
    const date = note.createdAt.split('T')[0];
    if (!groups[date]) groups[date] = [];
    groups[date].push(note);
  });

  return Object.entries(groups)
    .sort((a, b) => new Date(b[0]).getTime() - new Date(a[0]).getTime())
    .map(([date, notes]) => ({ date, notes }));
});
</script>
