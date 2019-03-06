import 'bootstrap/dist/css/bootstrap.min.css';
import VModal from 'vue-js-modal'
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;
Vue.use(VModal, { dialog: true });

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});
