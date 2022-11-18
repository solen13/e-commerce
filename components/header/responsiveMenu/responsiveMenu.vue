<template>
  <div class="res-menu-contented">

    <v-card  width="50%" height="100%">

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>MENU</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item @click="$router.push('/')">

          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>


        <v-list-item  @click="categoriShow = !categoriShow">
          <v-list-item-icon>
            <v-icon>mdi-table</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Categories</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <template v-if="categoriShow">
         <v-list-item v-for="item in categoriList">
          <v-list-item-icon>
            <v-icon>mdi-table</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title  >
              <p @click="showSubtitle(item)">{{item.name}}</p>

             <template v-if="item.bol">
              <v-list-item v-for=" i in item.children">
                  <p  @click="itemName(i)">{{i.name}}</p>
              </v-list-item>
             </template>
            </v-list-item-title>

          </v-list-item-content>
        </v-list-item>
        </template>
      </v-list>


    </v-card>

  </div>
</template>

<script>
import btnCategories from '../../../constants/card'
export default {
  name: "responsiveMenu",
  data(){
    return{
      categoriList:[],
      categoriShow:false,
      active: [],

    }
  },

  props:{
    show:{
      type:Boolean,
      default:false
    }
  },

  created() {
    this.categoriList=btnCategories

  },
  methods:{
    itemName(item){
      this.$router.push('/categories')
      this.$store.dispatch('categories',item.name)
    },
    showSubtitle(item){
      item.bol = !item.bol

    }
  }


}
</script>

<style scoped>
.res-menu-contented{
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 100%;
  background-color: transparent;
}
</style>
