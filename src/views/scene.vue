<template>
    <div class="case-page">
        <banner :bannerInfo=bannerInfo />
       <bread-nav  v-model=activeIndex :thirdList=tabList />

        <div class="p-tit">{{basicInfo.title}}</div>
        <div class="p-desc">{{basicInfo.desc}}</div>
        <div class="main-box layout">
            <div class="list clearfix" v-for="item,index in list" :key="index" :class="{reverse: index%2==0}">
                <div class="img-w">
                    <img :src="item.src" class="full"/>
                </div>
                <div class="word-w">
                    <div class="inner">
                        <img :src="item.icon"/>
                        <div class="stit size18">{{item.tit}}</div>
                        <div class="sdesc">{{item.desc}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bannerInfo: {
                url: 'static/about-banner.png',
                desc: '智慧资管·智慧物联·智慧服务”全场景一体化解决方案',
                title: "场景方案"
            },
            basicInfo: {
                url: "",
                title: '智慧园区场景方案',
                desc: '依托自研的智慧园区系统总平台，搭建物联网、互联网运营、支付、大数据、可视化五个子平台，可以实现园区80多个物联网设备系统及30多个业务系统的统一管理，提高管理效能，抓取管理大数据。'
            },
            list: [
                { src: 'static/scene-1.jpg', icon: 'static/scene-c1.png', tit: '智慧园区运营平台', desc: '入驻企业、企业员工、住宅业主、访客、酒店住客、运营人员、游客、合作伙伴' },
                { src: 'static/scene-2.jpg', icon: 'static/scene-c2.png', tit: '智慧园区运营平台', desc: '4平台+2中心+N场景应用+资源开放接入' },
                { src: 'static/scene-3.jpg', icon: 'static/scene-c3.png', tit: '智慧园区运营平台', desc: '集中监控、统一管控、实时数据分析决策、自动维修派单' }
            ],
            tabList: [
                { label: '产业园区', id: '1' , path: '/case' },
                { label: '智慧社区', id: '1' , path: '/case' },
                { label: '智慧酒店', id: '1' , path: '/case' },
                { label: '智慧商业', id: '1' , path: '/case' },
            ],
            activeIndex: 0
        }
    },
    created() {
       
    }
}
</script>

<style lang="stylus" scoped>
.case-page{
    .main-box{
        tc();
        calcmedia('mt', 50px, 20px);
        .list{
            calcmedia('mb', 80px, 20px); 
            bg($border); h(100%); pr();
            >div{
                calcmedia('w', 50%, 100%); 
            }
            .img-w{
                calcmedia('float', left, none); 
                overflow: hidden;
                img{
                    tranall();
                }
                img:hover{
                    transcale(1.1);
                }
            }
            .word-w{
                calcmedia('h', 100%, 300px); 
                calcmedia('pr', absolute, relative); 

                h(100%); right: 0;

                .inner{
                    abs(); h(200px);
                }
                .sdesc{
                    w(60%); m(20px auto); lh(24px);
                }
                img{
                    width: 90px; height: 90px; m(0 0 20px); 
                }
            }
            &.reverse{
                .img-w{ 
                    calcmedia('float', right, none); 
                }
                .word-w{ 
                    left: 0 ; right: auto;
                }
            }
        }
        

    }
}
</style>