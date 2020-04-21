<template>
    <div class="layout">
        <my-form class="msg-form" :formItems=formItems :model="formModel" :rules=rules @handleSubmit="handleSubmit"></my-form>
    </div>
</template>

<script>
import MAdd from "common/js/m-add"

export default {
    data(){
        return {
            formModel: {
                cityName: "string",
                companyName: "string",
                msgClassifyId : "string",
                msgContent: "string",
                userEmail: "string",
                userJob: "string",
                userName: "string",
                userTel: "string"
            }
        }

    },
    mixins: [MAdd],
    methods: {
        handleSubmit() {
            this.$api.saveOnlineMsg(this.formModel)
        },
        _initData() {
            this.formItems = [
                { label: '您的姓名：', name: 'userName', required: true, width: "25%" },
                { label: '您的职务：', name: 'userJob', required: true, width: "25%" },
                { label: '联系电话：', name: 'userTel', required: true, width: "25%" },
                { label: '联系邮箱：', name: 'userEmail', required: true, width: "25%" },

                { label: '售前咨询：', name: 'msgClassifyId', required: true, width: "33.33%", type: 'select' },
                { label: '公司全称：', name: 'companyName', required: true, width: "33.34%" },
                { label: '所在城市：', name: 'cityName', required: true, width: "33.33%" },
                { label: '售后简述：', name: 'msgContent', required: true, width: "100%", type: 'textarea' },
                { label: '验证码：', name: 'captcha', required: true, type: 'validate'},
            ]
            this.rules = this.getRules()
            console.log(this.rules)
        }
    },
    created() {
        this._initData()
    },
    components: {
    }
}
</script>

<style lang="stylus" scoped>
.msg-form{

}
</style>
