import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { auth } from '@/firebase/config'
import { onAuthStateChanged, type User } from 'firebase/auth'

export default defineStore('authStore', () => {
  const user = ref<User | null>(null)
  const loading = ref(true)

  const isAuthenticated = computed(() => !!user.value)

  async function init() {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (currentUser) => {
        user.value = currentUser
        loading.value = false
        resolve(currentUser)
      })
    })
  }

  return {
    user,
    loading,
    isAuthenticated,
    init
  }
})
