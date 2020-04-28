<template>
    <div class="contact-page">
        <banner :bannerPicture=pageData.bannerPicture />
        <bread-nav />
        <tabs v-model="titleIndex" :tabList=titleTabList />

        <template v-if="titleIndex==0">
            <div class="info-box layout">
                <div class="t1">
                    <!-- <div>SMART CITY</div> -->
                    <img-icon type="word" w=210 h=26 mw=100 mh=13 class="ilm"/>
                    <p>碧城智慧科技</p>
                    <span>希望社会因我们的存在而变的更加美好</span>
                </div>

                <template v-if="addressInfo">
                    <div class="t2">
                        <div>
                            <img-icon type="contact-add" class="ilm" w=48 h=48 m="0 18 0 0"/>
                            <span>{{addressInfo.addressTitle}}</span>
                        </div>
                        <p>公司邮箱：{{addressInfo.email}}</p>
                        <p>详细地址：{{addressInfo.detailedAddress}}</p>
                    </div>
                    <div class="t2 t3">
                        <div>
                            <img-icon type="contact-tel" class="ilm" w=48 h=48 m="0 18 0 0" />
                            <span>联系方式</span>
                        </div>
                        <p>联系人：{{addressInfo.contacts}}</p>
                        <p>联系电话：{{addressInfo.phone}}</p>
                    </div>
                </template>

                <div class="t4 tc" v-if="qrCode">
                    <img-box :url="qrCode" class="ilt" w=150 h=150></img-box>
                    <p>扫一扫关注碧城智慧</p>
                </div>
            </div>
           
        </template>

        <inline-msg v-else />

        <div class="map-tab layout">
            <ul>
                <li v-for="item,index in pageData.addressInfoList" :key="index"
                    :class="{active: index==activeIndex}"
                    @click="onChangeAddress(item, index)" >{{item.addressTitle}}</li>
            </ul>
        </div>
        <div class="map" ref="map"></div>
    </div>
</template>

<script>
import Tabs from "base/Tabs"
import InlineMsg from "./contact/inlineMsg"

export default {
    data() {
        return {
            bannerPicture: {},
            activeIndex: 0,
            tabList: [
                { label: '总部', },
                { label: '惠州', }
            ],
            titleIndex: 0,
            pageData: {},
            qrCode: ""
        }
    },
    methods: {
        onChangeAddress(item, index) {
            this.activeIndex = index
            this.locationMap.search(this.addressInfo.detailedAddress);
        }
    },
    computed: {
        addressInfo() {
            if(this.pageData && this.pageData.addressInfoList) {
                return this.pageData.addressInfoList[this.activeIndex].contactInfo
            }
        }
    },
    created() {
        this.$nextTick(() => {
            let map = new BMap.Map(this.$refs.map)

            //var myIcon = new BMap.Icon('static/address.png', new BMap.Size(32,32));


            let options = {
                   onSearchComplete:(results)=>{
                        if (this.locationMap.getStatus() == 0){
                            var point = results.getPoi(0).point;

                            map.centerAndZoom(point, 15);
                            var opts = {
                                position : point,    // 指定文本标注所在的地理位置
                                offset   : new BMap.Size(-100, -70)    //设置文本偏移量
                            }
                            var label = new BMap.Label("深圳市碧城智慧科技有限公司", opts);  // 创建文本标注对象
                                label.setStyle({
                                    color : "#333",
                                    fontSize : "14px",
                                    height : "40px",
                                    lineHeight : "40px",
                                    fontFamily:"微软雅黑",
                                    backgroundColor :"#ffffff",
                                    border: "0px",
                                    padding: "0 10px"
                                });
                            map.addOverlay(label);

                            var mk = new BMap.Marker(point);
                            map.addOverlay(mk);
                            //mk.setAnimation(BMAP_ANIMATION_BOUNCE);
                        }
                  }
            };

            this.locationMap = new BMap.LocalSearch(map, options);
        })

        this.titleTabList = [
            { label: '联系我们' },
            { label: '在线留言' },
        ]

        this.$api.getContactUs().then(data => {
            this.pageData = data

            this.locationMap.search(this.addressInfo.detailedAddress);
        })

        this.$root.$on('getFooterSuccess', data => {
            console.log(data)
            this.qrCode = data.qcCode
        })
    },
    components: {
        Tabs, InlineMsg
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
        calcmedia('w', 27%, 100%);
        calcmedia('mr', 1%, 0);

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
        calcmedia('w', 15%, 100%); lh(35px); tc();
    }
}
.map-tab{
    bg($blue); calcmedia('h', 90px);
    calcmedia('ty', 90px, 0);
    pr(); z(9);
    ul{
        calcmedia('p', 30px 0 0 10px, 25px 0 0 0px);
        li{
            calcmedia('m', 0 0 0 20px, 0 10px 0 0px);
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

/deep/ .tabs{
    calcmedia('align', center, center);
}
</style>
