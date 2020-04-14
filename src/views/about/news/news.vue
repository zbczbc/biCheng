<template>
    <div class="news-wapper">
        <tabs v-model="tabIndex" :tabList=tabList />

        <div class="list-group">
            <div class="list">
                <div class="img-box">
                    <img src="static/about-pic.jpg" />
                </div>
                <div class="word-box">
                    <div class="sub-tit">惠州潼湖科技小镇携手碧城智慧</div>
                    <div class="p-txt">
                        碧城智慧助力惠州潼湖科技小镇实现数字化运营。连接空间·企业·服务，构建产业创新生态。
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import Tabs from "base/Tabs"

export default {
    data() {
        return {
            tabIndex: 0
        }
    },
    methods: {
        _initCreatedData() {
            this.tabList = [
                { label: '公司新闻' },
                { label: '媒体新闻' },
            ]
        }
    },
    created() {
        this._initCreatedData()
    },
    components: {
        Tabs
    }
}
</script>
