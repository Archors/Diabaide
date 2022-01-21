<template>
  <div class="container">
    <div class="bandeau">
      <h1>Injection d'insuline</h1>
    </div>

    <div>
      <h3>Insuline à administrer :</h3>
      <input type="number" name="glucides" />

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
      </div>
    </div>
  </div>
</template>

<script>
import { injection } from "../Pump/injection";
import { reset } from "../Pump/reset"
export default {
  data() {
    return {
      urlInject: "http://192.168.220.86/?inject=",
      urlReset: "http://192.168.220.86/?reset=0",
      inject: 0,
    };
  },
  methods: {
    injection() {
      var injected = this.urlInject + this.inject;
      //window.open(injected, "_blank");
      injection(this.inject);
      this.inject = 0;
    },
    reset() {
      //window.open(this.urlReset);
      reset();
    },
  },
};
</script>