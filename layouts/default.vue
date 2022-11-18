<template>
  <v-app class="app"  >
    <nav-bar/>
    <shoppingBox v-if="this.$store.state.cardShows"/>
   <Nuxt />
  </v-app>
</template>

<script>
import NavBar from "@/components/header/navBar";
import shoppingBox from "@/components/Card/shopping-box";

export default {
  components: { shoppingBox, NavBar}
}
</script>
<style>
.app{
  position: relative;
}
</style>
