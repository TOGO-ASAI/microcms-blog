import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  experimental: {
    inlineSSRStyles: false,
  },

  css: ["vuetify/styles"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
  },

  modules: [
    async (_, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config: any) =>
        config.plugins.push(vuetify({}))
      );
    },
  ],

  runtimeConfig: {
    apiKey: process.env.NUXT_API_KEY,
    public: {
      baseUrl: process.env.NUXT_PUBLIC_API_URL,
    },
  },
});
