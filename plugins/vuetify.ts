import { createVuetify } from "vuetify";

export default defineNuxtPlugin((nuxtApp) => {
  const myTheme = {
    dark: false,
    colors: {
      background: "#76cbf694",
    },
  };

  const vuetify = createVuetify({
    theme: {
      defaultTheme: "myTheme",
      themes: {
        myTheme,
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
});
