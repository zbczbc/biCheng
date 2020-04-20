<template>
    <div class="case-wrap" :class="paginClass">
        <div class="layout">
            <div class="p-tit">{{title}}</div>
            <div class="p-desc">{{desc}}</div>

            <ul class="tabs">
                <li v-for="tab,index in caseList" :key=index
                    @click="tabClick(index)"
                    :class="{active: index==activeIndex}">{{tab.caseName}}</li>
            </ul>

            <introduce/>

            <div class="tab-content pr" :class="containerClass" v-if="caseList&&caseList.length>0">
                <div class="swiper-wrapper" :class="{show: isShowSwiper}">

                    <div class="swiper-slide list" v-for="item,imgIndex in caseImgList" :key="imgIndex">
                        <div class="img-w hid">
                            <img :src="$api.getImg(item.imgName)" />
                            <div class="mask" @click="showDialog(imgIndex)"></div>
                        </div>
                            <p>{{item.imgTitle}}</p>
                    </div>
                </div>

                <img-icon type="case-left" w=60 h=60 mh=30 mw=30 class="pol oper-prev z10 cp" m="-50 0 0 35" mm="-30 0 0 20"/>
                <img-icon type="case-right" w=60 h=60 mh=30 mw=30 class="por oper-next z10 cp" m="-50 35 0 0" mm="-30 20 0 0"/>

                <div class="oper-pagin" :class="paginClass"></div>
            </div>
        </div>

    </div>
</template>

<script>
import Swiper from 'swiper/dist/js/swiper.min.js'
import $ from 'jquery'
import Taskes from "@/common/js/Taskes"
import Introduce from "./introduce"

export default {
    props: {
        id: {},
        ids: {},
        title: {},
        desc: {},
        caseList: {
            dafault: () => []
        },
        tabContent: {
            dafault: () => []
        },
        mtabContent: {
            dafault: () => []
        }
    },
    data() {
        return {
            idName: "xxx",
            activeIndex: 0,
            isShowSwiper: false
        }
    },
    methods: {
        showDialog(imgIndex) {
            if(this.$device.isPC) {
                this.$showDialog('image', {
                    images: this.caseImgList,
                    current: imgIndex,
                })
            }
        },
        tabClick(index) {
            this.activeIndex = index

            this.isShowSwiper = false
            setTimeout(() => {
                this.mySwiper.slideTo(0, 0)
                this.isShowSwiper = true
            }, 300)
        },

        loadAllImg() {
            return new Promise((resolve, reject) => {
                this.taskes = new Taskes()
                this.taskes.end(() => {
                    resolve()
                })

                this.caseImgList.map(item => {
                    this.taskes.add()
                    let image = new Image()
                    image.src = this.$api.getImg(item.imgName)

                    image.onload = () => {
                        this.taskes.check()
                    }

                    image.onerror = () => {
                        this.taskes.check()
                        console.log('有图片加载失败了')
                    }
                })
            })
        },
        init() {
            let perView = this.$device.isM ? 1: 2
            this.mySwiper = new Swiper(`.${this.containerClass}`, {
                slidesPerView: perView,
                navigation: {
                    nextEl: '.oper-next',
                    prevEl: '.oper-prev',
                },
                pagination: {
                    el: `.${this.paginClass}`,
                    clickable: true
                },
                observer:true
            })
        }
    },
    computed: {
        paginClass() {
            return `pagin-${this.id}`
        },
        containerClass() {
            return `container-${this.id}`
        },
        isM() {
            return this.$device.isM
        },
        caseImgList() {
            let temp = this.caseList && this.caseList[this.activeIndex]
            if(temp) {
                return temp.caseImgList
            }else{
                return []
            }
        }
    },
    watch: {
        id: {
            immediate: true,
            handler(value) {
                this.$nextTick(() => {
                    setTimeout(() => {
                        this.isShowSwiper = true
                        this.init()
                    }, 1000)
                })
            }
        }
    },
    created() {
        console.log()
    },
    mounted() {
        let top = $(`.${this.paginClass}`).offset().top

        this.$root.$emit('changeToCase', () => {

        })

    },
    components: {
        Introduce
    }
}

</script>

<style lang="stylus" scoped>

.case-wrap{
    calcmedia('pb', 80px, 20px);
    .tabs{
        calcmedia('align', center, left);
        calcmedia('m', 40px 0 30px, 10px 0 10px);
        li{
            p(0 20px);lhh(30px);m(10px 10px); cursor:pointer;
            border:1px solid #ccc; display: inline-block; border-radius: 30px;
            &.active,&:hover{
                color: $blue; border-color: $blue;
            }
        }
    }
    .tab-content{
        //calcmedia('m', 0 -15px, 0);
        overflow: hidden; overflow: hidden;
        .swiper-wrapper{
            //width: 100%;
            opacity: 0.01;
            &.show{
                opacity: 1;
            }
        }
        .list{
            //calcmedia('w', calc(50% - 30px), 100%);
            calcmedia('p', 0 15px, 0);
            float:left;
            .img-w{
                calcmedia('h', 400px, 200px);
                overflow: hidden;
            }
            img{
                calcmedia('mh', 400px, 200px);

                min-width: 100%;
            }
            p{
                size18(); mt(20);
            }
        }
        .z10{
            calcmedia('w', 60px, 30px);
            calcmedia('h', 60px, 30px);
            top: 50%;

        }
    }
    .oper-pagin{
        tc();
        calcmedia('mt', 20px, 10px);
        /deep/ .swiper-pagination-bullet{
            calcmedia('m', 0 8px, 0 6px);
            calcmedia('w', 8px, 4px);
            calcmedia('h', 8px, 4px);
        }
    }
}

.swiper-button-disabled{
    opacity: 0.3;
}
.img-w{
    pr();
    .mask{
        abs(); bg(rgba(0,0,0,0.5)); opacity: 0; tranall();
    }
    &:hover .mask{
        calcmedia('opacity', 1, 0)
        &::after{
            w(24px);h(24px);content: "";iconUrl_c('search.png');abs();iconBg();
        }
    }

}


</style>
