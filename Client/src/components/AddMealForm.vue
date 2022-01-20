<template>
  <div>
      
    <v-row wrap>
    
      <v-col cols="3">
          Voulez-vous ajouter un repas ?
        <v-btn @click="isShow = !isShow">Renseigner un repas</v-btn>
      </v-col>
    </v-row>
    <v-card v-if="isShow">
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
              prepend-icon="mdi-account"
              required
            ></v-text-field>
            <v-text-field
              v-model="meal.brand"
              label="Brand"
              :rules="[(v) => !!v || 'Quel est la marque du repas ?']"
              prepend-icon="mdi-account"
              required
            ></v-text-field>
            <v-text-field
              v-model="meal.barcode"
              label="Code Bar"
              :rules="barCodeRule"
              prepend-icon="mdi-account"
              required
            ></v-text-field>
            <v-text-field
              v-model="meal.sugar"
              label="Glucides"
              prepend-icon="mdi-cards-heart"
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
      Repas déjà enregistrés
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    isShow: false,
    valid: false,
    meal: {
      name: "",
      brand: "",
      sugar: "",
      barcode: "",
    },
    snackbar: false,
    barCodeRule: [(v) => /.+\d{8}.+/.test(v) || "Le code bar doit être valide"],
  }),
  methods: {
    AddMeal() {
      addMeal(this.meal);
    },
  },
};
</script>
