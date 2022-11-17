<template>
  <v-card  class="mb-12" elevation="2" >
    <h1 class="text-center mb-3">All Products </h1>
    <v-row>

      <v-col v-for="(item,index) in shoppingCardAll" :key="index" cols="12" >

        <v-card width="100%" class="d-flex justify-space-around ">

          <v-img :src="item.images[0]" max-width="100" height="100"></v-img>

          <h4 class="ml-3" style="width: 200px" >{{item.title}}</h4>

          <div>
            <p>Total</p>
            <span> {{item.count * item.price}}$ </span>
          </div>

        </v-card>





      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "paymentCard1",
  computed:{
    shoppingCardAll(){
      return this.$store.state.shoppingCart
    }
  }
}
</script>

<style scoped>

</style>
