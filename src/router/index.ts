import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'i18n',
            component: () => import('../views/i18n-demo.vue'),
        },
        {
            path: '/colocation-demo',
            name: 'colocation-demo',
            component: () => import('../views/colocation-demo/index.vue'),
        },
    ],
})

export default router
