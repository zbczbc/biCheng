<template>
    <div class="index-banner swiper-container" id="canvas-particle">
        <div class="swiper-wrapper">
            <div class="swiper-slide first-slide" id="canvas-wrap" v-if="firstBannerData.isShow=='Y'">
                <canvas id="can1"></canvas>
                <img src="static/earth-bot.png" class="pob full" />
                <img src="static/earth.png" class="abs earth" />

                <first-banner :item="firstBannerData" />
            </div>
            <div class="swiper-slide"  v-for="(item, index) in pageData.bannerList" :key="item.index">

                <template v-if="item.fileType=='视频'">
                    <template v-if="$device.isPC">
                        <div class="video-mask por"></div>
                        <video :src="$api.getImg(item.fileName)" autoplay="autoplay" loop="loop" preload="true" id="indexBgVideo"  controls ></video>

                    </template>
                    <video :src=$api.getImg(item.fileName) v-else></video>
                </template>

                <div v-else class="bg-box" :style="{backgroundImage: 'url(' + $api.getImg(item.fileName) + ')'}"></div>

                <div class="layout pob" >
                    <div class="text-box2">
                        <div class="tit">
                            <c-b :content=item.bannerTitle></c-b>
                        </div>
                        <template v-if="item.fileType=='视频'">
                            <img-icon v-if="$device.isPC" type="play" w=63 h=63 class="cp ilm z10" @onClick="$showDialog('video', item.fileName)"></img-icon>
                            <img-icon v-else type="play" w=40 h=40 class="cp ilm z10" @onClick="$showDialog('video', item.fileName)"></img-icon>
                        </template>

                        <div class="desc">
                            <c-b :content=item.bannerDescribe></c-b>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="swiper-button-next" v-if="isInitSwiper"></div>
        <div class="swiper-button-prev" v-if="isInitSwiper"></div>
        <div class="oper-pagin" ></div>
    </div>
</template>

<script>
import Swiper from 'swiper/dist/js/swiper.min.js'
import FirstBanner from "./home/firstBanner"

export default {
    data() {
        return {
            list: [
                { src: 'static/programme-banner.png', index: 1, videoUrl: 'static/video.mp4' },
                { src: 'static/programme-banner.png', index: 2, },
                { src: 'static/programme-banner.png', index: 3 },
            ],
            bannerHeight: null,
            pageData: {},
            isInitSwiper: false,
            firstBannerData: true
        }
    },
    methods: {
        initSwiper() {
            this.mySwiper = new Swiper(".swiper-container", {
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: `.oper-pagin`,
                    clickable: true
                }
            })
        },
        setStyle() {

        },
        getFirstBannerData() {
            return this.$api.getIndexBanner().then(data => {
                this.firstBannerData = data
            })
        },
        async getData() {
            await this.getFirstBannerData()

            this.$api.homeData().then(data => {

                let { bannerList } = data

                this.pageData = { ...data, bannerList }
                this.$root.$emit('sendCopyright', data.copyright)

                this.isInitSwiper = bannerList.length > 1

                this.$nextTick(() => {
                    this.initSwiper()
                })
            })
        }
    },
    computed: {
        isPc() {
            return this.$device.isPC
        }
    },
    created() {

        this.$root.$on('onChangeWindow', () => {
            this.setStyle()
        })

        this.getData()

    },
    components: {
        FirstBanner
    }
}
</script>

<style lang="stylus" scoped>

.index-banner
    height calc(100vh - 171px); width 100%; color: #fff;

.swiper-wrapper
    height 100%;
    .swiper-slide
        height 100%; overflow hidden;
        video
            width 100%;
        .video-mask
            width 100%; height 100%; top: 0; left: 0; background: rgba(0,0,0,0.3);
.swiper-button-next
    right 30px; color rgba(255,255,255,.3); z(12);
.swiper-button-prev
    left 20px; color rgba(255,255,255,.3); z(12);
.swiper-button-next:hover, .swiper-button-prev:hover
    color:#fff;

.bg-box
    height 100%; width 100%; background-size cover; background-position center


.layout{
    h(100%); right:0;
}
.text-box2{
    calcmedia('w', 100%, 80%);
    calcmedia('l', 0, 0);
    calcmedia('r', auto, 0);
    calcmedia('m', 0, 0 auto);
    calcmedia('align', center, center);
    topcenter();

    .tit{
        calcmedia('sz', px2vw(62), 30px, 26px);
        calcmedia('lh', 75px, 45px, 40px);
    }
    .desc{
        calcmedia('mt', 20px, 10px);
        calcmedia('lh', 35px, 24px);
        size18();
    }
}


 .oper-pagin{
    mt(20); tc(); z(100); pb(); bottom: 5%;
    /deep/ .swiper-pagination-bullet{
        margin: 0 8px; width: 30px; height: 3px; bg(#fff); border-radius: 3px;
    }
}

.first-slide{
    background: url('/static/earth-bg.jpg'); width: 100%; height: 100%; position: relative; z-index:10;
}

.earth {
  z-index: 2; calcmedia('w', 70vh, 50vh);
  animation: rotate 200s linear infinite;
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0);
  }
}

</style>
