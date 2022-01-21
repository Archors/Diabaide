<template>
  <v-bottom-navigation
  fixed
  grow
  color="secondary"
  >
    <v-btn to="home">
        <v-icon x-large color="primary">mdi-home</v-icon>
    </v-btn>
    <v-btn to="meal">
        <v-icon x-large color="primary">mdi-noodles</v-icon>
    </v-btn>
    <v-btn to="injection">
        <v-icon x-large color="primary">mdi-hospital-box</v-icon>
    </v-btn>
    <v-btn to="profil">
        <v-icon x-large color="primary">mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>