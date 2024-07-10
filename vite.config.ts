import { fileURLToPath, resolve, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import svgLoader from 'vite-svg-loader'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { dirname } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            script: {
                propsDestructure: true,
            },
        }),
        vueJsx(),
        vueDevTools(),
        autoImport({ imports: ['vue', 'vue-router'], dts: './src/auto-imports.d.ts' }),
        components(),
        svgLoader(),
        VueI18nPlugin({
            include: resolve(dirname(fileURLToPath(import.meta.url)), './src/**'),
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
})
