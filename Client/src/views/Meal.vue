<template>
<div class="container">

  <div class="bandeau">
    <h1>Ajoutez vos apports en glucides</h1>
  </div>
  <br>
    <div class="row">
      <v-card class="bloc col-sm">
       <AddMealForm />
        <v-btn
        class="mx-2"
        fab
        dark
        color="primary"
        >
        <v-icon  size="35">mdi-barcode</v-icon>
        </v-btn >
        <br>
        <br>
        
      </v-card>
      <br>
    </div>
    <div class="row">
    <br>
      <v-card class="bloc col-sm" >
        <h4>Banque de plats enregistrés</h4>
      </v-card>
    </div>
  </div>
</template>


<script>
import AddMealForm from "../components/AddMealForm";
export default {
  components: {
    AddMealForm,
  }}
</script>
