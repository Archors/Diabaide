<template>
  <div>
    <v-app>
      <v-main>
        <router-view />
      </v-main>
      <Footer v-if="connectionStatus === 1"/>
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

  data: () => ({
    //
  }),
  computed: {
    connectionStatus() {
      return this.$store.getters.connection_status;
    },
  },
};
</script>
