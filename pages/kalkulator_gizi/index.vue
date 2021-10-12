<template>
  <div class="bg-image h-screen">
    <Navbar :title="title" />
    <div class="p-4 text-main">
      <h4 class="font-main font-bold text-md py-2">
        Berapa Kebutuhan Kalori Anda ?
      </h4>
      <span>Nama</span>
      <input
        v-model="name"
        name="name"
        class="
          w-full
          my-2
          h-12
          placeholder-gray-600
          border
          rounded-xl
          pl-3
          pr-3
        "
        placeholder="Nama Kamu"
        type="text"
      />

      <span>Kategori Usia</span>
      <div>
        <select
          v-model="ageRange"
          name="age"
          class="
            w-full
            my-2
            h-12
            pl-3
            pr-3
            placeholder-gray-600
            border
            rounded-xl
            appearance-none
            focus:shadow-outline
          "
        >
          <option value="0" selected>0 - 5 Tahun</option>
          <option value="1">6 - 12 Tahun</option>
          <option value="2">> 13 Tahun</option>
        </select>
      </div>

      <span>Jenis Kelamin</span>
      <div class="my-2">
        <div>
          <label class="inline-flex items-center">
            <input
              v-model="gender"
              type="radio"
              class="form-radio"
              name="gender"
              value="L"
              checked
            />
            <span class="ml-2 my-2">Laki Laki</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input
              v-model="gender"
              type="radio"
              class="form-radio"
              name="gender"
              value="P"
            />
            <span class="ml-2 my-2">Perempuan</span>
          </label>
        </div>
      </div>

      <span>Tanggal Lahir</span>
      <input
        v-model="birthdate"
        name="birthdate"
        class="
          w-full
          my-2
          h-12
          placeholder-gray-600
          border
          rounded-xl
          pl-3
          pr-3
        "
        type="date"
      />

      <span>Berat Badan</span>
      <div class="w-full flex">
        <input
          v-model="weight"
          name="weight"
          class="
            w-11/12
            my-2
            h-12
            placeholder-gray-600
            border
            rounded-xl
            pl-3
            pr-3
          "
          placeholder="Berat Badan"
          type="text"
          @keypress="onlyNumber"
        />
        <div class="w-1/12 text-right flex items-center justify-end">
          <span class="font-bold text-green-500 text-sm">Kg</span>
        </div>
      </div>

      <span>Tinggi Badan</span>
      <div class="w-full flex">
        <input
          v-model="height"
          name="height"
          class="
            w-11/12
            my-2
            h-12
            placeholder-gray-600
            border
            rounded-xl
            pl-3
            pr-3
          "
          placeholder="Tinggi Badan"
          type="text"
          @keypress="onlyNumber"
        />

        <div class="w-1/12 text-right flex items-center justify-end">
          <span class="font-bold text-green-500 text-sm">Cm</span>
        </div>
      </div>

      <div>
        <button
          class="
            w-full
            mt-2
            bg-green-500
            h-12
            text-white
            active:bg-purple-600
            font-bold
            uppercase
            text-base
            px-8
            py-3
            rounded-xl
            shadow-md
            hover:shadow-lg
            outline-none
            focus:outline-none
            mr-1
            mb-1
            ease-linear
            transition-all
            duration-150
          "
          type="button"
          @click="calculateNutrition()"
        >
          Hitung
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BbULakiLaki from '~/store/calculator/bb_u_lk.json'
import BbUPerempuan from '~/store/calculator/bb_u_pr.json'
import PbBbLakiLaki from '~/store/calculator/pb_bb_lk.json'
import PbBbPerempuan from '~/store/calculator/pb_bb_pr.json'
import PbULakiLaki from '~/store/calculator/pb_u_lk.json'
import PbUPerempuan from '~/store/calculator/pb_u_pr.json'
import TbBbLakiLaki from '~/store/calculator/tb_bb_lk.json'
import TbBbPerempuan from '~/store/calculator/tb_bb_pr.json'
import TbULakiLaki from '~/store/calculator/tb_u_lk.json'
import TbUPerempuan from '~/store/calculator/tb_u_pr.json'

const today = new Date()

