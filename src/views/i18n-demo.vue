<script setup lang="ts">
import IconHamburgerMenu from '@/assets/icons/hamburger-menu.svg'
import IconPlay from '@/assets/icons/play.svg?component'
import heroUrl from '@/assets/images/hero.jpg'
import BaseI18nSelector from '@/components/base-i18n-selector.vue'
import { listCourse } from '@/services/course'
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

const courseList = listCourse()
</script>
<template>
    <div class="flex flex-col items-center gap-[12px] px-0 py-[16px] md:py-[32px]">
        <!-- Block: Navigation -->
        <LayoutContainer class="flex items-center self-stretch py-0">
            <BaseLogo />
            <div class="flex flex-[1_0_0] items-center justify-end gap-[12px]">
                <BaseButton type="secondary">{{ t('nav.login') }}</BaseButton>
                <BaseButton>{{ t('nav.register') }}</BaseButton>
                <BaseI18nSelector />
            </div>
        </LayoutContainer>

        <!-- Block: Hero -->
        <LayoutContainer
            class="flex flex-col items-start justify-center self-stretch py-[var(--hero-paddingY)] md:flex-row md:items-center md:justify-start md:gap-[48px]"
        >
            <div
                class="flex flex-col items-center justify-center gap-[12px] self-stretch md:items-start md:gap-[16px]"
            >
                <div class="text-hero max-w-[480px]" :class="locale">
                    <i18n-t keypath="hero.slogan" scope="global">
                        <template #newline> <br /> </template>
                        <template #slogan-focus>
                            <span class="text-focus">
                                {{ t('hero.slogan-focus') }}
                            </span>
                        </template>
                    </i18n-t>
                </div>

                <div
                    class="flex flex-col items-center justify-center gap-[var(--page-gap)] md:flex-row md:justify-start"
                >
                    <BaseButton class="self-stretch">{{ t('button.how-to-begin') }}</BaseButton>
                    <BaseButton
                        type="secondary"
                        class="flex items-center justify-center gap-[8px] px-[32px] py-[8px]"
                        ><IconPlay class="w-5 fill-primary-700" />{{
                            t('button.sample-video')
                        }}</BaseButton
                    >
                </div>
            </div>
            <div class="hidden flex-[1_0_0] items-center justify-end md:flex">
                <img
                    class="h-[270px] flex-[1_0_0] rounded-xl object-cover xl:h-96 xl:w-[576px]"
                    :src="heroUrl"
                />
            </div>
        </LayoutContainer>

        <div
            class="flex items-center justify-center self-stretch px-[var(--page-paddingX)] py-[var(--page-gap)]"
        >
            <span class="text-sub-header text-focus">{{ t('header.featured-courses') }}</span>
        </div>

        <!-- Block: Course -->
        <div class="flex items-start self-stretch justify-center bg-primary-300">
            <LayoutCourse>
                <CardCourse
                    v-for="course in courseList"
                    :key="course.id"
                    :thumb="course.thumb"
                    :tags="course.tags"
                    :time="course.time"
                    :titleLanguages="course.titleLanguages"
                />
            </LayoutCourse>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.text-hero {
    @apply font-sans text-[32px] font-bold not-italic leading-[150%] xl:text-[48px];

    &.en-US {
        @apply leading-[135%] text-[28px] xl:text-[40px];
    }
}
</style>
