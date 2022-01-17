<template>
  <v-card class="mx-auto text-center" max-width="750">
    <v-card-text>
      <div class="text-h6">Historique</div>
    </v-card-text>
    <v-card-text>
      <v-sheet color="rgba(0, 0, 0, .12)">
        <v-sparkline
          :value="glycemias"
          color="rgba(255, 255, 255, .7)"
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
    glycemias: {},
  }),
  created() {
    this.glycemias = this.$store.value_history_glycemias;
  },
  computed: {},
};
</script>