export default {
  asyncData({ params }) {
    const BbU = {
      LakiLaki: BbULakiLaki,
      Perempuan: BbUPerempuan,
    }

    const PbBb = {
      LakiLaki: PbBbLakiLaki,
      Perempuan: PbBbPerempuan,
    }

    const PbU = {
      LakiLaki: PbULakiLaki,
      Perempuan: PbUPerempuan,
    }

    const TbBb = {
      LakiLaki: TbBbLakiLaki,
      Perempuan: TbBbPerempuan,
    }

    const TbU = {
      LakiLaki: TbULakiLaki,
      Perempuan: TbUPerempuan,
    }

    const result = {
      BbU,
      PbBb,
      PbU,
      TbBb,
      TbU,
    }
    return { result }
  },
  data() {
    return {
      name: null,
      ageRange: 0,
      gender: 'L',
      height: 0,
      weight: 0,
      birthdate:
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getDate(),
      title: 'Cek Status Gizi',
    }
  },
  methods: {
    calculateNutrition() {
      const name = this.name
      const ageRange = parseInt(this.ageRange)
      const gender = this.gender
      const weight = this.weight
      const height = this.height
      const birthdate = new Date(this.birthdate)
      const age = this.calculateMonth(birthdate)

      // eslint-disable-next-line no-console
      console.log(
        name,
        ageRange,
        age,
        gender,
        weight,
        height,
        birthdate.getFullYear()
      )

      if (ageRange === 0) {
        const HasilBBU = this.calculateBB(age, gender, weight)
        const HasilTBU = this.calculateTB(age, gender, height)
        const HasilBBTB = this.calculateBBTB(age, gender, weight, height)

        localStorage.setItem('name', name)
        localStorage.setItem('gender', gender)
        localStorage.setItem('weight', weight)
        localStorage.setItem('height', height)
        localStorage.setItem('birthdate', birthdate)
        localStorage.setItem('age', age)
        localStorage.setItem('HasilBBU', HasilBBU)
        localStorage.setItem('HasilTBU', HasilTBU)
        localStorage.setItem('HasilBBTB', HasilBBTB)

        this.$router.push('/kalkulator_gizi/result')
      } else {
        // eslint-disable-next-line no-console
        console.log('Oops Bukan Balita')
      }
    },
    calculateMonth(birthdate) {
      return Math.max(
        (today.getFullYear() - birthdate.getFullYear()) * 12 +
          today.getMonth() -
          birthdate.getMonth(),
        0
      )
    },
    onlyNumber($event) {
      const keyCode = $event.keyCode ? $event.keyCode : $event.which
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        $event.preventDefault()
      }
    },
    calculateBB(age, gender, weight) {
      let CompareDatas = []
      if (gender === 'L') {
        CompareDatas = this.result.BbU.LakiLaki.data
      } else {
        CompareDatas = this.result.BbU.Perempuan.data
      }

      const equalData = CompareDatas.filter(
        (children) => children.bulan === age
      )

      let result = 'Terjadi Kesalahan'
      if (equalData.length !== 0) {
        const median = equalData[0].median

        const diff = weight - median
        let deviation = 0

        if (diff >= 0) {
          deviation = equalData[0].plus1 - median
        } else {
          deviation = median - equalData[0].min1
        }

        const zScoreBB = diff / deviation
        if (zScoreBB < -3.0) {
          result = 'Berat Badan Sangat Kurang'
        } else if (zScoreBB < -2.0 && zScoreBB >= -3.0) {
          result = 'Berat Badan Kurang'
        } else if (zScoreBB <= 1.0 && zScoreBB >= -2.0) {
          result = 'Berat Badan Normal'
        } else {
          result = 'Resiko Berat Badan Lebih'
        }
      }

      return result
    },
    calculateTB(age, gender, height) {
      let CompareDatas = []
      if (age <= 24) {
        CompareDatas = this.result.PbU
      } else {
        CompareDatas = this.result.TbU
      }

      if (gender === 'L') {
        CompareDatas = CompareDatas.LakiLaki.data
      } else {
        CompareDatas = CompareDatas.Perempuan.data
      }

      const equalData = CompareDatas.filter(
        (children) => children.bulan === age
      )

      let result = 'Terjadi Kesalahan'
      if (equalData.length !== 0) {
        const median = equalData[0].median
        const diff = height - median
        let deviation = 0

        if (diff >= 0) {
          deviation = equalData[0].plus1 - median
        } else {
          deviation = median - equalData[0].min1
        }

        const zScoreTB = diff / deviation

        if (zScoreTB < -3.0) {
          result = 'Sangat Pendek'
        } else if (zScoreTB < -2.0 && zScoreTB >= -3.0) {
          result = 'Pendek'
        } else if (zScoreTB <= 3.0 && zScoreTB >= -2.0) {
          result = 'Normal'
        } else {
          result = 'Tinggi'
        }
      }

      return result
    },
    calculateBBTB(age, gender, weight, height) {
      let CompareDatas = []
      if (gender === 'L') {
        CompareDatas = this.result.TbBb.LakiLaki.data
      } else {
        CompareDatas = this.result.TbBb.Perempuan.data
      }

      const equalData = CompareDatas.filter(
        (children) => parseFloat(children.tb) === parseFloat(height)
      )

      let result = 'Terjadi Kesalahan'
      if (equalData.length !== 0) {
        const median = equalData[0].median
        const diff = weight - median
        let deviation = 0

        if (diff >= 0) {
          deviation = equalData[0].plus1 - median
        } else {
          deviation = median - equalData[0].min1
        }

        const zScoreTBBB = diff / deviation

        if (zScoreTBBB < -3.0) {
          result = 'Gizi Buruk'
        } else if (zScoreTBBB < -2.0 && zScoreTBBB >= -3.0) {
          result = 'Gizi Kurang'
        } else if (zScoreTBBB <= 1.0 && zScoreTBBB >= -2.0) {
          result = 'Gizi Normal'
        } else if (zScoreTBBB <= 2.0 && zScoreTBBB > 1.0) {
          result = 'Beresiko Gizi Lebih'
        } else if (zScoreTBBB <= 3.0 && zScoreTBBB > 2.0) {
          result = 'Gizi Lebih'
        } else {
          result = 'Obesitas'
        }
      }

      return result
    },
  },
}
</script>

<style>
</style>