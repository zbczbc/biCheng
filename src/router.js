import Vue from 'vue'
import Router from 'vue-router'

import Index from './views/index'
import Introduce from './views/introduce'
import Org from './views/org'
import Honor from './views/honor'
import Product from './views/product'
import Scene from './views/scene'
import Partner from './views/partner'
import Case from './views/case'
import contact from './views/contact'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', name: 'index', component: Index },
        { path: '/introduce', name: 'introduce', component: Introduce },
        { path: '/header',  name: 'org', component: Org},
        { path: '/honor',  name: 'honor', component: Honor},
        { path: '/product',  name: 'product', component: Product},
        { path: '/scene',  name: 'scene', component: Scene},
        { path: '/partner',  name: 'partner', component: Partner},
        { path: '/case',  name: 'case', component: Case},
        { path: '/contact',  name: 'contact', component: contact},
    ]
})
