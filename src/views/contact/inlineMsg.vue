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
                { label: '您的姓名：', name: 'name', require: true, width: "25%" },
                { label: '您的职务：', name: 'name2', require: true, width: "25%" },
                { label: '联系电话：', name: 'name3', require: true, width: "25%" },
                { label: '联系邮箱：', name: 'name4', require: true, width: "25%" },

                { label: '售前咨询：', name: 'name4', require: true, width: "33.33%", type: 'select' },
                { label: '公司全称：', name: 'name4', require: true, width: "33.34%" },
                { label: '所在城市：', name: 'name4', require: true, width: "33.33%" },
                { label: '售后简述：', name: 'name4', require: true, width: "100%", type: 'textarea' },
                { label: '验证码：', name: 'captcha', require: true, type: 'validate'},
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
