<template>
  <div>
    <div class="bg-image h-screen">
      <Navbar :title="title" />
      <img
        class="w-full rounded-b-xl"
        src="/assets/img/menu_lemak.png"
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
                <th class="w-1/3 py-2">
                  Gr/Hari
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="nutri in nutritionTables" :key="nutri.id">
                <td>{{ nutri.golongan }} Tahun</td>
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
      title: 'Lemak',
      descriptions: [
        {
          id: 1,
          text: "Lemak memiliki fungsi sebgai sumber asam lemak sesensial, pelarut vitamin A, D, E, dan K. serta pemberian rasa gurih dalam penyedap makanan."
        },
        {
          id: 2,
          text: "Balita membutuhkan lebih banyak lemak dibandingkan orang dewasa karena tubuh mereka menggunakan energi lebih selama masa pertumbuhan dan perkembangan."
        },
        {
          id: 3,
          text: "Sumber lemak terdapat pada minyak kelapa, kedelai, minyak kelapa sawit, dan kacang tanah."
        },
        {
          id: 3,
          text: "Kebutuhan Lemak untuk Anak Balita"
        },
      ],
      nutritionTables: [
        {
          id: 1,
          golongan: '1 - 3',
          satuan: '44',
        },
        {
          id: 2,
          golongan: '4 - 6',
          satuan: '62',
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