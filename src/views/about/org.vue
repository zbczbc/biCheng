<template>
    <div class="org-page layout tc">
        <div class="p-tit">组织架构</div>
        <div class="p-desc">{{pageData.title}}</div>

        <img-box :url="pageData.PictureName" w=1200 mw=100% class="mfull ilt"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pageData: {}
        }
    },
    methods: {
        _getPageData() {
            this.$api.organizational().then(data => {
                console.log(data)
                this.pageData = data
            })
        }
    },
    created() {
        this._getPageData()
    }
}
</script>
<style lang="stylus" scoped>
.mfull{
    mt(40); mb(80);
}
</style>
