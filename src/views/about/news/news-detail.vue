<template>

    <div class="new-detail-wrapper layout">
        <div class="title">{{dataInfo.newsTitle}}</div>
        <div class="title-desc">
            <div class="time">
                <img-icon type="news-clock" class="ilt " w=14 h=14 m="0 0 0 10" />
                {{dataInfo.createDate}}
            </div>
            <div class="look">
                浏览：{{dataInfo.browseCount}}
            </div>
            
            <div class="share-box">
                <i class="fl">分享到：</i>
                <span v-for="(item, i) in shareLinks" :key="i"  :class="item.className" @click="onShare(item.type)"></span>

                <div class="qrCode-box" v-if="isShowQr" >
                    分享到微信朋友圈 
                    <img-icon type="mClose" w=20 h=20 class="por cp" @onClick="isShowQr=false" m="10 10 0 0" />
                    <img :src="qrcode" class="qrCode">
                    打开微信，点击底部的“发现”，<br/>
                    使用“扫一扫”即可将网页分享至朋友圈。
                </div>
            </div>
        </div>
        <div class="p-con news-box ql-editor" v-html="dataInfo.newsContent">

        </div>
        <div class="oper-box">
            <div class="t-l fl">
                <div class="prev" @click="toOther('prev')" v-if="dataInfo.prev">上一篇：{{dataInfo.prev.newsTitle}}</div>
                <div class="next" @click="toOther('next')" v-if="dataInfo.next">下一篇：{{dataInfo.next.newsTitle}}</div>
            </div>
            <div class="t-r fr">
                <div class="return" @click="onReturn">
                    返回
                    <img-icon type="news-return" class="disin" w=14 h=12 />
                </div>
            </div>
            <div class="clear"></div>
        </div>

    </div>
</template>


<script>
import ContentBr from "base/content-br"
import { createQrCodeImg } from "common/js/qrCodeImg"

export default {
    data() {
        return {
            dataInfo: {},
            shareLinks: [
                { className:'s_weixin', type: 'weixin' },
                { className:'s_qq', type: 'qq' },
                { className:'s_qzone', type: 'qzone' },
                { className:'s_sina', type: 'sina' },
            ],
            qrcode: "",
            isShowQr: false
        }
    },
    methods: {
        onShare(type) {
            //手动分享
            let href = window.location.href,
                addStr = `?url=${href}&title=${this.dataInfo.newsTitle}`

            this.shareLink =  {
                qzone: `http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey`,
                qq: `http://connect.qq.com/widget/shareqq/index.html`,
                sina: `http://v.t.sina.com.cn/share/share.php`
            }
            let url = this.shareLink[type]

            if(url) {
                window.open(url)
            }else{
                this.isShowQr = !this.isShowQr

                if(this.isShowQr&&!this.qrcode) {
                    this.qrcode = createQrCodeImg({
                        text: href
                    })
                }
            }

        },
        toOther(type) {
            let isPrev = type == 'prev',
                id = isPrev ? this.dataInfo.prev.id : this.dataInfo.next.id

            this.$router.push(`/about?id=5&d=${id}`)
        },
        onReturn() {
            this.$router.push(`/about?id=5`)
        },
        _getData() {
            this.$api.getNewsDetail(this.newsId).then(data => {
                this.dataInfo = data

                //手动分享 应该和域名有关
                let href = window.location.href
                //href = "https://www.baidu.com/"
                window._bd_share_config = {
                    common : {
                        bdText : data.newsTitle,
                        bdUrl : href,
                        bdPic : data.coverImg
                    },
                    share : [{
                        "bdSize" : 22
                    }]
                }
            })
            this.$api.addBrowseCount(this.newsId)
        }
    },
    created() {
        
    },
    watch: {
        $route: {
            deep: true,
            immediate: true,
            handler(val) {
                console.log(this.newsId)
                this._getData()
            }
        }
    },
    computed: {
        newsId() {
            return this.$route.query.d
        }
    },
    components: {
        ContentBr
    }

}
</script>

<style lang="stylus" scoped>

.new-detail-wrapper{
    calcmedia('p', 50px 5% 30px, 0 5% $s_30);
    calcmedia('m', 70px auto, $s_70 auto);
    calcmedia('bd', 1px solid $eb, 0px);
    .title{
        size24(); color: $c45; text-align: center; line-height: 25px;
    }
    .title-desc{
        calcmedia('mt', 30px, $s_30);
        calcmedia('pb', 50px, $s_50); text-align: center;

        color: #999; width: 100%;
        border-bottom: 1px solid $eb;
        >div{
            display: inline-block; margin: 0 20px;
        }
        .time{
            vertical-align: middle;
        }
        .share-box{
            calcmedia('mt', 0px, 10px); vertical-align: middle; height: 36px;
        }

    }
    .p-con{
        calcmedia('p', 50px 0, $s_50 0 0);
        line-height: 30px;
        color: #333;
        img{
            calcmedia('w', 75%, 100%); display: block;
            calcmedia('m', 40px auto, $s_40 auto);
        }
    }
    .oper-box{
        color: #666;
        >div{
            line-height: 30px;
            >div{
                cursor: pointer;
                &:hover {
                    color: $blue;
                }
            }
        }
        .return {
            margin-top: 10px;
        }
    }
}

.share-box{
    calcmedia('mt', 0px, 10px);
    line-height: 36px; position: relative;
    span{
        width: 36px; height: 36px; iconBg(); margin: 0 5px; display:inline-block;
        &.s_qq{
            iconUrl_cc('n-qq.png');
            &:hover{
                iconUrl_cc('n-qq-pass.png');
            }
        }
        &.s_qzone{
            iconUrl_cc('n-qzone.png');
            &:hover{
                iconUrl_cc('n-qzone-pass.png');
            }
        }
        &.s_sina{
            iconUrl_cc('n-weibo.png');
            &:hover{
                iconUrl_cc('n-weibo-pass.png');
            }
        }
        &.s_weixin{
            iconUrl_cc('n-weixin.jpg');
            &:hover{
                iconUrl_cc('n-weixin-pass.jpg');
            }
        }
    }
}


.qrCode-box{
    position: absolute; top:50px; left: 0; width: 260px; border: 1px solid $eb; background: #fff;
    line-height: 24px; text-align:left; padding:10px 20px;
    img{
        width: 200px; display: block; margin: 8px auto;
    }
}


</style>
