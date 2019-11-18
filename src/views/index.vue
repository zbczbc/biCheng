<template>
    <div class="index-banner swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item,index in pageData.bannerList" :key="item.index">
                <template v-if="pageData.videoName&&$device.isPC&&index==0">
                    <div class="video-mask por"></div>
                    <video :src=$api.getImg(pageData.videoName) v-if="isPc" autoplay="autoplay" loop="loop" preload="true" id="indexBgVideo" muted=""></video>
                    <video :src=$api.getImg(pageData.videoName) v-else></video>
                </template>
                
                <div class="bg-box"  :style="{backgroundImage: 'url(' + $api.getImg(item.imgName) + ')'}"></div>
                <template v-if="index>0||$device.isM"></template>
               

                <div class="text-box" v-if="index==0">
                    <div class="tit">
                        <c-b :content=item.imgTitle></c-b>
                    </div>
                    <div class="sub-desc">
                        <c-b :content=item.content></c-b>
                    </div>

                    <img-icon v-if="$device.isPc" type="play" w=63 h=63 class="cp z10" @onClick="$showDialog('video')" m="40 auto"></img-icon>
                    <img-icon v-else type="play" w=40 h=40 class="cp z10" @onClick="$showDialog('video')" m="8% auto"></img-icon>

                    <div class="icons-group">
                        <div class="list" v-for="item in iconesGroup">
                            <img-icon :type=item.type class="ilm" :w=item.w :h=item.h m="0 5 0 0"/>
                            <span class="ilm">{{item.label}}</span>
                        </div>
                    </div>
                </div>

                <div class="layout pob" v-if="index>0">
                    <div class="text-box2">
                        <div class="tit">
                            <c-b :content=item.imgTitle></c-b>
                        </div>
                        <div class="desc">
                            <c-b :content=item.content></c-b>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>

        <div class="oper-pagin" ></div>
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
            bannerHeight: null,
            pageData: {}
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
        _initData() {
            this.iconesGroup = [
                { type: 'video-icon1', w: 25, h: 26, label: '规划设计'   },
                { type: 'video-icon2', w: 30, h: 30, label: '智慧城市建设' },
                { type: 'video-icon3', w: 30, h: 30, label: '产业运营服务' },
                { type: 'video-icon4', w: 31, h: 28, label: '智慧城市运维' },
            ]
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

        this._initData()

        this.$api.homeData().then(data => {
            
            let { bannerList } = data
            if(this.isPc) {
                bannerList.unshift([{}])
            }

            this.pageData = { ...data, bannerList }
            this.$root.$emit('sendCopyright', data.copyright)

            this.$nextTick(() => {
                this.initSwiper()
            })
        })
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
    right 30px; color rgba(255,255,255,.3);
.swiper-button-prev
    left 20px; color rgba(255,255,255,.3);
.swiper-button-next:hover, .swiper-button-prev:hover
    color:#fff;

.bg-box
    height 100%; width 100%; background-size cover; background-position center

.text-box
    calcmedia('h', 360px, auto);
    
    transform: translateY(-50%);top: 50%; pb();
    position absolute; text-align center; width 100%;
    
    .tit
        font-size: px2vw(62);
        calcmedia('sz', px2vw(62), 30px, 26px)
        calcmedia('lh', px2vw(90), 45px); margin 20px 0 25px;
    .sub-tit
        font-size: px2vw(54); margin 20px 0 25px;
    .sub-desc
        font-size: px2vw(24); padding 0 10px; iconUrl("tbg.jpg"); display: inline-block; border-radius: 44px;
        height: 44px; line-height: 44px;

.icons-group{
    width: 600px; margin: 20px auto;
    .list{
        calcmedia('p', 0 0 0 20px, 0 0 0 8%)
        w(25%); f(left); t(center); m(0 0 10px 0);
    }
}

.layout{
    h(100%); right:0;
}
.text-box2{
    calcmedia('w', 520px, 80%);
    calcmedia('l', 0, 0);
    calcmedia('r', auto, 0);
    calcmedia('m', 0, 0 auto);
    calcmedia('align', left, center);

    topcenter();
    .tit{
        calcmedia('sz', px2vw(62), 30px, 26px);
        calcmedia('lh', 75px, 45px, 40px);
        
    }
    .desc{
        calcmedia('mt', 35px, 20px);
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




</style>
