<template>
    <div class="honor-page">
        <div class="p-tit">资质荣誉</div>
        <div class="p-desc">公司自研的智慧园区平台荣获2018年APICTA亚太信息通信科技大奖赛奖项。替换下面的专利图片。</div>

        <div class="layout">
            <div class="list-group clearfix">
                <div class="list" v-for="item,index in list" :key="index">
                    <div class="img-w pr hid">
                        <img :src="item.src" class="full scale" />
                        <div class="mask" @click="showDialog(index)"></div>
                    </div>
                    <div class="word-w">
                        <div class="tit">{{item.title}}</div>
                        <p>{{item.date}}</p>
                    </div>
                </div>
            </div>
            <ul class="pagination">
                <li class="prev"></li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>...</li>
                <li class="next"></li>
            </ul>
        </div>
    </div>
</template>

<script>
import { getHonor } from "@/api/api"
export default {
    data() {
        return {
            list: [
                { src: 'static/honor-pic.jpg' , title: '智慧停车场管理系统' , date: '2009-01' },
                { src: 'static/honor-pic.jpg' , title: '智慧停车场管理系统' , date: '2009-01' },
                { src: 'static/honor-pic.jpg' , title: '智慧停车场管理系统' , date: '2009-01' },
                { src: 'static/honor-pic.jpg' , title: '智慧停车场管理系统' , date: '2009-01' },
                { src: 'static/honor-pic.jpg' , title: '智慧停车场管理系统' , date: '2009-01' },
                { src: 'static/honor-pic.jpg' , title: '智慧停车场管理系统' , date: '2009-01' },
                { src: 'static/honor-pic.jpg' , title: '智慧停车场管理系统' , date: '2009-01' },
                { src: 'static/honor-pic.jpg' , title: '智慧停车场管理系统' , date: '2009-01' },
                { src: 'static/honor-pic.jpg' , title: '智慧停车场管理系统' , date: '2009-01' },

            ]
        }
    },
    methods: {
        getHonor() {
            getHonor({pageNo: 1, pageSize: 12})
        },
        showDialog(index) {
            this.$showDialog('image', {
                images: this.list.map(item => item.src),
                current: index,
            })
        }
    },
    created() {
        this.getHonor()
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
                    opacity: 1;
                    &::after{
                        w(24px);h(24px);content: "";iconUrl('search.png');abs();iconBg();
                    }
                }
            }
            .word-w{
                p(20px); c($c45); tc(); fz(12px); border: 1px solid $eb; border-top: 0px;
                .tit{
                    size20();
                }
                p{
                    c(#999); size14(); mt(15);
                }
            }
        }
    }
    .pagination{
        m(40px 0 80px); tc();
        li{
            calcmedia('w', 40px, 30px)
            calcmedia('lhh', 40px, 30px)

            border: 1px solid #ececec; border-radius: 100%; pr(); disin();
            m(0 10px); vertical-align: middle; fb();
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
