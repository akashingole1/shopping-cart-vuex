<template>
  <header>
    <div style="height: 60px; background: lightgrey; display: flex; justify-content: space-between">
      <div v-on:click="goTo('home')" style="display: flex; margin-left: 10px; padding: 6px">
        <h5 style="font-weight: 600; margin-top: 10px; ">Sweet Dish</h5>
        <img src="../../assets/food.png" width="45px" height="45px" style="margin-left: 10px;" />
      </div>
      <div style="display: flex; width: 300px; justify-content: space-evenly;">
        <i
          v-on:click="goTo('cart')"
          style="line-height: 45px; font-size: 24px; color: #2aa5a0; cursor:pointer"
          class="fa fa-shopping-cart"
        ></i>
        <span class="cart-count">{{count}}</span>

        <h5 style="font-weight: 600; margin-top: 10px;">Login</h5>
        <h5 style="font-weight: 600; margin-top: 10px;">Sign Up</h5>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    goTo(page) {
      page === "home" ? this.$router.push("/") : this.$router.push("/cart");
    }
  },
  computed: {
    count() {
      return this.$store.state.cartItemCount;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart-count {
  font-size: 15px;
  color: #d4570cf2;
  padding: 0 5px;
  margin-left: -35px;
  background: white;
  height: 20px;
  border-radius: 50%;
  width: 20px;
}
</style>
