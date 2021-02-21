<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <div class="loading" v-if="isloading">
      loading ...
    </div>
  </div>
</template>

<script>
import Header from '@/components/header.vue';

export default {
  components: {
    Header,
  },
  computed: {
    isloading() {
      return this.$store.state.isloading;
    },
  },
};
</script>

<style lang="scss">
@import './assets/scss/main';
@import './assets/scss/_variables';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: $bg-color;
  width: 100%;
  height: 100%;
}
</style>
