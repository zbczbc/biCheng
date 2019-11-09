<template>
    <div class="header-wrap"  :class="{'nav-open': navOpen}">
        <div class="pr z10 layout">
            <div class="log fl" v-if="!isM">
                <img-box class="pc-logo" :type="logoType" m="26 0 0 0" @onClick="toIndex"></img-box>
            </div>
            <div class="nav fr ani-hei">
                <ul class="ul-01">
                    <li
                        v-for="(item,index) in navList"
                        :key="item.name"
                        :class="{ active: index==activeIndex, open: item.children&&hoverIndex==index }"
                        @click.stop="onClickItem(item, index, 1)"
                        @mouseleave="onMouseOut"
                        @mouseenter="onMouseOver(item, index)">
                        <span>{{item.name}}</span>

                        <transition name="height">
                            <ul class="ul-02"
                                :class="{'ul-03':index==2}"
                                v-show="item.children&&hoverIndex==index">
                                <li v-for="item02, indexSec in item.children"  @click="onClickItem(item02, indexSec, 2, index)">
                                    {{item02.name}}
                                </li>
                            </ul>
                        </transition>
                    </li>
                </ul>
            </div>
        </div>

        <div class="down-bg ani-hei" :style="bgHeight" v-if="!isM"></div>

        <div class="m-top z10" v-if="isM">
            <img-box  @onClick="toIndex" class="pc-logo" :type="logoType" w=100 h=30  m="14 0 0 10"></img-box>
            <img-icon class="menu-icon por" :type="menuIconType" @onClick="monToggleNav" w=24 h=24 m="20 10 0 0"></img-icon>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'

const PATH_INDEX = {
    2: '/product',
    3: '/scene',
    5: '/case',
}

export default {
    props: {
        navList: {
            default: () => []
        }
    },
    data() {
        return {
            activeIndex: 0,
            isShowChild: false,
            hoverIndex: 0,
            navOpen: false,
            logoType: 'logo',
            isM: false,
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
        onClickItem(item, index, level, Findex) {

            if(item.children) {
                if(this.isM) {

                    if(this.hoverIndex == index) {
                        this.hoverIndex = 0
                    }else{
                        this.hoverIndex = index
                    }
                }
            }else {
                let path = item.path || PATH_INDEX[Findex]

                if(path.indexOf('case') > -1) {
                    if(this.$route.path.indexOf('case') > -1) {
                        let _top = $(`.pagin-${index}`).offset().top
                        $('html,body').animate({scrollTop: _top-30})
                    }else{
                        this.$router.push('/case')
                    }

                }else{
                    if(item.id) {
                        path = `${path}?id=${item.id}`
                    }

                    this.$router.push(path)
                }

                this.menuIconType = "menu"
                this.navOpen = false
                this.logoType = "logo"
            }
        },
        monToggleNav() {
            this.navOpen = !this.navOpen

            if(this.navOpen) {
                this.logoType = 'mLogo'
                this.menuIconType = "fff_close"
                this.whiteLogVisible = true
            }else{
                this.logoType = 'logo'
                this.menuIconType = "menu"
            }
        },
        toIndex() {
            if(this.$route.path != "/") {
                this.$router.push("/")
            }
            this.menuIconType = "menu"
            this.navOpen = false
            this.logoType = "logo"
        },
       
        _initData() {

        }
    },
    computed: {
        bgHeight() {
            // let childNav = this.navList.length && this.navList[this.hoverIndex].children
            // if( childNav ) {
            //     return childNav.length > 4 ? 'moreRow' : 'oneRow'
            // }else{
            //     return ""
            // }

            
            let childNav = this.navList.length && this.navList[this.hoverIndex].children
            if(childNav) {
                let height = 70
                if(this.hoverIndex == 2) {
                    height = Math.ceil(childNav.length/2) * 40 + 50
                }
                return `height: ${height}px`
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
