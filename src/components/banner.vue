<template>
    <div class="banner" :style="bgStyle">
        <div class="tit">{{bannerPicture.imgTitle}}</div>
        <div class="desc">{{bannerPicture.content}}</div>
    </div>
</template>

<script>
export default {
    props: {
        bannerPicture: {
            default: () => {
                return {
                    imgTitle: "",
                    content: "",
                    imgName: ""
                }
            }
        },
    },
    computed: {
        bgStyle() {
            // let imgName = this.bannerPicture.imgName, str
            
            // if(/static/.test(imgName)){
            //     str = imgName
            // }else{
            //     str = this.$api.getImg(imgName)
            // }
            let src = this.$api.getImg(this.bannerPicture.imgName)
            return `backgroundImage: url(${src}) `
        }
    }
}
</script>

<style lang="stylus" scoped>
.banner{
    calcmedia('h', 480px, 250px)
    c(#fff); tc(); iconBg();
    .tit{
        calcmedia('sz', 36px, 18px);
        calcmedia('p', 200px 0 px2vw(30) 0 , 70px 0 px2vw(30) 0);
    }
    .desc{
        calcmedia('sz', 18px, 14px);
        calcmedia('w', 360px, 90%);
        calcmedia('lh', 32px, 24px);
        disin(); max-width: 100%;
    }
}
</style>
