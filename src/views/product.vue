<template>
    <div class="product-page">
        <bread-nav></bread-nav>

        <div class="detail layout pr clearfix flash-move" v-if="productDetails.title">
            <div class="image-content">
                <div class="image-inner">
                     <div class="scale-img">
                        <img-box :url=picList[activeIndex] />
                    </div>
                    <div class="thumb-img clearfix">
                        <div class="item pr" v-for="picture,index in picList"  @click="onClickList(picture, index)">
                            <div class="img-w" :class="{active: index==activeIndex}">
                                <img-box :url="picture" w=100% h=100% ></img-box>
                            </div>
                        </div>
                </div>
                </div>

            </div>
            <div class="info-content">
                <div class="tit">{{productDetails.title}}</div>
                <div class="desc">{{productDetails.content}}</div>
                <div class="feature-con clearfix">
                    <div class="s-tit">产品特点</div>
                    <div class="list pr" v-for="feature,index in featureList">
                        <div class="list-inner">
                            <div class="img-box">
                                <img class="img" :src=$api.getImg(feature.img1Name) />
                                <img class="img-hover" :src=$api.getImg(feature.img2Name) />
                            </div>

                            <p>{{feature.imgTitle}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="tabs-box layout flash-move">
            <ul class="tabs-inner">
                <li v-for="item,index in tabsList"
                    @click="tabIndex=index"
                    :class="{active: index==tabIndex}"><span>{{item.label}}</span></li>
            </ul>
            <div class="btn" @click="$router.push('/contact')">联系碧城</div>
        </div>
        <div class="tab-content flash-move">
            <div class="tab-inner layout">
                <template v-if="tabIndex==0" >
                    <img-box v-for="item,index in productDetails.introduce" :url="item" class="full" />
                </template>

                <div class="solve-box" v-if="tabIndex==2&&productDetails.solutionResults.length>0">
                    <div class="size24 tit">解决成果</div>
                    <div class="list-con product-swiper">
                        <div class="swiper-wrapper">
                            <div class="list swiper-slide" v-for="item,index in productDetails.solutionResults" :key=index>
                                <div class="list-in">
                                    <div class="stit size24">0{{index+1}}</div>
                                    <p class="size16">{{item}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <template v-if="tabIndex==1">
                    <div class="size24 tit">视频展示</div>
                    <div class="tech-box bgfff">
                        <video-list :dataList=productDetails.video />
                    </div>
                </template>

            </div>

        </div>
    </div>
</template>

<script>
import Swiper from 'swiper/dist/js/swiper.min.js'
import VideoList from './product/video-list'

export default {
    data() {
        return {
            activeIndex: 0,
            tabIndex: 0,
            solveList: [],
            techImg: "static/product-2.jpg",
            productDetails: {},
            tabsList: []
        }
    },
    methods: {
        onClickList(picture, index) {
            this.activeIndex = index
        },
        initSwiper() {
            //this.mySwiper&&this.mySwiper.destory()
            this.mySwiper = new Swiper('.product-swiper', {
                slidesPerView: this.slidesPerView
            })
            console.log(this.mySwiper, this.slidesPerView)
        },
        _initData() {
            this.tabsList = [
                { label: '产品介绍', },
                { label: '视频展示', },
                { label: '解决成果', },
            ]

        }
    },
    computed: {
        picList() {
            return this.productDetails.preview
        },
        featureList() {
            return this.productDetails.trait
        }
    },
    watch: {
        tabIndex(index){
            if(index==2) {
                this.slidesPerView = 5

                if(this.$device.isM) {
                    this.slidesPerView = 1
                }
                console.log(!this.mySwiper, index)

                this.$nextTick(() => {
                    this.initSwiper()
                })
                if(!this.mySwiper) {}
            }
        },
        $route: {
            immediate: true,
            handler(route) {
                this.$api.productDetails(route.query.id).then(data => {
                    this.productDetails = data
                    if(data.solutionResults.length > 0) {
                        this.tabsList = [
                            { label: '产品介绍', },
                            { label: '视频展示', },
                            { label: '解决成果', },
                        ]
                    } else {
                        this.tabsList = [
                            { label: '产品介绍', },
                            { label: '视频展示', },
                        ]
                    }
                })
            }
        },

    },
    created() {
        this._initData()
    },
    components: {
        VideoList
    }
}
</script>

<style lang="stylus" scoped>
$lw = 420px;

$productHeight = 500px;
$productWidth = 500px;

.feature-con{
    .img-box{
        position: relative; overflow: hidden; display: inline-block; cursor: pointer;
        .img{
            -webkit-transition:0.8s; transition:0.8s;
        }
        .img-hover{
            position: absolute; left:0; top: 80%; transition:0.3s ease-out 0.1s; z-index: 2; opacity: 0;
        }
    }
    .list-inner:hover {
        .img-box{
            .img-hover{
                transform:translateY(-80%); opacity: 1;;
            }
            .img{
                transform:translateY(-50%); opacity: 0; transition:0.4s;
            }
        }
        p{
            color: $blue;
        }
    }

}

.product-page{
    .detail{
        border-bottom: 1px solid $border; calcmedia('mt', 50px, 20px)
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
            height: 100px; display: flex; align-items: center; mt(30); tc();
            .item{
                flex: 0 0 25%;
            }
            .img-w{
                width: 100px; height: 100px; disin();
                &.active{
                    border:1px solid $blue;
                }
            }
        }
    }
    .info-content{
        width: 55%; float:left; p(50px 0 0 px2vw(80));
        .tit{
            calcmedia('sz',24, 16);
        }
        .desc{
            line(3); lh(24px); calcmedia('sz', 14, 12); m(20px 0 30px 0); p(0 0 20px 0);  line(3); h(72px)
        }
        .feature-con {
            calcmedia('m', 0, 0 -5px);
            .s-tit {
                calcmedia('sz', 18, 14); m(0 0 30px 0); border-top: 1px solid $border; pt(28);
            }
            .list{
                w(50%); calcmedia('h', 190px, 150px); float:left; p(0 10px 20px 10px); tc();
                .list-inner{
                    border: 1px solid $border; height: 100%; calcmedia('pt', 13%, 16px);
                }
                img {
                    max-width: 50px; max-height: 50px; disin(); cp();
                    calcmedia('w', 50px, 40px);
                    calcmedia('h', 50px, 40px);
                }
                p{
                    text-align: center; calcmedia('sz',16,12);m(30px 0 0 0);
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
        calcmedia('w', auto,100%)
        lhh(70px); f(left);
        li{
            calcmedia('w', auto, 33.33%);
            calcmedia('align', left, center);
            f(left);calcmedia('p', 0 20px, 0 10px);pr();
            &::after{
                content: ""; h(20px);w(2px);bg($eb);pb();left:-2px; top:25px;
            }

            span{
                pr(); display: inline-block;
                &::before{
                    h(2px); w(0); bg($blue); pb(); bottom: 0; content: "";
                }
            }

            &.active, &:hover{
                span::before{
                    width: 100%;
                }
            }
            &:first-child{
                ml(0);
                &::after{ display: none;  }
            }
        }
    }
    .btn{
        calcmedia('pr', relative, fixed); bottom:0; right: 0; z-index: 100;
        calcmedia('w',160px,70px); lhh(40px); c(#fff); tc(); f(right); mt(20px); bg($blue);
    }
}
.tab-content{
    bg($border); padding-bottom: 60px;
    .tit{
        calcmedia('m', 30px 0 20px 0, ) ;
    }
    .tab-inner{
        calcmedia('pt', 20px, 10px)
    }
    .solve-box{
        // position: absolute; z-index: -1
        // &.active{
        //     position: relative; z-index: 0
        // }
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
        calcmedia('p', px2vw(100), 10px)
    }
}
</style>
