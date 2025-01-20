<template>
  <main class="max-w-2xl mx-auto">
    <h1 class="text-2xl font-bold mb-6">Sign In</h1>

    <div class="space-y-6">
      <form @submit.prevent="handleEmailLogin" class="space-y-4">
        <div>
          <input type="email" v-model="email" placeholder="Email"
            class="w-full px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800" />
        </div>
        <div>
          <input type="password" v-model="password" placeholder="Password"
            class="w-full px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800" />
        </div>
        <div v-if="error" class="text-red-500 text-sm">{{ error }}</div>
        <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl">
          Sign in
        </button>
      </form>

      <div class="flex items-center gap-4">
        <div class="h-px flex-1 bg-gray-200 dark:bg-gray-700"></div>
        <span class="text-gray-500">or</span>
        <div class="h-px flex-1 bg-gray-200 dark:bg-gray-700"></div>
      </div>

      <button @click="handleGoogleLogin"
        class="w-full px-6 py-2 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center gap-2">
        <UserIcon />
        <span>Continue with Google</span>
      </button>

      <p class="text-center text-gray-500">
        Don't have an account?
        <RouterLink to="/register" class="text-blue-500 hover:underline">Sign up</RouterLink>
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { AuthService } from '../../services/auth.service';
import { useRouter, RouterLink } from 'vue-router';
import useAuthStore from '@/stores/authStore';
import { UserIcon } from '@/components/icons';

const email = ref('');
const password = ref('');
const error = ref('');

const router = useRouter();
const authStore = useAuthStore();

const handleEmailLogin = async () => {
  try {
    await AuthService.loginWithEmail(email.value, password.value);
    router.push('/dashboard');
  } catch (err) {
    error.value = err.message;
  }
};

const handleGoogleLogin = async () => {
  try {
    await AuthService.loginWithGoogle();
    router.push('/dashboard');
  } catch (err) {
    error.value = err.message;
  }
};
</script>
