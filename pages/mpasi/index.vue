<template>
  <div>
    <Navbar :title="title"/>
    <div>
      <img v-for="index in 33" :key="index" class="pb-2" :src="'/assets/img/menu_makanan/menu_makanan-'+index+'.jpg'" alt="">
      <span class="text-main pl-2 pt-4 text-lg">Referensi : Sitasari dkk, 2014</span>
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