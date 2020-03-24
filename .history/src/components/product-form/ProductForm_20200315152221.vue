<template>
  <div class="product-form-container">
    <form id="app" @submit="checkForm">
      <div>
        <div class="errors">
          <p v-bind:key="{error}">{{ error }}</p>
        </div>
      </div>
      <h3>
        WYBRANO:
        <span id="color">{{colorDefault}}</span>
      </h3>
      <label class="btn-macrophoto active" title="szary">
        <input type="checkbox" name="color" id="color" v-model="colorFlag" />
        <img src="../../assets/macro_photo.jpg" title="szary" />
      </label>
      <h3>ROZMIAR</h3>
      <div class="size-buttons">

        <label
          tabindex="1"
          v-on:click="changeXsSizePrice"
          class="btn btn-outline-dark btn-sm"
          :for="size in sizes">
          <input type="checkbox" name="sizeXs" id="sizeXs" v-model="sizeFlag" />
          {{sizes.sizeName}}
        </label>

        <!-- <label
          tabindex="1"
          v-on:click="changeSsizePrice"
          class="btn btn-outline-dark btn-sm"
          for="sizeS">
          <input type="checkbox" name="sizeS" id="sizeS" v-model="sizeFlag" />
          {{sizes.s}}
        </label>

        <label
          tabindex="1"
          v-on:click="changeMsizePrice"
          class="btn btn-outline-dark btn-sm"
          for="sizeM">
          <input type="checkbox" name="sizeM" id="sizeM" v-model="sizeFlag" />
          {{sizes.m}}
        </label>

        <label
          tabindex="1"
          v-on:click="changeLsizePrice"
          class="btn btn-outline-dark btn-sm"
          for="sizeL">
          <input type="checkbox" name="sizeL" id="sizeL" v-model="sizeFlag" />
          {{sizes.l}}
        </label> -->

      </div>

      <button type="submit" class="btn btn-primary btn-lg btn-block">
        DO KOSZYKA
        <span>
          <img class="shopping-purse-icon" src="../../assets/shopping-purse-icon.svg" />
        </span>
      </button>
      <v-dialog />
    </form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      price: "",
      colorDefault: "",
      sizes: [
        { sizeName: "" },
        { sizeName: "" },
        { sizeName: "" },
        { sizeName: "" }
      ],
      error: ""
    };
  },
  mounted: function() {
    const result = async () => {
      const response = await fetch("../../static/product.json");
      const data = await response.json();
      this.price = data.basePriceNet;
      this.colorDefault = data.configurableAttributes.color[0].value;
      this.sizes.xs = data.configurableAttributes.size[0].value;
      this.sizes.s = data.configurableAttributes.size[1].value;
      this.sizes.m = data.configurableAttributes.size[2].value;
      this.sizes.l = data.configurableAttributes.size[3].value;
    };
    result();
  },
  methods: {
    changeXsSizePrice(e) {
      const result = async () => {
        const response = await fetch("../../static/product.json");
        const data = await response.json();
        this.price = data.configurablePrices[0].prices[0].priceGross;
        this.$emit("selectedSizePrice", this.price);
      };
      result();
    },
    changeSsizePrice(e) {
      const result = async () => {
        const response = await fetch("../../static/product.json");
        const data = await response.json();
        this.price = data.configurablePrices[0].prices[1].priceGross;
        this.$emit("selectedSizePrice", this.price);
      };
      result();
    },
    changeMsizePrice(e) {
      const result = async () => {
        const response = await fetch("../../static/product.json");
        const data = await response.json();
        this.price = data.configurablePrices[0].prices[2].priceGross;
        this.$emit("selectedSizePrice", this.price);
      };
      result();
    },
    changeLsizePrice(e) {
      const result = async () => {
        const response = await fetch("../../static/product.json");
        const data = await response.json();
        this.price = data.configurablePrices[0].prices[3].priceGross;
        this.$emit("selectedSizePrice", this.price);
      };
      result();
    },
    checkForm(e) {
      if (this.colorFlag && this.sizeFlag) {
        this.$modal.show("dialog", {
          title: "DODANO DO KOSZYKA",
          text:
            "Twój produkt został poprawnie dodany do koszyka<br>Dziękujemy za zakupy",
          buttons: [
            {
              title: "Zamknij wiadomość"
            }
          ]
        });
        this.error = "";
      }
      if (!this.colorFlag && !this.sizeFlag) {
        this.error = "Proszę wybrać kolor oraz rozmiar";
      } else if (!this.colorFlag) {
        this.error = "Proszę wybrać kolor";
      } else if (!this.sizeFlag) {
        this.error = "Proszę wybrać rozmiar";
      }
      e.preventDefault();
    }
  }
};
</script>

