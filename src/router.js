import Vue from 'vue'
import Router from 'vue-router'

import Index from './views/index'
import About from './views/about'
import Product from './views/product'
import Scene from './views/scene'
import Partner from './views/partner'
import Case from './views/case'
import contact from './views/contact'

Vue.use(Router)

export const router = {
    mode: 'history',
    routes: [
        {
            path: '/',
            name: '首页',
            component: Index,
            meta: {
                index: 0,
            }
        },
        {
            path: '/about',
            name: '走进碧城',
            component: About,
            meta: {
                index: 1,
            }
        },
        {
            path: '/product',
            name: '产品介绍',
            component: Product,
            meta: {
                index: 2
            }
        },
        {
            path: '/scene',
            name: '场景方案',
            component: Scene,
            meta: {
                index: 3
            }
        },
        {
            path: '/partner',
            name: '合作伙伴',
            component: Partner,
            meta: {
                index: 4
            }
        },
        {
            path: '/case',
            name: '项目案例',
            component: Case,
            meta: {
                index: 5
            }
        },
        {
            path: '/contact',
            name: '联系我们',
            component: contact,
            meta: {
                index: 6
            }
        },
    ]
}

export default new Router(router)
