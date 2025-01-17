<template>
  <main>
    <div v-if="user">
      <h1>User Profile</h1>
      <div class="user-info">
        <p>Username: {{ user.name }}</p>
        <p>Email: {{ user.email }}</p>
      </div>
    </div>
    <div v-else>
      <p>Please log in to view your profile</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import useCurrentUserStore from '@/stores/currentUserStore';
import { storeToRefs } from 'pinia';

const currentUserStore = useCurrentUserStore();
const { user } = storeToRefs(currentUserStore);
</script>

<style scoped>
.user-info {
  margin-top: 1rem;
}
</style>
