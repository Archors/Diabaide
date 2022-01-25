<template>
  <v-card>
    <v-card-text>
      <v-timeline align-top dense>
        <v-timeline-item
          v-for="(item, index) in items"
          :key="index"
          color="primary"
          small
        >
          <v-row>
            <p class="forth--text bold">
              <u
                ><strong
                  >{{
                    new Date(item.timestamp).getDate().toString() +
                    "  " +
                    tab_mois[new Date(item.timestamp).getMonth()]
                  }}
                </strong>
                &nbsp;
                {{
                  new Date(item.timestamp).getHours() +
                  ":" +
                  new Date(item.timestamp).getMinutes()
                }}</u
              >
            </p>
            <br />
          </v-row>
          <v-row v-for="(el, idx) in item.meal" :key="idx">
            <v-col>
              <strong>{{ infoMeal(el).name }}</strong>
            </v-col>
            <v-col>
<<<<<<< HEAD
              <div class="text-caption">{{ infoMeal(el).sugar }}g / 100g</div>
            </v-col>
          </v-row>

=======
              <v-row v-for="(el, idx) in item.meal" :key="idx">
                <v-col>
                  <strong>{{ infoMeal(el).name }}</strong>
                </v-col>
                <v-col>
                  <div class="text-caption">
                    {{ infoMeal(el).sugar }}g / 100g
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
>>>>>>> cb4521a412f796c274562a4623ae3fee957a2f77
          <br />
          <v-divider></v-divider>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script>
<<<<<<< HEAD
import { checkData } from "../API/checkData";
=======
>>>>>>> cb4521a412f796c274562a4623ae3fee957a2f77
export default {
  data: () => ({
    items: [],
    meals: [],
    total: 0,
    tab_mois: [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ],
    limit_by: 3,
    default_limit: 10,
  }),
  created() {
    this.meals = this.$store.getters.value_meals;
    this.items = this.$store.getters.history_meals;
    this.default_limit = Object.keys(this.items).length;
<<<<<<< HEAD
=======
    console.log(this.meals);
>>>>>>> cb4521a412f796c274562a4623ae3fee957a2f77
  },
  computed: {
  },
  methods: {
    dynamic_toggle() {
      this.limit_by = this.limit_by === 3 ? this.default_limit : 3;
    },
    infoMeal(el) {
      return this.meals.find((d) => d._id === el);
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
