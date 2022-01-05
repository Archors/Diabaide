<template>
  <div>
    <h1>Bonjour {{ name }}</h1>
    <h2>Taux actuel :</h2>
    <h1>{{ taux }} mg</h1>
    <Graph/>
  </div>
</template>

<script>
import Graph from "../components/Graph";
export default {
  components: {
    Graph,
  },
  data: () => ({
    name: "Sofiane",
    taux: 90,
  }),
};
</script>