import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import FullPost from './views/FullPost.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(require('vue-moment'))
Vue.use(Router)
Vue.use(BootstrapVue);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/post/:id/:link',
      name: 'FullPost',
      component: FullPost,
      props: (route) => ({
        from: route.query.from
    })
    }
  ]
})
