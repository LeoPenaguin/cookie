<template>
  <button :class="[
    'rounded font-inherit cursor-pointer transition-colors',
    variantClasses[variant],
    sizeClasses[size]
  ]">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
}

withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'medium'
})

const variantClasses = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600',
  secondary: 'bg-gray-500 text-white hover:bg-gray-600',
  outline: 'bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-50'
}

const sizeClasses = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg'
}
</script>
