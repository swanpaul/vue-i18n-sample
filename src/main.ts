import './assets/css/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from './locales-colocation-version'
// import i18n from './locales'

const app = createApp(App)
app.use(createPinia())
app.use(router)

app.use(i18n)
app.mount('#app')
