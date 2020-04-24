<template>
    <div class="introduce-box">
        <div class="t-l">
            <div class="info">
                <div class="tit">项目简介：</div>
                <p>{{dataInfo.describe}}</p>
            </div>
            <div class="address">
                <img-icon type="case-address" class="ilm" w=36 h=36 m="0 5 0 0" />
                <p class="ilm">项目地址： {{dataInfo.address}}</p>
            </div>

            <div class="address" v-if="$device.isM">
                <img-icon type="case-address" class="ilm" w=36 h=36 m="0 5 0 0" />
                <p class="ilm mobile-p">项目面积： {{dataInfo.area}}</p>
            </div>

        </div>
        <div class="t-r pr" v-if="$device.isPC">
            <div class="inner">
                <img-icon type="case-area" class="ilm" w=36 h=36 />
                <div class="ilm">项目面积： <br/><span>{{dataInfo.area}}</span>㎡</div>
            </div>
        </div>
        <div class="clear"></div>
    </div>
</template>

<script>
export default {
    props: {
        dataInfo: {
            default: () => {}
        }
    }
}
</script>

<style lang="stylus" scoped>
.introduce-box{
    calcmedia('m', 0 15px 30px, 0 10px 10px);
     border: 1px dashed $eb;
    .t-l{
        calcmedia('w', 75%, 100%); float: left;
        calcmedia('p', 30px 20px 15px, 10px);
         border-right: 1px dashed $eb;
        .info{
            padding-bottom: 15px;
        }
        .tit{
            color: $blue; font-weight: bold; padding-bottom: 20px;
        }
        .address{
            padding: 10px 0; display: flex; border-top: 1px dashed $eb;
            .mobile-p{
                line-height: 36px;
            }
        }
        p{
            line-height: 20px;
        }
    }
    .t-r{
        width: 25%; float: left;
        .inner{
            text-align:center; position: absolute; top: 50%; transform: translateY(-50%); width:100%; text-align: center;
            span{
                 font-weight: bold; size20(); line-height: 25px;
            }
            .ilm{
                calcmedia('mt', false, 10px);
            }
        }
    }
}
</style>
