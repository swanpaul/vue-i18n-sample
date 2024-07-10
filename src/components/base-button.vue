<script setup lang="ts">
export interface Props {
    type?: 'primary' | 'secondary'
}

/* Enabled Vue 3.3 Reactive Props Destructure feature */
const { type = 'primary' } = defineProps<Props>()
</script>
<template>
    <button
        class="rounded-full border px-8 py-2 font-[0.875rem] leading-[1.05rem]"
        :class="type"
    >
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
.primary {
    @apply border-primary-700 bg-primary-700 text-white;

    &:hover {
        @apply bg-primary-600;
    }
}

.secondary {
    @apply border-primary-700 bg-white text-primary-700;

    &:hover {
        @apply bg-primary-100;
    }
}
</style>
