<template>
    <div class="case-page">
        <banner :bannerPicture="pageData.bannerPicture" />
        <bread-nav />

        <div class="p-tit">{{pageData.title}}</div>
        <div class="p-desc">{{pageData.content}}</div>
        <div class="main-box layout">
            <div class="list clearfix" v-for="item,index in pageData.itemList" :key="index" :class="{reverse: index%2==0}">
                <div class="img-w hid">
                    <img :src="$api.getImg(item.introduceImg)" class="full scale icon"/>
                </div>
                <div class="word-w">
                    <div class="inner">
                        <img :src="$api.getImg(item.iconImg)" />
                        <div class="stit size18 mt20">{{item.title}}</div>
                        <div class="sdesc">{{item.content}}</div>
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
            basicInfo: {
                url: "",
                title: '',
                desc: ''
            },
            list: [],
            activeIndex: 0,
            pageData: {}
        }
    },

    created() {
        this.$api.schemeDetails(this.$route.query.id).then(data => {
            this.pageData = data
        })
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
                .icon{
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
