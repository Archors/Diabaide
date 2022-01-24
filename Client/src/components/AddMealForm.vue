<template>
  <div>
    Voulez-vous ajouter un repas ?
    <v-row>
      <br />
      <v-col class="text-left">
        <v-btn class="primary" @click="isShow = !isShow">Ajout manuel</v-btn>
        <v-btn class="mx-2" color="#546de5"  @click="goScanner = !goScanner">
          <v-icon size="35">mdi-barcode-scan</v-icon>
          <Scanner @code="getCode" v-if="goScanner"/>
        </v-btn>
      </v-col>
    </v-row>
    <br />
    <br />
    <v-card v-if="isShow" class="pale">
      <v-card-title class="justify-center">
        <span class="headline">Ajout d'un repas</span>
      </v-card-title>
      <v-form v-model="valid" @submit="AddMeal" onSubmit="return false;">
        <v-card-text>
          <v-container>
            <v-text-field
              v-model="meal.name"
              label="Name"
              :rules="[(v) => !!v || 'Quel est le nom du repas ?']"
              prepend-icon="mdi-tag-outline"
              required
            ></v-text-field>
            <v-text-field
              v-model="meal.brand"
              label="Brand"
              :rules="[(v) => !!v || 'Quel est la marque du repas ?']"
              prepend-icon="mdi-form-textbox"
              required
            ></v-text-field>
            <v-text-field
              v-model="meal.barcode"
              label="Code Bar"
              :rules="barCodeRule"
              prepend-icon="mdi-barcode"
              required
            ></v-text-field>
            <v-btn @click="onClick(meal.barcode)">Ajout par Code Bar</v-btn>
            <v-text-field
              v-model="meal.sugar"
              label="Glucides"
              prepend-icon="mdi-cube-outline"
              type="number"
              :rules="[(v) => !!v || 'Le pourcentage de sucre est requis']"
            />
          </v-container>
        </v-card-text>
        <v-spacer></v-spacer>
        <v-card-actions class="justify-center">
          <v-btn color="primary" text type="submit" :disabled="!valid">
            Ajouter ce repas
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
    <v-snackbar v-model="snackbar" :timeout="3000">
      Repas enregistrés
    </v-snackbar>
  </div>
</template>

<script>
import Scanner from './Scanner.vue';
import { OpenFood } from "../API/scannerAPI";
import { getOpenFoods } from "../API/get/getOpenFoods";
import { addMeal } from "../API/add/addMeal";

export default {
  components: {
    Scanner,
  },
  data: () => ({
    isShow: false,
    scanned: false,
    goScanner :false,
    valid: false,
    meal: {
      name: "",
      brand: "",
      sugar: "",
      barcode: "",
    },
    emptyMeal: {
      name: "",
      brand: "",
      sugar: "",
      barcode: "",
    },
    snackbar: false,
    barCodeRule: [(v) => /.+\d{8}.+/.test(v) || "Le code bar doit être valide"],
  }),
  methods: {
      onDecode(result) {
        console.log(result);
      },
    AddMeal() {
      addMeal(this.meal);
      this.snackbar = true
      this.isShow = false;
      this.meal = this.emptyMeal;

    },
    async getCode(result) {
        if (this.scanned) return;
        this.scanned = true;
        this.isShow = true;
        this.meal.barcode = result
        
        const res = await getOpenFoods(result);
        this.meal.sugar = res.product.nutriments.carbohydrates_100g;
        this.meal.brand  = res.product.brands;
        this.meal.name  = res.product.category_properties['ciqual_food_name:fr'];
      },
      async onClick(barcode){ 
        const res = await getOpenFoods(barcode);
        this.meal.barCode = barcode
        this.meal.sugar = res.product.nutriments.carbohydrates_100g;
        this.meal.brand  = res.product.brands;
        this.meal.name  = res.product.category_properties['ciqual_food_name:fr'];
      }
  },
};
</script>
