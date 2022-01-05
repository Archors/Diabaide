<template>
  <v-bottom-navigation
    class="hidden-lg-and-up"
    :value="value"
    color="primary"
    grow
  >
    <v-btn to="home">
        <v-icon x-large>mdi-home</v-icon>
    </v-btn>

    <v-btn to="meal">
        <v-icon x-large>mdi-noodles</v-icon>
    </v-btn>

    <v-btn to="profil">
        <v-icon x-large>mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>