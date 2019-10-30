<template>
    <div class="footer-wrap">
        <div class="layout">
            <div class="links-box fl">
                <span>法律声明</span>
                <span>技术支持</span>
            </div>
            <div class="txt-box fr">
                佛山市顺德区碧桂园物业发展有限公司版权所有 粤 icp 备 05055114 号-1
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

<style lang="stylus">

.footer-wrap
    height 70px; background #333; color #fff; overflow hidden
    .links-box
        height 70px; display flex; align-items center; width 40%;
        span
            padding 0 5%; display inline-block;
            &:first-child
                border-right 1px solid #fff;
    .txt-box
        line-height 70px;

@media (max-width: 768px)
    .footer-wrap
        text-align: center;
        .links-box
            width: 100%; height: 40px; float: none; justify-content center;
        .txt-box
            line-height 20px; line1(); float: none;




</style>
