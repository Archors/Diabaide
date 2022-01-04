<template>
  <v-app>
    <NavbarDesktop />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
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
};
</script>
