import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { User } from '@/types/user';

export default defineStore('currentUserStore', () => {
  const user = ref<User>({
    id: 1000,
    name: 'Alice',
    email: 'aliceprout@gmail.com'
  });

  return { user };
});
