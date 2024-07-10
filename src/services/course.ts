import type { CourseDataInfo } from '@/types'

export function listCourse() {
    const list: CourseDataInfo[] = [
        {
            id: '1',
            thumb: 'course-pinia',
            titleLanguages: {
                'zh-TW': 'Vue 和 Pinia 整合實例：高效開發的最佳實踐',
                'en-US':
                    'Vue and Pinia Integration Example: Best Practices for Efficient Development',
            },
            tags: ['Vue', 'Pinia'],
            time: 30,
        },
        {
            id: '2',
            thumb: 'course-figma-to-code',
            titleLanguages: {
                'zh-TW': 'Figma to Code：切版技巧一次學到位',
                'en-US': 'Figma to Code: Mastering Layout Techniques in One Go',
            },
            tags: ['Vue', 'Figma'],
            time: 20,
        },
        {
            id: '3',
            thumb: 'course-nuxt3',
            titleLanguages: {
                'zh-TW': '從零開始學習 Nuxt 3：快速掌握 Vue 前端框架',
                'en-US':
                    'Learning Nuxt 3 from Scratch: Mastering the Vue Front-end Framework Quickly',
            },
            tags: ['Vue', 'Nuxt3'],
            time: 60,
        },
        {
            id: '4',
            thumb: 'course-coding-style',
            titleLanguages: {
                'zh-TW': '打造優雅的前端代碼風格',
                'en-US': 'Crafting Elegant Front-end Code Style',
            },
            tags: ['Coding Style'],
            time: 20,
        },
    ]

    return list
}
