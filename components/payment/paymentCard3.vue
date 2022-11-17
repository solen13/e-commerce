<template>
  <v-card class="d-flex justify-center alert " >

    <v-alert
      :value="alert"
      color="success"
      dark
      border="top"
      icon="mdi-home"
      transition="scale-transition"
      class="alert-box"
    >

      success
     </v-alert>

    <div >
      <h2 class="font-weight-bold mb-3 ">Verification Code</h2>
      <verification-code :loading="false" class="input" v-on:change="onChange" v-on:complete="onComplete" />
      <v-btn class="my-4 primary" small> <v-icon small class="mx-1">mdi-replay</v-icon> Send again</v-btn>
    </div>

  </v-card>
</template>

<script>
import verification from "@/components/verificationCode/verificationCode";
export default {
  name: "paymentCard3",
  components: {verification},
  props:['alert'],
  methods: {
    onChange(v) {
      console.log("onChange ", v);
    },
    onComplete(v) {
      console.log("onComplete ", v);
    }
  }

}
</script>

<style scoped lang="scss">

.alert{
  position: relative;
}
.alert-box{
  position: fixed;
  z-index: 99;
  height: 150px;
  width: 35%;
}
</style>
