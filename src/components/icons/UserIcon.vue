<template>
  <svg :width="size" :height="size" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.83337 22.5C1.83337 17.9897 5.48972 14.3333 10 14.3333C14.5104 14.3333 18.1667 17.9897 18.1667 22.5M14.6667 6.16667C14.6667 8.744 12.5773 10.8333 10 10.8333C7.42271 10.8333 5.33337 8.744 5.33337 6.16667C5.33337 3.58934 7.42271 1.5 10 1.5C12.5773 1.5 14.6667 3.58934 14.6667 6.16667Z"
      :stroke="color" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  size?: number;
  color?: string;
}

withDefaults(defineProps<Props>(), {
  size: 24,
  color: '#000000'
})
</script>
