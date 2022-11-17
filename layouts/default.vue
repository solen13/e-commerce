<template>
  <v-app class="app"  >
    <nav-bar/>
    <sepet v-if="this.$store.state.cardShows"/>
   <Nuxt />
  </v-app>
</template>

<script>
import NavBar from "@/components/header/navBar";
import Sepet from "@/components/Card/sepet";

export default {
  components: { Sepet, NavBar}
}
</script>
<style>
.app{
  position: relative;
}
</style>
