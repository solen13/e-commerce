<template>
  <v-stepper v-model="e1" class="mt-16">
    <v-stepper-header>

      <v-stepper-step :complete="e1 > 1"step="1" >All Products </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 2" step="2" > card Information </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="3" :complete="e1 >3"  >  Confirmation Code </v-stepper-step>

    </v-stepper-header>

    <v-stepper-items>

      <v-stepper-content step="1">

        <payment-card1/>
        <v-btn color="primary"  @click="e1 = 2"  >  Continue </v-btn>
        <v-btn text @click="$router.push('/')"> Done  </v-btn>

      </v-stepper-content>

      <v-stepper-content step="2">

        <payment-card2/>
        <v-btn color="primary" @click="e1 = 3" >Continue </v-btn>
        <v-btn text @click="e1 = 1"> back</v-btn>

      </v-stepper-content>

      <v-stepper-content step="3">

         <payment-card3 :alert='alert'/>
          <v-btn color="primary"   @click="okey" > complete </v-btn>
          <v-btn text @click="e1 = 2">  Cancel </v-btn>

      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import PaymentCard1 from "@/components/payment/paymentCard1";
import PaymentCard2 from "@/components/payment/paymentCard2";
import PaymentCard3 from "@/components/payment/paymentCard3";
export default {
  name: "index",
  components: {PaymentCard3, PaymentCard2, PaymentCard1},
  data() {
    return {
      e1: 1,
      alert:false
    }
  },
  methods:{
    okey(){
      this.alert=true

      this.$store.commit('shoppingCartRemove')

     setTimeout( ()=>{
         this.$router.push('/')
       },2000)
    }
  }
}
</script>

<style scoped>

</style>
