require('./bootstrap');
require('./script');
import VueCarousel from 'vue-carousel';
import Vue from 'vue'


window.Vue = require('vue');


import store from './Store'
import router from './Router'
Vue.component('app', require('./components/App.vue'));
Vue.component('image-uploader', require('./components/ImageUploader.vue'));
Vue.component('object-list', require('./components/ObjectList.vue'));
Vue.component('add-object', require('./components/AddObject.vue'));
Vue.component('comment', require('./components/Comment.vue'));
Vue.component('like', require('./components/Like.vue'));
Vue.component('carosel', require('./components/Carosel.vue'));

Vue.use(VueCarousel);

const app = new Vue({
    el: '#app',
    store,
    router
});

