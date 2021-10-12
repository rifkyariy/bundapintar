<template>
  <div>
    <div class="bg-image h-screen">
      <Navbar :title="title" />
      <img
        class="w-full rounded-b-xl"
        src="/assets/img/menu_cairan.svg"
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
              <tr class="bg-green-500 text-white rounded-2xl py-2">
                <th class="w-1/3 py-2">Golongan Umur</th>
                <th class="w-1/3 py-2">Liter/Hari</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="nutri in nutritionTables" :key="nutri.id">
                <td>{{ nutri.golongan }}</td>
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
      title: 'Cairan',
      descriptions: [
        {
          id: 1,
          text: 'Air merupakan nutrisi penting bagi bayi dan balita karena merupakan komponen terbesar dalam tubuh manusia.',
        },
        {
          id: 2,
          text: 'Bayi beresiko besar kehilangan cairan melalui ginjal dibandingkan orang dewasa, bayi dana anak - anak lebih mungkin mengalami dehidrasi karena muntah dan diare berat.',
        },
        {
          id: 3,
          text: 'Angka kecukupan cairan menurut WKNPG pada tahun 2013 adalah',
        },
      ],
      nutritionTables: [
        {
          id: 1,
          golongan: '< 6 Bulan',
          satuan: '0,8',
        },
        {
          id: 2,
          golongan: '6 - 12 Bulan',
          satuan: '1',
        },
        {
          id: 3,
          golongan: '1 - 3 Tahun',
          satuan: '1,1',
        },
        {
          id: 4,
          golongan: '4 - 6 Tahun',
          satuan: '1,3',
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