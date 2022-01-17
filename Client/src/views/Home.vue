<template>
  <div>
    <h1>Bonjour {{ user.first_name }}</h1>
    <h2>Taux actuel :</h2>
    <h1>
      {{ lastGlycemia }}
    </h1>
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
      this.history_glycemie = this.$store.getters.history_glycemias;
    },
    cancelAutoUpdate() {
      clearInterval(this.timer);
    },
  },
  computed: {
    lastGlycemia() {
      if (
        typeof this.history_glycemias !== "undefined" &&
        this.history_glycemias.length > 0
      )
        return (
          this.history_glycemias.glycemie[
            this.history_glycemias.glycemias.length - 1
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
    },
  },
  beforeDestroy() {
    this.cancelAutoUpdate();
  },
};
</script>