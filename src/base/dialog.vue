<template>
    <div class="dialog-wrapper" v-if="visible">
        <div class="dialog-container layout" v-if="!showVideo">
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
        <div class="video-container" v-else>
            <img-icon type="close" w=30 h=30 class="por cp" @onClick="visible=false" m="0 -30 0 0" />
            <video src='static/video.mp4' autoplay="autoplay" loop="loop" preload="true" id="indexBgVideo" controls></video>
        </div>
        <div class="mask" @click="visible=false"></div>
    </div>
</template>

<script>
import Scroll from "base/scroll"

export default {
    props: {
        title: {},
        //提供video 选项， 传入video
        video: ''
    },
    data() {
        return {
            visible: false,
            showVideo: false
        }
    },
    methods: {
        init(type) {
            this.visible = true
            this.showVideo = type=='video'
        }
    },
    components: {
        Scroll
    }
}
</script>

<style lang="stylus" scoped>
.title-box{
    lhh(70px); border: 1px solid $border; p(0 40px);
    size20(); c(#333);
}
.dialog-wrapper{
    h(100%); w(100%); position: fixed; top:0; z(10);
}
.mask{
    pb(); h(100%); w(100%);bg(rgba(0,0,0,0.5));top:0;
}
.dialog-container{
    pb(); h(400px); bg(#fff); abs(); z(12);
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
    w(900px); h(500px); abs(); z(11);
    video{
        width: 100%;
    }
}
</style>
