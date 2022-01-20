<template>
  <v-card color = "secondary"  class="mx-auto text-center" max-width="750">
    <v-card-text>
      <div class="text-h6">History</div>
    </v-card-text>
    <v-card-text>
    
<v-frappe-chart
    type="line"
    :labels="['11h', '12h', '13h', '14h', '15h', '16h']"
    :data="[
        { values: glycemias}
    ]"
    :colors="['red']"
:lineOptions="{
    dotSize: 6 // default: 4
}"
/>
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
    },
  },
};
</script>

