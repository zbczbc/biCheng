<template>
    <div class="case-wrap" :class="paginClass">
        <div class="layout">
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
                            <div class="img-w hid">
                                <img :src="item.src" class="mfull scale"/>
                                <div class="mask" @click="showDialog(index)"></div>
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
                <img-icon type="case-left" w=60 h=60 mh=30 mw=30 class="pol oper-prev z10" m="-50 0 0 35"/>
                <img-icon type="case-right" w=60 h=60 mh=30 mw=30 class="por oper-next z10" m="-50 35 0 0" />

                <div class="oper-pagin" :class="paginClass"></div>
            </div>
        </div>

    </div>
</template>

<script>
import Swiper from "swiper"
import $ from 'jquery'

export default {
    props: {
        id: {},
        ids: {},
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
        showDialog(index) {
            this.$showDialog('image', {
                images: this.mtabContent.map(item => item.src),
                current: index,
            })
        },
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
    },
    mounted() {
        let top = $(`.${this.paginClass}`).offset().top

        this.$root.$emit('changeToCase', () => {

        })

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
        tc();
        calcmedia('mt', 20px, 10px);
        /deep/ .swiper-pagination-bullet{
            calcmedia('m', 0 8px, 0 6px);
        }
    }
}

.img-w{
    pr();
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


</style>
