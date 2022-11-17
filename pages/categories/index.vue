<template>
   <v-main>
     <shopping-card :data="$store.state.categories"/>
   </v-main>
</template>

<script>

import ShoppingCard from "@/components/Card/shopping-card";
export default {
  name: "index",
  components: {ShoppingCard}

}
</script>

<style scoped>

</style>
