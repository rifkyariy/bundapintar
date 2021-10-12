<template>
  <div class="h-screen w-full bg-green-400">
    <div
      class="
        p-4
        w-screen
        h-15
        flex
        items-stretch
        sticky
        top-0
        z-50
        text-white
        bg-green-500
        shadow-m
      "
    >
      <img
        class="cursor-pointer"
        src="/assets/img/back-btn-white.svg"
        :alt="title"
        @click="$router.go(-1)"
      />
      <div class="pl-2 self-center flex-grow text-center">
        <h4 class="font-main font-semibold">{{ title }}</h4>
      </div>
    </div>
    <div>
      <div class="flex justify-center">
        <img class="my-5" width="140px" :src="imgSrc" alt="" />
      </div>
      <div>
        <div class="text-center px-4">
          <h3 class="text-3xl text-yellow-300 font-bold w-full">
            Halo, {{ name }}
          </h3>
          <span class="text-white text-lg font-main"
            >Berikut status gizi kamu :</span
          >
          <div class="mt-4">
            <div
              class="
                w-full
                text-center text-white
                rounded-xl
                bg-green-300
                p-2
                mb-2
              "
            >
              <span>Usia Kamu</span>
              <h3>{{ birthdate }} ({{ age }} Bulan)</h3>
            </div>
            <div
              class="
                w-full
                text-center text-white
                rounded-xl
                bg-green-300
                p-2
                mb-2
              "
            >
              <span>BB / U</span>
              <h3>{{ BbU }}</h3>
            </div>
            <div
              class="
                w-full
                text-center text-white
                rounded-xl
                bg-green-300
                p-2
                mb-2
              "
            >
              <span>TB / U</span>
              <h3>{{ TbU }}</h3>
            </div>
            <div
              class="
                w-full
                text-center text-white
                rounded-xl
                bg-green-300
                p-2
                mb-2
              "
            >
              <span>BB / TB</span>
              <h3>{{ BbTb }}</h3>
            </div>
          </div>

          <div class="fixed bottom-4 full-btn">
            <button
              class="w-full text-white rounded-xl bg-yellow-400 p-4"
              @click="$router.go(-1)"
            >
              Kembali
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hasil Status Gizi',
      gender: 'L',
      name: '',
      birthdate: 'DD-MM-YYYY',
      age: 0,
      BbU: '-',
      TbU: '-',
      BbTb: '-',
      imgSrc: '/assets/img/boy_image.svg',
    }
  },
  mounted() {
    this.name = localStorage.name
    this.gender = localStorage.gender
    this.weight = localStorage.weight
    this.height = localStorage.height
    this.age = localStorage.age
    this.birthdate = this.formatDate(localStorage.birthdate)
    this.BbU = localStorage.HasilBBU
    this.TbU = localStorage.HasilTBU
    this.BbTb = localStorage.HasilBBTB

    if (this.gender === 'L') {
      this.imgSrc = '/assets/img/boy_image.svg'
    } else {
      this.imgSrc = '/assets/img/girl_image.svg'
    }
  },
  methods: {
    formatDate(rawDate) {
      const monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ]

      rawDate = new Date(rawDate)
      const day = rawDate.getDate()
      const monthIndex = rawDate.getMonth()
      const monthName = monthNames[monthIndex]
      const year = rawDate.getFullYear()

      return `${day}/${monthName}/${year}`
    },
  },
}
</script>

<style scoped>
.full-btn {
  width: calc(100% - 2rem) !important;
}
</style>