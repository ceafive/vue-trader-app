<template>
  <div>
    <h1>Trade or View your Portfolio</h1>
    <h6>Save & Load your Data</h6>
    <h6>Click to 'End Day' to begin a New Day</h6>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>
