<template>
  <v-card class="mx-auto">
    <v-card-text class="py-0">
      <v-timeline align-top dense>
        <v-timeline-item
          v-for="(item, index) in items"
          :key="index"
          color="pink"
          small
        >
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>{{ item.timestamp }}</strong>
            </v-col>
            <v-col>
              <v-row v-for="(el, idx) in item.meal" :key="idx">
                <v-col>
                <strong>{{ infoMeal(el).name }}</strong>
                </v-col>
                <v-col>
                <div class="text-caption">{{ infoMeal(el).sugar }}g / 100g</div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <br>
          <v-divider></v-divider>
        </v-timeline-item>
        
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script>
import {checkData} from "../API/checkData"
export default {
  data: () => ({
    items: [],
    meals: [],
    limit_by: 3,
    default_limit: 10,
  }),
  created() {
    checkData();
    this.meals = this.$store.getters.value_meals;
    this.items = this.$store.getters.history_meals;
    this.default_limit = Object.keys(this.items).length;
    console.log(this.meals)
  },
  computed: {},
  methods: {
    dynamic_toggle() {
      this.limit_by = this.limit_by === 3 ? this.default_limit : 3;
    },
    infoMeal(el) {
      return (this.meals).find((d) => d._id === el);
    },
  },
  watch: {
    "$store.state.history_meals": function () {
      this.items = this.$store.getters.history_meals;
    },
    "$store.state.value_meals": function () {
      this.meals = this.$store.getters.value_meals;
    },
    items: function () {
      this.default_limit = Object.keys(this.items).length;
    },
  },
};
</script>
