<template>
    <div class="index-banner swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in list" :key="item.index">
                <div class="bg-box"  :style="{backgroundImage: 'url(' + item.src + ')'}"></div>
                <div class="text-box">
                    <div class="tit">许明天一个精彩</div>
                    <div class="sub-tit">智慧城市系统建设及服务商</div>
                    <div class="sub-desc">把数字技术带入每个城市，让智慧触手可及</div>
                    <div></div>
                    <img-icon type="play" w=63 h=63 class="ilt" m="30 0 0 0"></img-icon>

                    <div class="icons-group">
                        <div class="list" v-for="item in iconesGroup">
                            <img-icon :type=item.type w=46 h=45 />
                            <span>{{item.label}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
</template>

<script>
import Swiper from "swiper"

export default {
    data() {
        return {
            list: [
                { src: 'static/programme-banner.png', index: 1, },
                { src: 'static/programme-banner.png', index: 2 },
                { src: 'static/programme-banner.png', index: 3 },
            ],
            bannerHeight: null
        }
    },
    methods: {
        initSwiper() {
            this.mySwiper = new Swiper(".swiper-container", {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            })

            console.log(this.mySwiper)
        },
        setStyle() {

        },
        _initData() {
            this.iconesGroup = [
                { type: 'icon_11', label: '规划设计' },
                { type: 'icon_11', label: '智慧城市建设' },
                { type: 'icon_11', label: '产业运营服务' },
                { type: 'icon_11', label: '智慧城市运维' },
            ]
        }
    },
    created() {

        this.$nextTick(() => {
            this.initSwiper()
        })

        this.$root.$on('onChangeWindow', () => {
            this.setStyle()
        })

        this._initData()
    }
}
</script>

<style lang="stylus" scoped>

.index-banner
    height calc(100vh - 171px); width 100%; 
    .swiper-wrapper
        height 100%;
        .swiper-slide
            height 100%
    .swiper-button-next
        right 30px; color #fff;
    .swiper-button-prev
        left 20px; color #fff;

.bg-box
    height 100%; width 100%; background-size cover; background-position center

.text-box
    position absolute; top 20%; text-align center; width 100%; 
    .tit
        font-size: 62px; 
    .sub-tit
        font-size: 54px; margin 20px 0 25px;
    .sub-desc
        font-size: 24px; padding 0 10px; iconUrl("tbg.png"); display: inline-block; border-radius: 44px; 
        height: 44px; line-height: 44px;
    





</style>
