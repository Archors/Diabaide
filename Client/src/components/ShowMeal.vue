<template id="list">
  <div>
    <v-card v-for="(item, index) in items" :key="item.title">
      <div v-if="index < limit_by">
        <v-list-item :key="item.title">
          <v-list-item-content>
            <span class="title">{{ item.name }}</span>
            <p>
              {{ item.brand }}
              <br />
              <br />
              {{ item.sugar }}g de glucides pour 100grammes
            </p>
          </v-list-item-content>
        </v-list-item>
      </div>
      <v-divider :key="index"></v-divider>
    </v-card>
    <a href="javascript:void(0)" class="mt-1" @click="dynamic_toggle()">{{
      limit_by === 3 ? "Show more" : "Show less"
    }}</a>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [],
    limit_by: 3,
    default_limit: 10,
  }),
  created() {
    this.items = this.$store.getters.value_meals;
    this.default_limit = Object.keys(this.items).length;
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
    },
    items: function () {
      this.default_limit = Object.keys(this.items).length;
    },
  },
};
</script>
