<template>
    <div class="partner-page">
        <banner :bannerPicture=bannerPicture />
        <bread-nav />
        <div class="p-tit flash-move">合作伙伴</div>

        <tabs v-model="titleIndex" :tabList=partnerList labelKey="classifyName" class="flash-move" />
        <div class="list-group clearfix layout flash-move">
            <div class="list" v-for="item,index in partnerList[titleIndex].logoList" :key="">
                <img-box :url="item" class="full" />
            </div>
        </div>
    </div>
</template>

<script>
import Tabs from "base/Tabs"

export default {
    data() {
        return {
            titleIndex: 0,
            partnerList: [],
            bannerPicture: {}
        }
    },
    created() {
        this.$api.cooperativePartner().then(data => {
            let  {partnerList, bannerPicture} = data
            this.partnerList = partnerList
            this.bannerPicture = bannerPicture
        })
    },
    components: {
        Tabs
    }
}
</script>

<style lang="stylus" scoped>
.partner-page{
    p(0 0 60px 0);
    .list-group{
        calcmedia('mt', 60px);
        .list{
            calcmedia('w', calc(16.6% - 30px), calc(50% - 30px));
            calcmedia('m', 0 15px 20px); float: left; border: 1px solid $border;
        }
    }
}
</style>
