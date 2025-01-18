<template>
  <div class="app px-4">
    <TopBar class="position-top" />
    <RouterView />
    <BottomNavigation class="position-bottom" />
    <AuthModal v-if="authModal.isOpen" />
  </div>
</template>

<script setup lang="ts">
import useAuthModalStore from '@/stores/authModalStore'
import AuthModal from '@/components/auth/AuthModal.vue'
import BottomNavigation from '@/components/BottomNavigation.vue'
import TopBar from '@/components/TopBar.vue'
import { RouterView } from 'vue-router'

const authModal = useAuthModalStore()
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
