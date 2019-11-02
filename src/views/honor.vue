<template>
    <div class="honor-page">
        <div class="p-tit">资质荣誉</div>
        <div class="p-desc">业内领先的智慧园区全场景解决方案服务商</div>

        <div class="layout">
            <div class="list-group clearfix">
                <div class="list" v-for="item,index in list" :key="index">
                    <div class="img-w pr">
                        <img :src="item.src" class="full"/>
                        <div class="mask"></div>
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
    }
}
</script>

<style lang="stylus" scoped>
.honor-page{
    .list-group{
        m(45px -17px 0);
        .list{
            w(calc(33.3% - 34px));m(0 17px 30px);f(left);
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
            w(40px);lhh(40px);border: 1px solid #ececec; border-radius: 100%; pr(); disin();
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