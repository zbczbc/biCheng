<template>
    <div class="index-banner swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item,index in list" :key="item.index">
                <template v-if="item.videoUrl">
                    <div class="video-mask por"></div>
                    <video :src=item.videoUrl autoplay="autoplay" loop="loop" preload="true" id="indexBgVideo" muted=""></video>
                </template>
                <div v-else class="bg-box"  :style="{backgroundImage: 'url(' + item.src + ')'}"></div>
                <div class="text-box" v-if="index==0">
                    <div class="tit">许明天一个精彩</div>
                    <div class="sub-tit">智慧城市系统建设及服务商</div>
                    <div class="sub-desc">把数字技术带入每个城市，让智慧触手可及</div>
                    <div></div>
                    <img-icon type="play" w=63 h=63 class="ilt" m="30 0 0 0"></img-icon>

                    <div class="icons-group">
                        <div class="list" v-for="item in iconesGroup">
                            <img-icon :type=item.type class="ilm" :w=item.w :h=item.h m="0 5 0 0"/>
                            <span class="ilm">{{item.label}}</span>
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
                { src: 'static/programme-banner.png', index: 1, videoUrl: 'static/video.mp4' },
                { src: 'static/programme-banner.png', index: 2, },
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
        },
        setStyle() {

        },
        _initData() {
            this.iconesGroup = [
                { type: 'video-icon1', w: 25, h: 26, label: '规划设计'   },
                { type: 'video-icon2', w: 30, h: 30, label: '智慧城市建设' },
                { type: 'video-icon3', w: 30, h: 30, label: '产业运营服务' },
                { type: 'video-icon4', w: 31, h: 28, label: '智慧城市运维' },
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
    height calc(100vh - 171px); width 100%; color: #fff;

.swiper-wrapper
    height 100%;
    .swiper-slide
        height 100%
        video
            width 100%;
        .video-mask
            width 100%; height 100%; top: 0; left: 0; background: rgba(0,0,0,0.3);
.swiper-button-next
    right 30px; color #fff;
.swiper-button-prev
    left 20px; color #fff;

.bg-box
    height 100%; width 100%; background-size cover; background-position center

.text-box
    position absolute; top 20%; text-align center; width 100%; 
    .tit
        font-size: px2vw(62);
    .sub-tit
        font-size: px2vw(54); margin 20px 0 25px;
    .sub-desc
        font-size: px2vw(24); padding 0 10px; iconUrl("tbg.png"); display: inline-block; border-radius: 44px;
        height: 44px; line-height: 44px;

.icons-group{
    width: 600px; margin: 20px auto;
    .list{
        w(25%); f(left); t(center); m(0 0 10px 0); p(0 0 0 20px);
    }
}





</style>
