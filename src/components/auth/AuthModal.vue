<template>
  <div v-if="authModalStore.isOpen" class="fixed inset-0 z-100">
    <div class="fixed inset-0 bg-black/50" @click="authModalStore.toggleModal"></div>

    <div class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md">
      <div class="bg-white rounded-lg shadow-xl p-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold">
            {{ authModalStore.mode === 'login' ? 'Connexion' : 'Inscription' }}
          </h2>
          <button @click="authModalStore.toggleModal" class="text-gray-500 hover:text-gray-700">
            <span class="sr-only">Fermer</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <LoginForm v-if="authModalStore.mode === 'login'" />
        <RegisterForm v-else />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useAuthModalStore from '@/stores/authModalStore';
import LoginForm from '@/components/auth/LoginForm.vue';
import RegisterForm from '@/components/auth/RegisterForm.vue';

export default defineComponent({
  components: {
    LoginForm,
    RegisterForm,
  },
  setup() {
    const authModalStore = useAuthModalStore();
    return { authModalStore };
  },
});
</script>

<style scoped>
/* Ajoutez ici les styles spécifiques à ce composant */
</style>
