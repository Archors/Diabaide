<template>
  <div class="container">
      <div style="text-align:center">
      <h1 style="color:#d0364f ; font-variant-caps: all-small-caps;font-size:35px;">Ajoutez vos apports en glucides</h1>
      Ici, vous pouvez ajoutez vos plats, recettes et envies afin de les
      retrouver plus facilement</div>
      
    <br />
    <br />
    <v-row>
        <AddMealForm />
        <v-divider></v-divider>
        <br />
      <br />
    </v-row>
    <br />
    <br />
    <v-divider></v-divider>
    <br />
    <v-row>
      
        <br />
        <ShowMeal />

    </v-row>
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
