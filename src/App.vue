<template>
  <div id="app">
    <Header></Header>
    <div class="mx-48">
      <router-view class="animated slideInUp"></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    Header
  },
  created() {
    this.$store.dispatch("initStocks");
  }
};
</script>

<style>
body {
  font-family: "Raleway", sans-serif;
}
</style>
