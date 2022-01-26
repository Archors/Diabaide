<template id="list">
  <div>
    <div>
    <v-card  v-for="(item, index) in items" :key="index">
      <div v-if="index < limit_by">
        <v-list-item :key="index">
          <v-list-item-content>
            <h2 class="#303952--text">{{ item.name }}</h2>
            <p></p>
            <h4 class="#303952--text">{{ item.brand }}</h4>
            <br />
            <br />
            <p class="#303952--text">
              <span style="font-weight: bold">{{ item.sugar }} g</span> de
              glucides pour 100grammes
            </p>
          </v-list-item-content>
        </v-list-item>
      </div>
      <v-divider :key="index"></v-divider>
    </v-card >
    <a v-if="Show" href="javascript:void(0)" class="mt-1" @click="dynamic_toggle()">{{
      limit_by === 3 ? "Show more" : "Show less"
    }}</a>
    <br />
    <br />
    </div>
    <p v-if="!Show">Vous n'avez renseigné </p>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [],
    limit_by: 3,
    default_limit: 10,
    Show: false,
  }),
  created() {
    this.items = this.$store.getters.value_meals;
    this.default_limit = Object.keys(this.items).length;
    if(this.items)
      this.Show = true;
  },
  computed: {},
  methods: {
    dynamic_toggle() {
      this.limit_by = this.limit_by === 3 ? this.default_limit : 3;
    },
  },
  watch: {
    "$store.state.value_meals": function () {
      this.items = this.$store.getters.value_meals;
      this.Show = true;
    },
    items: function () {
      this.default_limit = Object.keys(this.items).length;
    },
  },
};
</script>
