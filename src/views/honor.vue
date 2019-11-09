<template>
    <div class="honor-page">
        <div class="p-tit">资质荣誉</div>
        <div class="p-desc">公司自研的智慧园区平台荣获2018年APICTA亚太信息通信科技大奖赛奖项。替换下面的专利图片。</div>

        <div class="layout">
            <div class="list-group clearfix">
                <div class="list" v-for="item,index in list" :key="index">
                    <div class="img-w pr hid">
                        <img-box :url="item.imgName" class="full scale" />
                        <div class="mask" @click="showDialog(index)"></div>
                    </div>
                    <div class="word-w">
                        <div class="tit">{{item.imgTitle}}</div>
                    </div>
                </div>
            </div>
            <ul class="pagination">
                <li class="prev"></li>
                <li v-for="page,index in totalArr" 
                    :key="index" 
                    :active="pageNo==index">{{index>2?'...':index+1}}</li>
                <li class="next"></li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            title: "",
            list: [],
            pageNo: 1,
            pageSize: 10,
            totalPage: 1,
            totalArr: [""]
        }
    },
    methods: {
        _getPageData() {
            this.$api.honor({pageNo: this.pageNo, pageSize: this.pageSize}).then(data => {
                let { pictureList, title } = data
                
                this.title = title
                this.list = pictureList.list
                this.totalPage = data.totalPage
                this.totalArr.length = pictureList.totalPage > 4 ? 4 : pictureList.totalPage
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
        this._getPageData()
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
                .mask{
                    abs(); bg(rgba(0,0,0,0.5)); opacity: 0; tranall();
                }
                &:hover .mask{
                    calcmedia('opacity', 1, 0)
                    &::after{
                        w(24px);h(24px);content: "";iconUrl('search.png');abs();iconBg();
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
                wt(12);ht(7);iconBg();content: ""; abs(); iconUrl('right-gray.png');
            }
            &.prev:after{
                r(180);
            }
            &:hover{
                c(#fff);bg($blue);
                &.prev:after, &.next:after{
                    iconUrl('fff_right.png');
                }
            }
            &:nth-child(4n+1) {
                lh(30px);
            }
        }
    }
}
</style>
