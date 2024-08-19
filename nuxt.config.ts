export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: '@nuxt-themes/docus',
  devtools: { enabled: true },

  modules: [
    // Remove it if you don't use Plausible analytics
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible'
  ],

  app: {
    head: {
      script: [
        {
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9261174368196541',
          async: true,
          crossorigin: 'anonymous'
        },
        {
          src: '//imamictra.com/rT7M9xuQZdU5/67357',
          async: true,
          crossorigin: 'anonymous'
        },
      ]
    }
  }
})
