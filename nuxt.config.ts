// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true
  },
  typescript: {
    strict: true,
  },
  modules: ['@nuxt/image', "@nuxt/icon"],
  plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],
})