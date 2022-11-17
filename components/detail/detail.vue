<template>
  <div>
     <v-card  class="mt-16">

       <v-row v-if="details !==null" >
         <v-col  cols="12" sm="6" >

           <v-window show-arrows >

             <template v-slot:prev="{ on, attrs }">

               <v-btn
                     class="grey white--text"
                     v-bind="attrs"
                     v-on="on"
                     fab
                     small>

                 <v-icon>mdi-arrow-left-bold</v-icon>

               </v-btn>

             </template>

             <template v-slot:next="{ on, attrs }">

               <v-btn
                     class="grey white--text"
                     v-bind="attrs"
                     v-on="on"
                     fab
                     small >

                    <v-icon>mdi-arrow-right-bold</v-icon>

               </v-btn>

             </template>

             <v-window-item v-for="(n,index) in details.images.length" :key="index">
                 <v-card width="100%" class="d-flex justify-center">
                   <v-img :src="details.images[index]" max-width="400px" height="350" contain  ></v-img>
                 </v-card>
             </v-window-item>

           </v-window>

         </v-col>

         <v-col cols="12" sm="6" class="mt-5" >

           <h2>{{details.title}} </h2>
           <p>Markası: {{details.brand}}</p>
           <p>Fiyat: {{details.price}} $</p>
           <p>Açıklama: {{details.description}}</p>
           <v-rating
                     v-model=details.rating
                     background-color="orange lighten-3"
                     color="orange"
                     medium/>
           <p class="mt-2"> stok adet: {{details.stock}}</p>

         </v-col>

       </v-row>

       <v-card v-else>
         Gostercek bisey yok
       </v-card>

     </v-card>

  </div>
</template>

<script>
export default {
  name: "detail",
  computed:{
    details(){
      return this.$store.state.detail
    }
  }
}
</script>

<style scoped>

</style>
