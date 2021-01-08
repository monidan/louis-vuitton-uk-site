import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/router'
import store from './store/index'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTimes, faPhoneAlt, faMapMarkerAlt, faShoppingBag, faSearch} from '@fortawesome/free-solid-svg-icons'
import {faQuestionCircle, faHeart, faUser} from '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(
  faTimes,
  faQuestionCircle,
  faPhoneAlt,
  faMapMarkerAlt,
  faHeart,
  faUser,
  faShoppingBag,
  faSearch,
)


Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon);

const app = new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
});

app.$mount('#app');