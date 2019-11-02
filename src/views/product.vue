<template>
    <div class="product-page">
        <bread-nav></bread-nav>
        <div class="detail layout pr clearfix">
            <div class="image-content">
                <div class="image-inner">
                     <div class="scale-img">
                        <img :src=picList[activeIndex].src />
                    </div>
                    <div class="thumb-img clearfix">
                        <div class="item pr" v-for="picture,index in picList"  @click="onClickList(picture, index)">
                            <div class="img-w" :class="{active: index==activeIndex}">
                                <img-box :url="picture.src" w=100% h=100% ></img-box>
                            </div>
                        </div>
                </div>
                </div>

            </div>
            <div class="info-content">
                <div class="tit">无人驾驶汽车</div>
                <div class="desc">小贩机器人结合最新市场趋势及需求研发的针对零售行业的一款全自主移动零售服务机器人,具有专利百余项。能够在复杂环境中主动寻找目标客户进行商品推广及销售,使小贩成为全新的流量平台。</div>
                <div class="feature-con clearfix">
                    <div class="s-tit">产品特点</div>
                    <div class="list pr" v-for="feature,index in featureList">
                        <div class="list-inner">
                            <img :src=feature.icon />
                            <p>{{feature.label}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="tabs-box layout">
            <ul class="tabs-inner">
                <li v-for="item,index in tabsList"
                    @click="tabIndex=index"
                    :class="{active: index==tabIndex}">{{item.label}}</li>
            </ul>
            <div class="btn">联系碧城</div>
        </div>
        <div class="tab-content">
            <div class="tab-inner layout">
                <img src="static/xq.jpg" class="full" v-show="tabIndex==0"/>

                <div class="solve-box" v-show="tabIndex==2">
                    <div class="size24 tit">解决成果</div>
                    <div class="list-con product-swiper">
                        <div class="swiper-wrapper">
                            <div class="list swiper-slide" v-for="item,index in solveList" :key=index>
                                <div class="list-in">
                                    <div class="stit size24">0{{index+1}}</div>
                                    <p class="size16">{{item.label}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <template v-if="tabIndex==1">
                    <div class="size24 tit">技术参数</div>
                    <div class="tech-box bgfff">
                        <img :src=techImg class="full"/>
                    </div>
                </template>
                
            </div>

        </div>

    </div>
</template>

<script>
import Swiper from "swiper"

export default {
    data() {
        return {
            picList: [
                { src: 'static/product-01.png' },
                { src: 'static/product-02.png' },
                { src: 'static/product-03.png' },
                { src: 'static/product-04.png' }
            ],
            activeIndex: 0,
            featureList: [
                { icon: "static/product-icon1.png", label: '全新、高效的运行方式' },
                { icon: "static/product-icon2.png", label: '5大场景需求' },
                { icon: "static/product-icon3.png", label: '主动到你身边,给你想要' },
                { icon: "static/product-icon4.png", label: '够能装、够好用' }
            ],
            tabIndex: 0,
            solveList: [],
            techImg: "static/product-2.jpg"
        }
    },
    methods: {
        onClickList(picture, index) {
            this.activeIndex = index
        },
        initSwiper() {
            this.mySwiper&&this.mySwiper.destory()
            this.mySwiper = new Swiper('.product-swiper', {
                slidesPerView: this.slidesPerView
            })
            console.log(this.mySwiper, this.slidesPerView)
        },
        _initData() {
            this.tabsList = [
                { label: '产品介绍', },
                { label: '技术参数', },
                { label: '解决成果', },
            ]
            this.solveList = [
                { label: '产品这里是解决问题的标题这里是解决问题的标题介绍', },
                { label: '产品这里是解决问题的标题这里是解决问题的标题介绍', },
                { label: '产品这里是解决问题的标题这里是解决问题的标题介绍', },
                { label: '产品这里是解决问题的标题这里是解决问题的标题介绍', },
                { label: '产品这里是解决问题的标题这里是解决问题的标题介绍', },
                { label: '产品这里是解决问题的标题这里是解决问题的标题介绍', },
                { label: '产品这里是解决问题的标题这里是解决问题的标题介绍', },
                { label: '产品这里是解决问题的标题这里是解决问题的标题介绍', },
                { label: '产品这里是解决问题的标题这里是解决问题的标题介绍', },
            ]
        }
    },
    watch: {
        tabIndex(index){
            if(index==2) {
                this.slidesPerView = 5
        
                if(this.$device.isM) {
                    this.slidesPerView = 1
                }
                console.log(222)
                this.$nextTick(() => {
                    this.initSwiper()
                })
            }
        }
    },
    created() {
        
        this._initData()
    }
}
</script>

<style lang="stylus" scoped>
$lw = 420px;

$productHeight = 650px;
$productWidth = 500px;


.product-page{
    .detail{
        border-bottom: 1px solid $border;
    }
    .image-content{
        width: 45%; float:left; border-right: 1px solid $border;
        calcmedia('p', 0 0 px2vh(80) px2vw(50), 0);
        .image-inner{
            width: $productWidth;
        }
        .scale-img {
            img{
                width: 100%; height: $productHeight; display: inline-block;
            }
        }
        .thumb-img {
            height: 100px; display: flex; align-items: center;
            .item{
                flex: 1;
            }
            .img-w{
                width: 100px; height: 100px;
                &.active{
                    border:1px solid $blue;
                }
            }
        }
    }
    .info-content{
        width: 55%; float:left; p(110px 0 0 px2vw(80));
        .tit{
            calcmedia('sz',24, 16);
        }
        .desc{
            line(3); lh(24px); calcmedia('sz', 14, 12); m(20px 0 30px 0); p(0 0 20px 0);  line(3); h(72px)
        }
        .feature-con {
            .s-tit {
                calcmedia('sz', 18, 14); m(0 0 30px 0); border-top: 1px solid $border; pt(28);
            }
            .list{
                w(50%); calcmedia('h', 200px, 150px); float:left; p(0 10px 20px 10px); tc();
                .list-inner{
                    border: 1px solid $border; height: 100%; calcmedia('pt', 17%, 10%);
                }
                img {
                    max-width: 50px; max-height: 50px; disin();
                }
                p{
                    text-align: center; calcmedia('sz',16,12);m(10px 0 0 0);
                }
            }
        }

    }
}
.line {
    h(1px);bg(#ccc); w(100%);
}

.tabs-box{
    ul{
        lhh(70px); f(left);
        li{
            f(left);calcmedia('p', 0 20px, 0 10px);pr();
            &::after{
                content: ""; h(20px);w(2px);bg($eb);pb();left:0; top:25px;
            }

            &::before{
                h(2px); w(0); bg($blue); pb(); bottom: 0; content: "";
            }
            &.active::before, &:hover::before{
                width: calc(100% - 30px);
            }
            &:first-child{
                pl(0);
                &::after{ display: none;  }
                &.active::before, &:hover::before{ width: calc(100% - 10px)}
            }
        }
    }
    .btn{
        calcmedia('w',160px,70px); lhh(40px); c(#fff); tc(); f(right); mt(20px); bg($blue);
    }
}
.tab-content{
    bg($border);
    .tit{ 
        calcmedia('m', 30px 0 20px 0, ) ; 
    }
    .tab-inner{
        calcmedia('pt', 20px, 10px)
    }
    .solve-box{
        .list-con{
            margin: 0 -10px; overflow: hidden;  
            .list{
                p(0, 10px); f(left); calcmedia('h', 200px, );p(0 10px); w(20%);
                .list-in{
                    bg(#fff); bgray();  bg(#fff); p(0 10px); h(100%);
                    .stit{
                        c($blue); p(30px 0 25px);
                    }
                    P {
                        lh(25px); 
                    }

                }
            }
        }
    }
    .tech-box{
        calcmedia('p', px2vw(235), 10px)   
    }
}
</style>
