<template>
    <div class="news-wapper">
        <news-detail v-if="isDetail" />

        <template v-else>
            <tabs v-model="tabIndex" :tabList=tabList />

            <div class="layout">
                <div class="list-group">
                    <div class="list flash-move" @click="toDetail">
                        <div class="list-inner">
                            <div class="img-w  pr hid">
                                <img src="static/about-pic.jpg" class="scale" />
                                <div class="mask"></div>
                            </div>
                            <div class="word-box">
                                <div class="sub-tit">惠州潼湖科技小镇携手碧城智慧</div>
                                <div class="p-txt">
                                    碧城智慧助力惠州潼湖科技小镇实现数字化运营。连接空间·企业·服务，构建产业创新生态。
                                </div>
                            </div>
                            <div class="detail-box">
                                <div class="detail-btn fl">
                                    查看详情
                                    <img-icon type="news-arrow" w=10 h=9 class="ilb" m="0 0 0 10" />
                                </div>
                                <div class="time fr">2015-01-05</div>
                                <div class="clear"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </template>
    </div>
</template>

<script>
import Tabs from "base/Tabs"
import NewsDetail from "./news-detail"

export default {
    data() {
        return {
            tabIndex: 0
        }
    },
    methods: {
        toDetail() {
            this.$router.push(`/about?id=5&d=1`)
        },
        _initCreatedData() {
            this.tabList = [
                { label: '公司新闻' },
                { label: '媒体新闻' },
            ]
        }
    },
    watch: {
        $route: {
            immediate: true,
            deep: true,
            handler(val) {
                let isDetail
            }
        }
    },
    computed: {
        isDetail() {
            return !!this.$route.query.d
        }
    },
    created() {
        this._initCreatedData()
    },
    components: {
        Tabs, NewsDetail
    }
}
</script>

<style lang="stylus" scoped>
$gap_l=20px;
$gap_m=10px;

.list-group{
    margin: 0 -15px;
    .list{
        calcmedia('w', 33.33%, 100%);
        width: 33.33%; padding:0 15px; margin-bottom: 30px; float:left;
        .list-inner{
            cursor:pointer;
            .word-box{
                calcmedia('p', $gap_l, $gap_m);
                border: 1px solid $eb; border-top: 0px none;
                .sub-tit{
                    size20(); color: $blue;
                }
                .p-txt{
                    calcmedia('h', 52px, 78px);
                    calcmedia('dis', -webkit-box, block);
                    calcmedia('mt', $gap_l, $gap_m);
                    line-height: 26px; line(2); height: 52px;
                }
            }
            .detail-box{
                calcmedia('p', $gap_l, $gap_m);
                border: 1px solid $eb; border-top: 0px none; line-height: 36px;
                .detail-btn{
                    width: 120px; height: 36px; border: 1px solid $eb;
                    border-radius: 18px; text-align:center;
                }
            }

            &:hover{
                box-shadow: 0 0 5px 0 rgba(0,0,0,.2);
                .detail-btn{
                    background:$blue; color: #fff; border-color: $blue;
                }
                /deep/ .img-icon .news-arrow{
                    iconUrl_cc('news-arrow-white.png')
                }
            }
        }
    }
}

/deep/ .tabs{
    calcmedia('align', center, center);
}
</style>
