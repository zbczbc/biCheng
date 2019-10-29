<template>
    <div class="footer-wrap">
        <div class="links-box">
            <span>法律声明</span>
            <span>网站地图</span>
            <span>技术支持</span>
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
                { name: '产品介绍', path: '' },
                { name: '场景方案', path: '' },
                { name: '合作伙伴', path: '' },
                { name: '项目案例', path: '' },
                { name: '联系我们', path: '' },
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
.footer-wrap
    height 70px; background #333; color #fff; 
    .links-box
        display: flex; align-items center
        span   
            padding  20px; 
</style>