<template>
<div>
  <v-toolbar-title class="font-weight-bold">
      Derniers repas consommés
  </v-toolbar-title>

  <v-card v-if="Show" class="col-sm" color="white" :class="'rounded-xl'">
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
              <strong>{{ el.name }}</strong>
            </v-col>
                <v-col>
                  <div class="text-caption">
                   glucides : {{ el.sugar }}g / 100g
                  </div>
                  <div class="text-caption">
                    consommé : {{ el.consumed }}g 
                  </div>
                </v-col>
          </v-row>
          <br />
           <strong>Total Glucides : {{ item.glucides}}g</strong>
          <v-divider></v-divider>
          
                
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
  <div v-if="!Show">Vous n'avez consommé aucun plat</div>
</div>
</template>

<script>
export default {
  data: () => ({
    items: [],
    meals: [],
    total: 0,
    Show: false,
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
    if(this.meals)
      this.Show = true;
  },
  computed: {
    
  },
  methods: {
    calculation(element) {
      var res = 0;
      element.forEach(item => {
        res = res + (parseInt(item.sugar) * parseFloat(item.consumed) / 100); 
      });
      return res;
    },
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
      this.Show = true;
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
