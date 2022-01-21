<template id="list">
<div  >
              <v-card v-for="(item, index) in items" color="secondary" :key="item.title">
              <v-list-item
              :key="item.title"
            >
            <v-list-item-content>
          <span class="title" color="primary">{{ item.name }}</span>
          <p>{{ item.brand }} 
            <br>
            <br>
             {{ item.sugar}}g de glucides pour 100grammes
          </p>
          </v-list-item-content>
           </v-list-item>
           <v-divider
              :key="index"
            ></v-divider>
             </v-card>
       
    </div>
</template>

<script>
export default {
  data: () => ({
        items : [],
  }),
  created() {
     this.items = this.$store.getters.value_meals;
  },
  computed: {},
  watch: {
    "$store.state.value_meals": function () {
      this.items = this.$store.getters.value_meals;
      console.log(this.items)
    },
  },
  };
</script>