
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        // https://nuxt.com/docs/getting-started/assets#global-styles-imports
        scss: {
          additionalData: '@import "@/styles/common.scss";',
        },
      },
    },
  },

  // https://nuxt.com/docs/api/configuration/nuxt-config#app
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },

  // https://nuxt.com/docs/api/configuration/nuxt-config#css
  css: [
    '@/styles/pageStyles.scss',
  ],
});
