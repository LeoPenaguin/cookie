<template>
  <div>
    <h2 class="text-xl font-semibold mb-4">Add Friends</h2>
    <div class="flex gap-2 mb-4">
      <input v-model="searchTerm" type="text" placeholder="Search users..." class="px-4 py-2 border rounded w-full"
        @input="searchUsers">
    </div>

    <!-- New section for pending requests -->
    <div v-if="friendStore.pendingRequests.length > 0" class="mb-6">
      <h3 class="text-lg font-medium mb-3">Pending Requests</h3>
      <div class="space-y-2">
        <div v-for="request in friendStore.pendingRequests" :key="request.id"
          class="flex items-center justify-between p-3 bg-white rounded shadow">
          <span>{{ request.fromUser.name }}</span>
          <button @click="acceptRequest(request.id)"
            class="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
            Accept
          </button>
        </div>
      </div>
    </div>

    <div v-if="searchResults.length > 0" class="space-y-2">
      <div v-for="user in searchResults" :key="user.id"
        class="flex items-center justify-between p-3 bg-white rounded shadow">
        <span>{{ user.name }}</span>
        <button @click="sendRequest(user.id)" class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
          Send Request
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useFriendStore } from '@/stores/friendStore';
import { getAuth } from 'firebase/auth';

const friendStore = useFriendStore();
const searchTerm = ref('');
const searchResults = ref<any[]>([]);
const auth = getAuth();

async function acceptRequest(requestId: string) {
  await friendStore.acceptFriendRequest(requestId);
  if (auth.currentUser) {
    await friendStore.fetchPendingRequests(auth.currentUser.uid);
  }
}

async function loadPendingRequests() {
  if (!auth.currentUser) return;
  await friendStore.fetchPendingRequests(auth.currentUser.uid);
}

onMounted(() => {
  loadPendingRequests();
});

async function searchUsers() {
  if (searchTerm.value.length < 2) {
    searchResults.value = [];
    return;
  }
  searchResults.value = await friendStore.searchUsers(searchTerm.value);
}

async function sendRequest(toUserId: string) {
  if (!auth.currentUser) return;

  await friendStore.sendFriendRequest(auth.currentUser.uid, toUserId);
  searchResults.value = searchResults.value.filter(user => user.id !== toUserId);
}
</script>
