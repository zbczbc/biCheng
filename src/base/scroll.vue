<template>
    <happy-scroll class="scroll-wrapper"  v-if=visible
            :size=size
            :color=color
            :resize=resize>
        <slot></slot>
    </happy-scroll>
</template>

<script>
import {HappyScroll} from 'vue-happy-scroll'
import 'vue-happy-scroll/docs/happy-scroll.css'

export default {
    props: {
        size: {
            type: Number,
            default: 4
        },
        color: {
            type: String,
            default: 'rgba(23, 167, 218, 1)'
        },
        resize: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            visible: true
        }
    },
    methods:{
        refresh() {
            this.visible = false
            setTimeout(() => {
                this.visible = true
            })
        }
    },
    components: {
        HappyScroll
    }
}
</script>

<style lang="stylus" scoped>
.scroll-wrapper {
    /deep/ .happy-scroll-container {
        .happy-scroll-content{
            display:block;
            padding:0 40px 20px 0;     //设置为20抵消插件里计算多的20（也是padding的20）
        }
    }
    /deep/ .happy-scroll-strip--vertical{
        right:1px; bg($border);
    }
}

</style>
