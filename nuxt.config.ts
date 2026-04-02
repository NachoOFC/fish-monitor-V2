// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/',
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false }, // Disabled in production
  
  // Optimize for production
  nitro: {
    preset: 'netlify',
    minify: true,
  },
  
  // Performance optimizations
  build: {
    transpile: ['chart.js'],
  },
  
  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
  },
  
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
  ],

  fonts: {
    families: [
      {
        name: "Roboto",
        provider: "google",
      },
    ],
    defaults: {
      fallbacks: {
        serif: ["Times New Roman"],
        "sans-serif": ["Arial"],
        monospace: ["Courier New"],
      },
      weights: [400, 500, 600, 700],
      styles: ["normal", "italic"],
      subsets: ["latin", "latin-ext"],
    },
  },

  icon: {
    class: "nuxt-icon",
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || "https://api.example.com",
      siteUrl: process.env.SITE_URL || "https://fish-monitor.netlify.app",
    },
  },

  css: ["~/assets/css/main.css"],
});