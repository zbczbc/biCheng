<template>
    <div class="banner" :style="{backgroundImage: 'url(' + url + ')'}">
        <div class="tit">探索未来发展</div>
        <div class="desc">帮助以智慧城市为新型可持续发展目标的集团提供全面的智慧城市系统建设及服务</div>
    </div>
</template>

<script>
export default {
    props: {
        title: {},
        desc: {},
        url: {}
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
        fz(18px); w(360px); lh(35px); disin();
    }
}
</style>