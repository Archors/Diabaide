<template>
  <div class="container">
    <div class="bandeau">
      <h1>Injection d'insuline</h1>
    </div>

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
        <v-row class="align-items: center">
          <v-spacer />
          <v-col>
            <v-btn color="success" @click="injection"> Injecter </v-btn>
          </v-col>
          <v-spacer />
          <v-col>
            <v-btn class="primary" @click="suppLastInjection">Supprimer</v-btn>
          </v-col>
          <v-spacer />
        </v-row>
        <br />
        <v-row>
          <v-spacer></v-spacer>
          <v-col><v-btn color="error" @click="reset"> reset </v-btn> </v-col>
          <v-spacer></v-spacer>
        </v-row>
        <br />
        <br />
        <v-divider></v-divider>
        <Graph_injection />
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

export default {
  components: {
    TimelineMeal,
    Graph_injection,
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
