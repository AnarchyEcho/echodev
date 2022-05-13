import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      description: 'CV page made in Nuxt3',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [],
      link: [
        { rel: 'icon', type: 'image/icon', href: '/assets/logo.svg' },
      ],
      style: [{
        children: ':root { background-color: #222; color: #fff; font-family: arial; }',
      }],
      script: [],
    },
  },
  typescript: {
    strict: true,
  },
});
