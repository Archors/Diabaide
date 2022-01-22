<template>
  <div>
    <div class="text-h6">History</div>
    <div>
      <v-frappe-chart
        type="line"
        :labels="timestamp"
        :data="[{ values: injections }]"
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
    injections: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    timestamp: ["", "", "", "", "", "", "", "", "", ""],
  }),
  created() {},
  computed: {},
  watch: {
    "$store.state.value_history_injections": function () {
      this.injections = this.$store.getters.value_history_injections;
    },
    "$store.state.value_timestamp_injections": function () {
      this.timestamp = this.$store.getters.value_timestamp_injections;
    },
  },
};
</script>
