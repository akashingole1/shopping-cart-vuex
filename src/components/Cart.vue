<template>
  <div style="display: flex; flex-direction: column; height: 100vh">
    <Header />

    <div style="background: #efe9e2; flex: 1; overflow-y: auto">
      <div class="container mb-5">
        <h4 class="my-4" style="font-weight: 600">My Cart</h4>
        <div class="d-flex" style="justify-content: space-between;">
          <h4>Summary</h4>
          <h4 style="margin-right: 49%;">Cart</h4>
        </div>
        <div style="display: flex">
          <div class="row" style="width: 50%">
            <div class="col-md-4">
              <h6>Total:</h6>
              <h6>Promo Code:</h6>
              <h6>Shipping:</h6>
            </div>
            <div class="col-md-4">
              <h6>Rs 1000</h6>
              <h6>SWEETDISH</h6>
              <h6>Rs 50</h6>
            </div>
          </div>
          <div class="row" style="width: 50%">
            <div style="max-width: 70%" class="col-md-12">
              <ul style="padding: 0">
                <li v-for="items in cartItems" :key="items.id" style="list-style: none;">
                  <div
                    style="display: flex; justify-content: space-between;
                     padding: 10px; background: white"
                  >
                    <img :src="items.url" width="50px" height="50px" style="border-radius: 50%" />
                    <h6 style="margin-top: 15px">{{items.name}}</h6>
                    <div style="margin-top: 10px" class="d-flex">
                      <button v-on:click="removeItem(items)" class="add" type="button">-</button>
                      <!-- <div class="cart-item">
                        <input type="text" value="items.quantity" />
                      </div>-->
                      <span class="cart-item">{{items.quantity}}</span>
                      <button v-on:click="addToCart(items)" class="remove" type="button">+</button>
                    </div>
                    <h6 style="margin-top: 15px">{{items.price * items.quantity}}</h6>
                  </div>
                  <div style="height: 1px; width: 100%; border-bottom: 1px solid black;"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./common/Header";
import Footer from "./common/Footer";
export default {
  name: "Cart",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      item: 0
    };
  },
  methods: {
    addToCart(item) {
      this.$store.dispatch("addToCart", item);
    },
    removeItem(item) {
      this.$store.dispatch("removeItem", item);
    }
  },
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart-item {
  display: inline-block;
  padding: 3px 6px;
  width: 46px;
  height: 28px;
  border-radius: 2px;
  background-color: #fff;
  margin: 0 5px;
  text-align: center;
}

input[type="text"] {
  border: none;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  vertical-align: middle;
  text-align: center;
  outline: none;
}

.add,
.remove {
  width: 28px;
  height: 28px;
  background: linear-gradient(#fff, #f9f9f9);
  border: 1px solid #c2c2c2;
  cursor: pointer;
  font-size: 16px;
  border-radius: 7px;
  padding-top: 1px;
  outline: none;
}
</style>
