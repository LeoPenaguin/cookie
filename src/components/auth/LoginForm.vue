<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <div v-if="error" class="bg-red-100 p-3 rounded text-red-700">
      {{ error }}
    </div>

    <div class="space-y-2">
      <input v-model="email" type="email" placeholder="Email" class="w-full p-2 border rounded" required />
      <input v-model="password" type="password" placeholder="Mot de passe" class="w-full p-2 border rounded" required />
    </div>

    <button type="submit" :disabled="loading"
      class="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50">
      {{ authModalStore.mode === 'login' ? 'Se connecter' : "S'inscrire" }}
    </button>

    <div class="text-center">
      <span class="text-sm">
        {{ authModalStore.mode === 'login' ? "Pas encore de compte ?" : "Déjà un compte ?" }}
        <button type="button" @click="authModalStore.switchMode()" class="text-blue-600">
          {{ authModalStore.mode === 'login' ? "S'inscrire" : "Se connecter" }}
        </button>
      </span>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useAuthModalStore from '@/stores/authModalStore';

const authModalStore = useAuthModalStore();
const email = ref('');
const password = ref('');
const error = ref('');
const loading = ref(false);

const handleSubmit = async () => {
  try {
    loading.value = true;
    error.value = '';
    // Implémentez ici votre logique d'authentification
    // await authenticateUser(email.value, password.value);
    authModalStore.toggleModal();
  } catch (err) {
    error.value = "Une erreur s'est produite";
  } finally {
    loading.value = false;
  }
};
</script>
