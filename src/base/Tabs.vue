<template>
    <ul class="tabs">
        <li v-for="(tab,index) in tabList" :key=index
            @click="tabClick(index)"
            :class="{active: index==activeIndex}">{{tab.label}}
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        tabList: {
            default: () => []
        },
        value: {}
    },
    data() {
        return {
            activeIndex: 0
        }
    },
    methods: {
        tabClick(index) {
            this.activeIndex = index
            this.$emit('input', index)
        }
    }
}
</script>

<style lang="stylus" scoped>
.tabs{
    calcmedia('align', center, left);
    calcmedia('m', 40px 0 30px, 10px 0 10px);
    li{
        p(0 20px);lhh(30px);m(10px 10px); cursor:pointer;
        border:1px solid #ccc; display: inline-block; border-radius: 30px;
        &.active,&:hover{
            color: $blue; border-color: $blue;
        }
    }
}
</style>
