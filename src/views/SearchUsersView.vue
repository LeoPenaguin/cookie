<template>
  <main class="max-w-2xl mx-auto">
    <h1 class="text-2xl font-bold mb-6">Search Users</h1>

    <div class="flex gap-2 mb-6">
      <input v-model="searchQuery" type="text" placeholder="Search users..."
        class="flex-1 px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800" @keyup.enter="handleSearch">
      <CustomButton text="Search" @click="handleSearch" :disabled="isLoading || !searchQuery.trim()"
        class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl" />
    </div>

    <div v-if="isLoading" class="text-center py-4">
      Searching...
    </div>

    <div v-else-if="users.length > 0" class="space-y-4">
      <div v-for="user in users" :key="user.uid"
        class="p-4 bg-white dark:bg-gray-800 rounded-xl shadow flex items-center justify-between">
        <div class="flex items-center gap-3">
          <UserIcon class="text-gray-600 dark:text-gray-400" />
          <div class="font-medium">{{ user.name }}</div>
        </div>
      </div>
    </div>

    <div v-else-if="hasSearched" class="text-center py-4 text-gray-500">
      No users found
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { UserIcon } from '@/components/icons';
import CustomButton from '@/components/CustomButton.vue';
import { searchUsers } from '@/api/users';
import type { User } from '@/types/user';

const searchQuery = ref('');
const users = ref<User[]>([]);
const isLoading = ref(false);
const hasSearched = ref(false);

async function handleSearch() {
  if (!searchQuery.value.trim()) return;

  isLoading.value = true;
  try {
    users.value = await searchUsers(searchQuery.value);
    hasSearched.value = true;
  } catch (error) {
    console.error('Error searching users:', error);
    users.value = [];
  } finally {
    isLoading.value = false;
  }
}
</script>
