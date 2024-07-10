// 就近原則 (Colocation) 版本

import { createI18n } from 'vue-i18n'

import tw from './zh-TW'
import us from './en-US'

const i18n = createI18n({
    legacy: false,
    locale: 'zh-TW',
    messages: {
        'zh-TW': tw,
        'en-US': us,
    },
})

export default i18n
