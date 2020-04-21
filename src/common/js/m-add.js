import MyForm from "base/myForm"
import FormRule from "common/js/FormRule"

export default {
    methods: {
        getRules (items) {
            let rule = {}
            let arr = items || this.formItems

            arr.filter(item => item.required != undefined).map(item => {
                let obj = new FormRule(item)
                rule[item.name] = obj.rule
            })

            return rule
        },
    },
    components: {
        MyForm
    }
}
