<template>
  <div class="bg-gray-100 lg:mx-40 mt-4">
    <div class="flex flex-wrap justify-between items-center">
      <div class="cursor-pointer">
        <router-link
          :to="{ name: 'home' }"
          class="lg:inline-block my-2 lg:mx-12 p-2 font-black"
          >Stock Trader
        </router-link>
        <router-link
          :to="{ name: 'portfolio' }"
          active-class="bg-appGreen1 text-white"
          class="lg:inline-block my-2 lg:mr-12 p-2"
        >
          Portfolio
        </router-link>
        <router-link
          :to="{ name: 'stocks' }"
          active-class="bg-appBlue1 text-white"
          class="lg:inline-block my-2 lg:mr-12 p-2"
        >
          Stocks
        </router-link>
      </div>

      <div class="cursor-pointer text-sm">
        <p @click="endDay" class="lg:inline-block my-2 lg:mr-1 p-2 ">
          End Day
        </p>
        <!-- <div class="relative lg:inline-block ">
          <select
            class="appearance-none text-black w-full py-1 pl-4 pr-6 rounded leading-tight focus:outline-none"
            v-model="option"
          >
            <option>Save Data & Load Data</option>
            <option>Save Data</option>
            <option>Load Data</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div> -->
        <p @click="saveData" class="lg:inline-block my-2 lg:mr-1 p-2">
          Save Data
        </p>
        <p @click="loadData" class="lg:inline-block my-2 lg:mr-1 p-2">
          Load Data
        </p>
        <p class="lg:inline-block lg:mr-1 cursor-auto text-base">
          Funds:
          <span class="bg-green-500 text-white px-1">{{
            funds | currency
          }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    endDay() {
      this.$store.dispatch("randomizeStocks");
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put("data.json", data);
    },
    loadData() {
      this.$store.dispatch("loadData");
    }
  }
};
</script>
