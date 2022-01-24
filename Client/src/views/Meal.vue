<template>
  <div>
    <div>
      <h1>Ajoutez vos apports en glucides</h1>
      Ici vous pouvez ajoutez vos plats, recettes et envies afin de les
      retrouver plus facilement
      <br />
      <br />
      <br />
    </div>
    <br />
    <div class="row">
      <v-card class="bloc col-sm">
        <AddMealForm />
        <v-divider></v-divider>
        <br />
      </v-card>
      <br />
    </div>
    <br />
    <br />
    <v-divider></v-divider>
    <br />
    <h1>Banque de plats enregistrés</h1>
    <br />
    <ShowMeal />
  </div>
</template>


<script>
import AddMealForm from "../components/AddMealForm";
import ShowMeal from "../components/ShowMeal";
import { checkData } from "../API/checkData";

export default {
  components: {
    AddMealForm,
    ShowMeal,
  },
  created() {
    checkData();
  },
};
</script>
