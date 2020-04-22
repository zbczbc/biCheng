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
        </div>
        <div class="t-r pr">
            <div class="inner">
                <img-icon type="case-area" class="ilm" w=36 h=36 />
                <div class="ilm">项目面积： <br/><span>{{dataInfo.area}}</span>㎡</div>
            </div>
        </div>
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
    display: flex; border: 1px dashed $eb;
    .t-l{
        calcmedia('p', 30px 20px 15px, 10px);
        width: 75%; border-right: 1px dashed $eb;
        .info{
            border-bottom: 1px dashed $eb; padding-bottom: 15px;
        }
        .tit{
            color: $blue; font-weight: bold; padding-bottom: 20px;
        }
        .address{
            padding-top: 10px;
        }
    }
    .t-r{
        flex:1;
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
