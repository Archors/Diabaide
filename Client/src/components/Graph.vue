<template>
  <v-card color = "secondary"  class="mx-auto text-center" max-width="750">
    <v-card-text>
      <div class="text-h6">History</div>
    </v-card-text>
    <v-card-text>
    
        <v-frappe-chart
          type='axis-mixed'
          :labels= timestamp
          :data="[
              { values: glycemias}
          ]"
          :colors="['red']"
          :lineOptions="{
            dotSize: 6 // default: 4
          }"/>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    glycemias: [],
    timestamp: [],
  }),
  created() {
    //this.glycemias = this.$store.value_history_glycemias;
  },
  computed: {},
  watch: {
    "$store.state.value_history_glycemias": function () {
      this.glycemias = this.$store.getters.value_history_glycemias;
    },
    "$store.state.value_timestamp_glycemias": function () {
      this.timestamp = this.$store.getters.value_timestamp_glycemias;
    },
  },
};
</script>

