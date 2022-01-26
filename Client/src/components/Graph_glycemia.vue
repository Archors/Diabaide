<template>
  <div >
    <div class="text-h6">Historique des dernières glycémie</div>
    <div>
      <v-frappe-chart  v-if="Show"
        type="line"
        :labels="timestamp"
        :data="[{ values: glycemias }]"
        :colors="['red']"
        :lineOptions="{
          regionFill: 1,
        }"
      />
    </div>
  <div v-if="!Show">
    Aucune valeur de glycémie
  </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    glycemias: [1, 2, 3, 4, 5, 6, 7],
    timestamp: ["", "", "", "", "", "", ""],
    Show : false
  }),
  created() {},
  computed: {
  },
  watch: {
    "$store.state.value_history_glycemias": function () {
      if(Object.keys(this.$store.getters.value_history_glycemias).length > 1){
        this.glycemias = this.$store.getters.value_history_glycemias;
        this.Show = true;
      }
    },
    "$store.state.value_timestamp_glycemias": function () {
      if(Object.keys(this.$store.getters.value_timestamp_glycemias).length > 1)
        this.timestamp = this.$store.getters.value_timestamp_glycemias;
    },
  },
};
</script>
