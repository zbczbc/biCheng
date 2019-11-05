<template>
    <div class="contact-page">
        <banner :bannerInfo=bannerInfo />
        <bread-nav />
        <div class="p-tit">联系我们</div>

        <div class="info-box layout">
            <div class="t1">
                <!-- <div>SMART CITY</div> -->
                <img-icon type="word" w=210 h=26 mw=100 mh=13 />
                <p>碧城智慧科技</p>
                <span>希望社会因我们的存在而变的更加美好</span>
            </div>
            <div class="t2">
                <div>
                    <img-icon type="contact-add" class="ilm" w=48 h=48 m="0 18 0 0"/>
                    <span>总部地址</span>
                </div>
                <p>公司邮箱：bczh@bgysmartcity.com</p>
                <p>总部公司：广东省深圳市南山区桑达大厦13楼</p>
            </div>
            <div class="t2 t3">
                <div>
                    <img-icon type="contact-tel" class="ilm" w=48 h=48 m="0 18 0 0" />
                    <span>联系方式</span>
                </div>
                <p>联系人：邓经理</p>
                <p>联系电话：0532-66773517</p>
            </div>
            <div class="t4 tc">
                <img-box type="qr" class="ilt" w=150 h=150></img-box>
                <p>扫一扫关注碧城智慧</p>
            </div>
        </div>
        <div class="map-tab layout">
            <ul>
                <li v-for="item,index in tabList" :key="index"
                    :class="{active: index==activeIndex}"
                    @click="activeIndex=index" >{{item.label}}</li>
            </ul>
        </div>
        <div class="map" ref="map"></div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            bannerInfo: {
                title: '联系我们',
                desc: '赋能企业成长 助力产业发展 ',
                url: 'static/contact-banner.png'
            },
            activeIndex: 0,
            tabList: [
                { label: '总部', },
                { label: '惠州', }
            ]
        }
    },
    methods: {

    },
    created() {
        this.$nextTick(() => {
            let map =new BMap.Map(this.$refs.map)
            map.centerAndZoom(new BMap.Point(114.02597366,22.54605355), 11);

            var point = new BMap.Point(114.02597366,22.54605355);
            map.centerAndZoom(point, 15);
            var opts = {
            position : point,    // 指定文本标注所在的地理位置
            offset   : new BMap.Size(30, -30)    //设置文本偏移量
            }
            var label = new BMap.Label("深圳市碧城智慧科技有限公司", opts);  // 创建文本标注对象
                label.setStyle({
                    color : "red",
                    fontSize : "12px",
                    height : "20px",
                    lineHeight : "20px",
                    fontFamily:"微软雅黑"
                });
	        map.addOverlay(label);
        })
    }
}
</script>

<style lang="stylus" scoped>
.info-box{
    calcmedia('mt', 80px, 20px);
    >div{
        float: left; calcmedia('mb', 0, 20px); calcmedia('align', left, center);
    }
    .t1{
        calcmedia('w', 31%, 100%); c(#999);
        div{
            calcmedia('sz', 36px, 20px);
            calcmedia('mt', 10px);
        }
        p{
            calcmedia('sz', 33px, 16px);
            calcmedia('m', 6px 0 12px 0, );
            c(#333);
        }
        span{
            size16();
        }
    }
    .t2{
        calcmedia('w', 29%, 100%);
        div {
            size18(); m(0 0 20px 0)
        }
        p{
            lh(25px); c(#666);
        }

    }
    .t3{
        calcmedia('w', 25%, 100%);
    }
    .t4{
        calcmedia('w', 15%, 100%); lh(35px);
    }
}
.map-tab{
    bg($blue); calcmedia('h', 90px);
    calcmedia('ty', 90px, 0);
    pr(); z(9);
    ul{
        calcmedia('p', 30px 0 0 10px);
        li{
            calcmedia('m', 0 0 0 20px);
            lhh(40px);
            float: left; border: 1px solid #fff; p(0 30px); border-radius: 40px; c(#fff);
            &.active, &:hover{
                bg(#fff); color: $blue;
            }
        }
    }
}

.map{
    width: 100%; height: 480px;
}
</style>
