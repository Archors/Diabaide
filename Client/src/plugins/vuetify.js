import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        primary: '#d0364f',
        secondary: '#f1f0e6',
        blue: colors.shades.black,
        error: colors.red.accent3,
        contrast : "#000000"
      },
      dark: {
        primary: colors.blue.lighten3,
      },
    },
  },
});
