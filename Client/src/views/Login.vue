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
  data: () => ({}),
  created() {
    if (this.$cookies.get("token") != null) {
      this.$store.commit("LOGIN_SUCCESS", this.$cookies.get("token"));
    }
  },
  computed: {
    connectionStatus() {
      return this.$store.getters.connection_status;
    },
  },
};
</script>