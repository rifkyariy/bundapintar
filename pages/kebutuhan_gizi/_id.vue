<template>
    <div>
    <Navbar :title="title"/>
    <component :is="dynamicComponent" />
  </div>
</template>

<script>

  export default {
    computed:{
      dynamicComponent(){
        return `Dynamic${this.$route.params.id}` || 'div'
      }
    }
  }
</script>