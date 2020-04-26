<template>
    <el-dialog title="在线申请"  :visible.sync="visible">
        <my-form class="msg-form" :rules=rules ref="myForm" :formItems=formItems :model="formModel" @handleSubmit="handleSubmit">
            <template slot-scope="scope" slot="upload">
                <el-upload class="upload-box"
                            action="/api/portal/jobApply"
                            :data="formModel"
                            ref="upload"
                            :limit="1"
                            name="resumeFile"
                            :on-change="onChangeFile"
                            :on-exceed="onExceed"
                            :auto-upload="false"
                            :file-list="fileList">
                    <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
                <!-- <el-input type="file" @change=changeFile v-model="formModel.resumePath" /> -->
            </template>
        </my-form>
    </el-dialog>
</template>

<script>
import MAdd from "common/js/m-add"

const DEFAULT_MODEL = {
                "applyJobId": "",
                "major": "",
                "nativePlace": "",
                "resumeName": "",
                "school": "",
                "userAge": "",
                "userEmail": "",
                "userName": "",
                "userTel": "",
                captcha: "",
                resumeFile: ""
            }

export default {
    data() {
        return {
            visible: false,
            formModel: { ...DEFAULT_MODEL },
            fileList: []
        }
    },
    mixins: [MAdd],
    methods: {
        onExceed(file, fileList) {
            this.fileList = [ { name: file[0].name, fiLeData: file[0] }]
        },
        onChangeFile(file, fileList) {
            this.fileList = [ {name: file.name, fiLeData: file.raw } ]
        },
        init(item) {
            this.visible = true

            this.$nextTick(() => {
                this.$refs.myForm.clear()

                this.formModel = { ...DEFAULT_MODEL, applyJobId: item.id }
                this.fileList = []
            })
        },
        handleSubmit() {
            this.$api.jobApply(this.formModel).then(() => {
                this.$message.success('提交成功')
                this.visible = false

            })
        },
        _initData() {
            this.formItems = [
                { label: '姓名：', name: 'userName', required: true, width: "50%" },
                { label: '籍贯：', name: 'nativePlace', required: true, width: "50%" },
                { label: '年龄：', name: 'userAge', width: "50%" , type:'number'},
                { label: '电话：', name: 'userTel', required: true, width: "50%" },
                { label: '学校：', name: 'school', required: true, width: "50%" },
                { label: '专业：', name: 'major', required: true, width: "50%" },
                { label: '应聘职业：', name: 'resumeName', required: true, width: "50%" },
                { label: '邮箱：', name: 'userEmail', required: true, width: "50%" },
                { label: '简历：', name: 'resumeFile', required: true,  width: "100%", type: 'upload', upload: {} },
                { label: '验证码：', name: 'captcha', required: true, type: 'validate'},
            ]
            this.rules = this.getRules()
        }
    },
    watch: {
        fileList: {
            deep: true,
            handler(val) {
                console.log(val)
                if(val.length > 0) {
                    this.$set(this.formModel, 'resumeFile', val[0].fiLeData)
                    this.formModel.resumeFile = val[0].fiLeData

                    console.log(this.formModel)
                    this.$nextTick(() => {
                        this.$refs.myForm.validateField('resumeFile')
                    })
                }
            }
        }
    },
    created() {
        this._initData()
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
.upload-box{
    width: 100%; text-align: left;   line-height: 50px;
    padding-left: 100px;  height: 50px; border: 1px solid $eb;
    /deep/ .el-upload-list{
        display: inline-block; vertical-align: top;
    }
}
</style>
