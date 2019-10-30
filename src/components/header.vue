<template>
    <div class="header-wrap"  :class="{'nav-open': navOpen}">
        <div class="pr z10 layout">
            <div class="log fl" v-if="!whiteLogVisible">
                <img-box class="pc-logo" :type="logoType" m="26 0 0 0" @onClick="toIndex"></img-box>
            </div>
            <div class="nav fr ani-hei">
                <ul class="ul-01">
                    <li
                        v-for="(item,index) in navList"
                        :key="item.name"
                        :class="{ active: index==activeIndex, open: item.children&&hoverIndex==index }"
                        @click.stop="onClickItem(item, index)"
                        @mouseleave="onMouseOut"
                        @mouseenter="onMouseOver(item, index)">
                        <span>{{item.name}}</span>

                        <transition name="height">
                            <ul class="ul-02"
                                :class="{'ul-03':item.children&&item.children.length>4}"
                                v-show="item.children&&hoverIndex==index">
                                <li v-for="item02 in item.children" @click="onClickItem(item02, index)" >{{item02.name}}</li>
                            </ul>
                        </transition>
                    </li>
                </ul>
            </div>
        </div>

        <div class="down-bg ani-hei" :class="bgClass" v-if="!isM"></div>

        <div class="m-top z10" v-if="isM">
            <img-box v-if="whiteLogVisible" @onClick="toIndex" class="pc-logo" :type="logoType" w=100 m="13 0 0 10"></img-box>
            <img-icon class="menu-icon por" :type="menuIconType" @onClick="monToggleNav" w=28 h=28 m="15 10 0 0"></img-icon>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: 0,
            isShowChild: false,
            hoverIndex: 0,
            navOpen: false,
            logoType: 'logo',
            isM: false,
            navList: [],
            menuIconType: 'menu',
            whiteLogVisible: false
        }
    },
    methods: {
        onMouseOver(item, index) {
            if(this.isM)  return
            this.hoverIndex = index

            if(item.children) {
                this.isShowChild = true
            }else{
                this.isShowChild = false
            }
        },
        onMouseOut() {
            this.isShowChild = false
            this.hoverIndex = 0
        },
        onClickItem(item, index) {
            if(item.children) {
                if(this.isM) {

                    if(this.hoverIndex == index) {
                        this.hoverIndex = 0
                    }else{
                        this.hoverIndex = index
                    }
                }
            }else {
                this.$router.push(item.path)
                this.navOpen = false
                this.logoType = "logo"
            }
        },
        monToggleNav() {
            this.navOpen = !this.navOpen

            if(this.navOpen) {
                this.logoType = 'mLogo'
                //this.menuIconType = ""
                this.whiteLogVisible = true
            }else{
                this.logoType = 'logo'
            }

        },
        toIndex() {
            this.$router.push('/')
        },
        _initData() {
            this.navList = [
                { name: '首页', path: '/' },
                { name: '走进碧城', path: '',
                    children: [
                        { name: '公司简介', path: '/introduce' },
                        { name: '组织架构', path: '/org' },
                        { name: '资质荣誉', path: '/honer' },
                    ]
                },
                { name: '产品介绍', path: '',
                    children: [
                        { name: '大数据分析平台', path: '/product' },
                    ]
                },
                { name: '场景方案', path: '/product',
                    children: [
                        { name: '产业园区',  },
                        { name: '智慧社区',  },
                        { name: '智慧酒店',  },
                        { name: '智慧商业',  },
                    ]
                },
                { name: '合作伙伴', path: '' },
                { name: '项目案例', path: '' ,
                    children: [
                        { name: '产业园区',  },
                        { name: '智慧社区',  },
                        { name: '智慧酒店',  },
                        { name: '智慧商业',  },
                    ]
                },
                { name: '联系我们', path: '' },
            ]
        }
    },
    computed: {
        bgClass() {
            let childNav = this.navList[this.hoverIndex].children
            if( childNav ) {
                return childNav.length > 4 ? 'moreRow' : 'oneRow'
            }else{
                return ""
            }
        }
    },
    watch: {
        $route: {
            immediate: true,
            handler(route) {
                if(route.meta.index >= 0) {
                    this.activeIndex = route.meta.index
                }
            }
        }
    },
    created() {
        this._initData()
        this.isM = this.$device.isM
    }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/header.styl';
</style>
