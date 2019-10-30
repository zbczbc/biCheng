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
        {
            path: '/',
            name: 'index',
            component: Index,
            meta: {
                index: 0
            }
        },
        {
            path: '/introduce',
            name: 'introduce',
            component: Introduce,
            meta: {
                index: 1
            }
        },
        {
            path: '/org',
            name: 'org',
            component: Org,
            meta: {
                index: 1
            }
        },
        {
            path: '/honor',
            name: 'honor',
            component: Honor,
            meta: {
                index: 1
            }
        },
        {
            path: '/product',
            name: 'product',
            component: Product,
            meta: {
                index: 2
            }
        },
        {
            path: '/scene',
            name: 'scene',
            component: Scene,
            meta: {
                index: 4
            }
        },
        {
            path: '/partner',
            name: 'partner',
            component: Partner,
            meta: {
                index: 5
            }
        },
        {
            path: '/case',
            name: 'case',
            component: Case,
            meta: {
                index: 6
            }
        },
        {
            path: '/contact',
            name: 'contact',
            component: contact,
            meta: { index: 7 }
        },
    ]
})
