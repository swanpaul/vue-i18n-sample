import { createI18n } from 'vue-i18n'
import tw from './zh-TW.json'
import us from './en-US.json'

const i18n = createI18n({
    legacy: false,
    locale: 'zh-TW',
    globalInjection: true,
    messages: { 'zh-TW': tw, 'en-US': us },
})

const locales = {
    'en-US': () => import('./en-US.json'),
    'zh-TW': () => import('./zh-TW.json'),
}

// 也可以使用動態方式載入
// const locales = import.meta.glob('./*.json', { import: 'default' })

export async function setLocale(locale) {
    if (i18n.global.availableLocales.includes(locale)) {
        i18n.global.locale.value = locale
        return
    }

    const messages = await loadLocaleMessages(locale)
    i18n.global.setLocaleMessage(locale, messages)
    i18n.global.locale.value = locale
}

async function loadLocaleMessages(locale) {
    const localePath = `./${locale}.json`
    if (locales[localePath]) {
        return await locales[localePath]()
    } else {
        throw new Error(`${locale} not found`)
    }
}

export default i18n
