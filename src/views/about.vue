<template>
    <div class="introduce-page">
        <banner :bannerInfo=bannerInfo />
        <bread-nav  v-model=activeIndex />
        
        <div class="introduce-box" v-if="pageId==1">
            <div class="intro-box1 layout">
                <div class="img-w">
                    <img class="full" src="static/about-pic.jpg"/>
                </div>
                <div class="word-w">
                    <h1 class="size30">碧城智慧科技——智慧城市行业领先者 <br/> 全产业链智慧城市解决方案与运营服务提供商</h1>
                    <scroll>
                        <div class="content" :style="{height:maxHeight}">
                            
                                <p>深圳市碧城智慧科技有限公司（简称碧城智慧）是中国首家完成智慧城市、智慧园区、智慧社区、智慧酒店、智慧工地、城市会客厅（展厅）六大主题场景从顶层规划到建设运营的系统平台建设、产业招商运营、系统平台运维、智慧物业服务全产业链智慧化解决方案与建设运营服务提供商。
                                <p>公司依托自研智慧城市系统平台（包含物联网平台、互联网业务平台、聚合支付平台、
                                    大数据平台），公司依托自研智慧城市系统平台（包含物联网平台、互联网业务平台、聚合支付平台、
                                    大数据平台）公司依托自研智慧城市系统平台（包含物联网平台、互联网业务平台、聚合支付平台、
                                    大数据平台）公司依托自研智慧城市系统平台（包含物联网平台、互联网业务平台、聚合支付平台、
                                    大数据平台）利用AI人工智能利用AI人工智能利用AI人工智能 利用AI人工智能、物联网IoT、移动互联网、5G等技术实现城市场景中的运
                                    营平台化、设备数字化、值守无人化、业务流程化、管理中心化、数据可视化，达到降低建设成本、提升用户体验、管理降本增效等目标。</p>
                                <p>公司目前与百度、思科、华为、小米、依图、阿里等搭建智慧产业生态圈，并与行业知名机构成立联合实验室</p>
                            
                        </div>
                    </scroll>
                </div>
            </div>

            <div class="intro-box2 bggray">
                <div class="layout">
                     <div class="tit size30 fb">业务范围</div>
                    <ul class="icon-group clearfix">
                        <li v-for="item,index in iconList" :key="item.type" @mouseover="onMouseover(index)" @mouseout="onMouseout(index)">
                            <div class="inner abs">
                                <img-icon class="ilt" :class="{hover: index==hoverIndex}" m="0 0 20 0" :type=item.type :w=item.w :h=item.h />
                                <div>{{item.label}}</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="intro-box3 bggray">
                <div class="bg"></div>
                <div class="tit size30 fb white">愿景与价值观</div>
                <div class="layout">
                    <div class="list-group clearfix">
                        <div class="list" v-for="item,index in priceList" :key="index">
                            <img class="fl" :src="item.src"/>
                            <div class="word">
                                <p class="size18 mb20">{{item.title}}</p>
                                <p class="size14">{{item.desc}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        <org v-if="pageId==2"></org>

        <honor v-if="pageId==3"></honor>
    </div>
    
</template>

<script>
import Scroll from 'base/scroll'
import Org from "./about/org"
import Honor from "./honor"

export default {
    data() {
        return {
            tabList: [
                { label: '公司简介', },
                { label: '组织架构', },
                { label: '资质荣誉', }
            ],
            bannerInfo: {
                url: 'static/about-banner.png',
                desc: '帮助以智慧城市为新型可持续发展目标的集团提供全面的智慧城市系统建设及服务',
                title: "探索未来发展"
            },
            activeIndex: 1,
            hoverIndex: -1,
            pageId: 1
        }
    },
    methods: {
        onMouseover(index) {
            this.hoverIndex = index
        },
        onMouseout(index) {
            this.hoverIndex = -1
        },
        _initData() {
            this.iconList = [
                { type: "intro_1", label: '规划设计' , w: 46, h:45},
                { type: "intro_2", label: '智慧城市建设', w: 49, h:40 },
                { type: "intro_3", label: '产业招商', w: 42, h:40 },
                { type: "intro_4", label: '产业运营服务', w: 39, h:40},
                { type: "intro_5", label: '智慧城市运维' , w: 40, h:40},
            ]

            this.priceList = [
                { src: 'static/about-pic2.png', title: '企业愿景', desc: '科技让城市建设运营更简单' },
                { src: 'static/about-pic.png', title: '企业价值观', desc: '诚信、创新、协作、开放' },
            ]
        }
    },
    computed: {
        maxHeight() {
            let ret = ""
            if(this.$device.isM) {
                ret = '100px'
            }else{
                ret = `${parseFloat(this.getCurrentPx(200, 'w'))}px`
            }
            return ret
        }
    },
    watch: {
        $route: {
            immediate: true,
            handler(route) {
                this.pageId = route.query.id
            }
        }
    },
    created() {
        this._initData()
    },
    components: {
        Scroll, Org, Honor
    }
    
}
</script>

<style lang="stylus" scoped>
.introduce-box{
    .intro-box1{
        //mt(140, 'h')
        calcmedia('m', px2vw(140) auto px2vw(140), 20px auto 20px); pr();
        .img-w{
            calcmedia('w', px2vw(600), 100%); 
            calcmedia('pr', absolute, relative);
            calcmedia('h', px2vw(360), auto);
            left: 0;
        }
        .word-w{
            calcmedia('pl', px2vw(710), 0); 
            //pl(710, 'w')
            h1{
                calcmedia('lh', px2vw(48), 24px);
                calcmedia('h', px2vw(100), auto);
                calcmedia('mt', 0, 20px);

                font-weight: bold; 
            }
            .content{
                fz(14px); lh(24px); 
                p {
                    m(10px 0 0 0);
                }
            }
        }
    }
    .intro-box2{
        calcmedia('p', px2vw(150) 100px, 40px 20px ); tc();
        .icon-group{
            calcmedia('pt', 40px, ); tc();
            li{
                calcmedia('h', 200px, 100px); c(#454545);
                calcmedia('w', 20%, 50%); bg($border);
                f(left); pr(); tranall()
                .inner{
                    calcmedia('h', 80px, );
                }
                &:hover{
                    bg(#fff); c($blue);
                    &:after{
                        display: none;
                    }
                }
                &:after{
                    content: ""; h(17px); w(1px); bg(#d5d8dd); pb(); abs(); m(auto 0); left:auto;
                }
            }
        }
    }
    .intro-box3{
        calcmedia('p', 0 0 170px, 0 0 20px);
        calcmedia('h', 630px, 450px);
        overflow: hidden; pr();
        tc(); 
        .bg{
            iconUrl('tbg.jpg'); iconBg(); calcmedia('h', 450px, );
        }
        .tit{
            pb(); w(100%); 
            calcmedia('t', 100px, 20px);
        }
        .list-group{
            calcmedia('p', 60px 20px 40px, 40px 20px 20px);
            transform: translateY(-250px);
            bg(#fff);
            .list {
                calcmedia('w',calc(50% - 80px), 100%); 
                calcmedia('m',0 40px 20px, 0 0 20px); 
                f(left); bg($border);
                img{
                    calcmedia('w', 45%);
                }
                .word{
                    calcmedia('pt', 90px, 20px); 
                }
            }
        }
        
    }
}
</style>
