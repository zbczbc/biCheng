<template>
<div class="link-wrapper layout">
    <div class="p-tit flash-move">友情链接</div>
    <div class="links-list clearfix">
        <div class="list tra flash-move" v-for="(item,i) in dataList" :key="i" @click="toLink(item)">
            <div class="list-inner">
                <div class="top tra">
                    <div class="top-inner pr">
                        <div class="img-w pr">
                            <img class="abs" :src="$api.getImg(item.iconImg)" />
                        </div>
                        <div class="word-w">
                            <div class="tit">{{item.name}}</div>
                            <div class="tit-p">{{item.synopsis}}</div>
                        </div>
                    </div>

                    <div class="clear"></div>
                </div>
                <div class="more tra">
                    了解更多
                    <img-icon type="about-link" w=14 h=14 class="ilm" />
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
            dataList: []
        }
    },
    methods: {
        toLink(item) {
            window.open(item.website)
        },
        getList() {
            this.$api.getLinksList().then(data => {
                this.dataList = data.linksList
            })
        }
    },
    created() {
        this.getList()
    }
}
</script>

<style lang="stylus" scoped>
.link-wrapper{
    .links-list{
        calcmedia('m', 0 -15px 60px, 0 0 20px);
        .list{
            calcmedia('mb', 60px, 20px);
            cursor: pointer;
            calcmedia('w', 33.33%, 100%);
            float: left;  padding: 0 15px;
            .list-inner{
                &:hover{
                    box-shadow: 0 0 5px 0 rgba(0,0,0,.2);
                    .top{
                        background: #fff;
                    }
                    .more{
                        background: $blue; color: #fff;
                        /deep/ .about-link{
                            iconUrl_c('about-link-hover.png');
                        }
                    }
                }
            }
            .top{
                padding:30px;
                border-top-left-radius: 4px; border-top-right-radius: 4px;
                border: 1px solid $eb; border-bottom: 0px none;background: #eff1f4;
                .img-w{
                    width:40%; border: 1px solid $eb; position: absolute; left: 0; height: 100%;
                    background: #fff; overflow: hidden;
                    img{
                        width: 100%;
                    }
                }
                .word-w{
                   padding:10px 0 0 calc(40% + 20px);
                    .tit{
                        color:#333; font-size: 14px; font-weight: bold;
                    }
                    .tit-p{
                        font-size: 12px; margin-top: 10px; line-height: 24px; height: 48px; line(2);
                    }
                }
            }
            .more{
                height: 50px;  line-height: 50px; border: 1px solid $eb;
                border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; text-align: center;
                background: #fff;
            }

        }
    }
}
</style>
