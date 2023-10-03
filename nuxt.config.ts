export default defineNuxtConfig({
  /*nitro: {
    preset: 'vercel-edge',
  },*/
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
  ],
  app: {
    //pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {name: 'format-detection', content: 'telephone=no'},
        {name: 'theme-color', content: '#F68757'},
        {property: 'og:type', content: 'website'},
      ],
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
      ],
      script: [
        {src: "https://cdnjs.cloudflare.com/ajax/libs/webfont/1.6.28/webfontloader.js",},
        {
          innerHTML: `WebFont.load({
            google: {families: ['Bricolage Grotesque:300,400,600,700,800']},
            custom: {families: ['Monument:n8'], urls:['/css/font.css']},
          });`,
          type: 'text/javascript'
        }
      ],
    }
  },
  postcss: {
    plugins: {
      'postcss-import': {},
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
  ],
  i18n: {
    vueI18n: './i18n.config.ts',
    experimental: {
      jsTsFormatResource: true
    },
    locales: [
      {
        name: 'Français',
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr-fr.ts'
      },
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en-us.ts'
      }
    ],
    strategy: "prefix",
    langDir: 'lang/',
    lazy: true,
    defaultLocale: 'fr',
  }
});
