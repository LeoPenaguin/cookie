<template>
  <button :class="[
    'rounded-lg border-black text-black font-medium transition-colors duration-200 border-2',
    variantClasses[variant],
    sizeClasses[size]
  ]">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
interface ButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  text: string
}

withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'medium',
  text: 'Click me'
})

const variantClasses = {
  primary: 'border-blue-500 text-blue-500 hover:border-black hover:text-black',
  secondary: 'border-gray-500 text-blue-500 hover:border-black hover:text-black',
}

const sizeClasses = {
  small: 'px-4 py-2 text-sm',
  medium: 'px-4 py-3 text-base',
  large: 'px-6 py-3 text-lg'
}
</script>
