<template>
  <div class="p-4">
    <div v-if="user">
      <h1 class="text-2xl font-bold mb-4">{{ user.name }}</h1>
      <div class="text-gray-600 mb-6">{{ user.email }}</div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Notes</h2>
        <div v-if="groupedNotes.length" class="space-y-6">
          <div v-for="group in groupedNotes" :key="group.date" class="space-y-3">
            <h3 class="text-lg text-gray-600">{{ formatRelativeDate(group.date) }}</h3>
            <div class="space-y-3">
              <NoteFeedItem v-for="note in group.notes" :key="note.id" :note="note" />
            </div>
          </div>
        </div>
        <div v-else class="text-gray-500">
          No notes yet
        </div>
      </div>
    </div>
    <div v-else class="text-red-600">
      User not found
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import useUserStore from '@/stores/userStore';
import useNoteStore from '@/stores/noteStore';
import { computed } from 'vue';
import NoteFeedItem from '@/components/NoteFeedItem.vue';
import { formatRelativeDate } from '@/utils/dateFormatter';
import type { Note } from '@/types/note';

const route = useRoute();
const userStore = useUserStore();
const noteStore = useNoteStore();

const user = computed(() => {
  const id = parseInt(route.params.id as string);
  return userStore.getUserById(id);
});

const userNotes = computed(() => {
  if (!user.value) return [];
  return noteStore.getNotesByUserId(user.value.id);
});

const groupedNotes = computed(() => {
  if (!userNotes.value.length) return [];

  const groups: { [key: string]: Note[] } = {};
  userNotes.value.forEach(note => {
    const date = note.createdAt.split('T')[0];
    if (!groups[date]) groups[date] = [];
    groups[date].push(note);
  });

  return Object.entries(groups)
    .sort((a, b) => new Date(b[0]).getTime() - new Date(a[0]).getTime())
    .map(([date, notes]) => ({ date, notes }));
});
</script>

<style scoped>
.user-info {
  margin-top: 1rem;
}
</style>
