<template>
  <div style="margin: 75px auto;
    width: 300px;
    background: lightcoral; padding-top: 10px;
">
    <ul>
      <li v-for="i in doneTodos" :key="i.id">{{i.name}}</li>
    </ul>
    <div style="padding: 25px;">
      <h3>Count: {{count}}</h3>
      <button type="button" v-on:click="increment" class="btn btn-primary">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo",
  computed: {
    doneTodos() {
      return this.$store.getters.doneTodos;
    },
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    increment() {
      console.log("call cmng");
      //   this.$store.commit("increment");
      this.$store.dispatch("increment");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
