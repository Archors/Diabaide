<template>
  <div class="container">
    <div class="bandeau">
      <h1>Bonjour {{ user.first_name }} {{ user.last_name }}</h1>
    </div>
    <v-divider></v-divider>
    <br>
    <br>
    <br>
    <h3>Taux actuel :</h3>
    <h1>
      {{ lastGlycemia }}
    </h1>
    <v-divider></v-divider>
    <br>
    <br>
    <br>
    <Graph />
  </div>
</template>

<script>
import Graph from "../components/Graph";
import { updateAPI } from "../API/updateAPI";

export default {
  components: {
    Graph,
  },
  data: () => ({
    user: {},
    history_glycemias: {},
    value_history_glycemias: {},
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
  },
  beforeDestroy() {
    this.cancelAutoUpdate();
  },
};
</script>

<!--<style scoped>
@import "../assets/style.css";
</style>-->