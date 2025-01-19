<template>
  <nav class="w-full py-2 flex justify-between items-center box-border">
    <button @click="toggleDarkMode"
      class="relative w-14 h-7 rounded-full bg-gray-200 dark:bg-gray-600 transition-colors duration-300">
      <div class="absolute left-1 top-1 w-5 h-5 rounded-full bg-white transition-transform duration-300"
        :class="{ 'translate-x-7': isDarkMode }">
        <span class="absolute inset-0 flex items-center justify-center text-xs">
          {{ isDarkMode ? '🌙' : '☀️' }}
        </span>
      </div>
    </button>

    <div class="relative">
      <template v-if="authStore.isAuthenticated">
        <RouterLink to="/dashboard">
          <img :src="authStore.user?.photoURL || '/default-avatar.png'" alt="Profile"
            class="w-12 h-12 rounded-full object-cover" />
        </RouterLink>
      </template>

      <RouterLink v-else to="/login"
        class="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg text-red-500 dark:text-white hover:bg-red-50 dark:hover:bg-gray-700">
        Se connecter
      </RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import useAuthStore from '@/stores/authStore'

const authStore = useAuthStore()
const isDarkMode = ref(localStorage.getItem('darkMode') === 'true')
const isMenuOpen = ref(false)

const closeMenuOnClickOutside = (event: MouseEvent) => {
  if (isMenuOpen.value && !(event.target as Element).closest('.relative')) {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  }
  document.addEventListener('click', closeMenuOnClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', closeMenuOnClickOutside)
})

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('darkMode', isDarkMode.value.toString())
  document.documentElement.classList.toggle('dark', isDarkMode.value)
}
</script>
