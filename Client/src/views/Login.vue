<template>
  <div>
    <signin v-if="connectionStatus === 0" />
    <signup v-if="connectionStatus === -1" />
  </div>
</template>

<script>
import signup from "../components/signup";
import signin from "../components/signin";

export default {
  components: { signin, signup },
  created() {
    if (this.$cookies.get("token") != null) {
      this.$store.commit("LOGIN_SUCCESS", this.$cookies.get("token"));
      this.$router.push({ path: "home" });
    } else {
      this.$store.commit("LOGIN_TO_SIGNIN");
    }
  },
  computed: {
    connectionStatus() {
      return this.$store.getters.connection_status;
    },
  },
};
</script>