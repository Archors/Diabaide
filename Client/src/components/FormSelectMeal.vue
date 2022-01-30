<template>
  <v-card>
    <v-container fluid>
      <v-row align="center">
        <v-col sm="12">
          <v-select
            v-model="selectedFood"
            chips
            label="Meals"
            multiple
            outlined
            :items="choices"
          >
          </v-select>
        </v-col>
      </v-row>
    </v-container>
    <v-text-field
      v-for="(field, idx) in fields"
      v-model="field.value"
      :label="selectedFood[idx]"
      v-bind:key="idx"
    ></v-text-field>
    <v-btn @click="submit">Ajouter le repas</v-btn>
    <br/>
    <br/>
    <div v-if="show">
    <p> Il y a  {{Number((glucides).toFixed(2))}}g de glucides dans ce repas</p>
    </div>
  </v-card>
</template>

<script>
import { addHistoryMeal } from "../API/add/addHistoryMeal";
export default {
  data: () => ({
    fields: [],
    value: [],
    choices: [],
    items: [],
    selectedFood: [],
    dict: {},
    toSave: [],
    glucides : 0,
    show : false,
  }),

  created() {
    this.items = this.$store.getters.value_meals;
  },
  computed: {},
  watch: {
    "$store.state.value_meals": function () {
      this.items = this.$store.getters.value_meals;
    },
    items: function () {
      if (Object.keys(this.items).length > 0) {
        this.items.forEach((el) => {
          this.choices.push(
            `${el.name} - ${el.brand} - (${el.sugar}g glucides)`
          );
          this.dict[`${el.name} - ${el.brand} - (${el.sugar}g glucides)`] =
            JSON.parse(`
        {
            "name":" ${el.name}",
            "sugar":  ${el.sugar},
            "brand": " ${el.brand}",
            "barCode": "${el.barCode}"
        }`);
        });
      }
    },

    selectedFood: function () {
      if (Object.keys(this.selectedFood).length > 0) {
        this.fields = [];
        this.selectedFood.forEach((el) => {
          this.fields.push({
            key: el,
            value: "",
          });
        });
      }
    },
  },
  methods: {
      calculation(element) {
      var res = 0;
      element.forEach(item => {
        res = res + (parseInt(item.sugar) * parseFloat(item.consumed) / 100); 
      });
      return res;
    },
    submit() {
      this.fields.forEach((item) => {
        this.dict[item.key].consumed = item.value;
      });
      Object.values(this.dict).forEach((el) => {
        if ("consumed" in el) this.toSave.push(el);
      });
      this.glucides = this.calculation(this.toSave)
      this.show = true
       addHistoryMeal(this.toSave, this.glucides)
       this.$emit('glucidesMeal', this.glucides );

       
    },
  },
};
</script>
