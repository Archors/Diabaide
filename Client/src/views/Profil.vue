<template>
  <div class="container">
    <UpdateUser />
    <br />
    <UpdatePassword />
    <br />
    <v-row>
      <v-col></v-col>
      <v-spacer></v-spacer>
      <v-col>
        <v-btn class="logoutbutton" color="error" @click="log_out">
          Deconnexion
        </v-btn>
      </v-col>
      <v-spacer></v-spacer>
      <v-col></v-col>
    </v-row>
  </div>
</template>

<script>
import UpdateUser from "../components/UpdateUser.vue";
import UpdatePassword from "../components/UpdatePassword.vue";
import { logout } from "../API/authentification/logout";

export default {
  components: {
    UpdateUser,
    UpdatePassword,
  },
  methods: {
    log_out() {
      logout();
    },
  },
};
</script>
