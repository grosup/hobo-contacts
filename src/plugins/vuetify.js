import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";

const Lighttheme = {
  variables: {},
  colors: {
    primary: "#ee8a6a",
	primaryLight: "#f6c1b0",
    info: "#0cb9c5",
    success: "#05b187",
    accent: "#fc4b6c",
    warning: "#fec90f",
    error: "#fc4b6c",
    secondary: "#0cb9c5",
    superLight: "#ffffff",
  },
};

export default createVuetify({
  theme: {
    themes: {
      light: Lighttheme,
    },
  },
  defaults: {
    VBtn: {
      color: "primary",
      rounded: "md",
      flat: true,
      fontWeight: "400",
      letterSpacing: "0",
    },
    VCard: {
      flat: true,
      elevation: 10,
    },
  },
});
