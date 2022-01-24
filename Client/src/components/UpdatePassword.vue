<template>
  <v-card class="overflow-hidden" color="secondary" :class="'rounded-xl'">
    <v-toolbar flat color="primary">
      <v-icon>mdi-account</v-icon>
      <v-toolbar-title class="font-weight-light"> Password </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        color="blue"
        fab
        small
        @click="isEditingPasswordInfo = !isEditingPasswordInfo"
      >
        <v-icon v-if="isEditingPasswordInfo"> mdi-close </v-icon>
        <v-icon v-else> mdi-pencil </v-icon>
      </v-btn>
    </v-toolbar>
    <v-form v-model="validPassword" @submit="savePasswordInfo">
      <v-card-text>
        <v-text-field
          dense
          :disabled="!isEditingPasswordInfo"
          prepend-icon="mdi-lock"
          :append-icon="showOldPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showOldPassword ? 'text' : 'password'"
          @click:append="showOldPassword = !showOldPassword"
          v-model="oldPassword"
          label="Ancien Mot de passe*"
          :rules="[(v) => !!v || 'Le prénom est obligatoire']"
          required
        ></v-text-field>
        <v-text-field
          dense
          :disabled="!isEditingPasswordInfo"
          prepend-icon="mdi-lock"
          :append-icon="showNewPassword1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showNewPassword1 ? 'text' : 'password'"
          @click:append="showNewPassword1 = !showNewPassword1"
          v-model="newPassword1"
          label="Nouveau mot de passe"
          loading=""
          :error-messages="ruleNewPassword1()"
          ><template v-slot:progress>
            <v-progress-linear
              :value="progressNewPassword1"
              :color="colorNewPassword1"
              absolute
              height="7"
            ></v-progress-linear>
          </template>
        </v-text-field>
        <v-text-field
          dense
          :disabled="!isEditingPasswordInfo"
          prepend-icon="mdi-lock"
          :append-icon="showNewPassword2 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showNewPassword2 ? 'text' : 'password'"
          @click:append="showNewPassword2 = !showNewPassword2"
          v-model="newPassword2"
          label="Nouveau mot de passe"
          loading=""
          :error-messages="ruleNewPassword2()"
          ><template v-slot:progress>
            <v-progress-linear
              :value="progressNewPassword2"
              :color="colorNewPassword2"
              absolute
              height="7"
            ></v-progress-linear> </template
        ></v-text-field>
      </v-card-text>
    </v-form>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!validPassword || !isEditingPasswordInfo"
        color="success"
        @click="savePasswordInfo"
      >
        Sauvegarder
      </v-btn>
    </v-card-actions>
    <v-snackbar
      v-model="hasSavedPasswordInfo"
      :timeout="2000"
      absolute
      bottom
      left
    >
      Votre mot de passe a été mis à jour
    </v-snackbar>
  </v-card>
</template>

<script>
import { updatePassword } from "../API/update/updatePassword";
export default {
  data() {
    return {
      hasSavedPasswordInfo: false,
      isEditingPasswordInfo: null,
      oldPassword: "",
      newPassword1: "",
      newPassword2: "",
      validPassword: false,
      showOldPassword: false,
      showNewPassword1: false,
      showNewPassword2: false,
    };
  },
  methods: {
    savePasswordInfo() {
      this.isEditingPasswordInfo = !this.isEditingPasswordInfo;
      this.hasSavedPasswordInfo = !this.hasSavedPasswordInfo;
      updatePassword(this.oldPassword, this.newPassword1);
      this.clearPasswords();
    },
    clearPasswords() {
      this.oldPassword = "";
      this.newPassword1 = "";
      this.newPassword2 = "";
    },
    ruleNewPassword1() {
      if (this.newPassword1 != null)
        if (this.newPassword1.length < 6)
          return "Le mot de passe doit faire au moins 6 caractères";
        else return "";
    },
    ruleNewPassword2() {
      if (this.newPassword1 != this.newPassword2)
        return "Les mots de passe doivent correspondre";
      else return "";
    },
  },
  computed: {
    progressNewPassword1() {
      return Math.min(100, (this.newPassword1.length * 100) / 6);
    },
    colorNewPassword1() {
      if (this.progressNewPassword1 == 100) return "success";
      else if (this.progressNewPassword1 > 50) return "warning";
      else return "error";
    },
    progressNewPassword2() {
      return Math.min(100, (this.newPassword2.length * 100) / 6);
    },
    colorNewPassword2() {
      if (this.progressNewPassword2 == 100) return "success";
      else if (this.progressNewPassword2 > 50) return "warning";
      else return "error";
    },
  },
};
</script>