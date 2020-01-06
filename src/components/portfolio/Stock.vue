<template>
  <div class="w-1/3 mb-4 border-gray-200 rounded-lg shadow">
    <div class="bg-appGreen1 text-white p-4 rounded-t-lg">
      <h3>
        {{ stock.name }}
        <span
          class="text-xs"
        >(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</span>
      </h3>
    </div>
    <div class="flex m-2">
      <input
        type="number"
        placeholder="Quantity"
        class="flex-1 bg-transparent border border-gray-500 text-gray-700 mr-4 p-2 rounded focus:outline-none"
        v-model="input"
      />
      <button
        class="flex-1 bg-appGreen1 hover:bg-appGreen2 py-2 px-4 rounded text-white focus:outline-none disabled:bg-gray-400 disabled:cursor-not-allowed"
        @click="sellStock"
        :disabled="
          insufficientFunds ||
            input == '' ||
            quantity <= 0 ||
            !Number.isInteger(quantity)
        "
      >{{ insufficientQuantity ? "Low Stocks" : "Sell" }}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      input: ""
    };
  },
  computed: {
    quantity() {
      return parseInt(this.input, 10);
    },
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("sellStock", order);
      this.input = "";
    }
  }
};
</script>
