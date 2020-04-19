<template>

    <div class="new-detail-wrapper layout">
        <div class="title">碧城智慧助力云创广场完成资管数字化转型腾飞</div>
        <div class="p-desc">
            <div class="time">
                <img-icon type="news-clock" class="ilm" w=14 h=14 m="0 0 0 10" />
                2018-11-30 14:06:44
            </div>
            <div class="look">
                浏览：381
            </div>

            <div class="bdsharebuttonbox" data-tag="share_1">
                <span class="fl">分享到：</span>
                <a href="#" title="分享到qq好友" class="popup_sqq" data-cmd="sqq"></a>
                <a href="#" title="分享到qq空间" class="popup_qzone" data-cmd="qzone"></a>
                <a href="#" title="分享到新浪微博" class="bds_tsina" data-cmd="tsina"></a>
            </div>
        </div>
        <div class="p-con">
            <p>2018年12月26日，为进一步促进重庆和两江新区数字经济产业的发展，重庆两江新区、中移物联网有限公司（以下简称“中移物联网”）和华为技术有限公司（以下简称“华为”）联合打造的重庆两江新区物联网产业协同创新中心正式挂牌成立。物联网产业协同创新中心主要聚焦智慧生活、智慧生产、智慧基础设施等物联网产业创新技术和应用，预计到2020年底，该中心将引入物联网创新型企业上百家，产值达到200亿元，并成为国内一流的物联网产业聚集地。</p>

            <img src="static/about-pic.jpg" />
        </div>
        <div class="oper-box">
            <div class="t-l fl">
                <div class="prev">上一篇：碧城智慧智慧园区全场景解决方案亮相2019中国数交会</div>
                <div class="next">下一篇：运营干货| 力合科创、三一集团、星河产业大咖共话产业园区精细化运营</div>
            </div>
            <div class="t-r fr">
                <div class="return">
                    返回
                    <img-icon type="news-return" class="disin" w=14 h=12 />
                </div>
            </div>
            <div class="clear"></div>
        </div>

    </div>
</template>

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
