<template>
    <div class="honor-page">
        <div class="p-tit">资质荣誉</div>
        <div class="p-desc">{{title}}</div>

        <div class="layout">
            <div class="list-group clearfix">
                <div class="list flash-move" v-for="item,index in list" :key="index">
                    <div class="img-w pr hid">
                        <img :src="$api.getImg(item.imgName)" class="scale" />
                        <div class="mask" @click="showDialog(index)"></div>
                    </div>
                    <div class="word-w">
                        <div class="tit">{{item.imgTitle}}</div>
                    </div>
                </div>
            </div>
             <pagination    :pageNum="pageNo"
                            :pageSize="pageSize"
                            :total="total"
                            @handleCurrentChange="handleCurrentChange" />
        </div>
    </div>
</template>

<script>
import Pagination from "base/pagination"

export default {
    data() {
        return {
            title: "",
            list: [],
            pageNo: 1,
            pageSize: 12,
            total: 1,
            isReverse: false
        }
    },
    methods: {
        handleCurrentChange (val) {
			this.page = val
			this.getDataList()
		},
        getDataList() {
            this.$api.honor({pageNo: this.pageNo, pageSize: this.pageSize}).then(data => {
                let { pictureList, title } = data

                this.title = title
                this.list = pictureList.list
                this.totalPage = pictureList.totalCount
            })
        },
        showDialog(index) {
            this.$showDialog('image', {
                images: this.list,
                current: index,
            })
        }
    },
    created() {
        this.getDataList()
    },
    components: {
        Pagination
    }
}
</script>

<style lang="stylus" scoped>
.honor-page{
    .list-group{
        m(45px -17px 0);
        .list{
            calcmedia('w', calc(33.3% - 34px), calc(100% - 34px));
            m(0 17px 30px);f(left);
            .img-w{
                height: 450px; border:1px solid #ddd; text-align:center; padding: 20px;
                .mask{
                    abs(); bg(rgba(0,0,0,0.5)); opacity: 0; tranall();
                }
                img{
                    height: 100%; width: auto;
                }
                &:hover .mask{
                    calcmedia('opacity', 1, 0)
                    &::after{
                        w(24px);h(24px);content: "";iconUrl_c('search.png');abs();iconBg();
                    }
                }
            }
            .word-w{
                p(20px); c($c45); tc(); fz(12px); border: 1px solid $eb; border-top: 0px;
                .tit{
                    size20(); line1();
                }
                p{
                    c(#999); size14(); mt(15);
                }
            }
        }
    }
    .pagination{
        calcmedia('m', 40px 0 80px, 20px -10px 60px)
        tc();
        li{
            calcmedia('w', 40px)
            calcmedia('lhh', 40px)
            calcmedia('m', 0 10px, 0 5px)

            border: 1px solid #ececec; border-radius: 100%; pr(); disin();
            vertical-align: middle; fb();
            &.prev:after, &.next:after{
                wt(12);ht(7);iconBg();content: ""; abs(); iconUrl_c('right-gray.png');
            }
            &.prev:after{
                r(180);
            }
            &:hover, &.active{
                c(#fff);bg($blue);
                &.prev:after, &.next:after{
                    iconUrl_c('fff_right.png');
                }
            }
        }

    }
}
</style>
