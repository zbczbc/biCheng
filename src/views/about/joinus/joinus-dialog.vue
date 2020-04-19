<template>
    <el-dialog title="在线申请"  :visible.sync="visible">
        <my-form class="msg-form" :formItems=formItems :model="formModel"></my-form>
    </el-dialog>
</template>

<script>
import MyForm from "base/myForm"

export default {
    data() {
        return {
            visible: false,
            formModel: {}
        }
    },
    methods: {
        init() {
            this.visible = true
        },
        _initData() {
            this.formItems = [
                { label: '姓名：', key: 'name', require: true, width: "50%" },
                { label: '籍贯：', key: 'name2', require: true, width: "50%" },
                { label: '年龄：', key: 'name3', require: true, width: "50%" },
                { label: '电话：', key: 'name4', require: true, width: "50%" },
                { label: '学校：', key: 'name4', require: true, width: "50%" },
                { label: '专业：', key: 'name4', require: true, width: "50%" },
                { label: '应聘职业：', key: 'name4', require: true, width: "50%" },
                { label: '邮箱：', key: 'name4', require: true, width: "50%" },
                { label: '上传：', key: 'name4', require: true, width: "100%", type: 'upload' },
                { label: '验证码：', key: 'name4', require: true, type: 'validate'},

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
/deep/ .el-dialog{
    calcmedia('w', 70%, 95%);
    .el-dialog__body{
        calcmedia('p',30px 20px, 0);
    }
}
/deep/ .my-form .el-form-item .el-form-item__label{
    width: 85px;
}
</style>