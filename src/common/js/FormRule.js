import { isArray } from "./util"
import { isIP, isMobile, isPhone, isEmail } from "./validate"

export default class FormRule {
    /*
    *  key：表单字段名,
    *  label： 表单字段名对应中文值
    *  type:    select radio autocomplete => change / 其他 => blur
    *  validate:          验证类型  IP
    *  max: 10            最大字符数
    *  extend：          拓展字段，供特殊验证使用
    */
    static typeStr = 'select radio autocomplete'

    constructor({ key, label, required, type, max, validate, extend }) {
        Object.assign(this, { key, label, type, max, validate, required, extend })

        this.rule = {
            required: required,
            trigger: 'blur',
            validator: ""
        }

        this.setTrigger()

        this.setValidator()
    }

    setValidator () {
        this.rule.validator = (rule, value, callback) => {
            let errmsg = null
            if (this.isEmpty(value)) {
                errmsg = this.rule.required ? this.emptyMsg : ''
            } else {
                if (this.max && value.length > this.max) {
                    errmsg = `最多可输入${this.max}个字`
                }

                if (this.validate) {
                    errmsg = this.dealValidate(value)
                }
            }

            if (errmsg) {
                callback(new Error(errmsg))
            } else {
                callback()
            }
        }
    }

    dealValidate (value) {
        let ret = ""
        let fnMap = {
            IP: () => {
                if (!isIP(value)) {
                    ret = "IP格式错误"
                }
            },
            PHONE: () => {
                if (!isPhone(value) && !isMobile(value)) {
                    ret = "电话号码格式错误"
                }
            },
            EMAIL: () => {
                if (!isEmail(value)) {
                    ret = "邮箱格式错误"
                }
            },
        }

        fnMap[this.validate]()
        return ret
    }

    isEmpty (value) {
        return value === '' ||
            value == undefined ||
            (isArray(value) && value.length == 0)
    }

    setTrigger () {
        let ret = "blur"
        if (this.isChange != -1) {
            ret = 'change'
        }
        this.rule.trigger = ret
    }

    get isChange () {
        return FormRule.typeStr.indexOf(this.type)
    }

    get emptyMsg () {
        let str = "输入"
        if (this.isChange != -1 || this.type == 'date' || this.type == 'tree') {
            str = '选择'
        }
        if (this.type == 'upload') {
            str = '上传'
        }
        return `请${str}${this.label}`.replace('：', '')
    }

}
