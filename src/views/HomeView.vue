<script setup lang="ts">
// No additional imports needed for this simple view
</script>

<template>
  <main class="home">
    <section class="welcome">
      <h1>🍪 Welcome to Cookie Notes!</h1>
      <p>Your personal cookie tasting journal</p>
    </section>

    <nav class="flex flex-col gap-2">
      <router-link to="/rate-cookie"
        class="flex items-center gap-4 p-4 no-underline bg-gray-100 rounded-lg text-gray-800 hover:bg-gray-200 transition-colors duration-200">
        <span class="icon">➕</span>
        Add New Note
      </router-link>
      <router-link to="/feed"
        class="flex items-center gap-4 p-4 no-underline bg-gray-100 rounded-lg text-gray-800 hover:bg-gray-200 transition-colors duration-200">
        <span class="icon">📝</span>
        View All Notes
      </router-link>
      <router-link to="/place-list"
        class="flex items-center gap-4 p-4 no-underline bg-gray-100 rounded-lg text-gray-800 hover:bg-gray-200 transition-colors duration-200">
        <span class="icon">🏪</span>
        Cookie Places
      </router-link>
    </nav>
  </main>
</template>
