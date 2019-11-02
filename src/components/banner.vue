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
    ht(480); c(#fff); tc(); iconBg();
    .tit{
        fz(36px); p(200px 0 px2vw(30) 0)
    }
    .desc{
        fz(18px); w(360px); lh(35px); disin(); max-width: 100%;
    }
}
</style>