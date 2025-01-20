import { defineStore } from 'pinia';
import { ref } from 'vue';
import {
  searchUsers,
  sendFriendRequest,
  getFriends,
  getPendingFriendRequests,
  acceptFriendRequest
} from '@/api/friendship';

export const useFriendStore = defineStore('friend', () => {
  const friends = ref<any[]>([]);
  const pendingRequests = ref<any[]>([]);

  async function fetchFriends(userId: string) {
    friends.value = await getFriends(userId);
  }

  async function fetchPendingRequests(userId: string) {
    pendingRequests.value = await getPendingFriendRequests(userId);
  }

  return {
    friends,
    pendingRequests,
    fetchFriends,
    fetchPendingRequests,
    searchUsers,
    sendFriendRequest,
    acceptFriendRequest
  };
});
