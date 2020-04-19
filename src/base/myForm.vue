<template>
    <el-form :model="model"
            status-icon
            ref="elForm"
            @submit.native.prevent
            :rules="rules"
            class="my-form clearfix"
            >
        <el-form-item   :label="item.label"
                        v-for="(item, index) in formItems.filter(item => !item.isHidden)"
                        :key=index
                        required
                        :style="getStyle(item)"
                        :prop="item.name" >
            <el-select v-if="item.type=='select'"  v-model="model[item.name]" clearable filterable  
                        class="draw-border"
                        :class="{'draw-border-active': focusIndex[index]}"  
                        @focus="onFocus(index)"
                        @blur="onBlur(index)"
                         >
                <template v-for="option in item.options" >
                    <!-- {{option.label}} {{option.value}} -->
                    <el-option :label="option.label" :value="option.value" :key=option.value></el-option>
                </template>
            </el-select>
            <template v-else-if="item.type=='validate'">
                <el-input placeholder="请输入内容" v-model="model[item.name]"  
                        class="draw-border"
                        :class="{'draw-border-active': focusIndex[index]}"  
                        @focus="onFocus(index)"
                        @blur="onBlur(index)">
                    <template slot="append">验证码</template>
                </el-input>
            </template>
            <el-upload v-else-if="item.type=='upload'"
                class="upload-box"
                action="https://jsonplaceholder.typicode.com/posts/"
                :limit="1"

                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                :on-exceed="handleExceed"
                :file-list="fileList">
                <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
            <el-input   :type="item.type||'text'"
                        v-model.trim="model[item.name]"
                        clearable
                        class="draw-border"
                        :class="{'draw-border-active': focusIndex[index]}" 
                        @focus="onFocus(index)"
                        @blur="onBlur(index)"

                            v-else />
            
        </el-form-item>
        
        <div class="p10">
            <div class="bluebtn fr">提交</div>
        </div>
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
    data() {
        return {
            focusIndex: new Array(15)
        }
    },
    methods: {
        onFocus(index) {
            this.focusIndex[index] = true

            this.$set(this.focusIndex, index, true)

            console.log(this.focusIndex)
        },
        onBlur(index) {
            this.focusIndex[index] = false
        },
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
$label_w=100px;

/deep/ .el-input, .upload-box{
    padding-left: $label_w;  height: 50px; border: 1px solid $eb;
    // &.is-focus{
    //     border-color: $blue;
    //     .el-input-group__append{
    //         border-color: $blue;
    //     }
    // }
    .el-input__inner{
        padding: 0;  line-height: 50px;
    }
    .el-input-group__append{
        calcmedia('w', 160px)
        background: transparent; border: 0; border-left: 1px solid $eb;  
    }
}


.my-form{
    /deep/ .el-form-item{
        position: relative; float: left; padding:0 10px; margin-bottom: 30px;
        calcmedia('mb', 30px, 20px);
        .el-form-item__label{
            position: absolute; width: $label_w; left: 10px; z-index:1; text-align: right; padding: 0; color: #888; line-height: 50px;
            &:before{
                color:#888 !important;
            }
        }

    }
}

/deep/ .el-select{
    width:100%;
    .el-input__suffix{
        calcmedia('w', 80px)
        right: 0; background: #f1f1f1;
    }
    .el-input .el-select__caret{
        calcmedia('sz', 24px)
    }
}   

/deep/ .el-textarea{
    &.is-focus{
        border-color: $eb;
    }
    textarea{
        padding:10px 10px 10px $label_w; height: 200px;  line-height: 30px;
    }
    .el-textarea__inner:focus{
        border-color: $eb;
    }
}
.upload-box{
    width: 100%; text-align: left;   line-height: 50px;
    .el-upload-list{
        display: inline-block;    
    }
}




.draw-border::after,.draw-border::before{content:'';position:absolute;z-index: 1;}
.draw-border{-webkit-transition:color .25s;transition:color .25s;position:relative}
.draw-border::after,.draw-border::before{border:1px solid transparent;width:0;height:0;position:absolute;content:""}
.draw-border::before{top:0;left:0}
.draw-border::after{bottom:-1px;right:0}
.draw-border-active::after,.draw-border-active::before{width:100%;height:100%}
.draw-border-active::before{border-top-color:#04b8ef;border-right-color:#04b8ef;-webkit-transition:width .25s ease-out,height .25s ease-out .25s;transition:width .25s ease-out,height .25s ease-out .25s}
.draw-border-active::after{border-bottom-color:#04b8ef;border-left-color:#04b8ef;-webkit-transition:border-color 0s ease-out .5s,width 10s ease-out .5s,height .25s ease-out .75s;transition:border-color 0s ease-out .5s,width .25s ease-out .5s,height .25s ease-out .75s}
.draw-border-active::before, .draw-border-active::after{width:100%;height:100%;}
.momu-contact-box button{margin:0 auto;height: 40px;line-height: 40px;width: 214px;display: block;font-size: 16px;color: #fff;border-radius: 40px;cursor: pointer;}


.bluebtn{
    calcmedia('w', false, 100%);
    calcmedia('lhh', false, 40px);
    calcmedia('m', false, 0 0 20px 0);

}

</style>
