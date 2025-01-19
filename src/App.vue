<template>
  <div class="app px-4 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
    <TopBar class="position-top" />
    <div v-if="!authStore.loading">
      <RouterView />
    </div>
    <div v-else class="text-gray-800 dark:text-gray-200">
      Loading...
    </div>
    <BottomNavigation class="position-bottom" />
  </div>
</template>

<script setup lang="ts">
import BottomNavigation from '@/components/BottomNavigation.vue'
import TopBar from '@/components/TopBar.vue'
import { RouterView } from 'vue-router'
import { onMounted } from 'vue';
import useAuthStore from '@/stores/authStore'

const authStore = useAuthStore();

onMounted(() => {
  authStore.init();
});
</script>

<style lang="scss">
.app {
  position: relative;
  height: 100vh;
  max-width: 600px;
  margin: 0 auto;
}

.position-top {
  width: 100%;
  margin-bottom: 10px;
}

.position-bottom {
  position: fixed;
  bottom: 20px;
  z-index: 100;
  left: 50%;
  transform: translateX(-50%);
}
</style>
