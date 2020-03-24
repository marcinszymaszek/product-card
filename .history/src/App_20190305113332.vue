<template>
  <div id="app">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md-8">
                <MainPhotos/>
            </div>
            <div class="col-xs-6 col-md-4">
                <ProductData/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import MainPhotos from './components/MainPhotos';
import ProductData from './components/ProductData';

export default {
  name: 'App',
  components: {
    MainPhotos,
    ProductData
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
