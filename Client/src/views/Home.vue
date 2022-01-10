<template>
  <div>
    <h1>Bonjour {{ user.first_name }}</h1>
    <h2>Taux actuel :</h2>
    <h1>{{ this.history_glycemie.glycemie[this.history_glycemie.glycemie.length - 1] }} mg</h1>
    <Graph/>
  </div>
</template>

<script>
import Graph from "../components/Graph";
export default {
  components: {
    Graph,
  },
  data: () => ({
    user: {},
    history_glycemie: {},
  }),
  created() {
    //Get the data from the store
    this.user = this.$store.getters.user
    this.history_glycemie = this.$store.getters.history_glycemie
  },
};
</script>