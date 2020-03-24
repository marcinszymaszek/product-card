<template >
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-8">
          <ProductGallery />
        </div>
        <div class="col-xs-6 col-md-4">
          <ProductSidebar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductGallery from "./components/product-gallery/ProductGallery";
import ProductSidebar from "./components/product-sidebar/ProductSidebar";

export default {
  data() {
    return {
      productData: []
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch("../../static/product.json");
        const data = await response.json();
        this.productData = data;
      } catch (err) {
        console.log(err);
      }
    }
  },
  mounted:{
    fetchData()
  },
  components: {
    ProductGallery,
    ProductSidebar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>