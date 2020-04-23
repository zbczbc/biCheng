<template>

    <div class="new-detail-wrapper layout">
        <div class="title">碧城智慧助力云创广场完成资管数字化转型腾飞</div>
        <div class="p-desc">
            <div class="time">
                <img-icon type="news-clock" class="ilm" w=14 h=14 m="0 0 0 10" />
                {{dataInfo.createDate}}
            </div>
            <div class="look">
                浏览：{{dataInfo.browseCount}}
            </div>

            <div class="bdsharebuttonbox" data-tag="share_1">
                <span class="fl">分享到：</span>
                <a href="#" title="分享到qq好友" class="popup_sqq" data-cmd="sqq"></a>
                <a href="#" title="分享到qq空间" class="popup_qzone" data-cmd="qzone"></a>
                <a href="#" title="分享到新浪微博" class="bds_tsina" data-cmd="tsina"></a>
            </div>
        </div>
        <div class="p-con" v-html="dataInfo.newsContent">

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
export default {
    data() {
        return {
            dataInfo: {}
        }
    },
    methods: {
        toOther(type) {
            let isPrev = type == 'prev',
                id = isPrev ? this.dataInfo.prev.id : this.dataInfo.next.id

            this.$router.push(`/about?id=5&d=${id}`)
        },
        onReturn() {
            this.$router.push(`/about`)
        },
        _getData() {
            this.$api.getNewsDetail(this.newsId).then(data => {
                this.dataInfo = data
            })
            this.$api.addBrowseCount(this.newsId)
        }
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

}
</script>
<style lang="stylus" scoped>

.new-detail-wrapper{
    calcmedia('p', 50px 5% 30px, 0 5% $s_30);
    calcmedia('mt', 70px, $s_70);
    calcmedia('bd', 1px solid $eb, 0px);
    .title{
        size24(); color: $c45; text-align: center; line-height: 25px;
    }
    .p-desc{
        calcmedia('mt', 30px, $s_30);
        calcmedia('pb', 50px, $s_50);

        color: #999; width: 100%;
        border-bottom: 1px solid $eb;
        >div{
            display: inline-block; vertical-align: middle; margin: 0 20px;
        }
        .bdsharebuttonbox{
            calcmedia('mt', 0px, 10px);
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

.bdsharebuttonbox{
    calcmedia('mt', 0px, 10px);
    line-height: 36px;
    >a{
        width: 36px; height: 36px; iconBg(); margin: 0 5px;
        &.popup_sqq{
            iconUrl_cc('n-qq.png');
            &:hover{
                iconUrl_cc('n-qq-pass.png');
            }
        }
        &.popup_qzone{
            iconUrl_cc('n-qzone.png');
            &:hover{
                iconUrl_cc('n-qzone-pass.png');
            }
        }
        &.bds_tsina{
            iconUrl_cc('n-weibo.png');
            &:hover{
                iconUrl_cc('n-weibo-pass.png');
            }
        }
    }
}
</style>
