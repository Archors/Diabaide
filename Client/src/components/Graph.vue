<template>
  <v-card color = "secondary"  class="mx-auto text-center" max-width="750">
    <v-card-text>
      <div class="text-h6">History</div>
    </v-card-text>
    <v-card-text>
      <v-sheet color = "secondary">
        <v-sparkline 
          color = "primary"
          :value="glycemias"
          height="200"
          padding="15"
          stroke-linecap="round"
          smooth="5"
        >
          <template v-slot:label="item">{{ item.value }} mg</template>
        </v-sparkline>
      </v-sheet>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    glycemias: [],
  }),
  created() {
    //this.glycemias = this.$store.value_history_glycemias;
  },
  computed: {},
  watch: {
    "$store.state.value_history_glycemias": function () {
      this.glycemias = this.$store.getters.value_history_glycemias;
      console.log(this.glycemias)
    },
  },
};
</script>