import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  ssr: false,
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
    public: {
      apiKey: process.env.NUXT_API_KEY,
      baseUrl: process.env.NUXT_PUBLIC_API_URL,
    },
  },
});
