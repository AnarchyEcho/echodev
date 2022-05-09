import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      "title": "CVNuxt",
      "charset": "utf-8",
      "viewport": "width=device-width, initial-scale=1",
      "meta": [],
      "link": [],
      "style": [{
        children: ":root { background-color: #222; color: #fff; }"
      }],
      "script": []
    }
  }
})
