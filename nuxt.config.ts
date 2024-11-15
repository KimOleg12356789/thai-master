// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: [
    "nuxt-swiper"
  ],

  css : ["~~/assets/main.scss"],

  components: [
    { path: '~/components/ui' },
    '~/components',
  ],

  vite: {
    css: {
        preprocessorOptions: {
            scss : {
              additionalData: `
                @use "~/assets/breakpoints";
                @use "~/assets/mixins";
              `,
            }
        },
    },
  },

  app: {
    head : {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
})
