<template>
  <div class="container">
     <div style="text-align:center">
       <h1 style="color:#d0364f ; font-variant-caps: all-small-caps; font-size:35px;">Bonjour {{ user.first_name }} {{ user.last_name }}</h1>
    </div>
    <br />
    <v-divider />
    <br />
    <h4>Votre dernier taux de glycémie enregistré :</h4>
    <h2>
      {{ lastGlycemia }}
    </h2>
    <br />
    <v-divider />
    <br />
    <v-row>
    
      <v-col cols="8"><h3>Ajout d'une glycémie :</h3></v-col>
      <v-col cols="4">
        <v-text-field
          class="ma-0 pa-0"
          v-model="glycemia"
          label="Glycemie"
          single-line
          prepend-icon="mdi-cards-heart"
          type="number"
          oninput="if(this.value < 0) this.value = 0;"
          dense
          hide-details
        />
      </v-col>
      <v-col cols="6"
        ><v-btn
          color="success"
          @click="addGlycemia"
          :disabled="this.glycemia == 0"
        >
          Ajout
        </v-btn></v-col
      >
      <v-col cols="6"
        ><v-btn @click="deleteGlycemia" color="primary">Supprimer</v-btn></v-col
      >
    </v-row>
    <br />
    <v-divider></v-divider>
    <br />
    <br />

    
      <Graph_glycemia v-if="history_glycemias" />
      <p v-else>Aucune(s) données(s) à afficher pour le graphe de la glycémie</p>
 

    <v-divider></v-divider>
    <br />
    <br />
    <v-divider></v-divider>
    <br />
    <TimelineMeal />
    <br />
    <v-snackbar v-model="addGlycemiaSnackbar" :timeout="3000">
      Glycémie ajoutée
    </v-snackbar>
    <v-snackbar v-model="delGlycemiaSnackbar" :timeout="3000">
      Glycémie supprimée
    </v-snackbar>
  </div>
</template>

<script>
import { updateAPI } from "../API/updateAPI";
import { addGlycemia } from "../API/add/addGlycemia";
import { delGlycemia } from "../API/delete/delGlycemia";
import Graph_glycemia from "../components/Graph_glycemia.vue";
import Graph_injection from "../components/Graph_injection.vue";
import TimelineMeal from "../components/TimelineMeal.vue";
export default {
  components: {
    Graph_glycemia,
    Graph_injection,
    TimelineMeal,
  },
  data: () => ({
    user: {},
    glycemia: 0,
    history_glycemias: {},
    value_history_glycemias: {},
    history_injections: {},
    value_history_injections: {},
    addGlycemiaSnackbar : false,
    delGlycemiaSnackbar : false,
  }),
  created() {
    this.timer = setInterval(async () => {
      await this.updateData();
    }, 300000);
    this.updateData();
  },
  methods: {
    async updateData() {
      await updateAPI();
      this.user = this.$store.getters.user;

      this.history_glycemias = this.$store.getters.history_glycemias;
      this.value_history_glycemias =
        this.$store.getters.value_history_glycemias;

      this.history_injections = this.$store.getters.history_injections;
      this.value_history_injections =
        this.$store.getters.value_history_injections;
    },
    cancelAutoUpdate() {
      clearInterval(this.timer);
    },
    addGlycemia() {
      this.addGlycemiaSnackbar = true;
      addGlycemia(this.glycemia);
      this.glycemia = 0;
    },
    deleteGlycemia() {
      this.delGlycemiaSnackbar = true;
      delGlycemia();
    },
  },
  computed: {
    lastGlycemia() {
      if (
        typeof this.$store.getters.value_history_glycemias !== "undefined" &&
        this.$store.getters.value_history_glycemias.length > 0
      )
        return (
          this.$store.getters.value_history_glycemias[
            this.$store.getters.value_history_glycemias.length - 1
          ] + " mg"
        );
      return "Pas d'historique de glycemie";
    },
  },
  watch: {
    "$store.state.user": function () {
      this.user = this.$store.getters.user;
    },
    "$store.state.history_glycemias": function () {
      this.history_glycemias = this.$store.getters.history_glycemias;
      this.value_history_glycemias =
        this.$store.getters.value_history_glycemias;
    },
  },
  beforeDestroy() {
    this.cancelAutoUpdate();
  },
};
</script>

<!--<style scoped>
@import "../assets/style.css";
</style>-->