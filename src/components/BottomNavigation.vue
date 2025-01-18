<template>
  <nav class="flex justify-around w-fit gap-2 rounded-2xl border-2 border-gray-200 bg-white p-2">
    <RouterLink to="/"
      class="flex justify-center items-center w-14 h-14 bg-white rounded-full hover:bg-gray-100 [&.router-link-active]:bg-gray-100">
      <HomeIcon :size="34" color="black" />
    </RouterLink>
    <RouterLink to="/rate-cookie"
      class="flex justify-center items-center w-20 h-14 bg-cookie rounded-2xl hover:bg-cookie-hover [&.router-link-active]:bg-cookie-hover">
      <CookieIcon :size="34" color="black" />
    </RouterLink>
    <RouterLink to="/feed"
      class="flex justify-center items-center w-14 h-14 bg-white rounded-full hover:bg-gray-100 [&.router-link-active]:bg-gray-100">
      <StarIcon :size="34" color="black" />
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import StarIcon from '@/components/icons/StarIcon.vue';
import CookieIcon from '@/components/icons/CookieIcon.vue';
import HomeIcon from '@/components/icons/HomeIcon.vue';
</script>
