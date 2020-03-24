<template>
  <div>
    <ul>
      <li
        tabindex="1"
        v-for="image in images"
        @click="changeMainPhoto(image.baseUrl)"
        :key="image.thumbnailUrl"
      >
        <img class="thumbnail active" v-bind:src="image.thumbnailUrl" autofocus />
      </li>
    </ul>
    <img class="main-photo img-fluid" v-bind:src="mainPhoto" />
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
  mounted() {
    // const result = async () => {
    //   this.mainPhoto = this.productData.images[0].baseUrl;
    //   const imagesArray = this.productData.images;
    //   imagesArray.map((image, i) => {
    //     this.images[i].thumbnailUrl = image.thumbnailUrl;
    //     this.images[i].baseUrl = image.baseUrl;
    //   });
    //   // console.log(this.productData);
    // };
    // result();

    if (!this.productData) {
      console.log("loading...");
    } 
      this.mainPhoto = this.productData.images[0].baseUrl;
      const imagesArray = this.productData.images;
      imagesArray.map((image, i) => {
        this.images[i].thumbnailUrl = image.thumbnailUrl;
        this.images[i].baseUrl = image.baseUrl;
      });
  
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

