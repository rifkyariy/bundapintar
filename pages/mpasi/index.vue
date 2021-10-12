<template>
  <div>
    <Navbar :title="title"/>
    <div>
      <iframe class="w-full h-screen" src="assets/pdf/menu_makanan.pdf" frameborder="0"></iframe>
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