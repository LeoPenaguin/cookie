<template>
  <main class="max-w-2xl mx-auto">
    <h1 class="text-2xl font-bold mb-6">Friends</h1>

    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Your Friends</h2>
      <div v-if="friendStore.friends.length > 0" class="space-y-4">
        <div v-for="friend in friendStore.friends" :key="friend.id" class="p-4 bg-white rounded shadow">
          <span class="font-medium">{{ friend.friend.name }}</span>
        </div>
      </div>
      <div v-else class="text-gray-500">
        No friends yet
      </div>
    </section>

    <FriendRequest />
  </main>
</template>

<script setup lang="ts">
import FriendRequest from '@/components/FriendRequest.vue';
import { useFriendStore } from '@/stores/friendStore';
import { getAuth } from 'firebase/auth';
import { onMounted } from 'vue';

const friendStore = useFriendStore();
const auth = getAuth();

onMounted(async () => {
  if (auth.currentUser) {
    await friendStore.fetchFriends(auth.currentUser.uid);
  }
});
</script>
