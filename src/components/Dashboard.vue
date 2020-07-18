<template>
  <div style="display: flex; flex-direction: column; height: 100vh">
    <Header />
    <div style="background: #efe9e2; flex: 1; overflow-y: auto">
      <div class="container mb-5">
        <h4 class="my-4" style="font-weight: 600">Top rated</h4>
        <div class="row">
          <div
            v-for="items in topRated"
            :key="items.id"
            v-on:click="foodDetails(items)"
            class="col-md-4"
            style="cursor: pointer"
          >
            <img :src="items.url" width="300px" height="300px" style="border-radius: 15px" />
          </div>
        </div>
        <!--  -->
        <h4 class="my-4" style="font-weight: 600">All Categories</h4>
        <div class="row">
          <div
            v-for="items in allCategories"
            :key="items.id"
            class="col-md-4"
            style="cursor: pointer"
          >
            <img :src="items.url" width="300px" height="300px" style="border-radius: 15px" />
          </div>
        </div>
        <!--  -->
        <h4 class="my-4" style="font-weight: 600">Dishes Near You</h4>
        <div class="row">
          <div
            v-for="items in dishesNearYou"
            :key="items.id"
            class="col-md-4"
            style="cursor: pointer"
          >
            <img :src="items.url" width="300px" height="300px" style="border-radius: 15px" />
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
  name: "Dashboard",
  components: {
    Header,
    Footer
  },
  computed: {
    topRated() {
      return this.$store.state.topRated;
    },
    allCategories() {
      return this.$store.state.allCategories;
    },
    dishesNearYou() {
      return this.$store.state.dishesNearYou;
    }
  },
  methods: {
    foodDetails(item) {
      this.$router.push({ name: "food-details", params: item });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
