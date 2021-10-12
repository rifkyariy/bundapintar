<template>
  <div>
    <div class="bg-image h-screen">
      <Navbar :title="title" />
      <img
        class="w-full rounded-b-xl"
        src="/assets/img/menu_vitamin.svg"
        alt=""
        srcset=""
      />
      <div class="m-4 pt-4 font-main">
        <p v-for="desc in descriptions" :key="desc.id" class="mb-4">
          {{ desc.text }}
        </p>
        <div>
          <table
            class="table-auto text-center border-2 border-green-500 rounded-2xl text-sm"
          >
            <thead class="rounded-2xl">
              <tr class="bg-green-500 text-white rounded-2xl py-2">
                <th class=" py-2">Zat Gizi</th>
                <th class=" py-2">Kecukupan / Hari</th>
                <th class=" py-2">
                  Setara
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="nutri in nutritionTables" :key="nutri.id" class="p-2">
                <td>{{ nutri.golongan }}</td>
                <td>{{ nutri.satuan }}</td>
                <td>{{ nutri.setara }}</td>
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
      title: 'Vitamin & Mineral',
      descriptions: [
        {
          id: 1,
          text: "Vitamin dan mineral pada balita berfungsi untuk pertumbuhan dan metabolisme tubuh. Pada anak balita bila terjadi defisiensi akan menggangu pertumbuhan."
        },
        {
          id: 2,
          text: "Kebutuhan vitamin untuk anak balita yaitu vitamin A, B, C, D, E, dan vitamin K. Vitamin bagi balita sangat berguna untuk pertumbuhan dan metabolisme tubuh."
        },
        {
          id: 3,
          text: "Menu yang setiap harinya mengandung susu, daging ayam, ikan, telur, sayur, buah dan serealia akan mengandun cukup minreal dan vitamin."
        },
        {
          id: 3,
          text: "Kebutuhan Vitamin & Mineral untuk Anak Balita"
        },
      ],
      nutritionTables: [
        {
          id: 1,
          golongan: 'Vitamin A',
          satuan: '400 ug',
          setara: 'Wortel (50 g)',
        },
        {
          id: 2,
          golongan: 'Vitamin D',
          satuan: '200 IU',
          setara: 'Susu (470 ml / 2 Cangkir)',
        },
        {
          id: 3,
          golongan: 'Vitamin K',
          satuan: '15 ug',
          setara: '2 Tangkai Asparagus (20 g)',
        },
        {
          id: 4,
          golongan: 'Vitamin B1',
          satuan: '0,5 mg',
          setara: 'Kentang Rebus (150 g)',
        },
        {
          id: 5,
          golongan: 'Vitamin B2',
          satuan: '0,5 mg',
          setara: 'Telur Rebus (55 g)',
        },
        {
          id: 6,
          golongan: 'Vitamin B3',
          satuan: '6 mg',
          setara: 'Dada Ayam (50 g)',
        },
        {
          id: 7,
          golongan: 'Vitamin B6',
          satuan: '0,5 ug',
          setara: 'Fillet Salmon (90 g)',
        },
        {
          id: 8,
          golongan: 'Vitamin B12',
          satuan: '0,9 ug',
          setara: '1 Butir Telur Rebus',
        },
        {
          id: 9,
          golongan: 'Asam Folat',
          satuan: '150 ug',
          setara: '3 Kuntum Brokoli (35 g)',
        },
        {
          id: 10,
          golongan: 'Kalsium',
          satuan: '500 ug',
          setara: 'Susu (290 ml)',
        },
        {
          id: 11,
          golongan: 'Magnesium',
          satuan: '60 ug',
          setara: '1 Mangkuk Buah Labu (245 g)',
        },
        {
          id: 12,
          golongan: 'Zat Besi',
          satuan: '8 ug',
          setara: 'Daging Sapir (170 g)',
        },
        {
          id: 13,
          golongan: 'Zinc',
          satuan: '7 ug',
          setara: 'Kacang Tanah (100 g)',
        },
        {
          id: 14,
          golongan: 'Selenium',
          satuan: '17 ug',
          setara: 'Tuna (20 g)',
        },
        {
          id: 15,
          golongan: 'Natrium',
          satuan: '0,8',
          setara: 'Garam (1/2 sdt)',
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