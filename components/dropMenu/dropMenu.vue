<template>
  <div class="hidden-xs-only d-flex justify-center" >
    <div class="text-center  hidden-xs-only">
      <v-menu open-on-hover   offset-y v-for="(item,index) in categoriList" :key="index" >

        <template v-slot:activator="{ on, attrs }">
          <v-btn class="transparent " elevation="0" dark  v-bind="attrs"  v-on="on">
            {{item.name}}
          </v-btn>
        </template>

        <v-list>
          <v-listItem v-for="(i,index) in item.children" :key="index">
            <v-list-item-title style="cursor: pointer" @click="listClicked(i.name)">{{i.name}}</v-list-item-title>
            <v-divider/>
          </v-listItem>
        </v-list>

      </v-menu>
    </div>
  </div>
</template>

<script>
import btnCategories from '../../constants/card'
export default {
  name: "dropMenu",
  data(){
    return{
      categoriList:[]
    }
  },
  methods:{
    listClicked(item){
      this.$router.push('/categories')
     this.$store.dispatch('categories',item)
    }
  },
  created() {
    this.categoriList=btnCategories
  }
}
</script>

<style scoped>

</style>
