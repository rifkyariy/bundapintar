<template>
  <div>
    <Navbar :title="title" />
    <div class="p-4">
      <h1 class="font-playfair font-semibold text-2xl pb-4">{{ title }}</h1>
      <p class="pl-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <div class="my-5">
        <h3 class="font-playfair font-semibold text-xl mb-4">Tim Penyusun</h3>
        <card-pengurus v-for="member in members" :key="member.id" :title="member.name" :img="member.img" :role="member.role"> </card-pengurus>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Tentang Aplikasi',
      members: [
        {
          id: 1,
          name: 'Rina Oktasari',
          role: 'Ketua',
          img: 'assets/img/penyusun/bu-rina.png'
        },
        {
          id: 2,
          name: 'Nur Hidayat',
          role: 'Anggota',
          img: 'assets/img/penyusun/pak_nur.png'
        },
        {
          id: 3,
          name: 'Lastmi Wayansari',
          role: 'Anggota',
          img: 'assets/img/penyusun/bu-lastmi.png'
        },
        {
          id: 4,
          name: 'Elsandra Dinar Mahlufi',
          role: 'Anggota',
          img: 'assets/img/penyusun/elsa.png'
        },
      ],
    }
  },
}
</script>

<style>
</style>