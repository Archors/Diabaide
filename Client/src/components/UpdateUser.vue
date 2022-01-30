<template>
  <v-card class="overflow-hidden" color="white" :class="'rounded-xl'">
    <v-form v-model="validUser" v-on:submit.prevent @submit="saveUserInfo">
      <v-toolbar flat color="primary">
        <v-icon>mdi-account</v-icon>
        <v-toolbar-title class="font-weight-light"> Profil </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          color="#df9d9d"
          fab
          small
          @click="isEditingUserInfo = !isEditingUserInfo"
        >
          <v-icon v-if="isEditingUserInfo"> mdi-close </v-icon>
          <v-icon v-else> mdi-pencil </v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-text-field
          dense
          :disabled="!isEditingUserInfo"
          prepend-icon="mdi-account-cowboy-hat"
          v-model="user.first_name"
          label="Prénom*"
          :rules="[(v) => !!v || 'Le prénom est obligatoire']"
          required
        ></v-text-field>
        <v-text-field
          dense
          :disabled="!isEditingUserInfo"
          prepend-icon="mdi-badge-account"
          v-model="user.last_name"
          label="Nom*"
          :rules="[(v) => !!v || 'Le nom est obligatoire']"
          required
        >
        </v-text-field>
        <v-menu
          v-model="boolBirthDate"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              dense
              :disabled="!isEditingUserInfo"
              v-model="user.birthdate"
              label="Date de naissance"
              prepend-icon="mdi-calendar"
              readonly
              clear-icon="mdi-close-circle"
              v-bind="attrs"
              v-on="on"
              :rules="[(v) => !!v || 'La date de naissance est obligatoire']"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="user.birthdate"
            @input="boolBirthDate = false"
            locale="fr-FR"
          ></v-date-picker>
        </v-menu>
        <v-text-field
          dense
          :disabled="!isEditingUserInfo"
          prepend-icon="mdi-email"
          v-model="user.email"
          label="Mail*"
          :rules="[(v) => !!v || 'L\'adresse mail est obligatoire']"
          required
        ></v-text-field>
        <v-text-field
          dense
          :disabled="!isEditingUserInfo"
          v-model="user.ratio"
          prepend-icon="mdi-cards-heart"
          type="number"
          oninput="if(this.value < 0) this.value = 0;"
          label="Ratio*"
          :rules="[(v) => !!v || 'Le ratio est obligatoire']"
          required
        ></v-text-field>
        <h5 :disabled="!isEditingUserInfo">
          
          <p style="color:gray; font-size:10px">**Ratio : estime la quantité de glucides couvert par une unité d’insuline.</p>

        </h5>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="success"
          type="submit"
          :disabled="!validUser || !isEditingUserInfo"
        >
          Sauvegarder
        </v-btn>
      </v-card-actions>
      <v-snackbar
        v-model="hasSavedUserInfo"
        :timeout="2000"
        absolute
        bottom
        left
      >
        Votre profil a été mis à jour
      </v-snackbar>
    </v-form>
  </v-card>
</template>
<script>
import { updateUser } from "../API/update/updateUser";
import { checkData } from "../API/checkData";
export default {
  data() {
    return {
      user: {},
      boolBirthDate: false,
      hasSavedUserInfo: false,
      isEditingUserInfo: null,
      validUser: false,
    };
  },
  created() {
    checkData();
    this.user = this.$store.getters.user;
  },
  methods: {
    saveUserInfo() {
      this.isEditingUserInfo = !this.isEditingUserInfo;
      this.hasSavedUserInfo = true;
      updateUser(this.user);
    },
  },
  watch: {
    "$store.state.user": function () {
      this.user = this.$store.getters.user;
    },
  },
};
</script>