<style scoped>
.errors {
  color: #ff6633;
  text-align: left;
}

input[type="checkbox"] {
  display: none;
}

label {
  display: inline-block;
  cursor: pointer;
}
label img {
  pointer-events: none;
}

.shopping-purse-icon {
  width: 18px;
  margin-bottom: 12px;
  margin-left: 13px;
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

.size-buttons {
  float: left;
}

.btn.btn-outline-dark.btn-sm {
  border-radius: 2px;
  margin: 5px 2px;
  width: 50px;
  background: white;
  border: 2px solid black;
  cursor: pointer;
}

.btn.btn-outline-dark.btn-sm:hover {
  background: #999999;
}

.btn.btn-outline-dark.btn-sm:focus {
  background: black;
  color: white;
  border: none;
}

.btn.btn-primary.btn-lg.btn-block {
  border-radius: 1px;
  background: black;
  border: none;
  margin-top: 100px;
}
.btn-macrophoto {
  text-align: left;
  margin-left: 0;
  float: left;
  width: 100%;
  margin-bottom: 30px;
}
.btn-macrophoto img {
  border-style: solid;
  border-width: 2px;
  cursor: pointer;
}

@media only screen and (max-width: 768px) {
  h3 {
    font-size: 13px;
    padding-top: 20px;
  }
}
</style>



<!--    OWC:

<template>
  <div class="product-form-container">
    <form id="app" @submit="checkForm">
      <div>
        <div class="errors">
          <p v-bind:key="{error}">{{ error }}</p>
        </div>
      </div>
      <h3>
        WYBRANO:
        <span id="color">{{colorDefault}}</span>
      </h3>
      <label class="btn-macrophoto active" title="szary">
        <input type="checkbox" name="color" id="color" v-model="colorFlag" />
        <img src="../../assets/macro_photo.jpg" title="szary" />
      </label>
      <h3>ROZMIAR</h3>
      <div class="size-buttons">
        <label
          tabindex="1"
          v-on:click="changeXsSizePrice"
          class="btn btn-outline-dark btn-sm"
          for="sizeXs"
        >
          <input type="checkbox" name="sizeXs" id="sizeXs" v-model="sizeFlag" />
          {{sizes.xs}}
        </label>
        <label
          tabindex="1"
          v-on:click="changeSsizePrice"
          class="btn btn-outline-dark btn-sm"
          for="sizeS"
        >
          <input type="checkbox" name="sizeS" id="sizeS" v-model="sizeFlag" />
          {{sizes.s}}
        </label>
        <label
          tabindex="1"
          v-on:click="changeMsizePrice"
          class="btn btn-outline-dark btn-sm"
          for="sizeM"
        >
          <input type="checkbox" name="sizeM" id="sizeM" v-model="sizeFlag" />
          {{sizes.m}}
        </label>
        <label
          tabindex="1"
          v-on:click="changeLsizePrice"
          class="btn btn-outline-dark btn-sm"
          for="sizeL"
        >
          <input type="checkbox" name="sizeL" id="sizeL" v-model="sizeFlag" />
          {{sizes.l}}
        </label>
      </div>

      <button type="submit" class="btn btn-primary btn-lg btn-block">
        DO KOSZYKA
        <span>
          <img class="shopping-purse-icon" src="../../assets/shopping-purse-icon.svg" />
        </span>
      </button>
      <v-dialog />
    </form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      price: "",
      colorDefault: "",
      sizes: [
        { xs: "" },
        { s: "" },
        { m: "" },
        { l: "" }
      ],
      error: ""
    };
  },
  mounted: function() {
    const result = async () => {
      const response = await fetch("../../static/product.json");
      const data = await response.json();
      this.price = data.basePriceNet;
      this.colorDefault = data.configurableAttributes.color[0].value;
      this.sizes.xs = data.configurableAttributes.size[0].value;
      this.sizes.s = data.configurableAttributes.size[1].value;
      this.sizes.m = data.configurableAttributes.size[2].value;
      this.sizes.l = data.configurableAttributes.size[3].value;
    };
    result();
  },
  methods: {
    changeXsSizePrice(e) {
      const result = async () => {
        const response = await fetch("../../static/product.json");
        const data = await response.json();
        this.price = data.configurablePrices[0].prices[0].priceGross;
        this.$emit("selectedSizePrice", this.price);
      };
      result();
    },
    changeSsizePrice(e) {
      const result = async () => {
        const response = await fetch("../../static/product.json");
        const data = await response.json();
        this.price = data.configurablePrices[0].prices[1].priceGross;
        this.$emit("selectedSizePrice", this.price);
      };
      result();
    },
    changeMsizePrice(e) {
      const result = async () => {
        const response = await fetch("../../static/product.json");
        const data = await response.json();
        this.price = data.configurablePrices[0].prices[2].priceGross;
        this.$emit("selectedSizePrice", this.price);
      };
      result();
    },
    changeLsizePrice(e) {
      const result = async () => {
        const response = await fetch("../../static/product.json");
        const data = await response.json();
        this.price = data.configurablePrices[0].prices[3].priceGross;
        this.$emit("selectedSizePrice", this.price);
      };
      result();
    },
    checkForm(e) {
      if (this.colorFlag && this.sizeFlag) {
        this.$modal.show("dialog", {
          title: "DODANO DO KOSZYKA",
          text:
            "Twój produkt został poprawnie dodany do koszyka<br>Dziękujemy za zakupy",
          buttons: [
            {
              title: "Zamknij wiadomość"
            }
          ]
        });
        this.error = "";
      }
      if (!this.colorFlag && !this.sizeFlag) {
        this.error = "Proszę wybrać kolor oraz rozmiar";
      } else if (!this.colorFlag) {
        this.error = "Proszę wybrać kolor";
      } else if (!this.sizeFlag) {
        this.error = "Proszę wybrać rozmiar";
      }
      e.preventDefault();
    }
  }
};
</script>

