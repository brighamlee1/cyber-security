// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {}
        },
      },
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {}
    }
  },
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..'],
    },
  },
}