<template>
  <div class="sidebar-container">
    <h1>{{ productData.name}}</h1>
    <h2>
      <span class="basic-price">{{productData.basePriceGross}}</span>
      <span>{{productData.currency}}</span>
    </h2>
    <hr />
    <ProductForm :productData="productData" v-on:selectedSizePrice="selectSize" />
    <ProductDescription :productData="productData" />
  </div>
</template>

<script>
import ProductForm from "../product-form/ProductForm";
import ProductDescription from "../product-description/ProductDescription";

export default {
  props: ["productData"],
  components: {
    ProductForm,
    ProductDescription
  },
  methods: {
    selectSize(value) {
      const basicPrice = document.querySelector(".basic-price");
      basicPrice.innerHTML = value;
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 20px;
  text-align: left;
}

h2 {
  font-size: 20px;
  text-align: right;
  font-weight: bold;
  padding-top: 50px;
}

hr {
  margin-top: 20px;
  border-color: black;
}

@media only screen and (max-width: 768px) {
  h1 {
    padding-top: 20px;
    font-size: 18px;
  }

  h2 {
    font-size: 18px;
    padding-top: 30px;
  }

}
</style>
