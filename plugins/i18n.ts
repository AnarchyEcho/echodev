import { createI18n } from 'vue-i18n';
import en from '../locales/en.json';
import nb from '../locales/nb.json';

export default defineNuxtPlugin(({ vueApp }) => {
  const getLocale = () => {
    if (typeof window !== 'undefined') {
      const lang = window.navigator.language;
      const shortLang = lang.replace(/-[a-zA-Z]+/, '');
      return shortLang;
    }
  };
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: getLocale(),
    fallbackLocale: 'nb',
    messages: {
      en,
      nb,
    },
  });

  vueApp.use(i18n);
});
