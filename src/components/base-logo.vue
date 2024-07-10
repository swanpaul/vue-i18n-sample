<script setup lang="ts">
import avatarUrl from '@/assets/images/avatar.jpg'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
    <div class="flex gap-1 place-items-center">
        <img :src="avatarUrl" class="w-12 h-12" />
        <div
            class="font-[Noto Sans] text-[24px] font-bold not-italic leading-[137.5%] text-primary-700"
        >
            {{ t('app.logo-name') }}
        </div>
    </div>
</template>
