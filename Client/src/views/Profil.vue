<template>
  <div>
    <v-card class="overflow-hidden" color="secondary">
      <v-form v-model="validUser" v-on:submit.prevent @submit="saveUserInfo">
        <v-toolbar flat color="primary">
          <v-icon>mdi-account</v-icon>
          <v-toolbar-title class="font-weight-light"> Profil </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn
            color="blue"
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
            v-model="user.first_name"
            label="Prénom*"
            :rules="[(v) => !!v || 'Le prénom est obligatoire']"
            required
          ></v-text-field>
          <v-text-field
            dense
            :disabled="!isEditingUserInfo"
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
            v-model="user.email"
            label="Mail*"
            :rules="[(v) => !!v || 'L\'adresse mail est obligatoire']"
            required
          ></v-text-field>
          <v-text-field
            dense
            :disabled="!isEditingUserInfo"
            v-model="user.ratio"
            label="Ratio*"
            :rules="[(v) => !!v || 'Le ratio est obligatoire']"
            required
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="success"
            text
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
    <v-card class="overflow-hidden" color="secondary">
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
            :append-icon="showNewPassword1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showNewPassword1 ? 'text' : 'password'"
            @click:append="showNewPassword1 = !showNewPassword1"
            v-model="newPassword1"
            label="Nouveau mot de passe"
            :rules="[(v) => !!v || 'Le nom est obligatoire']"
            loading=""
            required
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
            :append-icon="showNewPassword2 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showNewPassword2 ? 'text' : 'password'"
            @click:append="showNewPassword2 = !showNewPassword2"
            v-model="newPassword2"
            label="Nouveau mot de passe"
            :rules="[(v) => !!v || 'L\'adresse mail est obligatoire']"
            loading=""
            required
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
    <v-row justify="center">
      <v-col padding-top: cols="2">
        <v-btn color="error" @click="log_out"> Deconnexion </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { updatePassword } from "../API/update/updatePassword";
import { updateUser } from "../API/update/updateUser";
import { logout } from "../API/authentification/logout";
export default {
  data() {
    return {
      user: {},
      boolBirthDate: false,
      hasSavedUserInfo: false,
      hasSavedPasswordInfo: false,
      isEditingUserInfo: null,
      isEditingPasswordInfo: null,
      oldPassword: "",
      newPassword1: "",
      newPassword2: "",
      validUser: false,
      validPassword: false,
      showOldPassword: false,
      showNewPassword1: false,
      showNewPassword2: false,
    };
  },
  created() {
    this.user = this.$store.getters.user;
  },
  methods: {
    saveUserInfo() {
      this.isEditingUserInfo = !this.isEditingUserInfo;
      this.hasSavedUserInfo = true;
      updateUser(this.user);
    },
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
    log_out() {
      logout();
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