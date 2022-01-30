<template>
  <div class="container">
    <div style="background-color:#B5364E; text-align:center; margin:-23px -25px 23px; border-radius:0px 0px 30px 30px" >
      <h1 style="color:white">Ajoutez vos apports en glucides</h1>
     
        </div> Ici, vous pouvez ajoutez vos plats, recettes et envies afin de les
      retrouver plus facilement
          <br />
      <br />
      <br />

    <br />
    <v-row>
      <v-card class=" col-sm" color="white" :class="'rounded-xl'">
        <AddMealForm />
        <v-divider></v-divider>
        <br />
      </v-card>
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
