<template>
    <div class="joinus-wrapper">
        <div class="p-tit flash-move">人才招聘</div>
        <div class="p-desc flash-move">力求为每位员工创造一个良好的工作环境，最大限度地调动一切积极因素，做到人尽其才、才尽其用，
为碧城智慧快速成长和高效运作提供保障。</div>

        <div class="layout">
            <el-collapse class="list-group" v-model="activeNames" @change="handleChange">
                <el-collapse-item name="1" class="flash-move" v-for="(item, i) in listData" :key="i">
                    <template slot="title">
                        <div class="list-title">
                            <!-- 25*25 -->
                            <div>{{item.jobTitle}}</div>
                            <div>查看详情</div>
                        </div>
                    </template>
                    <div class="main-wrap">
                        <div class="infoes-box">
                            <div class="row clearfix">
                                <div>工作地点： {{item.workPlace}}</div>
                                <div>薪资待遇： {{item.salary}}</div>
                                <div>工作经验： {{item.experience}}</div>
                                <div>发布日期： {{item.releaseDate}}</div>
                            </div>
                            <div class="row clearfix">
                                <div>年龄： {{item.ageRqrmnt}}</div>
                                <div>招聘人数： {{item.headcount}}</div>
                                <div>学历： {{item.degreeRqrmnt}}</div>
                                <div>职位有效期： {{item.endDate}}</div>
                            </div>
                        </div>
                        <div class="accuse-box">
                            <div class="sub-tit">岗位职责：</div>
                            <div class="items">
                                <content-br :content=item.jobRqrmnt />
                            </div>

                            <div class="sub-tit mt10">岗位描述：</div>
                            <div class="items">
                                <content-br :content=item.jobDescrip />
                            </div>
                        </div>
                        <div class="bluebtn mt20" @click="onApply(item)">立即申请</div>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>

        <joinus-dialog ref="joinusDialog" />
    </div>
</template>

<script>
import { Collapse  } from 'element-ui';
import JoinusDialog from "./joinus/joinus-dialog"
import ContentBr from "base/content-br"

export default {
    data() {
        return {
            listData: [],
            activeNames: ['1']
        }
    },
    methods: {
        handleChange() {

        },
        onApply(item) {
            this.$refs.joinusDialog.init(item)
        },
        _initCreatedData() {
            let keyMap = {
                location: '工作地点',

            }
            this.listData = [
               {  }
            ]
        },
        _getList() {
            this.$api.getJoinInfoList({pageNo: 1, pageSize: 100}).then(data => {
                console.log(data)
                this.listData = data.jobInfoList.list
            })
        }
    },
    created() {
        this._getList()
    },
    components: {
        Collapse, JoinusDialog, ContentBr
    }
}
</script>

<style lang="stylus" scoped>

$l_gap=30px;
$m_gap=10px;

.list-group{
    calcmedia('mt', 50px, 30px);
    .list-title{
        calcmedia('p', 0 $l_gap, 0 $m_gap);
        display: block; size18(); display: flex; justify-content:space-between;
         width: 100%;
    }
    .main-wrap{
        calcmedia('p', 0 $l_gap, 0 $m_gap);
    }
    .infoes-box{
        calcmedia('p', $l_gap 0, $m_gap 0);
        border-bottom: 1px solid $eb;
        .row{
            div{
                calcmedia('w', 25%, 50%); width: 25%; line-height: 30px; float:left;
            }
        }
    }
    .sub-tit{
        size16();
    }
    .accuse-box{
        calcmedia('p', 36px 0 30px, 15px 0 10px);
        border-bottom: 1px solid $eb;
    }
    .items{
        line-height: 30px; size14();
    }
}
/deep/ .el-collapse{
    .el-collapse-item__header{
        calcmedia('h', 70px, 40px);
        calcmedia('lh', 70px, 40px); color:$c45;
        &.is-active{
            color:#fff; background: $blue;
        }
    }
    .el-collapse-item__arrow{
        display: none;
    }
}
</style>
