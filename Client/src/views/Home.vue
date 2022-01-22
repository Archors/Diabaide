<template>
  <div class="container">
    <div class="bandeau">
      <h1>Bonjour {{ user.first_name }} {{ user.last_name }}</h1>
    </div>
    <v-divider></v-divider>
    <br>
    <span class="primary--text bold">Vous n'avez renseigné aucune donnée aujourd'hui !</span>
    <br>
    <br>
    <h3>Votre dernier taux enregistrer :</h3>
    <h1>
      {{ lastGlycemia }}
    </h1>
    <v-divider></v-divider>
    <br>
    <br>
    <br>
    <Graph_glycemia v-if="history_glycemias" />
      <p v-else> Aucune données à afficher pour le graphe de la glycémie</p>
      <v-divider></v-divider>
    <br>
    <br>
    <br>
    <Graph_injection v-if="history_injections"/>
      <p v-else> Aucune données à afficher pour le graphe des injections </p>
  </div>
</template>

<script>
import { updateAPI } from "../API/updateAPI";
import Graph_glycemia from '../components/Graph_glycemia.vue';
import Graph_injection from '../components/Graph_injection.vue';

export default {
  components: {
    Graph_glycemia,
    Graph_injection,
  },
  data: () => ({
    user: {},
    history_glycemias: {},
    value_history_glycemias: {},
    history_injections: {},
    value_history_injections: {},
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
  },
  computed: {
    lastGlycemia() {
      if (
        typeof this.value_history_glycemias !== "undefined" &&
        this.value_history_glycemias.length > 0
      )
        return (
          this.value_history_glycemias[
            this.value_history_glycemias.length - 1
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
    "$store.state.history_injections": function () {
      this.history_injections = this.$store.getters.history_injections;
      this.value_history_injections =
        this.$store.getters.value_history_injections;
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