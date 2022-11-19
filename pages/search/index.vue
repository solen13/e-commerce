<template>
 <v-main >
   <v-row  class="mt-16">
     <v-col v-for="item in cardsLists" cols="6"  md="3" xl="3" class="d-flex justify-center" >
       <shopping-card  :data="item" :key="item.id" />
     </v-col>
   </v-row>
 </v-main>
</template>

<script>
import ShoppingCard from "@/components/Card/shopping-card";
export default {
  name: "index",
  components: {ShoppingCard},
  computed:{
    cardsLists(){
      return this.$store.state.searchTexts
    }
  }
}
</script>

<style scoped>


</style>