<style scoped>
.errors {
  color: #ff6633;
  text-align: left;
}

input[type="checkbox"] {
  display: none;
}

label {
  display: inline-block;
  cursor: pointer;
}
label img {
  pointer-events: none;
}

.shopping-purse-icon {
  width: 18px;
  margin-bottom: 12px;
  margin-left: 13px;
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

.size-buttons {
  float: left;
}

.btn.btn-outline-dark.btn-sm {
  border-radius: 2px;
  margin: 5px 2px;
  width: 50px;
  background: white;
  border: 2px solid black;
  cursor: pointer;
}

.btn.btn-outline-dark.btn-sm:hover {
  background: #999999;
}

.btn.btn-outline-dark.btn-sm:focus {
  background: black;
  color: white;
  border: none;
}

.btn.btn-primary.btn-lg.btn-block {
  border-radius: 1px;
  background: black;
  border: none;
  margin-top: 100px;
}
.btn-macrophoto {
  text-align: left;
  margin-left: 0;
  float: left;
  width: 100%;
  margin-bottom: 30px;
}
.btn-macrophoto img {
  border-style: solid;
  border-width: 2px;
  cursor: pointer;
}

@media only screen and (max-width: 768px) {
  h3 {
    font-size: 13px;
    padding-top: 20px;
  }
}
</style>

-->