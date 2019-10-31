<template>
    <div class="case-wrap layout" >
        <div class="title">
            <span>智慧园区</span>
            <p>xxxxx</p>
        </div>
        <ul class="tabs">
            <li v-for="tab,index in tabList" :key=index @click="tabClick" :class="{activeIndex: index==activeIndex}">{{tab.name}}</li>
        </ul>
        <div class="tab-content" :id="idName">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="slide,index in tabContent" :key="index">
                    <div class="list" v-for="item, index in slide.arr" >
                        <div class="img-w">
                            <img :src="item.src"/>
                        </div>
                        <p>{{item.label}}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import Swiper from "swiper"

export default {
    data() {
        return {
            idName: "xxx",
            tabList: [
                { name: '11', id: "" },
                { name: '11', id: "" },
                { name: '11', id: "" },
                { name: '11', id: "" },
            ],
            tabContent: [
                { arr: [
                    { src: 'static/case.jpg', label: '222' },
                    { src: 'static/case.jpg', label: '222' },
                ] },
                { arr: [
                    { src: 'static/case.jpg', label: '222' },
                    { src: 'static/case.jpg', label: '222' },
                ] },
                { arr: [
                    { src: 'static/case.jpg', label: '222' },
                    { src: 'static/case.jpg', label: '222' },
                ] }
            ],
            activeIndex: 0
        }
    },
    methods: {
        tabClick() {

        },
        init() {
            this.mySwiper = new Swiper(`#${this.idName}`, {
                loop: true
            })
            console.log(this.mySwiper)
        }
    },
    created() {
        this.$nextTick(() => {
            this.init()
        })
    }
}
</script>

<style lang="stylus" scoped>
img{
    max-width: 100%;
}

.case-wrap{
    text-align: center;
    .tabs{
        m(20px 0 10px 0);
        li{
            p(0 20px);lhh(30px);m(0 10px)
            border:1px solid #ccc; display: inline-block; border-radius: 30px;
            &.active{
                color: $blur; border-color: $blue;
            }
        }
    }
    .tab-content{
        m(0 -1%); overflow: hidden;
        .list{
            width: 48%; float:left; m(0 1%);
        }
    }
}
</style>
