<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import IconLangEnUs from '@/assets/icons/lang-en-us.svg'
import IconLangZhTw from '@/assets/icons/lang-zh-tw.svg'

const { locale } = useI18n()
const dropdownButton = ref<HTMLButtonElement | null>(null)
const dropdownMenu = ref<HTMLButtonElement | null>(null)
const isDropdownOpen = ref(false)

// Function to toggle the dropdown
function toggleDropdown() {
    isDropdownOpen.value = !isDropdownOpen.value
}

// Close the dropdown when clicking outside of it
function handleClickOutside(event: MouseEvent) {
    if (
        dropdownButton.value &&
        dropdownMenu.value &&
        !dropdownButton.value.contains(event.target as Node) &&
        !dropdownMenu.value.contains(event.target as Node)
    ) {
        isDropdownOpen.value = false
    }
}

onMounted(() => {
    window.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
    window.removeEventListener('click', handleClickOutside)
})

const onSelected = (lang: string) => {
    toggleDropdown()
    locale.value = lang
}
</script>

<template>
    <div class="relative inline-block text-left">
        <button
            @click="toggleDropdown"
            ref="dropdownButton"
            class="inline-flex justify-center w-full px-2 py-2 text-sm font-medium rounded-full secondary"
        >
            <IconLangZhTw v-if="locale == 'zh-TW'" class="w-8" />
            <IconLangEnUs v-if="locale == 'en-US'" class="w-8" />
        </button>
        <div
            ref="dropdownMenu"
            :class="{ hidden: !isDropdownOpen }"
            class="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
        >
            <div class="p-2 py-2">
                <a
                    @click="onSelected('zh-TW')"
                    class="flex px-4 py-2 text-sm text-gray-700 rounded-md cursor-pointer hover:bg-gray-100 active:bg-blue-100"
                >
                    <IconLangZhTw class="w-4 mr-2" /> 繁體中文
                </a>
                <a
                    @click="onSelected('en-US')"
                    class="flex px-4 py-2 text-sm text-gray-700 rounded-md cursor-pointer hover:bg-gray-100 active:bg-blue-100"
                >
                    <IconLangEnUs class="w-4 mr-2" /> English
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.secondary {
    @apply border-primary-700 bg-white text-primary-700;

    &:hover {
        @apply bg-gray-100;
    }
}
</style>
