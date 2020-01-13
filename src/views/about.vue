<template>
    <div class="introduce-page">
        <banner :bannerPicture=bannerPicture  />
        <bread-nav  v-model=activeIndex :thirdList=tabList  @handleItemClick=handleItemClick />

        <div class="introduce-box" v-if="pageId==1">
            <div class="intro-box1 layout">
                <div class="img-w">
                    <img class="full" :src="$api.getImg(enterpriseInfo.imgName)" ref="img"/>
                </div>
                <div class="word-w">
                    <h1 class="size30"><c-b :content=enterpriseInfo.imgTitle></c-b></h1>
                    <div class="content" >
                        <c-b :content=enterpriseInfo.content></c-b>
                    </div>
                    <!-- <scroll v-if="isShowContent">
                        <div class="content" :style="{height:maxHeight}">
                            <c-b :content=enterpriseInfo.content></c-b>
                        </div>
                    </scroll> -->
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

            <div class="intro-box3 bggray" :style="{height: bottomHeight}">
                <div class="bg"></div>
                <div class="tit size30 fb white">愿景与价值观</div>
                <div class="layout" >
                    <div class="list-group clearfix">
                        <div class="list" v-for="item,index in priceList" :key="index">
                            <img class="fl" :src="item.src" ref="bottomImg"/>
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
                { label: '公司简介', id: 1},
                { label: '组织架构', id: 2},
                { label: '资质荣誉', id: 3}
            ],
            bannerPicture: {},
            enterpriseInfo: {},
            maxHeight: 200,
            activeIndex: 1,
            hoverIndex: -1,
            pageId: 1,
            isShowContent: false,
            bottomHeight: '630px'
        }
    },
    methods: {
        handleItemClick(item) {
            this.pageId = item.id
        },
        onMouseover(index) {
            this.hoverIndex = index
        },
        onMouseout(index) {
            this.hoverIndex = -1
        },
        _getPageData() {
            this.isShowContent = false
            this.$api.getCompanyProfile().then(data => {
                let { bannerPicture, enterpriseInfo } = data

                this.bannerPicture = bannerPicture
                this.enterpriseInfo = enterpriseInfo

                let image = new Image()
                image.src = this.$api.getImg(enterpriseInfo.imgName)

                image.onload = () => {
                    this.$nextTick(() => {
                        this.isShowContent = true

                        console.log(this.$refs.img, this.$refs.img.width)
                        let hei = this.$refs.img.height - 155

                        if(this.$device.isM) {
                            this.maxHeight = "auto"
                        }else{
                            this.maxHeight = hei + 'px'
                        }
                    })
                }

            })
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
    watch: {
        $route: {
            immediate: true,
            handler(route) {
                this.pageId = route.query.id
                this.activeIndex = this.pageId - 1
            }
        }
    },
    created() {
        this._initData()
        this._getPageData()
        if(this.$device.isM) {

            let image = new Image()
                image.src = `static/about-pic2.png`

                image.onload = () => {
                    this.$nextTick(() => {

                        if(this.$refs.bottomImg) {
                            let hei = this.$refs.bottomImg[0].height*2+45 + 70+86
                            this.bottomHeight =  hei + 'px'
                        }
                    })
                }
        }

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
                calcmedia('lh', 45px, 24px);
                calcmedia('h', 90px, auto);
                calcmedia('m', 0 0 25px 0, 20px 0 0 0);

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
        calcmedia('p', px2vw(150) 100px, 40px 0); tc();
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
            calcmedia('t', 100px, 40px);
        }
        .list-group{
            calcmedia('p', 60px 20px 40px, 28px 20px 8px);
            calcmedia('ty', -250px, -365px);
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


<style>
.introduce-box .word-w p{
    margin-bottom: 10px;
}
</style>
