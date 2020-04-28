<template>
    <div class="news-wapper">
        <news-detail v-if="isDetail" />

        <template v-else>
            <tabs v-model="tabIndex" :tabList=tabList />

            <div class="layout">
                <div class="list-group clearfix">
                    <div class="list flash-move" v-for="(item, i) in dataList"  @click="toDetail(item)" :key="i">
                        <div class="list-inner">
                            <div class="img-w  pr hid">
                                <img :src="$api.getImg(item.coverImg)" class="scale" />
                                <div class="mask"></div>
                            </div>
                            <div class="word-box">
                                <div class="sub-tit">{{item.newsTitle}}</div>
                                <div class="p-txt">
                                    {{item.newsSynopsis}}
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

                <pagination :pageNum="pageNo" :pageSize="pageSize" :total="total" @handleCurrentChange="handleCurrentChange" />
            </div>
        </template>
    </div>
</template>

<script>
import Tabs from "base/Tabs"
import NewsDetail from "./news-detail"
import Pagination from "base/pagination"

export default {
    data() {
        return {
            tabIndex: 0,
            tabList: [],
            dataList: [],
            pageSize: 12,
            pageNo: 1,
            total: 0
        }
    },
    methods: {
        getDataList() {
            let params = {
                pageNo: this.pageNo,
                pageSize: this.pageSize,
                typeId: this.tabList[this.tabIndex].id
            }
            this.$api.getNewsList(params).then(data => {
                let { list, totalCount } = data.newsInfoList
                this.dataList = list
                this.total = totalCount
            })
        },
        _getData() {
            this.$api.getNewsTypeList().then(data => {
                this.tabList = data.newsTypeList.map(item => {
                    return {
                        label: item.name,
                        id: item.id
                    }
                })
                this.getDataList()
            })
        },
        handleCurrentChange (val) {
			this.page = val
			this.getDataList()
		},
        toDetail(item) {
            this.$router.push(`/about?id=5&d=${item.id}`)
        },
        _initCreatedData() {
            this.tabList = []
        }
    },
    watch: {
        $route: {
            immediate: true,
            deep: true,
            handler(val) {
                let isDetail
            }
        },
        tabIndex(index) {
            this.getDataList()
        }
    },
    computed: {
        isDetail() {
            return !!this.$route.query.d
        }
    },
    created() {
        this._initCreatedData()
        this._getData()
    },
    components: {
        Tabs, NewsDetail, Pagination
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
            calcmedia('p', false, 0 10px);
            cursor:pointer;
            .img-w{
                calcmedia('h', 300px, 200px);
                 overflow: hidden;
                img{
                    min-width: 100%; min-height: 100%;
                }
            }
            .word-box{
                calcmedia('p', $gap_l, $gap_m);
                border: 1px solid $eb; border-top: 0px none;
                .sub-tit{
                    size20(); line(1);
                }
                .p-txt{
                    calcmedia('h', 52px, 52px);
                    calcmedia('dis', -webkit-box, block);
                    calcmedia('mt', $gap_l, $gap_m);
                    line-height: 26px; line(2);
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
                .sub-tit{
                    color: $blue;
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
