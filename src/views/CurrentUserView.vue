<template>
  <main>
    <h1 class="text-2xl font-bold">User Profile</h1>

    <div v-if="user">
      <p>Username: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
    </div>
    <div v-else>
      <button @click="authStore.toggleModal()" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Se connecter
      </button>
    </div>
  </main>
</template>

<script setup lang="ts">
import useCurrentUserStore from '@/stores/currentUserStore';
import { storeToRefs } from 'pinia';
import useAuthModalStore from '@/stores/authModalStore';

const currentUserStore = useCurrentUserStore();
const { user } = storeToRefs(currentUserStore);
const authStore = useAuthModalStore();
</script>
