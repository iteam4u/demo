import './core/hooks';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Prism from 'prismjs';
import globalComponents from './components/global';
import list from 'vue-mapp/js/list'
import VueMapp from 'vue-mapp/es5';
// import VueMappComponents from 'vue-mapp/es5/all';
import store from './store'
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import './style.postcss';

Vue.config.productionTip = false

Vue.use(list);
Vue.use(globalComponents);
Vue.use(VueMapp);
// Vue.use(VueMappComponents);

Prism.plugins.NormalizeWhitespace.setDefaults({
    'remove-trailing': true,
    'remove-indent': true,
    'left-trim': true,
    'right-trim': true,
    'break-lines': 80,
    'remove-initial-line-feed': false,
    'tabs-to-spaces': 4
    // 'spaces-to-tabs': 4
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
