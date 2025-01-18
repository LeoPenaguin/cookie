import { defineStore } from 'pinia';
import { ref } from 'vue';

type AuthMode = 'login' | 'register';

export default defineStore('authModal', () => {
  const isOpen = ref(false);
  const mode = ref<AuthMode>('login');
  const loading = ref(false);

  function toggleModal() {
    isOpen.value = !isOpen.value;
  }

  function switchMode() {
    mode.value = mode.value === 'login' ? 'register' : 'login';
  }

  function setLoading(status: boolean) {
    loading.value = status;
  }

  return {
    isOpen,
    mode,
    loading,
    toggleModal,
    switchMode,
    setLoading
  };
});
