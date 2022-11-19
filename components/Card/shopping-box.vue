<template>
  <div class="card" >
    <v-card  class="cardList "  max-height="350">
      <v-card v-for="(item,index) in $store.state.shoppingCart" :key="index" class="blue-grey lighten-5 d-flex justify-space-around align-center mt-1" width="300"  >

        <v-img :src="item.images[0]" max-width="100" height="100"></v-img>

        <div class="mt-8">

          <div class="d-flex ">

              <v-btn x-small fab @click="sour(item)">-</v-btn>
              <p class="px-2"> {{ item.count}}</p>
              <v-btn x-small fab @click="plus(item)">+</v-btn>

           </div>

           <p class="text-center">{{item.price}} $</p>

         </div>

         <v-btn class="red white--text" small  @click="remove(item)">del</v-btn>

        </v-card>
    </v-card>

    <v-card class="total d-flex align-center justify-space-around">
      <span class="subtitle-1 font-weight-bold">Total: {{total}}$</span>
      <v-btn @click="totalBtn">pay</v-btn>
    </v-card>

  </div>

</template>

<script>
export default {
  name: "sepet",
  data(){
    return{

    }
  },

  methods:{
    remove(item){
      this.$store.dispatch('removeItemFromCart',item.id)
    },
    plus(item){
    this.$store.dispatch('addQty',item.id)

    },
    sour(item){
      this.$store.dispatch('reduceQty',item.id)
    },
    totalBtn(){
      this.$router.push('/payment')
      this.$store.commit('cardShow',false)
    }

  },


  computed:{

     total(){
       let total=0

       for (let i in  this.$store.state.shoppingCart ){
         let price=this.$store.state.shoppingCart[i].price
         let count=this.$store.state.shoppingCart[i].count
           let totalPrice=price*count
         total +=totalPrice
       }

      return   total


     }

  },
  created() {

  }
}
</script>

<style scoped>
.card{
  max-height: 400px;
  max-width: 325px;
  position: fixed;
  z-index: 99;
  right: 0;
  margin-top: 80px;
  margin-right: 10px;


}
.total{
 height: 70px;

}
.cardList{
  overflow-y: auto;
}
</style>
