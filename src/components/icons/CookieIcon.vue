<template>
  <svg :width="size" :height="size" :viewBox="`0 0 28 28`" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 19.3333H10.0133M14 12.6667H14.0133M7.33333 11.3333H7.34667M18 19.3333H18.0133M26 14C26 20.6275 20.6275 26 14 26C7.37259 26 2 20.6275 2 14C2 7.37259 7.37259 2 14 2C14 5.68189 16.3879 8.66667 19.3333 8.66667C19.3333 11.6121 22.3181 14 26 14Z"
      :stroke="color" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  size?: number;
  color?: string;
}

withDefaults(defineProps<Props>(), {
  size: 28,
  color: '#000000'
})
</script>
