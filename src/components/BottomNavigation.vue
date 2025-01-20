<template>
  <nav
    class="flex justify-around w-fit gap-2 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-2">
    <RouterLink to="/" class="flex justify-center items-center w-14 h-14 bg-white dark:bg-gray-800 rounded-full
             hover:bg-gray-100 dark:hover:bg-gray-700
             [&.router-link-active]:bg-gray-100 dark:[&.router-link-active]:bg-gray-700">
      <HomeIcon :size="34" class="text-black dark:text-white" />
    </RouterLink>
    <RouterLink to="/rate-cookie" class="flex justify-center items-center w-20 h-14 bg-cookie rounded-2xl
             hover:bg-cookie-hover dark:hover:bg-cookie/80
             [&.router-link-active]:bg-cookie-hover dark:[&.router-link-active]:bg-cookie/80">
      <CookieIcon :size="34" class="text-black dark:text-white" />
    </RouterLink>
    <RouterLink to="/feed" class="flex justify-center items-center w-14 h-14 bg-white dark:bg-gray-800 rounded-full
             hover:bg-gray-100 dark:hover:bg-gray-700
             [&.router-link-active]:bg-gray-100 dark:[&.router-link-active]:bg-gray-700">
      <StarIcon :size="34" class="text-black dark:text-white" />
    </RouterLink>
    <RouterLink to="/search-users" class="flex flex-col items-center gap-1">
      <UserIcon />
      <span class="text-xs">Search</span>
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { StarIcon, CookieIcon, HomeIcon, UserIcon } from '@/components/icons';
</script>
