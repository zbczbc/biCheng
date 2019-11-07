<template>
    <div class="dialog-wrapper" v-if="visible">

        <div class="image-container container" v-if="type=='image'">
            <img-icon type="mClose" w=24 h=24 class="por cp z10" @onClick="visible=false" m="26 30 0 0" />

            <div class="image-swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item,i in images" :key="i">
                        <img :src=item.src :class="item.className" />
                    </div>
                </div>

                <img-icon type="dialog-left" w=50 h=70 class="dialog-next pob cp" m="-25 0 0 30"></img-icon>
                <img-icon type="dialog-right" w=50 h=70 class="dialog-prev por cp" m="-25 30 0 0"></img-icon>
            </div>

        </div>

        <div class="video-container container" v-else-if="type=='video'">
            <img-icon type="close" w=30 h=30 class="por cp" @onClick="visible=false" m="0 -30 0 0" />
            <video src='static/video.mp4' autoplay="autoplay" loop="loop" preload="true" id="indexBgVideo" controls></video>
        </div>

        <div class="dialog-container layout container" v-else>
            <div class="title-box pr">
                {{title}}
                <img-icon type="mClose" w=24 h=24 class="por cp" @onClick="visible=false" m="26 30 0 0" />
            </div>
            <div class="content">
                <scroll>
                    <div class="content">
                        <p>这里是内容描述后台修改内容这里是内容描述后台修改内容这里是内容描述
                        后台修改内容这里是内容描述后台修改内容这里是内容描述后台修改内容这里是内容描述后
                        台修改内容这里是内容描述后台修改内容这里是内容描述后台修改内容这里是内容描述后台修改内
                        容这里是内容描述后台修改内容这里是内容描述后台修改内容这里是内容描述后台修改内容这里是内，容描述后
                        台修改内容这里是内容描述后台修改内容这里是内容描述后台修改内容这里是内容描述后台修改内容这里是，内容描述后台修
                        改内容这里是内容描述后台修改内容这里是内容描述后台修改内容这里是内容描述后台修改内容这里是内容描述后台修改内容这里是内容描述后
                        台修改内容这里是内容描述后台修改内容这里是内容描述后台修改内容这里是内容描述后台修改内容这里是内容描述后台修改内容</p>
                        <p>这里是内容描述后台修改内容这里是内容描述后台修改内容这里是内容描述
                        后台修改内容这里是内容描述后台修改内容这里是内容描述后台修改内容这里是内容描述后
                        台修改内容这里是内容描述后台修改内容这里是内容描述后台修改内容这里是内容描述后台修改内
                        容这里是内容描述后台修改内容这里是内容描述后台修改内容这里是内容描述后台修改内容这里是内，容描述后
                        台修改内容这里是内容描述后台修改内容这里是内容描述后台修改内容这里是内容描述后台修改内容这里是，内容描述后台修
                        改内容这里是内容描述后台修改内容这里是内容描述后台修改内容这里是内容描述后台修改内容这里是内容描述后台修改内容这里是内容描述后
                        台修改内容这里是内容描述后台修改内容这里是内容描述后台修改内容这里是内容描述后台修改内容这里是内容描述后台修改内容</p>
                        <p>这里是内容描述后台修改内容这里是内容描述后台修改内容这里是内容描述
                        后台修改内容这里是内容描述后台修改内容这里是内容描述后台修改内容这里是内容描述后
                        台修改内容这里是内容描述后台修改内容这里是内容描述后台修改内容这里是内容描述后台修改内
                        容这里是内容描述后台修改内容这里是内容描述后台修改内容这里是内容描述后台修改内容这里是内，容描述后
                        台修改内容这里是内容描述后台修改内容这里是内容描述后台修改内容这里是内容描述后台修改内容这里是，内容描述后台修
                        改内容这里是内容描述后台修改内容这里是内容描述后台修改内容这里是内容描述后台修改内容这里是内容描述后台修改内容这里是内容描述后
                        台修改内容这里是内容描述后台修改内容这里是内容描述后台修改内容这里是内容描述后台修改内容这里是内容描述后台修改内容</p>
                    </div>
                </scroll>
            </div>
        </div>

        <div class="mask" @click="visible=false"></div>


    </div>
</template>

<script>
import Scroll from "base/scroll"
import { getTechnicalSupport } from "@/api/api"
import Swiper from "swiper"
import Vue from "vue"

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
        _getData() {
            getTechnicalSupport()
        },
        _initSwiper() {
            this.mySwiper = null
            
            this.mySwiper = new Swiper('.image-swiper', {
                loop: true,
                initialSlide: this.current,
                navigation: {
                    nextEl: '.dialog-prev',
                    prevEl: '.dialog-next',
                }
            })
        },
        getImg(url) {
            return `/api/portal/getFileStream/${url}`
        },
        async showImage(opts) {

            this.current = opts.current || 0
            this.images = []

            opts.images.map(item => {
                let image = new Image()
                    image.src = this.getImg(item)
               
                    image.onload = () => {
                    this.$nextTick(() => {
                        let className = ''
                        if (image.width > image.height) {
                            className = "main-w"
                        } else {
                            className = "main-h"
                        }

                        this.images.push({
                            src: image.src,
                            className: className
                        })
                    })
                }
            })
            

            this.$nextTick(() => {
                this._initSwiper()
            })
        }
    },
    created() {
        this._getData()


        Vue.prototype.$showDialog = (type, opts) => {
            this.type = type
            this.visible = true

            if(type == 'law') {
                this.title = "法律法规"

            }
            if(type == "support") {
                this.title = "技术支持"
            }

            if(type == "video") {

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
    w(600px); h(600px); overflow: hidden;
    .image-swiper{
        h(100%);
        .swiper-slide{
            flexcenter();
            p(30px 30px);
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
    lhh(70px); border: 1px solid $border; p(0 40px);
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
.dialog-container{
    h(400px);
    >.content{
        m(30px);
    }
    .content{
         h(250px); lh(25px); pr();
        p{
            m(0 0 20px 0);
        }
    }
}
.video-container{
    w(900px); h(500px);
    video{
        width: 100%;
    }
}



</style>
