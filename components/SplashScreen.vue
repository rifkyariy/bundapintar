<template>
  <!-- Splash Screen -->
  <transition name="fade">
    <div v-if="!isOnce">
      <div class="flex items-stretch justify-center bg-image h-screen w-screen">
        <div class="flex-auto"></div>
        <div class="flex-3 text-center inline-block align-middle self-center">
          <img class="text-center" src="/assets/img/main-img.svg" alt="" srcset="">
          <h2 class="py-2 font-playfair font-bolder text-4xl pt-2 ">Gizi Baik Anakku</h2>
          <span class="font-main font-bold">APLIKASI INFORMASI GIZI BALITA</span>
          <div class="relative pt-8">
            <div :max="max" class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
              <div :style="{width:value + '%'}" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
            </div>
          </div>
        </div>
        <div class="flex-auto"></div>
      </div>
      <p class="font-main text-center w-full font-bolder fixed bottom-10">Made By <b>InfiniteLabs</b></p>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
      return {
        value: 0,
        max: 100
      }
    },
    computed: {
      ...mapState({
        isOnce: state=> state.splashscreen.isOnce
      })
    },
    mounted(){
      this.addProgress(this.value)
    },
    methods: {
      addProgress(val){
        this.value = val + 0.5;
        if(this.value < 100){
          setTimeout(()=>{
            this.addProgress(this.value)
          },10);
        }else{
          setTimeout(()=>{
            this.$store.commit('splashscreen/SET_ONCE', true)
          },500);
        }
      }
    },
  }
</script>

<style>
  .bg-image {
    background-image: url("/assets/img/bg-circle.svg");
    background-size: cover;
    background-position: center;
    vertical-align: middle;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>