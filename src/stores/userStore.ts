import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { User } from '@/types/user';

export const useNoteStore = defineStore('noteStore', () => {
  const user = ref<User>({
    name: 'Alice',
    age: 25,
    email: 'aliceprout@gmail.com'
  });

  return { user };
});
