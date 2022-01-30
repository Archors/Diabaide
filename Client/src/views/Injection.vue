<template>
  <div class="container">
     <div style="text-align:center">
       <h1 style="color:#d0364f ; font-variant-caps: all-small-caps; font-size:35px;">Injection d'insuline</h1>
    </div>
        <br>
    <div>
      <h3>Insuline à administrer :</h3>
      <br />
      <v-text-field
        dense
        v-model="glucides"
        prepend-icon="mdi-cards-heart"
        type="number"
        oninput="if(this.value < 0 || this.value > 1000) this.value = 0;"
        label="Glucides ingérés"
        required
      ></v-text-field>
      <v-text-field
        dense
        v-model="inject"
        prepend-icon="mdi-cards-heart"
        type="number"
        oninput="if(this.value < 0 || this.value > 1000) this.value = 0;"
        label="Quantité d'insuline*"
        required
      ></v-text-field>
      <div fill-height fluid>
        <v-row >
          <v-col style="text-align:left">
            <v-btn color="success" @click="injection"> Injecter </v-btn>
          </v-col>
          <v-col style="text-align:right">

            <v-btn class="primary" @click="suppLastInjection">Supprimer</v-btn>
          </v-col>

        </v-row>
        <br />
        <v-row>
          <v-col style="text-align:left">
            <v-btn color="error" @click="reset"> reset </v-btn>
          </v-col>
        </v-row>
        <br />
        <br />
        <v-divider></v-divider>
        <br>
        <br>
        <form-select-meal @glucidesMeal="getGlucides" />
      </div>
      <br />
      <h5>
        * : Cette application est une aide au calcul de glucides, les paramètres
        étant propres à chaque personne elle ne peut en aucun cas être désignée
        responsable d'un problème lié à un mauvais dosage d'insuline.
      </h5>
    </div>
    <v-snackbar v-model="addInjectionSnackbar" :timeout="3000">
      Injection ajoutée
    </v-snackbar>
    <v-snackbar v-model="delInjectionSnackbar" :timeout="3000">
      Injection supprimée
    </v-snackbar>
    <v-snackbar v-model="resetPumpSnackbar" :timeout="3000">
      Pompe reset
    </v-snackbar>
  </div>
</template>

<script>
import { injection } from "../Pump/injection";
import { reset } from "../Pump/reset";
import { checkData } from "../API/checkData";
import { addInjection } from "../API/add/addInjection";
import { delInjection } from "../API/delete/delInjection";
import TimelineMeal from "../components/TimelineMeal.vue";
import Graph_injection from "../components/Graph_injection.vue";
import SelectMeal from '../components/SelectMeal.vue';
import FormSelectMeal from '../components/FormSelectMeal.vue';

export default {
  components: {
    TimelineMeal,
    Graph_injection,
    SelectMeal,
    FormSelectMeal,
  },
    data() {
    return {
      user: {},
      inject: "",
      glucides: "",
      addInjectionSnackbar: false,
      delInjectionSnackbar: false,
      resetPumpSnackbar: false,
    };
  },
  created() {
    checkData();
    this.user = this.$store.getters.user;
  },
  methods: {
    injection() {
      injection(Math.round(this.inject * 2.83));
      addInjection(this.inject);
      this.addInjectionSnackbar = true;
      this.inject = 0;
    },
    reset() {
      this.resetPumpSnackbar = true;
      reset();
    },
    suppLastInjection() {
      this.delInjectionSnackbar = true;
      delInjection();
    },
    getGlucides(value) {
      this.glucides = value // Raja Tamil
   }
  },
  watch: {
    "$store.state.user": function () {
      this.user = this.$store.getters.user;
    },
    glucides: function () {
      this.inject = this.glucides / this.user.ratio;
    },
  },
};
</script>
