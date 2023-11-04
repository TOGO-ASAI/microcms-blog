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
    public: {
      apiKey: process.env.API_SECRET,
      baseUrl: process.env.BASE_URL,
    },
  },
});
