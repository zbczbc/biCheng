<template>
    <div class="bread-nav">
        <div class="layout">
            <img-icon type="address" w=14 h=18 class="ilm"></img-icon>
            <router-link class="link" v-for="item,index in breadList" :key="index" :to="'index'">
                {{item.label}}<img-icon class="right-icon ilm" v-if="index<breadList.length-1" type="right-gray" w=13 h=13 />
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            breadList: [
                        { path: '/', label: '首页' },
                        { path: '/', label: '产品页' },
                        { path: '/', label: '无人机' },
            ]
        }
    },
    methods: {
        _initData() {

        }
    },
    watch: {
        $route: {
            immediate: true,
            handler(route) {
                // if(route.meta.index == 0) {
                //     this.breadList =
                // }else {

                // }
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.bread-nav{
    height: 70px; line-height: 70px; background: #eee;
    .link{
        p(0 0px 0 5px); vertical-align middle; color: $color-text;
        .right-icon{
            m(0 5px 0 8px);
        }
        &:hover{
            color: $blue;
        }
    }
}
</style>
