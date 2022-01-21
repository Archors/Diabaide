<template>
  <div>
    <v-app :style="{ background: $vuetify.theme.themes[theme].pale }">
      <v-main>
        <v-container>
          <router-view />
        </v-container>
      </v-main>
      <Footer v-if="connectionStatus === 1" />
    </v-app>
  </div>
</template>

<script>
import NavbarDesktop from "./components/NavbarDesktop";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    NavbarDesktop,
    Footer,
  },

  data: () => ({}),
  computed: {
    connectionStatus() {
      return this.$store.getters.connection_status;
    },
    theme() {
      return "light";
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat");
#app {
  font-family: "Montserrat", Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
