<template>
  <div>
    count: {{count}}
    <button v-on:click="add">Add</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    add() {
      this.$store.commit("increment");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
