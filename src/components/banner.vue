<template>
    <div class="banner" :style="{backgroundImage: 'url(' + bannerInfo.url + ')'}">
        <div class="tit">{{bannerInfo.title}}</div>
        <div class="desc">{{bannerInfo.desc}}</div>
    </div>
</template>

<script>
export default {
    props: {
        bannerInfo: {
            default: () => {
                return {
                    title: "",
                    desc: "",
                    url: ""
                }
            }
        },
        
    }
}
</script>

<style lang="stylus" scoped>
.banner{
    calcmedia('h', 480px, 250px)
    c(#fff); tc(); iconBg();
    .tit{
        calcmedia('sz', 36px, 16px);
        calcmedia('p', 200px 0 px2vw(30) 0 , 70px 0 px2vw(30) 0);
    }
    .desc{
        calcmedia('sz', 18px, 14px);
        calcmedia('w', 360px, 90%);
        lh(35px); disin(); max-width: 100%;
    }
}
</style>