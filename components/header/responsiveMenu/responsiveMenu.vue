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
        <v-list-item
          v-for="item in 5"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>sovısd</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>vdvdsv</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>


    </v-card>

  </div>
</template>

<script>
export default {
  name: "responsiveMenu",
  props:{
    show:{
      type:Boolean,
      default:false
    }
  },

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
