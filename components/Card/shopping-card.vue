<template>

    <v-row class="d-flex justify-center mt-16">

      <v-col   v-for="(item ,index) in data " :key="index" cols="6" sm="2"   class=" d-flex justify-center " >

        <v-card width="200" height="350" class="blue-grey lighten-5  mt-4">

          <v-window show-arrows >

            <template v-slot:prev="{ on, attrs }">
              <v-btn
                    color="grey"
                    v-bind="attrs"
                    v-on="on"
                    x-small
                    fab>
                <v-icon small>mdi-arrow-left-bold</v-icon>
              </v-btn>
            </template>

            <template v-slot:next="{ on, attrs }">
              <v-btn
                    color="grey"
                    v-bind="attrs"
                    v-on="on"
                    x-small
                    fab>
                <v-icon small>mdi-arrow-right-bold</v-icon>
              </v-btn>
            </template>

            <v-window-item v-for="(n,index) in item.images.length" :key="index" >
              <v-card width="100%" class="d-flex justify-center">
                <v-img :src=item.images[index] max-width="200px" height="150" contain  ></v-img>
              </v-card>
            </v-window-item>

          </v-window>

          <v-card-title class="caption" >{{ item.title }}</v-card-title>
         <span class="d-flex"> <p>price:</p> <h3>{{item.price}}$</h3></span>
          <v-btn class="card-btn" :class="activeClass" @click="addToCard(item)">Add</v-btn>
          <v-btn @click="view(item)">View</v-btn>

        </v-card>
      </v-col>
    </v-row>

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
      type:Array,
      default:[],

    }
  },
  methods:{
    addToCard(id){

      this.$store.dispatch('shoppingCart',id)

    },
    view(item){
      this.$router.push('/detail')
      this.$store.commit('detail',item)
    }

  },


}
</script>

<style scoped>

</style>
