<template>
  <div>
    <div class="bg-image h-screen">
      <Navbar :title="title" />
      <div class="mx-4 my-8 grid grid-cols-2 gap-4">
        <nuxt-link
          v-for="menu in menus"
          :key="menu.id"
          :to="menu.url"
          class="
            menu
            w-full
            bg-green-500
            rounded-xl
            py-10
            shadow-md
            text-center
            align-middle
            text-white
            font-main
            font-bold
          "
          :style="{backgroundImage: 'url('+menu.bImg+')'}"
        >
          {{ menu.title }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Kebutuhan Gizi',
      menus: [
        {
          id: 1,
          title: 'Energi',
          url: '/kebutuhan_gizi/energi',
          bImg: 'assets/img/menu_energi.png'
        },
        {
          id: 2,
          title: 'Protein',
          url: '/kebutuhan_gizi/protein',
          bImg: 'assets/img/menu_protein.png'
        },
        {
          id: 3,
          title: 'Karbohidrat',
          url: '/kebutuhan_gizi/karbohidrat',
          bImg: 'assets/img/menu_karbohidrat.png'

        },
        {
          id: 4,
          title: 'Lemak',
          url: '/kebutuhan_gizi/lemak',
          bImg: 'assets/img/menu_lemak.png'

        },
        {
          id: 5,
          title: 'Vitamin & Mineral',
          url: '/kebutuhan_gizi/vitamin_mineral',
          bImg: 'assets/img/menu_vitamin.png'

        },
        {
          id: 6,
          title: 'Cairan',
          url: '/kebutuhan_gizi/cairan',
          bImg: 'assets/img/menu_cairan.png'

        },
      ],
    }
  },
}
</script>

<style scoped>
  .menu {
    background-size: cover;
    background-position: center;
    vertical-align: middle;
  }

  
</style>