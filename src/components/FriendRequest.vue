<template>
  <div>
    <input v-model="friendId" placeholder="Enter friend ID" />
    <button @click="sendRequest">Send Friend Request</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { sendFriendRequest } from '@/api/friendship';
import useAuthStore from '@/stores/authStore';

const authStore = useAuthStore();
const friendId = ref('');

async function sendRequest() {
  await sendFriendRequest(authStore.user.id, friendId.value);
  friendId.value = '';
}
</script>
