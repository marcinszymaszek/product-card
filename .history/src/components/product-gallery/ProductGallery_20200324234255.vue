<template>
  <div>
    <img class="main-photo" v-bind:src="productData.images[0].baseUrl" />
    <ul>
      <li
        tabindex="1"
        v-for="(image,index) in productData.images"
        @click="changeMainPhoto(productData.images[index].baseUrl)"
        :key="image.thumbnailUrl"
      >
        <img class="thumbnail active" v-bind:src="productData.images[index].thumbnailUrl" autofocus />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["productData"],
  methods: {
    changeMainPhoto(mainPhoto) {
      const bigPhoto = document.querySelector(".main-photo");
      bigPhoto.src = mainPhoto;
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
    display: inline-flex;
    margin-bottom: 0;
  }
  div.col-xs-12.col-md-8  img{
    width: 95% ;
    height: auto;
    margin-top: 20px;
  }

ul li {
  padding: 2px;
}

.thumbnail.active{
  border: none !important;
}

}

@media only screen and (max-width: 480px) {
  ul {
    display: none;
  }

}
</style>

