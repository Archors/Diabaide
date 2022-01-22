<template>
  <div>
    <div class="text-h6">History</div>
    <div>
      <v-frappe-chart
        type="line"
        :labels="timestamp"
        :data="[{ values: glycemias }]"
        :colors="['red']"
        :lineOptions="{
          regionFill: 1,
        }"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    glycemias: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    timestamp: ["", "", "", "", "", "", "", "", "", ""],
  }),
  created() {},
  computed: {},
  watch: {
    "$store.state.value_history_glycemias": function () {
      if(Object.keys(this.$store.getters.value_history_glycemias).length > 1)
        this.glycemias = this.$store.getters.value_history_glycemias;
    },
    "$store.state.value_timestamp_glycemias": function () {
      if(Object.keys(this.$store.getters.value_timestamp_glycemias).length > 1)
        this.timestamp = this.$store.getters.value_timestamp_glycemias;
    },
  },
};
</script>
