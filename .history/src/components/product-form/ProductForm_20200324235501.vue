<template>
  <div class="product-form-container">
    <form id="app" @submit="checkForm">
      <div>
        <div class="errors">
          <p :key="error">{{ error }}</p>
        </div>
      </div>
      <h3>
        WYBRANO:
        <span id="color">{{productData.configurableAttributes.color[0].value}}</span>
      </h3>
      <label class="btn-macrophoto active" title="szary">
        <input type="checkbox" name="color" id="color" v-model="colorFlag" />
        <img src="../../assets/macro_photo.jpg" title="szary" />
      </label>
      <h3>ROZMIAR</h3>
      <div class="size-buttons">
        <label
          tabindex="1"
          class="btn btn-outline-dark"
          v-for="(size,index) in productData.configurableAttributes.size"
          @click="changeSizePrice(productData.configurablePrices[0].prices[index].priceGross)"
          :key="size.value"
        >
          <input type="checkbox" v-model="sizeFlag" />
          {{productData.configurableAttributes.size[index].value}}
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
  props: ["productData"],
  data() {
    return {
      colorFlag: false,
      sizeFlag: false,
      error: ""
    };
  },
  methods: {
    changeSizePrice(price) {
      this.$emit("selectedSizePrice", price);
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

.btn.btn-outline-dark {
  border-radius: 2px;
  margin: 5px 2px;
  width: 50px;
  background: white;
  border: 2px solid black;
  cursor: pointer;
}

.btn.btn-outline-dark:hover {
  background: #999999;
}

.btn.btn-outline-dark:focus {
  background: black;
  color: white;
  border: none;
}

.btn.btn-primary.btn-block {
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

@media only screen and (max-width: 980px) {
  h3 {
    font-size: 13px;
    padding-top: 0px;
  }

  .btn.btn-outline-dark {
    /* margin: 5px 4px; */
    width: 45px;
    margin-left: 7px;
  }
  .size-buttons label:nth-child(1) {
    margin-left: 0px !important;
  }

  form#app{
    margin-top: 20%;
  }
}

@media only screen and (max-width: 480px) {
  form#app{
    margin-top: 10%;
  }

  #app > div.v--modal-overlay > div > div.v--modal-box.v--modal.vue-dialog{
    margin: 0px 10px;
  }
}
</style>

