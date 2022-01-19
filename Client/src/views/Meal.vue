<template>
<div class="container">

  <div class="bandeau">
    <h1>Ajoutez vos apports en glucides</h1>
  </div>
  
  <br>

    <div class="row">
      <v-card class=" bloc col-sm">
        <h4>ajout manuel</h4>
        <input type="text" name="glucides"> grammes</input>
        <br>
        <br>

        <v-btn color="primary">Ajouter</v-btn>
      </v-card>
      <br>
      <v-card class="bloc col-sm">
      <h4>scanner code barre</h4>
        <v-icon color="primary" size="100">mdi-barcode</v-icon>
        <h2 color="primary">Coming soon...</h2>
      </v-card>
    </div>
    <div class="row">
    <br>
      <v-card class="bloc col-sm" >
        <h4>Banque de plats enregistrés</h4>
      </v-card>
    </div>
  </div>

</template>

<style>
@import "../assets/style.css";
</style>
