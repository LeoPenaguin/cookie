<template>
  <button :class="[
    'rounded-lg font-medium transition-colors duration-200 border-2',
    variantClasses[variant],
    sizeClasses[size]
  ]">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  text: string
}

withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'medium',
  text: 'Click me'
})

const variantClasses = {
  primary: 'bg-blue-500 border-blue-500 text-white hover:bg-blue-600 hover:border-blue-600',
  secondary: 'bg-gray-500 border-gray-500 text-white hover:bg-gray-600 hover:border-gray-600',
  outline: 'bg-transparent border-blue-500 text-blue-500 hover:bg-blue-50'
}

const sizeClasses = {
  small: 'px-4 py-2 text-sm',
  medium: 'px-4 py-3 text-base',
  large: 'px-6 py-3 text-lg'
}
</script>
