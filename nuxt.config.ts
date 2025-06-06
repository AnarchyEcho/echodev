// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxt/image'],
  plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],
  app: {
    head: {
      title: 'EchoDev',
      meta: [
        {
          name: 'description',
          content: 'Echo\'s homepage and tools',
        },
        {
          name: 'keywords',
          content: 'Typescript, Vue, Nuxt, Homepage, CV, Resume, Portfolio',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/ico',
          href: '/logo.ico',
        },
      ],
    },
  },
});
