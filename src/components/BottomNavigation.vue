<template>
  <nav class="flex justify-around w-fit gap-2 rounded-lg border-2 border-gray-200 bg-white p-1 px-2">
    <RouterLink to="/" class="w-14 h-14 bg-white rounded-full hover:bg-gray-200 router-link-active:bg-gray-200">
      Home
    </RouterLink>
    <RouterLink to="/rate-cookie"
      class="w-20 h-14 bg-[#D5A98E] rounded-lg hover:bg-[#FFD900] router-link-active:bg-[#FFD900]">
      Cookie
    </RouterLink>
    <RouterLink to="/feed" class="w-14 h-14 bg-white rounded-full hover:bg-gray-200 router-link-active:bg-gray-200">
      Notes
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
