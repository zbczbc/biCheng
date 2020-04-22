<template>
    <div class="partner-page">
        <banner :bannerPicture=pageData.bannerPicture />
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
            bannerInfo: {
                title: '合作伙伴',
                desc: '诚信合作 互惠共赢 稳步发展 ',
                url: 'static/contact-banner.png'
            },
            list: [
                { src: 'static/cooperation-logo.jpg', },
                { src: 'static/cooperation-logo.jpg', },
                { src: 'static/cooperation-logo.jpg', },
                { src: 'static/cooperation-logo.jpg', },
                { src: 'static/cooperation-logo.jpg', },
                { src: 'static/cooperation-logo.jpg', },
                { src: 'static/cooperation-logo.jpg', },
                { src: 'static/cooperation-logo.jpg', },
                { src: 'static/cooperation-logo.jpg', },
            ],
            pageData: {},
            titleIndex: 0,
            partnerList: []
        }
    },
    created() {
        this.$api.cooperativePartner().then(data => {
            this.partnerList = data.partnerList
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
