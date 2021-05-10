//使用vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../page/home.vue'

export default new VueRouter({
    routes: [
        {
            path:"/",
            component:Home
        }
    ]
})