<template>
    <div class="index-banner swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in list" :key="item.index">
                <div class="bg-box"  :style="{backgroundImage: 'url(' + item.src + ')'}"></div>
                <div class="text-box">
                    <div class="tit">标题</div>
                    <div class="sub-tit">标题</div>
                    <div class="sub-desc">标题</div>
                    <img-icon type="play" ></img-icon>
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

        }
    },
    created() {
        this.$nextTick(() => {
            this.initSwiper()
        })

        this.$root.$on('onChangeWindow', () => {
            this.setStyle()
        })
    }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixin.styl';

.index-banner 
    position fixed; height calc(100% - 150px); width 100%;  top 100px;
    .swiper-wrapper
        height 100%; 
        .swiper-slide
            height 100%
    .swiper-button-next
        right 30px; iconUrl('fff_left.png');
.bg-box
    height 100%; width 100%; background-size cover; background-position center

.text-box
    position absolute; top 0; 





</style>

