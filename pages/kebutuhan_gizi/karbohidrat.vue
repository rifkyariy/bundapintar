<template>
  <div>
    <div class="bg-image h-screen">
      <Navbar :title="title" />

      <img
        class="w-full rounded-b-xl"
        src="/assets/img/menu_karbohidrat.png"
        alt=""
        srcset=""
      />
      <div class="m-4 pt-4 font-main">
        <p v-for="desc in descriptions" :key="desc.id" class="mb-4">
          {{ desc.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Karbohidrat',
      descriptions: [
        {
          id: 1,
          text: "Karbohidrat diperlukan untuk menunjang aktivitas anak seperti bergerak, berlari, dan bermain."
        },
        {
          id: 2,
          text: "Sumber karbohidrat adalah roti, kacang hijau, beras, kentang, tepung beras, singkong, ubi, dan sebagainya."
        }
      ],
      nutritionTables: [
        {
          id: 1,
          golongan: '1 - 3',
          satuan: '26',
        },
        {
          id: 2,
          golongan: '4 - 6',
          satuan: '35',
        },
      ],
    }
  },
}
</script>

<style scoped>
table {
  border-collapse: separate;
  border: 2px solid rgb(16, 185, 129);
  border-radius: 6px;
  -moz-border-radius: 6px;
}
table td {
  border: 2px solid rgb(16, 185, 129);
}
</style>