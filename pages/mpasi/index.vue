<template>
  <div>
    <Navbar :title="title"/>
    <div>
      <img src="menu_makanan-" alt="">
      <img v-for="index in 33" :key="index" class="pb-2" :src="'/assets/img/menu_makanan/menu_makanan-'+index+'.jpg'" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Contoh MPASI"
    }
  }
}
</script>

<style>

</style>