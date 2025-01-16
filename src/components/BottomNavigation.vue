<template>
  <nav class="flex justify-around w-fit gap-2 rounded-lg border-2 border-gray-200 bg-white p-2">
    <RouterLink to="/" class="w-14 h-14 bg-white rounded-full hover:bg-gray-100 [&.router-link-active]:bg-gray-100">
      Home
    </RouterLink>
    <RouterLink to="/rate-cookie"
      class="w-20 h-14 bg-cookie rounded-lg hover:bg-cookie-hover [&.router-link-active]:bg-cookie-hover">
      Cookie
    </RouterLink>
    <RouterLink to="/feed" class="w-14 h-14 bg-white rounded-full hover:bg-gray-100 [&.router-link-active]:bg-gray-100">
      Notes
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
