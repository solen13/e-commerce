<template>

        <v-card v-if="data" width="200" height="350" class="blue-grey lighten-5 ">

          <v-window show-arrows >

            <template v-slot:prev="{ on, attrs } ">
              <v-btn
                    class="transparent"
                    v-bind="attrs"
                    v-on="on"
                    x-small
                    fab>
                <v-icon small>mdi-chevron-left</v-icon>
              </v-btn>
            </template>

            <template v-slot:next="{ on, attrs }">
              <v-btn
                class="transparent"
                    v-bind="attrs"
                    v-on="on"
                    x-small
                    fab>
                <v-icon small>mdi-chevron-right</v-icon>
              </v-btn>
            </template>

            <v-window-item v-for="(n,index) in data.images.length" :key="index" >
              <v-card width="100%" class="d-flex justify-center">
                <v-img :src=data.images[index] max-width="200px" height="150" contain  ></v-img>
              </v-card>
            </v-window-item>

          </v-window>



          <div class="pa-2">

            <h5 class="caption text-center" style="height: 50px" >{{ data.title }}</h5>

            <span class="d-flex " > <span class="font-weight-medium orange--text ">price: </span> <h4>{{data.price}}$</h4></span>

            <v-rating class="mt-2" v-model=data.rating background-color="orange lighten-3" color="orange" x-small/>

            <div class="d-flex justify-space-between  mt-4" >
              <template v-if="isActive">
                <v-btn x-small fab @click="sour(isActive)">-</v-btn>
                  <p > {{isActive.count}}</p>
                <v-btn x-small fab @click="plus(isActive)">+</v-btn>
              </template>


              <v-btn v-else class="card-btn"   @click="addToCard(data)">Add</v-btn>
              <v-btn @click="view(data)">View</v-btn>
            </div>

          </div>

        </v-card>


</template>

<script>
import cardsList from '../../constants/card'
export default {
  name: "shopping-card",
  data(){
    return{
      cardsLists:[],
      activeClass:null
    }
  },

  props:{
    data:{
      type:Object,
      default:{},
    }
  },
  methods:{
    addToCard(id){
      this.$store.dispatch('shoppingCart',id)
    },
    view(item){
      this.$router.push('/detail')
      this.$store.commit('detail',item)
    },
    plus(item){
      this.$store.commit('cardPlus',item)

    },
    sour(item){
      this.$store.commit('cardreduce',item)
    },

  },
  computed:{
    isActive(){
     return  this.$store.state.shoppingCart.find(card=>card.id=== this.data.id)
    }
  }


}
</script>

<style scoped>

</style>
