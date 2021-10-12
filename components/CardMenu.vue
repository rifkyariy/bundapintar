<template>
  <div class="card flex bg-white rounded-lg shadow-md p-4 px-6 flex-row items-center place-content-center mb-4">
    <img 
      :src="img"
      :alt="title"
      srcset="">
    <h4 class="font-bold text-base font-main px-4 flex-grow min-width-180">{{title}}</h4>
    <nuxt-link :to="url">
      <img src="/assets/img/play-btn.svg" alt="">
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: { 
    url: { type: String, default: '' },
    title: { type: String, default: '' }, 
    img: { type: String, default: '' } 
  }
}
</script>

<style scoped>
  .min-width-180{
    max-width: 180px;
  }
</style>