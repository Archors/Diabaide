<template>
  <div>
    <v-card>
      <v-card-title class="justify-center">
        <v-img src="@/assets/logo_diabaide.svg" max-width="250"></v-img>
      </v-card-title>
      <v-card-title class="justify-center">
        <span class="headline">Connexion</span>
      </v-card-title>
      <v-form v-model="valid" @submit="login" onSubmit="return false;">
        <v-card-text>
          <v-container>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              prepend-icon="mdi-email"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              label="Password"
              prepend-icon="mdi-lock-outline"
              @click:append="show1 = !show1"
              required
            ></v-text-field>
          </v-container>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn color="primary" type="submit" v-if="!submited">
            Se connecter
          </v-btn>
          <v-progress-circular
            v-if="submited"
            indeterminate
            color="primary"
          ></v-progress-circular>
        </v-card-actions>
      </v-form>

      <v-card-actions class="justify-center">
        Pas encore de compte ?
        <v-btn color="blue darken-1" text @click="toSignUp">
          Créer un compte
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-snackbar v-model="snackbar" :timeout="3000">
      Identifiants incorrects
    </v-snackbar>
  </div>
</template>

<script>
import { login } from "../API/authentification/login";
export default {
  data: () => ({
    valid: false,
    email: "",
    submited: false,
    password: "",
    show1: false,
    snackbar: false,
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
  methods: {
    async login() {
      this.submited = true;
      if ((await login(this.email, this.password)) == 0) {
        this.snackbar = true;
        this.submited = false;
      } else this.$router.push({ path: "home" });
    },
    toSignUp() {
      this.$store.commit("LOGIN_TO_SIGNUP");
    },
  },
};
</script>