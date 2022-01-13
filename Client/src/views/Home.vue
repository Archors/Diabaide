<template>
  <div>
    <h1>Bonjour {{ user.first_name }}</h1>
    <h2>Taux actuel :</h2>
    <h1>
      {{ history_glycemie.glycemie[history_glycemie.glycemie.length - 1] }}
      mg
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
    history_glycemie: {},
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
      this.history_glycemie = this.$store.getters.history_glycemie;
    },
    cancelAutoUpdate() {
      clearInterval(this.timer);
    },
  },
  watch: {
    "$store.state.user": function () {
      this.user = this.$store.getters.user;
    },
    "$store.state.user" : function () {
      this.history_glycemie = this.$store.getters.history_glycemie;
    }
  },
  beforeDestroy() {
    this.cancelAutoUpdate();
  },
};
</script>