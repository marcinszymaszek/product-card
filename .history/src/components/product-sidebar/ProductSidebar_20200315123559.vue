<template>
  <div class="sidebar-container">
    <h1>productName</h1>
    <h2>
      price
      <span>currency</span>
    </h2>
    <hr />
    <ProductForm />
    <ProductDescription />
  </div>
</template>

<script>
import ProductForm from "../product-form/ProductForm";
import ProductDescription from "../product-description/ProductDescription";

export default {
  components: {
    ProductForm,
    ProductDescription
  },
  // data() {
  //   return {
  //     description: ""
  //   };
  // },
  // mounted: function() {
  //   const result = async () => {
  //     const response = await fetch("../../static/product.json");
  //     const data = await response.json();
  //     this.description = data.description;
  //   };
  //   result();
  // }
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
    padding-top: 40px;
  }
}
</style>
