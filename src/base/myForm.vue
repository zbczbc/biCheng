<template>
    <el-form :model="model"
            status-icon
            ref="elForm"
            @submit.native.prevent
            :rules="rules"
            class="my-form"
            >
        <el-form-item   :label="item.label"
                        v-for="(item, index) in formItems.filter(item => !item.isHidden)"
                        :key=index
                        required
                        :style="getStyle(item)"
                        :prop="item.name" >
            <el-select v-if="item.type=='select'" v-model="model[item.name]" clearable filterable >
                <template v-for="option in item.options" >
                    <!-- {{option.label}} {{option.value}} -->
                    <el-option :label="option.label" :value="option.value" :key=option.value></el-option>
                </template>
            </el-select>
            <el-input   :type="item.type||'text'"
                        v-model.trim="model[item.name]"
                        clearable
                            v-else />
        </el-form-item>

    </el-form>
</template>

<script>
export default {
    props: {
        rules: {},
        formItems: {
            default: () => []
        },
        model: {
            default: () => {}
        }
    },
    methods: {
        getStyle(item) {
            let style = ""

            if(this.$device.isM) {
                style = `width: 100%`
            }else{
                style = `width: ${item.width}`
            }

            return style
        }
    }
}
</script>

<style lang="stylus" scoped>
$label_w=90px;

/deep/ .el-input{
    border: 1px solid $eb; padding-left: $label_w;
    .el-input__inner{
        padding: 0;
    }
}


.my-form{
    /deep/ .el-form-item{
        position: relative; float: left; padding:0 10px;
        .el-form-item__label{
            position: absolute; width: $label_w; left: 10px; z-index:1; text-align: right; padding: 0;
        }

    }
}
</style>
