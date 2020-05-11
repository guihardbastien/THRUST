import Vue from 'vue';
import App from './App.vue';
import './assets/styles/main.scss';

Vue.config.productionTip = false;
// Vue.config.productionTip = true;
new Vue({
    render: h => h(App),
}).$mount('#app');
