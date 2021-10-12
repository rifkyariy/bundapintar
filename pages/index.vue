<template>
  <div>
    <SplashScreen/>
    <MainMenu v-show="$store.state.splashscreen.isOnce"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
}
</script>
