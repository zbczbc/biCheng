<template>
    <el-upload  class="upload-box"
                :class="{hideAdd: isOverLimit}"
                ref="upload"
                action="xxx"
                :multiple="item.upload&&item.upload.multiple"
                :accept="acceptType"
                :on-remove="handleRemove"
                :on-success="loadSuccess"
                :on-error="loadError"
                :on-change="onChange"
                :before-upload="beforeUpload"
                :list-type="listType"
                :file-list="fileList"
                :auto-upload="false"
                :limit="item.upload&&item.upload.limit">

        <div v-if="!isOverLimit">
            <i slot="default" class="el-icon-plus" v-if="fileType=='img'"></i>
            <el-button slot="trigger" size="small" v-else type="primary" >点击上传</el-button>
        </div>

        <div slot="tip" class="el-upload__tip">
            <div>{{item.tips}}</div>
            <!-- <icon-text-item
            :dataList="model[item.name]"
            :isUpload=true
            @deleteUploadItem="deleteUploadItem">
        </icon-text-item> -->
        </div>
    </el-upload>
</template>

<script>
import { uploadUrl } from "@/api/api"

const FILE_MAP = {
    pdf: 'application/pdf ',
    img: "image/jpeg, image/png, image/png, image/jpg"
}

const TYPE_MAP = {
    img: 'picture-card',
}
/**配置
 * upload：
 * acceptType: pdf/img
 */
export default {
    props: {
        item: {},
        model: {}
    },
    data () {
        return {
            fileType: '',
            listType: '',
            acceptType: '',
            disabled: false,
            fileList: [],
        }
    },
    methods: {
        onChange(file, fileList) {
            this.model[this.item.name] = file.raw
            console.log(this.model)
        },
        // 上传成功 res：接口响应， file： 上传成功的文件
        loadSuccess (res, file, fileList) {
            console.log(file)
            this.itemModel.push({ name: file.name, id: res.data, url: file.url })
        },
        loadError (err, file, fileList) {
            let temp = JSON.parse(err.message)
            this.$message.error(temp.message)
        },
        beforeUpload (file) {
            let sizeLimit = this.item.upload.sizeLimit || '5M',
                //将文件限制大小转换为以字节为单位的大小
                sizeLimitByte = this.convertSizeLimitToByte(sizeLimit)
            let isOverLt = file.size > sizeLimitByte
            if (isOverLt)
                this.$message.error(`上传的文件大小不能超过${sizeLimit}！`);
            return !isOverLt
        },
        handleRemove (file, fileList) {
            this.itemModel = this.itemModel.filter(item => item.id != file.id)
        },
        convertSizeLimitToByte (size) {
            if (/K/i.test(size)) {
                return parseInt(size) * 1024
            }
            if (/M/i.test(size)) {
                return parseInt(size) * 1024 * 1024
            }
        },
    },
    watch: {
        fileList: {
            deep: true,
            handler(obj) {
                console.log(obj)
            }
        },
        item: {
            deep: true,
            immediate: true,
            handler (obj) {
                if (obj.upload) {
                    let { fileType, limit } = obj.upload

                    this.acceptType = FILE_MAP[fileType]
                    this.fileType = fileType

                    if (fileType) {
                        this.listType = TYPE_MAP[fileType]
                    }
                }
            }
        },
        itemModel: {
            deep: true,
            immediate: true,
            handler (val) {
                this.fileList = val
            }
        },
    },
    computed: {
        isOverLimit() {
            let flag = false,
                { limit } = this.item.upload
            if(limit) {
                flag = limit<=this.itemModel.length
            }
            console.log(flag)
            return flag
        },
        isShowBtn () {
            let { limit, fileType } = this.item.upload
            if (fileType == 'img')
                return false
            else {
                if (limit)
                    return limit > this.itemModel.length
                else
                    return true
            }
        },
        //当上传文件个数达到限制个数-limit，隐藏照片墙上传-应用样式hide
        isHideUploadPicCard () {
            let { limit, fileType } = this.item.upload
            if (fileType == 'img') {
                if (limit)
                    return this.itemModel.length == limit
                else
                    return false
            } else
                return false
        },
        itemModel: {
            get () {
                return this.model[this.item.name]
            },
            set (val) {
                this.model[this.item.name] = val
            }
        },
    },
    created () {
        this.loadUrl = uploadUrl
    },
}
</script>

<style lang="stylus" scoped>
.upload-box{
    width: 100%; text-align: left;   line-height: 50px;
    .el-upload-list{
        display: inline-block;
    }
}
</style>
