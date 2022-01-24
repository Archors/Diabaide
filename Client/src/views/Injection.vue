<template>
  <div class="container">
    <div class="bandeau">
      <h1>Injection d'insuline</h1>
    </div>

    <div>
      <h3>Insuline à administrer :</h3>
      <br />
      <v-text-field
        dense
        v-model="inject"
        prepend-icon="mdi-cards-heart"
        type="number"
        oninput="if(this.value < 0 || this.value > 1000) this.value = 0;"
        label="Quantité"
        required
      ></v-text-field>
      <div fill-height fluid>
        <v-row class="align-items: center">
          <v-col cols="6">
            <v-btn color="success" @click="injection"> Injecter </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn color="red" @click="reset"> reset </v-btn>
          </v-col>
        </v-row>
        <br />
        <br />
        <v-divider></v-divider>
        <TimelineMeal />
      </div>
    </div>
  </div>
</template>

<script>
import { injection } from "../Pump/injection";
import { reset } from "../Pump/reset";
import TimelineMeal from "../components/TimelineMeal.vue";

export default {
  components: {
    TimelineMeal,
  },
  data() {
    return {
      urlInject: "http://192.168.220.86/?inject=",
      urlReset: "http://192.168.220.86/?reset=0",
      inject: 0,
    };
  },
  methods: {
    injection() {
      injection(Math.round(this.inject * 2.83));
      this.inject = 0;
    },
    reset() {
      reset();
    },
  },
};
</script>