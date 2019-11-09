<template>
    <div v-html="htmlContent"></div>
</template>

<script>
export default {
    props: {
        content: {
            default: ""
        },
    },
    computed: {
        htmlContent() {
            let plist = this.content.split(/[\r\n]+|[\n\r]+|[\n]+/),
                str = ""

            plist.map(item => {
                str+=`<p>${item}</p>`
            })
            return str
        }
    }
}
</script>