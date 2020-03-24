<template>
  <div>
    <ul>
      <li
        tabindex="1"
        v-for="image in images"
        @click="changeMainPhoto(image.baseUrl)"
        :key="image.thumbnailUrl">
        <img class="thumbnail active" v-bind:src="image.thumbnailUrl" autofocus />
      </li>
    </ul>
    <img class="main-photo img-fluid" v-bind:src="mainPhoto" />
    {{productData.images[0].baseUrl}}
  </div>
</template>

<script>
export default {
  props: ["productData"],
  data() {
    return {
      mainPhoto: [],
      images: [
        { thumbnailUrl: "", baseUrl: "" },
        { thumbnailUrl: "", baseUrl: "" },
        { thumbnailUrl: "", baseUrl: "" },
        { thumbnailUrl: "", baseUrl: "" },
        { thumbnailUrl: "", baseUrl: "" }
      ]
    };
  },
  methods: {
    fetchData() {
      this.$emit("fetch-data");
    },
    changeMainPhoto(mainPhoto) {
      this.mainPhoto = mainPhoto;
    }
  },
  mounted: function() {
    const result = async () => {
      // const response = await fetch("../../static/product.json");
      // const data = await response.json();
      // this.mainPhoto = data.images[0].baseUrl;
      // const imagesArray = data.images;
      // imagesArray.map((image, i) => {
      //   this.images[i].thumbnailUrl = image.thumbnailUrl;
      //   this.images[i].baseUrl = image.baseUrl;
      // });
      console.log(productData);
    };
    result();
  }
};
</script>

<style scoped>
.main-photo {
  margin: 5px 5px;
}

.thumbnail {
  margin: 5px 5px;
}

li img {
  border: solid 1px lightgray;
  cursor: pointer;
}

li img:hover {
  border: solid 1px darkgray;
}

ul li img:focus {
  border: solid 1px black !important;
  cursor: pointer;
}

ul {
  list-style: none;
  float: left;
  border: 0px;
  margin: 0;
  padding: 0;
}

@media only screen and (max-width: 980px) {
  ul {
    display: none;
  }
}
</style>

