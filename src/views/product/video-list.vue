<template>
    <div class="video-box">
        <div class="play-con" ref="playcon">
            <video :src="videoSrc" autoplay="autoplay" loop="loop" preload="true" controls></video>
        </div>
        <scroll :mustShow=true color="#666">
            <div class="cover-con">
                <div class="cover-inner" :style="{width: sumW+'px'}">
                    <div    class="cover-list"
                            v-for="(item, i) in dataList"
                            :class="{active: i==activeIndex}"
                            @click="clickItem(i)"
                            :key="i"
                            :style="{width: unitW+'px'}">
                        <div class="inner">
                            <div class="img-w pr">
                                <img-box :url="item.videoImgName"  />
                                <template v-if="i!=activeIndex">
                                    <div class="mask"></div>
                                    <img-icon  type="play" w=40 h=40 class="abs" />
                                </template>
                            </div>
                            <div class="text tra">{{item.videoTitle}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </scroll>
    </div>
</template>

<script>
import Scroll from "base/scroll"

export default {
    props: {
        dataList: {}
    },
    data() {
        return {
            activeIndex: 0,
            // dataList: [
            //     { src: '/static/video.mp4', title: 'xxxx', cover: '/static/scene-3.jpg' },
            //     { src: '/static/video.mp4', title: 'xxxx', cover: '/static/scene-3.jpg' },
            //     { src: '/static/video.mp4', title: 'xxxx', cover: '/static/scene-3.jpg' },
            //     { src: '/static/video.mp4', title: 'xxxx', cover: '/static/scene-3.jpg' },
            //     { src: '/static/video.mp4', title: 'xxxx', cover: '/static/scene-3.jpg' },
            //     { src: '/static/video.mp4', title: 'xxxx', cover: '/static/scene-3.jpg' },
            //     { src: '/static/video.mp4', title: 'xxxx', cover: '/static/scene-3.jpg' },
            //     { src: '/static/video.mp4', title: 'xxxx', cover: '/static/scene-3.jpg' },
            // ],
            sumW: 1000,
            unitW: 0
        }
    },
    methods: {
        clickItem(i) {
            this.activeIndex = i
        },
        setWidth() {
            let W = this.$refs.playcon.offsetWidth, _w
            if(this.$device.isM) {
                _w = Math.floor(W/ 3)
            }else{
                _w = Math.floor(W/ 4)
            }
            this.unitW = _w
            this.sumW = this.dataList.length * this.unitW
        }
    },
    computed: {
        videoSrc() {
            let src = this.$api.getImg(this.dataList[this.activeIndex].videoName)
           
            return src
        }
    },
    mounted() {
        this.setWidth()
    },
    components: {
        Scroll
    }
}
</script>

<style lang="stylus" scoped>
.video-box{
    .play-con{
        calcmedia('h', 500px, 300px);
        background: #000;
        video{
            width: 100%; max-height:100%;
        }
    }
    .cover-con{
        height: 140px; margin: 20px -10px 0;
        .cover-list {
            calcmedia('p', 0 10px, 0 5px);
            float: left;
            .inner{}
            .img-w{
                height: 150px;
            }
            .text{
                calcmedia('lhh', 40px, 30px); background:#ccc;
                padding-left: 20px;
            }
            &.active, &:hover{
                .text{
                    background: $blue; color:#fff;
                }
            }
        }
    }
}
</style>
