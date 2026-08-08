export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',
  future: { compatibilityVersion: 4 },
  modules: ['@nuxt/content'],
  devtools: { enabled: true },
  app: {
    titleTemplate: '%s - Blog Nacional',
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Blog de noticias nacionales construido con Nuxt Content' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:400,300,600' },
        { rel: 'stylesheet', href: '/css/main.css' }
      ]
    }
  }
})
