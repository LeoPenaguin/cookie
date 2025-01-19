<template>
  <div class="login">
    <form @submit.prevent="handleEmailLogin">
      <div>
        <label>Email</label>
        <input type="email" v-model="email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" v-model="password" />
      </div>
      <div v-if="error">{{ error }}</div>
      <button type="submit">Login</button>
    </form>
    <button @click="handleGoogleLogin">Login with Google</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { AuthService } from '../../services/auth.service';
import { useRouter } from 'vue-router';
import useAuthStore from '@/stores/authStore';

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

<style scoped>
/* Ajoutez vos styles ici */
</style>
