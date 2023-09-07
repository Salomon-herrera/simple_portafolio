// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@vueuse/motion/nuxt',
  ],

  unocss: {
    uno: true,
    preflight: true
  },

  devtools: { enabled: true }
})
