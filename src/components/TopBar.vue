<template>
  <nav class="w-full py-4 flex justify-between items-center bg-red-500 dark:bg-red-700 box-border">
    <button @click="toggleDarkMode" class="p-2 rounded-lg hover:bg-red-600 dark:hover:bg-red-800">
      <span v-if="isDarkMode">🌙</span>
      <span v-else>☀️</span>
    </button>
    <RouterLink to="/user">User</RouterLink>
    <button @click="authModal.isOpen = true">Login/Register</button>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'
import useAuthModalStore from '@/stores/authModalStore'

const authModal = useAuthModalStore()

const isDarkMode = ref(localStorage.getItem('darkMode') === 'true')

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('darkMode', isDarkMode.value.toString())
  document.documentElement.classList.toggle('dark', isDarkMode.value)
}

onMounted(() => {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  }
})
</script>
