<template>
    <component :is="to ? 'router-link' : 'span'" :to="to" :class="[
        'px-3 py-2 rounded-xl inline-flex items-center gap-1 transition-colors duration-200',
        {
            'no-underline': to,
            'bg-blue-100 text-blue-600 hover:bg-blue-200': variant === 'store',
            'bg-red-100 text-red-600 hover:bg-red-200': variant === 'user',
            'bg-brown-100 text-brown-700 hover:bg-brown-200': variant === 'cookie'
        }
    ]">
        <StoreIcon v-if="variant === 'store'" />
        <UserIcon v-if="variant === 'user'" />
        <CookieIcon v-if="variant === 'cookie'" />
        <slot></slot>
    </component>
</template>

<script setup lang="ts">
import StoreIcon from '@/components/icons/StoreIcon.vue'
import UserIcon from '@/components/icons/UserIcon.vue'
import CookieIcon from '@/components/icons/CookieIcon.vue'

interface Props {
    variant: 'store' | 'user' | 'cookie'
    to?: string
}

defineProps<Props>()
</script>

<style scoped></style>
