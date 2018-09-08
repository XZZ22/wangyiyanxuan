import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../pages/Home/Home.vue'
import Knowledge from '../pages/Knowledge/Knowledge.vue'
import Classify from '../pages/Classify/Classify.vue'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart.vue'
import Personal from '../pages/Personal/Personal.vue'

export default new VueRouter({
  routes:[
    {
      path:"/home",
      component:Home
    },
    {
      path:"/knowledge",
      component:Knowledge
    },
    {
      path:"/classify",
      component:Classify
    },
    {
      path:"/shoppingcart",
      component:ShoppingCart
    },
    {
      path:"/personal",
      component:Personal
    },
    {
      path:'/',
      redirect:"/home"
    }
  ]
})
