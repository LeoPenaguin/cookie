<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <div v-if="error" class="bg-red-100 p-3 rounded text-red-700">
      {{ error }}
    </div>

    <div class="space-y-2">
      <input v-model="username" type="text" placeholder="Nom d'utilisateur" class="w-full p-2 border rounded"
        required />
      <input v-model="email" type="email" placeholder="Email" class="w-full p-2 border rounded" required />
      <input v-model="password" type="password" placeholder="Mot de passe" class="w-full p-2 border rounded" required />
      <input v-model="confirmPassword" type="password" placeholder="Confirmer le mot de passe"
        class="w-full p-2 border rounded" required />
    </div>

    <button type="submit" :disabled="loading"
      class="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50">
      Créer un compte
    </button>

    <div class="text-center">
      <span class="text-sm">
        Déjà un compte ?
        <button type="button" @click="authModalStore.switchMode()" class="text-blue-600">
          Se connecter
        </button>
      </span>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useAuthModalStore from '@/stores/authModalStore';

const authModalStore = useAuthModalStore();
const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const error = ref('');
const loading = ref(false);

const handleSubmit = async () => {
  try {
    if (password.value !== confirmPassword.value) {
      error.value = 'Les mots de passe ne correspondent pas';
      return;
    }

    loading.value = true;
    error.value = '';
    // Implémentez votre logique d'inscription ici
    authModalStore.toggleModal();
  } catch (err) {
    error.value = "Une erreur s'est produite";
  } finally {
    loading.value = false;
  }
};
</script>
