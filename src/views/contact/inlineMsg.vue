<template>
    <div class="layout">
        <my-form class="msg-form" ref="myForm" :formItems=formItems :model="formModel" :rules=rules @handleSubmit="handleSubmit"></my-form>
    </div>
</template>

<script>
import MAdd from "common/js/m-add"

const DEFAULT_MODEL = {
                cityName: "",
                companyName: "",
                msgClassifyId : "",
                msgContent: "",
                userEmail: "",
                userJob: "",
                userName: "",
                userTel: "",
                captcha: ""
            }

export default {
    data(){
        return {
            formModel: { ...DEFAULT_MODEL },
            formItems: []
        }
    },
    mixins: [MAdd],
    methods: {
        handleSubmit() {
            this.$api.saveOnlineMsg(this.formModel).then(() => {
                this.$message.success('留言成功')
                this.formModel = { ...DEFAULT_MODEL }
                this.$nextTick(() => {
                    this.$refs.myForm.clear()
                })
            })
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

            this.typsItem = this.formItems[4]
            this.rules = this.getRules()
        },
        getTypes() {
            this.$api.getMsgTypeList().then(data => {
                console.log(data)

                let opts = data.msgTypeList.map(item => {
                    return {
                        label: item.name,
                        value: item.id
                    }
                })
                this.$set(this.typsItem, 'options', opts)
                console.log(this.typsItem)
            })
        }
    },
    created() {
        this._initData()
        this.getTypes()
    },
    components: {
    }
}
</script>

<style lang="stylus" scoped>
.msg-form{

}
</style>
