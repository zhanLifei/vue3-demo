import { createI18n } from 'vue-i18n'
import en from "./en"
import ja from "./ja"
import ko from "./ko"
import tc from "./tc"

const messages = {
  en,
  ja,
  ko,
  tc
}


const localeData = {
 legacy: false, // composition API
 globalInjection: true, //全局生效$t
 locale: en, // 默认cn翻译
 messages
}

export function setupI18n (app) {
 const i18n = createI18n(localeData)
 app.use(i18n)
}