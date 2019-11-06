<template>
    <div class="case-page">
        <banner :bannerInfo=bannerInfo />
        <bread-nav  v-model=activeIndex :thirdList=tabList />

        <case-list  v-for="item,index in list"
                    :title=item.classifyName
                    :desc=item.classifyTitle
                    :caseList=item.caseList
                    :id=index :class="{bggray: index%2==1}"></case-list>
    </div>
</template>


<script>
import CaseList from "../components/caseList"
import { getCaseList } from "@/api/api"

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
            bannerInfo: {
                title: '项目案例',
                desc: "20年园区运营经验，40+大型园区服务经验，解决国家3大新型智慧产业方向，推进产业一体化智慧运营",
                url: 'static/case-banner.png'
            }
        }
    },
    methods: {
        getCaseList() {
            getCaseList().then(data => {
                let { imgTitle:title, content: desc } = data.bannerPicture
                
                Object.assign(this.bannerInfo, { title, desc })

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
