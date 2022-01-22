<template>
  <v-bottom-navigation
    fixed
    dense
    app
    horizontal
    grow
    color="primary"
    background-color="white"
  >
    <v-btn to="home">
      <v-icon x-large>mdi-home</v-icon>
    </v-btn>
    <v-btn to="meal">
      <v-icon x-large>mdi-noodles</v-icon>
    </v-btn>
    <v-btn to="injection">
      <v-icon x-large>mdi-hospital-box</v-icon>
    </v-btn>
    <v-btn to="profil">
      <v-icon x-large>mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
