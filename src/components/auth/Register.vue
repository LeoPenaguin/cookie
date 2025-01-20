<template>
  <main class="max-w-2xl mx-auto">
    <h1 class="text-2xl font-bold mb-6">Create Account</h1>

    <div class="space-y-6">
      <form @submit.prevent="handleRegister" class="space-y-4">
        <div>
          <input type="text" v-model="name" placeholder="Full name"
            class="w-full px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800" />
        </div>
        <div>
          <input type="email" v-model="email" placeholder="Email"
            class="w-full px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800" />
        </div>
        <div>
          <input type="password" v-model="password" placeholder="Password"
            class="w-full px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800" />
        </div>
        <div>
          <input type="password" v-model="confirmPassword" placeholder="Confirm password"
            class="w-full px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800" />
        </div>
        <div v-if="error" class="text-red-500 text-sm">{{ error }}</div>
        <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl"
          :disabled="!isFormValid">
          Create Account
        </button>
      </form>

      <div class="flex items-center gap-4">
        <div class="h-px flex-1 bg-gray-200 dark:bg-gray-700"></div>
        <span class="text-gray-500">or</span>
        <div class="h-px flex-1 bg-gray-200 dark:bg-gray-700"></div>
      </div>

      <button @click="handleGoogleRegister"
        class="w-full px-6 py-2 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center gap-2">
        <UserIcon />
        <span>Continue with Google</span>
      </button>

      <p class="text-center text-gray-500">
        Already have an account?
        <RouterLink to="/login" class="text-blue-500 hover:underline">Sign in</RouterLink>
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter, RouterLink } from 'vue-router';
import { useAuthStore } from '@/stores/authStore'; // Changement ici
import { UserIcon } from '@/components/icons';

const router = useRouter();
const authStore = useAuthStore(); // Ajout du store

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const error = ref('');

const isFormValid = computed(() => {
  return name.value.trim() &&
    email.value.trim() &&
    password.value.length >= 6 &&
    password.value === confirmPassword.value;
});

const handleRegister = async () => {
  if (!isFormValid.value) {
    error.value = 'Please fill all fields correctly';
    return;
  }

  try {
    // Utilisation du store au lieu du service
    await authStore.registerUser(email.value, password.value, name.value);
    router.push('/dashboard');
  } catch (err: any) {
    error.value = err.message;
  }
};

const handleGoogleRegister = async () => {
  error.value = 'Google authentication not implemented yet';
  // TODO: Implémenter l'authentification Google si nécessaire
};
</script>
