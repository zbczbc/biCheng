<template>
    <div class="layout">
        <div class="bread clearfix">
        <div class="inner">
            <div class="target">
                              <a href="/page/zcxyq.html" class="on">自持型园区</a>
                               <a href="/page/xsxyq.html">销售型园区</a>
                               <a href="/page/wtxyq.html">轻资产园区</a>
                           </div>
            <div class="bread-con">
                <a href="/">首页</a><i>&gt;</i>
                <a href="/page/zcxyq.html">场景需求 </a><i>&gt;</i>
                <a href="/page/zcxyq.html">自持型园区</a>
            </div>
        </div>
    </div>  
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        _initData() {
            this.navList = [
                { name: '首页', path: '' },
                { name: '走进碧城', path: '', children: [
                    { name: '公司简介', path: '' },
                    { name: '组织架构', path: '' },
                    { name: '资质荣誉', path: '' },
                ] },
                
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
.header-wrap{
    height:100px;
}
</style>