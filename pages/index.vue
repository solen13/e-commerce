<template>
 <v-main class="main">
  <shopping-card :data="cardsLists"/>
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
