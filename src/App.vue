<template>
  <div class="app px-4">
    <TopBar class="position-top" />
    <BottomNavigation class="position-bottom" />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import BottomNavigation from './components/BottomNavigation.vue'
import TopBar from './components/TopBar.vue'
import { RouterView } from 'vue-router'
</script>

<style lang="scss">
.app {
  position: relative;
  min-height: 100vh;
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
