<template>
    <div class="footer-wrap">
        <div class="layout">
            <div class="f-main clearfix">
                <div class="links">
                    <dl v-for="link in navList">
                        <dt >{{link.name}}</dt>
                        <dd v-for="item in link.children">{{item.name}}</dd>
                    </dl>
                </div>
                <div class="qr-code"></div>
            </div>
        </div>
        <div class="f-bottom">
            <div class="layout">
                <div class="links-box fl">
                    <span>法律声明</span>
                    <span>技术支持</span>
                </div>
                <div class="txt-box fr">
                    佛山市顺德区碧桂园物业发展有限公司版权所有 粤 icp 备 05055114 号-1
                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        _initData() {
            this.navList = [
                { name: '走进碧城', path: '',
                    children: [
                        { name: '公司简介', path: '/contact' },
                        { name: '组织架构', path: '/org' },
                        { name: '资质荣誉', path: '/honer' },
                    ]
                },
                { name: '产品介绍', path: '',
                    children: [
                        { name: '大数据分析平台', path: '/product' },
                    ]
                },
                { name: '场景方案', path: '/product',
                    children: [
                        { name: '产业园区',  },
                        { name: '智慧社区',  },
                        { name: '智慧酒店',  },
                        { name: '智慧商业',  },
                    ]
                },
                { name: '项目案例', path: '' ,
                    children: [
                        { name: '产业园区',  },
                        { name: '智慧社区',  },
                        { name: '智慧酒店',  },
                        { name: '智慧商业',  },
                    ]
                },
            ]
        }
    },
    created() {
        this._initData()
    }
}
</script>

<style lang="stylus">

.footer-wrap
    background #333; color #ccc; overflow hidden
    .f-bottom
        height: 70px; border-top: 1px solid #ddd;
    .links-box
        height 70px; display flex; align-items center; width 40%;
        span
            padding 0 5%; display inline-block;
            &:first-child
                border-right 1px solid #fff;
    .txt-box
        line-height 70px;

.f-main {
    .links{
        dl{
            w(200px);f(left);p(100px 0 0 0); fz(16px); lh(35px);
            dt{
                font-size: 18px; c(#fff);
            }
        }
    }
}


@media (max-width: 768px)
    .f-bottom
        text-align: center;
        .links-box
            width: 100%; height: 40px; float: none; justify-content center;
        .txt-box
            line-height 20px; line1(); float: none;




</style>
