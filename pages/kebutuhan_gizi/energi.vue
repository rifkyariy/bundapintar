<template>
  <div>
    <div class="bg-image h-screen">
      <Navbar :title="title" />

      <img
        class="w-full rounded-b-xl"
        src="/assets/img/menu_energi.svg"
        alt=""
        srcset=""
      />
      <div class="m-4 pt-4 font-main">
        <p v-for="desc in descriptions" :key="desc.id" class="mb-4">
          {{ desc.text }}
        </p>
        <div>
          <table
            class="table-auto text-center border-2 border-green-500 rounded-2xl"
          >
            <thead class="rounded-2xl">
              <tr class="bg-green-500 text-white rounded-2xl">
                <th class="w-1/3 py-2">Golongan Umur</th>
                <th class="w-1/3 py-2">Kecukupan Energi</th>
                <th class="w-1/3 py-2">
                  Kal/Kg <br />
                  BB/Hari
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="nutri in nutritionTables" :key="nutri.id">
                <td>{{ nutri.golongan }} Tahun</td>
                <td>{{ nutri.energi }}</td>
                <td>{{ nutri.satuan }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Energi',
      descriptions: [
        {
          id: 1,
          text: "Kebutuhan energi sehari pada balita disesuaikan menurut usia dan berat badan."
        },
        {
          id: 2,
          text: "Penggunaaan energi dalam tubuh dugunakan untuk metabolisme basal, aktivitas fisik, pertumbuhan ,dan perkembangan anak"
        },
        {
          id: 3,
          text: "Energi merupakan kemampuan atau tenaga untuk melakukan kerja yangdiperoleh dari zat - zat gizi penghasil energi."
        },
        {
          id: 4,
          text: "Kebutuhan Energi untuk Anak Balita"
        },
      ],
      nutritionTables: [
        {
          id: 1,
          golongan: '1 - 3',
          energi: '1125',
          satuan: '100',
        },
        {
          id: 2,
          golongan: '4 - 6',
          energi: '1600',
          satuan: '90',
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