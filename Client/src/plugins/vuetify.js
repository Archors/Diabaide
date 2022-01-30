import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        primary: "#d0364f",
        secondary: "#f1f0e6",
        third: "#88a7e0",
        forth: "#303952",
        pale: "#f1e4e4",
        pale_one: "#D96575",
        pale_two: "#E1939B",
        pale_three: "#E9C2C1",
        error: colors.red.accent3,
        button: colors.shades.blue,
      },
      dark: {
        primary: colors.blue.lighten3,
      },
    },
  },
});
