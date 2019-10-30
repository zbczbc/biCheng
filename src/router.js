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
            name: '首页',
            component: Index,
            meta: {
                index: 0,
            }
        },
        {
            path: '/introduce',
            name: '公司简介',
            component: Introduce,
            meta: {
                index: 1
            }
        },
        {
            path: '/org',
            name: '组织架构',
            component: Org,
            meta: {
                index: 1
            }
        },
        {
            path: '/honor',
            name: '资质荣誉',
            component: Honor,
            meta: {
                index: 1
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
                index: 4
            }
        },
        {
            path: '/partner',
            name: '合作伙伴',
            component: Partner,
            meta: {
                index: 5
            }
        },
        {
            path: '/case',
            name: '项目案例',
            component: Case,
            meta: {
                index: 6
            }
        },
        {
            path: '/contact',
            name: '联系我们',
            component: contact,
            meta: { index: 7 }
        },
    ]
})
