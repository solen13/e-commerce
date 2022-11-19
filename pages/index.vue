<template>
 <v-main class="main">
   <v-row  class="mt-16 d-flex justify-center">
     <v-col v-for="item in cardsLists" cols="6"  md="3" xl="3" class="d-flex justify-center"  >
       <shopping-card  :data="item" :key="item.id" />
     </v-col>
   </v-row>

 </v-main>
</template>

<script>
import ShoppingCard from "~/components/Card/shopping-card";
export default {
  name: 'IndexPage',
  components: {  ShoppingCard},
  data(){
    return{
      cardsLists:[]
    }
  },
  methods:{
    list(){
      fetch('https://dummyjson.com/products')
        .then(res=>res.json())
        .then(json=>{
          this.cardsLists=json.products
        })
    },
  },
  created() {
    this.list()

  },


}
</script>
<style>
.main{
  position: relative;
}
</style>
