<template>
    <div class="footer-wrap flash-move" :class="{'in-index': isIndex}">
        <div class="layout" >
            <div class="f-main clearfix">
                <div class="links">
                    <dl v-for="link,linkIndex in footerNavList">
                        <dt >{{link.name}}</dt>
                        <dd v-for="item, itemIndex in link.children" v-if="itemIndex<6" @click="toPath(item, linkIndex, itemIndex)">{{item.name}}</dd>
                        <dd v-if="link.children.length>6">更多产品></dd>
                    </dl>
                </div>
                <div class="qr-code pr">
                    <img-box :url="qrCode" class="ilt"></img-box>
                    <p>扫一扫关注碧城智慧公众号</p>
                </div>
            </div>
        </div>
        <div class="f-bottom">
            <div class="layout">
                <div class="links-box fl">
                    <span @click="onShowDialog('law')">法律声明</span>
                    <span @click="onShowDialog('support')">技术支持</span>
                </div>
                <div class="txt-box fr">{{copyright}}</div>
            </div>
        </div>

    </div>
</template>

<script>
import { router } from "@/router"
import $ from 'jquery'

export default {
    props: {
        footerNavList: {
            default: () => []
        }
    },
    data() {
        return {
            footerNav: [],
            copyright: "",
            qrCode: ""
        }
    },
    methods: {
        onShowDialog(type) {
            this.$showDialog(type)
        },
        toPath(item, index, itemIndex) {
            let path = item.path,
                pathMap = {
                    1: '/product',
                    2: '/scene',
                    3: '/case'
                }

            if(index == 3 && this.$route.path == '/case') {
                let _top = $(`.pagin-${itemIndex}`).offset().top
                $('html,body').animate({scrollTop: _top-30})
                return
            }

            if(!path){
                path = pathMap[index]
            }
            path = `${path}?id=${item.id}`

            this.$router.push(path)

        },
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
                        { name: '物联网IoT平台', path: '/product' },
                        { name: '智慧运营服务平台', path: '/product' },
                        { name: '大数据分析平台', path: '/product' },
                        { name: '智慧安全', path: '/product' },
                        { name: '智慧交通', path: '/product' },
                        { name: '更多产品>', path: '/product' },
                    ]
                },
                { name: '场景方案', path: '/product',
                    children: [
                        { name: '智慧园区',  },
                        { name: '智慧社区',  },
                        { name: '智慧酒店',  },
                        { name: '智慧商业',  },
                    ]
                },
                { name: '项目案例', path: '' ,
                    children: [
                        { name: '智慧园区',  },
                        { name: '智慧社区',  },
                        { name: '智慧酒店',  },
                        { name: '智慧商业',  },
                    ]
                },
            ]
        }
    },
    created() {
        this.$root.$on('getFooterSuccess', data => {
            this.copyright = data.copyright || '深圳市碧城智慧科技有限公司'
            this.qrCode = data.qcCode
        })
    },
    computed: {
        isIndex() {
            return this.$route.meta.index==0
        }
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
            padding 0 3%; display inline-block;
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
            w(200px);f(left);p(px2vh(77) 0 0 0); fz(14px); lh(30px);
            &.nth-child(2) {
                w(px2vh(200));
            }
            dt{
                font-size: 16px; c(#fff); m(0 0 10px 0); cursor: pointer;
            }
            dd{
                cursor: pointer;
                &:hover{
                    color: $blue;
                }
            }
        }
    }
    .qr-code{
        w(px2vw(180));h(px2vw(180)); float:right;
        m(px2vw(70) 0 0 0);
        p{
            font-size: 12px;m(10px 0 0 0); lh(24px);
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
        tc(); p(0 0 20px 0);
        .links
            display: none;
        .qr-code
            width: 30%; height 30%; display: inline-block; float: none;





</style>
