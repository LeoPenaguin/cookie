import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { User } from '@/types/user';

export default defineStore('userStore', () => {
  const users = ref<User[]>([
    { id: 1, name: 'Alice', email: 'alice@email.com' },
    { id: 2, name: 'Bob', email: 'bob@email.com' },
    { id: 3, name: 'Charlie', email: 'charlie@email.com' },
    { id: 4, name: 'Diana', email: 'diana@email.com' },
    { id: 5, name: 'Eve', email: 'eve@email.com' },
    { id: 6, name: 'Frank', email: 'frank@email.com' },
    { id: 7, name: 'Grace', email: 'grace@email.com' },
    { id: 8, name: 'Hank', email: 'hank@email.com' },
    { id: 9, name: 'Ivy', email: 'ivy@email.com' },
    { id: 10, name: 'Jack', email: 'jack@email.com' },
    { id: 11, name: 'Karen', email: 'karen@email.com' },
    { id: 12, name: 'Leo', email: 'leo@email.com' },
    { id: 13, name: 'Mona', email: 'mona@email.com' },
    { id: 14, name: 'Nina', email: 'nina@email.com' },
    { id: 15, name: 'Oscar', email: 'oscar@email.com' },
    { id: 16, name: 'Paul', email: 'paul@email.com' },
    { id: 17, name: 'Quinn', email: 'quinn@email.com' },
    { id: 18, name: 'Rose', email: 'rose@email.com' }
  ]);

  function getUserById(id: number): User | undefined {
    return users.value.find(user => user.id === id);
  }

  return { users, getUserById };
});
