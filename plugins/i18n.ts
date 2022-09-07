import { createI18n } from 'vue-i18n';
import en from '../locales/en.json';
import nb from '../locales/nb.json';

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'nb',
    fallbackLocale: 'nb',
    messages: {
      en,
      nb,
    },
  });

  vueApp.use(i18n);
});
