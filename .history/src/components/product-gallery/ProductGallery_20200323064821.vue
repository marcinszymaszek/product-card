<template>
  <div>
    <ul>
      <li
        tabindex="1"
        v-for="(image,index) in images"
        @click="changeMainPhoto(productData.images[2].baseUrl)"
        :key="image.thumbnailUrl"
      >
        <img class="thumbnail active" v-bind:src="productData.images[index].thumbnailUrl" autofocus />
      </li>
    </ul>
    <img class="main-photo img-fluid" v-bind:src="productData.images[0].baseUrl" />
    <!-- {{productData.images[0].baseUrl}} -->
  </div>
</template>

<script>
export default {
  props: ["productData"],
  data() {
    return {
      data: this.productData,
      mainPhoto: [],
      images: [
        { thumbnailUrl: "", id: 1 },
        { thumbnailUrl: "", id: 2 },
        { thumbnailUrl: "", id: 3 },
        { thumbnailUrl: "", id: 4 },
        { thumbnailUrl: "", id: 5 }
      ]
    }
  const imagesArray = data.images;

    // imagesArray.map((image, i) => {
    //   this.images[i].thumbnailUrl = image.thumbnailUrl;
    //   this.images[i].baseUrl = image.baseUrl;
    // });
  },
  mounted() {
    this.mainPhoto = this.data.images[0].baseUrl;
  },
  methods: {
    changeMainPhoto(mainPhoto) {
      this.mainPhoto = mainPhoto;
    }
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

