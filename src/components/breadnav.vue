<template>
    <div class="bread-nav pr">
        <div class="layout" >
            <img-icon type="address" w=12 h=18 class="ilm" m="0 0 0 10"></img-icon>
            <span class="link cp" v-for="item,index in breadList" :key="index" :to="'index'" @click="onBreadClick(item)">
                {{item.label}}
                <img-icon class="right-icon ilm" v-if="index<breadList.length-1" type="right-gray" w=13 h=13 />
            </span>

            <ul class="oper-list fr" v-show="thirdList&&thirdList.length>0&&!isM">
                <li class="fl"
                    v-for="item,index in thirdList"
                    @click="onItemClick(item, index)"
                    :class="{active: index==activeIndex}" >{{item.name}}</li>
            </ul>
        </div>


        <div class="menu open" v-if="isM&&thirdList&&thirdList.length>0">
            <div class="menu-head" @click="onToggle">
                <span>{{title}}</span>
                <img-icon type="right-gray" w=25 h=25 m="13 10 0 0" class="por r90 tra" :class="{r270: isShowMore}"/>
            </div>

            <div class="menu-list">
                <ul>
                    <li class="list"
                        v-for="item,index in thirdList"
                        @click="onItemClick(item, index)"
                        :class="{active: index==activeIndex}" >{{item.name}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
    props: {
        value: {
            default: 0
        }
    },
    data() {
        return {
            breadList: [],
            activeIndex: null,
            operVisible: false,
            isShowMore: false,
            thirdList: [],
            currentItem: {},
            title: ""
        }
    },
    methods: {
        onBreadClick(item) {
            if(item.label=="首页") {
                this.$router.push('/')
            }
        },
        onItemClick(item, index) {
            this.activeIndex = index
            let curPath = this.$route.path

            if(/case/.test(curPath)) {
                let _top = $(`.pagin-${index}`).offset().top
                $('html,body').animate({scrollTop: _top-30})
            }else{
                let route = `${curPath}?id=${item.id}`
                this.$router.push(route)
                $('.menu-list').slideUp()
            }
        },
        onToggle() {
            this.isShowMore = !this.isShowMore
            $('.menu-list').slideToggle()
        }
    },
    watch: {
        $route: {
            immediate: true,
            handler(route) {
                this.breadList = [
                    { path: '/', label: '首页' },
                ]

                if(route.name != "产品介绍") {
                    this.breadList.push({ path: '/', label: route.name })
                }
            }
        },
        value: {
            immediate: true,
            handler(index) {
                this.activeIndex = index
            }
        }
    },
    computed: {
        isM() {
            return this.$device.isM
        }
    },
    created() {
        this.$root.$on('getNavSuccess', routes => {
            let index = this.$route.meta.index

            let childs = routes[index]

            if(routes[index]) {
                this.thirdList = routes[index]
            }


            if(index == 2) {
                childs = routes.productList
            }


            if(childs) {
                let currentChild;

                childs.map((item,index) => {
                    if(item.id == this.$route.query.id) {
                        this.activeIndex = index
                        currentChild = item
                    }
                })


                    this.title = childs[this.activeIndex].name
                    this.breadList.push({
                        label: currentChild.name
                    })
                if(currentChild) {}
            }

        })
    }
}
</script>

<style lang="stylus" scoped>
.bread-nav{
    calcmedia('lhh', 70px, 48px);
    //calcmedia('p', false, 0 10px);
    background: #eee;
    .link{
        p(0 0px 0 5px); vertical-align middle; color: $color-text;

        .right-icon{
            m(0 5px 0 8px);
        }


        &.active,&:hover{
            color:$blue;
        }
    }

    .oper-list{
        li {
            padding: 0 20px; fz(16px); cursor: pointer;
            &.active,&:hover{
                bg($blue); color:#fff;
            }
        }
    }
}

</style>
