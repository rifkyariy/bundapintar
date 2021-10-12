<template>
  <div class="p-4 w-screen h-15 flex items-stretch shadow-md bg-white sticky top-0 z-50">
    <img class="cursor-pointer" src="/assets/img/back-btn.svg" :alt="title" @click="$router.go(-1)">
    <div class="pl-2 self-center flex-grow text-center">
      <h4 class="font-main font-semibold ">{{title}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: { 
    title: { type: String, default: '' }, 
  }
}
</script>

<style>

</style>