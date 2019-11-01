<template>
    <div class="bread-nav">
        <div class="layout">
            <img-icon type="address" w=14 h=18 class="ilm"></img-icon>
            <router-link class="link" v-for="item,index in breadList" :key="index" :to="'index'">
                {{item.label}}<img-icon class="right-icon ilm" v-if="index<breadList.length-1" type="right-gray" w=13 h=13 />
            </router-link>

            <ul class="oper-list fr" v-if="operVisible">
                <li class="fl"
                    v-for="item,index in operList"
                    @click="onItemClick(item, index)"
                    :class="{active: index==activeIndex}" >{{item.label}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            default: 0
        },
    },
    data() {
        return {
            breadList: [
                { path: '/', label: '首页' },
                { path: '/', label: '产品页' },
                { path: '/', label: '无人机' },
            ],
            operList: [
                { label: '公司简介' },
                { label: '组织架构' },
                { label: '资质荣誉' },
            ],
            activeIndex: 0,
            operVisible: false
        }
    },
    methods: {
        onItemClick(item, index) {
            this.activeIndex = index
            this.$emit('handleItemClick')
        },
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
        },
        value: {
            immediate: true,
            handler(index) {
                console.log(index)
                this.activeIndex = index
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

    .oper-list{
        li {
            padding: 0 20px;
            &.active{
                bg($blue); color:#fff;
            }
        }
    }
}

</style>
