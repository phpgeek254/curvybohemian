import Vue from 'vue'
import Vuex from 'vuex'
import UserStore from "./Stores/UserStore";
import GalleryStore from "./Stores/GalleryStore";
import BlogStore from "./Stores/BlogStore";
import SliderStore from "./Stores/SliderStore";
import FactStore from "./Stores/FactStore";
import FashionStore from "./Stores/FashionStore";
import POST_STORE from "./Stores/post_store";
import DIY_STORE from "./Stores/DiyStore";
import BEAUTY_STORE from "./Stores/BeautyStore";


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        UserStore,
        GalleryStore,
        BlogStore, 
        SliderStore,
        FactStore,
        FashionStore,
        POST_STORE,
        DIY_STORE,
        BEAUTY_STORE
    },

})