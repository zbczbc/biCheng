<template>
    <div class="header-wrap layout">
        
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
.header-wrap{
    height:100px;
}
</style>