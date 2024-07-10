<script setup lang="ts">
interface Props {
  layout?: 'grid' | 'flex'
}

const { layout = 'grid' } = defineProps<Props>()
const layoutClass = computed(() => `layout-${layout}`)
</script>
<template>
  <LayoutContainer
    class="flex-[1_0_0] gap-[var(--layout-course-gap)] py-[var(--layout-course-gap)] xl:flex-none"
    :class="layoutClass"
  >
    <slot></slot>
  </LayoutContainer>
</template>
<style scoped>
.layout-grid {
  @apply grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] place-items-center;
}

.layout-flex {
  @apply flex flex-wrap content-center items-center justify-center;
}
</style>
