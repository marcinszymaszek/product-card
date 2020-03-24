<template>
    <div class="description-container">
      <h3>OPIS PRODUKTU</h3>
      <p>{{description}}</p>
    </div>
</template>

<script>
import ProductForm from "../product-form/ProductForm";

export default {
  components: {
    ProductForm
  },
  data() {
    return {
      description: ""
    };
  },
  mounted: function() {
    const result = async () => {
      const response = await fetch("../../static/product.json");
      const data = await response.json();
      this.description = data.description;
    };
    result();
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

h3 {
  font-size: 15px;
  text-align: left;
  font-weight: normal;
  padding-top: 30px;
}

h3 #color {
  text-transform: uppercase;
}

.description p {
  font-size: 13px;
}

.description h3 {
  padding-top: 10px;
}

hr {
  margin-top: 20px;
  border-color: black;
}

.description {
  text-align: left;
  border: solid 1px grey;
  padding: 10px 10px;
  margin-bottom: 50px;
  margin-top: 10px;
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

  h3 {
    font-size: 13px;
    padding-top: 20px;
  }
  .description {
    margin-bottom: 20px;
  }
}
</style>
