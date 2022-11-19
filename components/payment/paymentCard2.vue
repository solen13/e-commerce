<template>
  <v-card class="mb-12 card "  >
     <v-card-title>Welcome</v-card-title>


      <input class="input" type="number" placeholder="Card Number"/>
      <input class="input" type="text" placeholder="Card Holder">

      <span  class="d-flex justify-space-between mt-4  ">
        <select class="select ">
          <option v-for="item in 9">202{{item}}</option>
        </select>

         <select class="select">
        <option v-for="item in 12"  class="blue">{{item}}</option>
       </select>
        <input style="width: 25%" class="grey" type="number" placeholder="cvv">
      </span>


  </v-card>
</template>

<script>
export default {
  name: "paymentCard2",
  data(){
    return{

    }
  },


}
</script>

<style scoped >
.card{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
}
.input{
  width: 70%;
  margin-top: 10px;
  background-color: #6C7C8C;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid black;
  outline: none;
  color: white;
}
.input::placeholder{
  color: white;
}
.select{
  padding: 10px;
  border-radius: 10px;
  background-color: #6C7C8C;
  color: white;
}

</style>
