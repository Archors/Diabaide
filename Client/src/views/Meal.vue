<template>
<div class="container">

  <div >
    <h1>Ajoutez vos apports en glucides</h1>
  </div>
  <br>
    <div class="row">
      <v-card class="bloc col-sm" color="secondary">
        Voulez-vous ajouter un repas ?
        <v-btn
        class="mx-2"
        fab
        dark
        color="primary"
        >
        <v-icon  size="35">mdi-barcode-scan</v-icon>
        </v-btn >
       <AddMealForm />
        <v-divider></v-divider>
        <br>
      </v-card>
      <br>
    </div>
    <br>
    <br>
    <div class="row">
    <br>
      <v-card class="bloc col-sm" color="secondary" >
        <h4>Banque de plats enregistrés</h4>
        <br>
        <ShowMeal/>
      </v-card>
    </div>
  </div>
</template>


<script>
import AddMealForm from "../components/AddMealForm";
import ShowMeal from "../components/ShowMeal";
export default {
  components: {
    AddMealForm,
    ShowMeal,
  }}
</script>
