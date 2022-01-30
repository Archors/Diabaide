<template>
  <v-card>
    <v-container fluid>
      <v-row
        align="center"
      >
        
        <v-col
          sm="12"
        >
          <v-select
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
  </v-card>
</template>

<script>
export default {
  data: () => ({
      items: [],
      value: [],
      choices : []
    
  }),
  created() {
       this.items = this.$store.getters.value_meals;
  },
  computed: {
  },
  methods: {
      
      
  },
  watch: {
       "$store.state.value_meals": function () {
      this.items = this.$store.getters.value_meals;
  },
  items: function () { 
      if(this.items){
      this.items.forEach(el => {
         this.choices.push(`${el.name} - ${el.brand} (${el.sugar}g glucides)`)
          })}}
}
}
</script>
