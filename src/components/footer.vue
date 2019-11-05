<template>
    <div class="footer-wrap" :class="{'in-index': isIndex}">
        <div class="layout" >
            <div class="f-main clearfix">
                <div class="links">
                    <dl v-for="link in navList">
                        <dt >{{link.name}}</dt>
                        <dd v-for="item in link.children">{{item.name}}</dd>
                    </dl>
                </div>
                <div class="qr-code pr">
                    <img-box type="qr" class="ilt"></img-box>
                    <p>扫一扫关注碧城智慧公众号</p>
                </div>
            </div>
        </div>
        <div class="f-bottom">
            <div class="layout">
                <div class="links-box fl">
                    <span @click="$emit('showDialog', 'law')">法律声明</span>
                    <span @click="$emit('showDialog', 'suppose')">技术支持</span>
                </div>
                <div class="txt-box fr">
                    深圳市碧城智慧科技有限公司
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
    computed: {
        isIndex() {
            return this.$route.meta.index==0
        }
    },
    created() {
        this._initData()
    }
}
</script>

<style lang="stylus">

.footer-wrap
    background #333; color #999; overflow hidden
    &.in-index{
        .f-main {
            display: none
        }
        .f-bottom {
            border-top: 0px none;
        }
    }
    .f-bottom
        height: 70px; border-top: 1px solid $c51;
    .links-box
        height 70px; display flex; align-items center; width 40%;
        span
            padding 0 4%; display inline-block;
            &:first-child
                border-right 1px solid #595959;
            &:hover
                cursor: pointer; color: $blue;
    .txt-box
        line-height 70px;

.f-main {
    p(0 0 px2vh(60) 0);
    .links{
        float: left;
        dl{
            w(px2vh(180));f(left);p(px2vh(77) 0 0 0); fz(14px); lh(30px);
            &.nth-child(2) {
                w(px2vh(200));
            }
            dt{
                font-size: 16px; c(#fff); m(0 0 10px 0)
            }
        }
    }
    .qr-code{
        w(px2vw(180));h(px2vw(180)); float:right;
        m(px2vw(70) 0 0 0);
        p{
            font-size: 12px;m(10px 0 0 0);
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
    .f-main
        tc(); p(0 0 10px 0);
        .links
            display: none;
        .qr-code
            width: 30%; height 30%; display: inline-block; float: none;





</style>
