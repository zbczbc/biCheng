<template>
    <c-dialog :title="title" ref="dialog"></c-dialog>
</template>

<script>
import CDialog from "base/dialog"

export default {
    data() {
        return {
            title: '法律声明'
        }
    },
    methods: {
        init(type) {
            if(type == "law") {
                this.title = "法律声明"
            }else{
                this.title = "技术支持"
            }
            this.$refs.dialog.init(type)
        }
    },
    components: {
        CDialog
    }
}
</script>