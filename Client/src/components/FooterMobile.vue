<template>
  <v-bottom-navigation
  grow
  color="#D0364F"
  >
    <v-btn to="home">
        <v-icon x-large color="#D0364F">mdi-home</v-icon>
    </v-btn>
    <v-btn to="meal">
        <v-icon x-large color="#D0364F">mdi-noodles</v-icon>
    </v-btn>
    <v-btn to="injection">
        <v-icon x-large color="#D0364F">mdi-hospital-box</v-icon>
    </v-btn>
    <v-btn to="profil">
        <v-icon x-large color="#D0364F">mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>