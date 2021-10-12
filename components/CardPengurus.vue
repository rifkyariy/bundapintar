<template>
  <div class="card flex bg-white rounded-lg shadow-md p-4 px-4 flex-row items-center mb-4">
    <img 
      class="w-20 rounded-xl"
      :src="img"
      :alt="title"
      srcset="">
      
    <div class="px-4">
      <h4 class="font-bold text-base font-main flex-grow min-width-180">{{title}}</h4>
      <span class="text-gray-600">{{ role }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: { 
    url: { type: String, default: '' },
    title: { type: String, default: '' }, 
    role: { type: String, default: '' }, 
    img: { type: String, default: '' } 
  }
}
</script>

<style scoped>
  .min-width-180{
    min-width: 180px;
  }
</style>