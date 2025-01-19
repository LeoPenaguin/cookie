<template>
  <div class="dashboard">
    <h1 class="text-2xl font-bold">Dashboard</h1>

    <div class="flex items-center mb-4">
      <img v-if="authStore.user?.photoURL" :src="authStore.user.photoURL" class="w-12 h-12 rounded-full mr-4"
        alt="Profile picture">
      <div>
        <h2 class="font-medium">{{ authStore.user?.displayName || authStore.user?.email }}</h2>
        <p class="text-sm">{{ authStore.user?.email }}</p>
      </div>
    </div>

    <div class="actions">
      <button @click="handleLogout" class="bg-red-500 text-white px-4 py-2 rounded-lg w-full">
        Se déconnecter
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import useAuthStore from '@/stores/authStore'
import { AuthService } from '@/services/auth.service'

const router = useRouter()
const authStore = useAuthStore()

const handleLogout = async () => {
  try {
    await AuthService.logout()
    router.push('/login')
  } catch (error) {
    console.error('Erreur lors de la déconnexion:', error)
  }
}
</script>
