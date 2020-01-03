<template>
  <div class="flex flex-wrap mt-4">
    <Stock v-for="(stock, index) in stocks" :key="index" :stock="stock"></Stock>
  </div>
</template>

<script>
import Stock from "./Stock.vue";

export default {
  computed: {
    stocks() {
      return this.$store.getters.stockPortfolio;
    }
  },

  components: {
    Stock
  }
};
</script>
