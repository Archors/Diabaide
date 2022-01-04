<template>
  <div>
    <FooterDesktop />
    <FooterMobile />
  </div>
</template>

<script>
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";
export default {
  components: {
    FooterDesktop,
    FooterMobile,
  },
};
</script>