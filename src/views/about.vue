<template>
    <div class="introduce-page">
        <banner :url=url />
        <bread-nav  v-model=activeIndex />
        
        <div class="introduce-box">
            <div class="intro-box1 layout">
                <div class="img-w">
                    <img class="full" src="static/about-pic.jpg"/>
                </div>
                <div class="word-w">
                    <h1>碧城智慧科技——智慧城市行业领先者 <br/> 全产业链智慧城市解决方案与运营服务提供商</h1>
                        <scroll>
                            <div class="content" :style="{height:maxHeight}">
                                
                                    <p>深圳市碧城智慧科技有限公司（简称碧城智慧）是中国首家完成智慧城市、智慧园区、智慧社区、智慧酒店、智慧工地、城市会客厅（展厅）六大主题场景从顶层规划到建设运营的系统平台建设、产业招商运营、系统平台运维、智慧物业服务全产业链智慧化解决方案与建设运营服务提供商。
                                    <p>公司依托自研智慧城市系统平台（包含物联网平台、互联网业务平台、聚合支付平台、
                                        大数据平台），公司依托自研智慧城市系统平台（包含物联网平台、互联网业务平台、聚合支付平台、
                                        大数据平台）公司依托自研智慧城市系统平台（包含物联网平台、互联网业务平台、聚合支付平台、
                                        大数据平台）公司依托自研智慧城市系统平台（包含物联网平台、互联网业务平台、聚合支付平台、
                                        大数据平台）利用AI人工智能利用AI人工智能利用AI人工智能 利用AI人工智能、物联网IoT、移动互联网、5G等技术实现城市场景中的运
                                        营平台化、设备数字化、值守无人化、业务流程化、管理中心化、数据可视化，达到降低建设成本、提升用户体验、管理降本增效等目标。</p>
                                    <p>公司目前与百度、思科、华为、小米、依图、阿里等搭建智慧产业生态圈，并与行业知名机构成立联合实验室</p>
                                
                            </div>
                        </scroll>
                        
                    
                    
                </div>
            </div>

            <div class="intro-box2 "></div>
        </div>
    </div>
    
</template>

<script>
import Scroll from 'base/scroll'


export default {
    data() {
        return {
            tabList: [
                { label: '公司简介', },
                { label: '组织架构', },
                { label: '资质荣誉', }
            ],
            url: 'static/about-banner.png',
            activeIndex: 1
        }
    },
    methods: {

    },
    computed: {
        maxHeight() {
            return `${parseFloat(this.getCurrentPx(200, 'w'))}px`
        }
    },
    components: {
        Scroll
    }
    
}
</script>

<style lang="stylus" scoped>
.introduce-box{
    .intro-box1{
        mt(140, 'h')
        .img-w{
            wt(600, 'w'); ht(360, 'w'); pb(); left: 0;
        }
        .word-w{
            pl(710, 'w')
            h1{
                fzt(30, 'h'); font-weight: bold;lht(48, 'h'); ht(100, 'w')
            }
            .content{
                fz(14px); lh(24px); 
                p {
                    m(10px 0 0 0);
                }
            }
        }
    }
}
</style>
