import Vue from 'vue'
import VueRouter from 'vue-router'


// Pages
import HomePage from './components/HomePage.vue'
import AboutPage from './components/About.vue'
import Gallery from './components/Gallery.vue'
import Fashion from './components/Fashion.vue'
import Facts from './components/Facts.vue'
import Blog from './components/Blog.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Slider from './components/Slider.vue'
import Diy from './components/Diy.vue'
import Beauty from './components/Beauty.vue'
import ObjectDetail from './components/ObjectDetail'


Vue.use(VueRouter)

let routes = [
    {
        path: '/', component: HomePage, name: 'home'
    },
    {
        path: '/about', component: AboutPage, name: 'about'
    },
    {
        path: '/gallery', component: Gallery, name: 'gallery'
    },
    {
        path: '/fashion', component: Fashion, name: 'fashion'
    },
    {
        path: '/facts', component: Facts, name: 'facts'
    },
    {
        path: '/blog', component: Blog, name: 'blog'
    },
    {
        path: '/diy', component: Diy, name: 'diy'
    },
    {
        path: '/beauty', component: Beauty, name: 'beauty'
    },
    {
        path: '/login', component: Login, name: 'login'
    },
    {
        path: '/register', component: Register, name: 'register'
    },

    {
        path: '/slider', component: Slider, name: 'slider'
    },
    {
        path: 'deatail', component: ObjectDetail, name: 'detail'
    }
]
export default new VueRouter({
    routes,
    // mode: 'history'
})