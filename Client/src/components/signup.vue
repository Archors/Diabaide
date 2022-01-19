<template>
  <div>
    <v-card>
      <v-card-title class="justify-center">
        <span class="headline">Créer un compte</span>
      </v-card-title>
      <v-form v-model="valid" @submit="registration" onSubmit="return false;">
        <v-card-text>
          <v-container>
            <v-text-field
              v-model="user.first_name"
              label="Prenom"
              :rules="[(v) => !!v || 'Il faut renseigner son prenom']"
              prepend-icon="mdi-account"
              required
            ></v-text-field>
            <v-text-field
              v-model="user.last_name"
              label="Nom"
              :rules="[(v) => !!v || 'Il faut renseigner son nom']"
              prepend-icon="mdi-account"
              required
            ></v-text-field>
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
                  v-model="user.birthdate"
                  label="Date de naissance"
                  prepend-icon="mdi-calendar"
                  readonly
                  clearable
                  clear-icon="mdi-close-circle"
                  v-bind="attrs"
                  v-on="on"
                  required
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="user.birthdate"
                @input="boolBirthDate = false"
                locale="fr-FR"
              ></v-date-picker>
            </v-menu>
            <v-text-field
              v-model="user.email"
              :rules="emailRules"
              label="E-mail"
              prepend-icon="mdi-email"
              required
            ></v-text-field>
            <v-text-field
              v-model="user.password"
              label="Password"
              :append-icon="showPassword1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword1 ? 'text' : 'password'"
              prepend-icon="mdi-lock-outline"
              required
              @click:append="showPassword1 = !showPassword1"
              loading
              :error-messages="password1Rule()"
              ><template v-slot:progress>
                <v-progress-linear
                  :value="progressPassword1"
                  :color="colorPassword1"
                  absolute
                  height="7"
                ></v-progress-linear> </template
            ></v-text-field>
            <v-text-field
              v-model="passwordCheck"
              label="Password"
              :append-icon="showPassword2 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword2 ? 'text' : 'password'"
              prepend-icon="mdi-lock-outline"
              required
              @click:append="showPassword2 = !showPassword2"
              loading=""
              :error-messages="password2Rule()"
              ><template v-slot:progress>
                <v-progress-linear
                  :value="progressPassword2"
                  :color="colorPassword2"
                  absolute
                  height="7"
                ></v-progress-linear> </template
            ></v-text-field>
          </v-container>
        </v-card-text>
        <v-spacer></v-spacer>

        <v-card-actions class="justify-center">
          <v-btn color="primary" text type="submit" :disabled="!valid">
            Créer le compte
          </v-btn>
        </v-card-actions>
      </v-form>

      <v-card-actions class="justify-center">
        Deja un compte ?
        <v-btn color="blue darken-1" text @click="toSignIn">
          S'identifier
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-snackbar v-model="snackbar" :timeout="3000">
      Adresse email déjà utilisée
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    user: {
      first_name: "",
      last_name: "",
      email: "",
      birthdate: "",
      password: "",
    },
    passwordCheck: "",
    showPassword1: false,
    showPassword2: false,
    boolBirthDate: false,
    snackbar: false,
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
  methods: {
    registration() {
      console.log("registration");
      console.log(this.user);
    },
    password1Rule() {
      if (this.user.password != null)
        if (this.user.password.length < 6)
          return "Le mot de passe doit faire au moins 6 caractères";
        else return "";
    },
    password2Rule() {
      if (this.user.password != this.passwordCheck)
        return "Les mots de passe doivent correspondre";
      else return "";
    },
    toSignIn() {
      this.$store.commit("LOGIN_TO_SIGNIN");
    },
  },
  computed: {
    progressPassword1() {
      return Math.min(100, (this.user.password.length * 100) / 6);
    },
    colorPassword1() {
      if (this.progressPassword1 == 100) return "success";
      else if (this.progressPassword1 > 50) return "warning";
      else return "error";
    },
    progressPassword2() {
      return Math.min(100, (this.passwordCheck.length * 100) / 6);
    },
    colorPassword2() {
      if (this.progressPassword2 == 100) return "success";
      else if (this.progressPassword2 > 50) return "warning";
      else return "error";
    },
  },
};
</script>