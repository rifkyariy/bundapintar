<template>
  <transition name="fade">
  <div v-if="isShow">
    <div class="p-4 bg-image h-screen">
      <h2 class="font-playfair text-4xl font-extrabold pt-4 pb-8">Menu</h2>
      <div>
        <card-menu
          v-for="menu in menus"
          :key="menu.id"
          :url="menu.url"
          :title="menu.title"
          :img="menu.img"
        ></card-menu>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
import CardMenu from '../components/CardMenu.vue'

export default {
  components: {
    CardMenu
  },
  data() {
      return {
        isShow: true,
        menus: [
                {
                  'id': 1,
                  'title': 'Tumbang Balita dan Stunting',
                  'img': '/assets/img/Kind of Icon=Default.svg',
                  'url': 'tumbang_balita_dan_stunting',
                  'slug': 'tumbang_balita_dan_stunting'
                },
                {
                  'id': 2,
                  'title': 'Gizi Seimbang',
                  'img': '/assets/img/Kind of Icon=Gizi Seimbang.svg',
                  'url': 'gizi_seimbang',
                  'slug': 'gizi_seimbang'
                },
                {
                  'id': 3,
                  'title': 'Kebutuhan Gizi',
                  'img': '/assets/img/Kind of Icon=Fungsi Zat Gizi.svg',
                  'url': 'kebutuhan_gizi',
                  'slug': 'kebutuhan_gizi'
                },
                {
                  'id': 4,
                  'title': 'PMBA',
                  'img': '/assets/img/Kind of Icon=PMBA.svg',
                  'url': 'pbma',
                  'slug': 'pbma'
                },
                {
                  'id': 5,
                  'title': 'Contoh MPASI',
                  'img': '/assets/img/Kind of Icon=Contoh MPASI.svg',
                  'url': 'mpasi',
                  'slug': 'mpasi'
                },
                {
                  'id': 6,
                  'title': 'Cek Status Gizi',
                  'img': '/assets/img/Kind of Icon=Kalkulator.svg',
                  'url': 'kalkulator_gizi',
                  'slug': 'kalkulator_gizi'
                },
                {
                  'id': 7,
                  'title': 'Tentang Aplikasi',
                  'img': '/assets/img/Kind of Icon=Tentang Apps.svg',
                  'url': 'tentang_aplikasi',
                  'slug': 'tentang_aplikasi'
                }
              ]
      }
    }
}
</script>

<style scoped>
  .bg-image {
    background-image: url("/assets/img/bg-circle-alt.svg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .shadow-md {
    --tw-shadow: 0 4px 6px -1px rgba(27, 177, 127, 0.1), 0 2px 4px -1px rgba(27, 177, 127, 0.1);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #78CDB9), var(--tw-ring-shadow, 0 0 #78CDB9), var(--tw-shadow) !important;
  }
</style>