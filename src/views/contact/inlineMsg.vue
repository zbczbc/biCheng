<template>
    <div class="layout">
        <my-form class="msg-form" :formItems=formItems :model="formModel"></my-form>
    </div>
</template>

<script>
import MyForm from "base/myForm"

export default {
    data(){
        return {
            formModel: {

            }
        }

    },
    methods: {
        _initData() {
            this.formItems = [
                { label: '您的姓名：', key: 'name', require: true, width: "25%" },
                { label: '您的姓名：', key: 'name2', require: true, width: "25%" },
                { label: '您的姓名：', key: 'name3', require: true, width: "25%" },
                { label: '您的姓名：', key: 'name4', require: true, width: "25%" },
                // { label: '您的姓名', key: 'name5', require: true },
                // { label: '您的姓名', key: 'name6', require: true },
                // { label: '您的姓名', key: 'name7', require: true },
                // { label: '您的姓名', key: 'name8', require: true },
            ]
        }
    },
    created() {
        this._initData()
    },
    components: {
        MyForm
    }
}
</script>

<style lang="stylus" scoped>
.msg-form{

}
</style>
