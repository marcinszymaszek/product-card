<template>
  <div class="description-container">
    <h3>OPIS PRODUKTU</h3>
    <p>{{productData.description}}</p>
  </div>
</template>

<script>
import ProductForm from "../product-form/ProductForm";

export default {
  props: ["productData"],
  components: {
    ProductForm
  }
};
</script>

<style scoped>
h3 {
  font-size: 15px;
  text-align: left;
  font-weight: normal;
  padding-top: 30px;
}

h3 #color {
  text-transform: uppercase;
}

.description-container p {
  font-size: 13px;
}

.description-container h3 {
  padding-top: 10px;
}

.description-container {
  text-align: left;
  border: solid 1px grey;
  padding: 10px 10px;
  margin-bottom: 50px;
  margin-top: 20px;
}

@media only screen and (max-width: 768px) {
  h3 {
    font-size: 13px;
    padding-top: 20px;
  }

  .description-container {
    margin-bottom: 20px;
  }
}

@media only screen and (max-width: 480px) {
  .description-container {
    margin-bottom: 40px;
  }
}
</style>

