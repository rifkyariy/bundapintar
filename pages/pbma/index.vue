<template>
  <div>
    <Navbar :title="title"/>
    <div>
      <img class="pb-2" v-for="index in 10" :key="index" :src="'/assets/img/pbma/PBMA_'+index+'.png'" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "PBMA",
      mpasis: [
        {id: 1,
        src: "assets/img/mpasi/MPASI_1"}
      ]
    }
  }
}
</script>

<style>

</style>