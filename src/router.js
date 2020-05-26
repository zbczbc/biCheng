
import Vue from 'vue'
import Router from 'vue-router'

import Index from './views/index'
import About from './views/about/about'
import Product from './views/product'
import Scene from './views/scene'
import Partner from './views/partner'
import Case from './views/case'
import Contact from './views/contact'
// import Joinus from './views/joinus'
// import News from './views/news'


Vue.use(Router)

export function createRouter () {
    const router = {
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
                component: Contact,
                meta: {
                    index: 6
                }
            },
        ]
    }
    
    let routers = new Router(router)

    routers.beforeEach((to, from, next) => {
    
        //$('html,body').animate({scrollTop: 0})
        next()
    })

    return routers
}
