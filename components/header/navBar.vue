<template>
  <v-card color="grey lighten-4 "  class="nav-bar " width="100%" flat  tile >

     <v-toolbar class="orange lighten-3" height="80">
      <v-row>
        <v-col class="d-flex justify-space-between align-center " >

          <v-avatar @click="$router.push('/')" class="hidden-xs-only">
            <img   src="data:image/png;base64,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" alt="">
          </v-avatar>

           <drop-menu/>

          <v-card class="transparent elevation-0 d-flex align-center  justify-center mr-7" >

            <v-btn @click.stop="responsiveMenuBtn"  fab small class="d-sm-none  hidden-md-and-up  transparent elevation-0 ">
              <v-icon v-if="drewer"> mdi-close </v-icon>
              <v-icon v-else> mdi-menu </v-icon>
            </v-btn>

            <input v-model="search" style="height: 40px; " class="search-input " @keydown.enter="searchBtn" type="text"  placeholder="Search.." />

            <v-btn fab small class="white ml-2" @click.stop="searchBtn">
              <v-icon color="black" small>mdi-magnify</v-icon>
            </v-btn>

            <div class="mx-2 " style="position: relative">
              <div class="cardLength  text-center">{{this.$store.state.shoppingCart.length}}</div>
              <v-btn fab small @click="cardViewBtn"><v-icon>mdi-cart</v-icon></v-btn>
            </div>

          </v-card>
        </v-col>
      </v-row>
    </v-toolbar>
    <responsiveMenu v-if="drewer"   />
  </v-card>
</template>

<script>

import DropMenu from "@/components/dropMenu/dropMenu";
import responsiveMenu from "@/components/header/responsiveMenu/responsiveMenu";
export default {
  name: "navBar",
  components: {DropMenu,responsiveMenu},
  data(){
    return{
      items: [],
      isExpand:false,
      search:null,
      drewer:false,


    }
  },
  methods:{
    categories(){

      fetch('https://dummyjson.com/products/categories/smartphones')
        .then(res => res.json())
        .then(json=>{
          this.items=json
        })

    },
    cardViewBtn(){
      this.isExpand = !this.isExpand
      this.$store.commit('cardShow',this.isExpand)
    },
    searchBtn(){
      if (this.search !== null){
        this.$router.push('/search')
        this.$store.dispatch('searchAction',this.search)
      }
    },
    responsiveMenuBtn(){

     this.drewer = !this.drewer

    }

  },
created() {
 this.categories()

}
}
</script>

<style scoped>
.nav-bar{
  position: fixed;
  z-index: 99;
}
.list{
  display: flex;
 flex-flow: wrap;
  width: 360px;
  height: 300px;
  background-color: grey;

}
.listItem{
  width: 50px;
  padding: 5px;
  margin-bottom: 3px;
  background-color: #796d6d;
}
.cardLength{
  border-radius: 100%;
  width: 20px;
  background-color: #425466;
  height: 20px;
  position: absolute;
  right: 0;
  z-index: 99;
  margin-top: -10px;
  color: white;

}
.search-input{
  border: 1px solid rgba(157, 157, 157, 0.59);
  outline: none;
  padding: 5px;
  border-radius: 5px;
  background-color: #EBEEF3;;
  color: #6C7C8C;
}
</style>
