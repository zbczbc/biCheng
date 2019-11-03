<template>
    <div class="case-wrap layout" >
        <div class="p-tit">{{title}}</div>
        <div class="p-desc">{{desc}}</div>

        <ul class="tabs">
            <li v-for="tab,index in tabList" :key=index 
                @click="tabClick(index)" 
                :class="{active: index==activeIndex}">{{tab.name}}</li>
        </ul>
        <div class="tab-content pr" :class="containerClass">
            <div class="swiper-wrapper">

                <div v-if="!isM" class="swiper-slide" v-for="slide,index in tabContent" :key="index" >
                    <div class="list" v-for="item, index in slide.arr" >
                        <div class="img-w">
                            <img :src="item.src" class="mfull"/>
                        </div>
                        <p>{{item.label}}</p>
                    </div>
                </div>

                <div v-if="isM" class="swiper-slide list" v-for="item,index in mtabContent" :key="index">
                    <div class="img-w">
                        <img :src="item.src" class="mfull"/>
                    </div>
                        <p>{{item.label}}</p>
                </div>
            </div>

            <!-- <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div> -->
            <img-icon type="case-left" w=60 h=60 mh=30 mw=30 class="pol oper-prev z10" m="-50 0 0 20"/>
            <img-icon type="case-right" w=60 h=60 mh=30 mw=30 class="por oper-next z10" m="-50 20 0 0" />

            <div class="oper-pagin" :class="paginClass"></div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper"

export default {
    props: {
        id: {},
        title: {},
        desc: {}
    },
    data() {
        return {
            idName: "xxx",
            tabList: [
                { name: '惠州潼湖科技小镇', id: "" },
                { name: '惠州潼湖科学城', id: "" },
                { name: '广州CBD项目', id: "" },
            ],
            tabContent: [
                { arr: [
                    { src: 'static/case.jpg', label: '酒店外观' },
                    { src: 'static/case.jpg', label: '科技小镇效果图' },
                ] },
                { arr: [
                     { src: 'static/case.jpg', label: '酒店外观' },
                    { src: 'static/case.jpg', label: '科技小镇效果图' },
                ] },
                { arr: [
                     { src: 'static/case.jpg', label: '酒店外观' },
                    { src: 'static/case.jpg', label: '科技小镇效果图' },
                ] }
            ],
            mtabContent: [
                { src: 'static/case.jpg', label: '酒店外观' },
                { src: 'static/case.jpg', label: '科技小镇效果图' },
                { src: 'static/case.jpg', label: '酒店外观' },
                { src: 'static/case.jpg', label: '科技小镇效果图' },
                { src: 'static/case.jpg', label: '酒店外观' },
                { src: 'static/case.jpg', label: '科技小镇效果图' },
            ],
            activeIndex: 0
        }
    },
    methods: {
        tabClick(index) {
            this.activeIndex = index
        },
        init() {
            this.mySwiper = new Swiper(`.${this.containerClass}`, {
                //loop: true,
                navigation: {
                    nextEl: '.oper-next',
                    prevEl: '.oper-prev',
                },
                pagination: {
                    el: `.${this.paginClass}`
                }
            })
            console.log(this.mySwiper, this.paginClass)
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
        }
    },
    watch: {
        id: {
            immediate: true,
            handler(value) {
                this.$nextTick(() => {
                    this.init()
                })
            }
        }
    },
    created() {
        console.log()
    }
}
  
</script>

<style lang="stylus" scoped>

.case-wrap{
    calcmedia('m', 0 auto 80px, 0 auto 20px);
    .tabs{
        calcmedia('m', 40px 0 30px, 10px 0 10px); tc();
        li{
            p(0 20px);lhh(30px);m(10px 10px)
            border:1px solid #ccc; display: inline-block; border-radius: 30px;
            &.active,&:hover{
                color: $blue; border-color: $blue;
            }
        }
    }
    .tab-content{
        calcmedia('m', 0 -15px, 0);
        overflow: hidden;
        .list{
            calcmedia('w', calc(50% - 30px), 100%);
            calcmedia('m', 0 15px, 0);
            float:left;
            p{
                size18(); mt(20);
            }
        }
        .z10{
            calcmedia('w', 60px, 30px);
            calcmedia('h', 60px, 30px);
            top: 50%; margin-top: -30px;
            
        }
    }
    .oper-pagin{
        mt(20); tc();
        /deep/ .swiper-pagination-bullet{
            margin: 0 8px;
        }
    }
}


</style>
