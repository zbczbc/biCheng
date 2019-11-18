<template>
    <div class="dialog-wrapper" v-if="visible">

        <div class="image-container container" v-if="type=='image'">
            <img-icon type="mClose" w=24 h=24 class="por cp z10" @onClick="visible=false" m="26 30 0 0" mm="26 0" />

             
            <div class="image-swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item,i in images" :key="i">
                        <img :src=item.src :class="item.className" />
                        <div class="text">{{item.title}}</div>
                    </div>
                </div>

                <img-icon type="dialog-left" w=50 h=70 class="dialog-next pob cp" m="-25 0 0 30"></img-icon>
                <img-icon type="dialog-right" w=50 h=70 class="dialog-prev por cp" m="-25 30 0 0"></img-icon>
            </div>

        </div>

        <div class="video-container container" v-else-if="type=='video'">
            <img-icon type="close" w=30 h=30 class="por cp" @onClick="visible=false" m="0 -30 0 0" mm="26 0" />
            <video src='static/video.mp4' autoplay="autoplay" loop="loop" preload="true" id="indexBgVideo" controls></video>
        </div>

        <div class="text-container layout container" v-else>
            <div class="title-box pr">
                {{title}}
                <img-icon type="mClose" w=24 h=24 class="por cp" @onClick="visible=false" m="26 30 0 0" mm="26 0" />
            </div>
            <div class="content">
                <scroll v-if="content" :mustShow=true>
                    <div class="content">
                        <c-b :content="content"></c-b>
                    </div>
                </scroll>
            </div>
        </div>

        <div class="mask" @click="visible=false"></div>


    </div>
</template>

<script>
import Scroll from "base/scroll"
import Swiper from "swiper"
import Vue from "vue"
import Taskes from "@/common/js/Taskes"

// type 传值 law suppose video image
export default {
    data() {
        return {
            visible: false,
            type: "law",
            //法律法规 内容
            content: "",
            images: [
                'static/honor-pic.jpg', 'static/honor-pic.jpg', 'static/honor-pic.jpg','static/honor-pic.jpg'
            ],
            imageClass: ""
        }
    },
    methods: {
        init(type) {
            this.visible = true
            this.type = 'video'
        },
        _initSwiper() {
            this.mySwiper = null

            //console.log(this.current, this.images)
            this.mySwiper = new Swiper('.image-swiper', {
                loop: false,
                initialSlide: this.current,
                navigation: {
                    nextEl: '.dialog-prev',
                    prevEl: '.dialog-next',
                }
            })
        },
        showImage(opts) {

            this.current = opts.current || 0
            this.images = []

            this.taskes = new Taskes()
            this.taskes.end(() => {
                this.visible = true

                setTimeout(() => {
                    this._initSwiper()
                }, 100)
            })

            opts.images.map(item => {
                this.taskes.add()
                let image = new Image()
                image.src = this.$api.getImg(item.imgName)

                image.onload = () => {
                    this.$nextTick(() => {
                        let className = ''
                        if (image.width > image.height) {
                            className = "main-w"
                        } else {
                            className = "main-h"
                        }
                        console.log(className)
                        this.taskes.check()

                        this.images.push({
                            src: image.src,
                            title: item.imgTitle,
                            className
                        })
                    })
                }

            })
        }
    },
    created() {

        Vue.prototype.$showDialog = (type, opts) => {

            // if(this.$device.isM) {
            //     return
            // }
            this.type = type

            console.log(type)


            if(type == 'law') {

                this.title = "法律法规"
                this.$api.legalStatement().then(data => {
                    this.content = data && data.content
                    this.visible = true
                })
            }
            if(type == "support") {
                this.title = "技术支持"
                this.$api.technicalSupport().then(data => {
                    this.content = data && data.content
                    this.visible = true
                })
            }

            if(type == "video") {
                this.visible = true
            }

            if(type == "image") {
                this.showImage(opts)
            }



        }


    },
    components: {
        Scroll
    }
}
</script>

<style lang="stylus" scoped>

.image-container{
    overflow: hidden;
    calcmedia('w', 600px, 100%);
    calcmedia('h', 630px, 320px);
    .image-swiper{
        h(100%);
        .swiper-slide{
            flexcenter();
            p(30px 30px 60px);
            .text{
                pb(); w(100%); bottom: 30px;tc(); lhh(30px); fz(14px);
            }
            img{
                calcmedia('mh', auto, 200px)
            }
        }
    }
    .dialog-next,.dialog-prev{
        top: 50%; z(10);
    }
}

.main-w{
    width: 100%;
}
.main-h{
    height: 100%;
}


.title-box{
    lhh(70px); border-bottom: 1px solid $border; p(0 40px);
    calcmedia('p', 0 40px, 0 16px)
    size20(); c(#333);
}
.dialog-wrapper{
    h(100%); w(100%); position: fixed; top:0; z(200);
}
.mask{
    pb(); h(100%); w(100%);bg(rgba(0,0,0,0.5));top:0;
}

.container{
    bg(#fff); abs(); z(12); pb();
}
.text-container{
    h(400px);
    calcmedia('w', auto, 90% !important);
    >.content{
        calcmedia('m', 30px, 15px 0);
    }
    .content{
         h(230px); lh(25px); pr();
        p{
            m(0 0 20px 0);
        }
    }
}


.video-container{

    calcmedia('w',900px, 80%);
    calcmedia('h',500px, 150px);
    video{
        width: 100%;
    }
}



</style>
