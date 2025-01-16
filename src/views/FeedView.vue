<script setup lang="ts">
import { useNoteStore } from '@/stores/noteStore';
import NoteFeedItem from '@/components/NoteFeedItem.vue';

const noteStore = useNoteStore();
</script>

<template>
  <main class="flex flex-col gap-2.5">
    <NoteFeedItem v-for="(note, index) in noteStore.notes" :key="index" :user="note.user" :product="note.product"
      :place="note.place" />
  </main>
</template>
