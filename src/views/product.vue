<template>
    <div class="product-page">
        <div class="layout pr clearfix">
            <div class="image-box">
                <div class="scale-img">
                    <img :src=picList[activeIndex].src />
                </div>
                <div class="thumb-img clearfix">
                    <div class="item pr" v-for="picture,index in picList" :class="{active: index==activeIndex}" @click="onClickList(picture, index)">
                        <img-box :url="picture.src" w=100% h=100% ></img-box>
                    </div>
                </div>
            </div>
            <div class="info-box">
                <div class="tit">产品标题</div>
                <div class="desc">产品描述</div>
                <div class="feature-con clearfix">
                    <div class="s-tit">产品特点</div>
                    <div class="list" v-for="feature,index in featureList">
                        <img :url=feature.icon />
                        <p>feature.label</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="line"></div>
    </div>
</template>

<script>
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
                { icon: "static/product-04.png", label: '我是产品特点，最多两行的布局' },
                { icon: "static/product-04.png", label: '我是产品特点，最多两行的布局' },
                { icon: "static/product-04.png", label: '我是产品特点，最多两行的布局' },
                { icon: "static/product-04.png", label: '我是产品特点，最多两行的布局' }
            ]
        }
    },
    methods: {
        onClickList(picture, index) {
            this.activeIndex = index
        }
    }
}
</script>

<style lang="stylus" scoped>
$lw = 420px;

.product-page{
    .image-box{
        width: 45%; float:left; border-right: 1px solid #ccc; p(0 0 0 30px);
        .scale-img {
            img{
                width: 500px; height: 500px;
            }
        }
        .thumb-img {
            height: 100px;
            .item{
                width: 25%; max-width: 100px; float: left; height: 100px;
                &.active{
                    border:1px solid $blue;
                }
            }
        }
    }
    .info-box{
        width: 55%; float:left; p(px2vw(70) 0 0 100px);
        .tit{
            fz(24px);
        }
        .desc{
            line(3); lh(30px); fz(18px); m(10px 0 20px 0); p(0 0 20px 0); border-bottom: 1px solid #ccc;
        }
        .feature-con {
            .s-tit {
                f(20px); m(0 0 30px 0)
            }
            .list{
                w(44%); h(150px); border: 1px solid #ccc; float:left; m(0 2% 20px 2%)
                img {
                    max-width: 40px; max-height: 40px;
                }
                p{
                    text-align: center;
                }
            }
        }

    }
}
.line {
    h(1px);bg(#ccc); w(100%);
}
</style>
