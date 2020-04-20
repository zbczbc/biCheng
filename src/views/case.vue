<template>
    <div class="case-page">
        <banner :bannerPicture=bannerPicture />
        <bread-nav  v-model=activeIndex :thirdList=tabList />

        <case-list  v-for="(item,index) in list"
                    :title=item.classifyName
                    :desc=item.classifyTitle
                    :caseList=item.caseList
                     class="flash-move"
                    :id=index :class="{bggray: index%2==1}"></case-list>
    </div>
</template>


<script>
import CaseList from "../components/caseList"

export default {
    data() {
        return {
            tabList: [
                { label: '智慧园区',},
                { label: '智慧社区',},
                { label: '智慧酒店',},
                { label: '智慧酒店',}
            ],
            activeIndex: 0,
            list: [
                { title: '智慧园区', desc: '助力园区智慧升级，构建产业创新生态',},
                { title: '智慧社区', desc: '助力园区智慧升级，构建产业创新生态' },
                { title: '智慧酒店', desc: '助力园区智慧升级，构建产业创新生态' },
                { title: '智慧商业', desc: '助力园区智慧升级，构建产业创新生态' },
            ],
            bannerPicture: {}
        }
    },
    methods: {
        getCaseList() {
            console.log(this.$api)
            this.$api.getCaseList().then(data => {
                console.log(data)
                this.bannerPicture = data && data.bannerPicture

                this.tabList = []
                this.list = []

                data.classifyList.map(classify => {
                    this.tabList.push({
                        label: classify.classifyName
                    })
                    this.list.push(classify)
                })
            })
        }
    },
    created() {
        this.getCaseList()
    },
    components: {
        CaseList
    }
}
</script>

<style lang="stylus" scoped>

</style>
