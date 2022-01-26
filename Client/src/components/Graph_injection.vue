<template>
  <div>
    <div class="text-h6">Historique des dernières injections</div>
    <div>
      <v-frappe-chart  v-if="Show"
        type="line"
        :labels="timestamp"
        :data="[{ values: injections }]"
        :colors="['red']"
        :lineOptions="{
          regionFill: 1,
        }"
      />
    </div>
    <div v-if="!Show">
    Aucune injection référencée
  </div>
  </div>
</template>

<script>
import {updateInjections}  from "../API/updateInjections";
export default {
  data: () => ({
    injections: [1, 2, 3, 4, 5, 6, 7],
    timestamp: ["", "", "", "", "", "", ""],
    Show : false,
  }),
  created() {
    updateInjections()
  },
  computed: {},
  watch: {
    "$store.state.value_history_injections": function () {
      if(Object.keys(this.$store.getters.value_history_injections).length > 1){
        this.injections = this.$store.getters.value_history_injections;
        this.Show = true
      }
    },
    "$store.state.value_timestamp_injections": function () {
      if(Object.keys(this.$store.getters.value_timestamp_injections).length > 1)
        this.timestamp = this.$store.getters.value_timestamp_injections;
    },
  },
};
</script>
