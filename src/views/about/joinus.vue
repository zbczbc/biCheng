<template>
    <div class="joinus-wrapper">
        <div class="p-tit">人才招聘</div>
        <div class="p-desc">力求为每位员工创造一个良好的工作环境，最大限度地调动一切积极因素，做到人尽其才、才尽其用，
为碧城智慧快速成长和高效运作提供保障。</div>

        <div class="layout">
            <el-collapse class="list-group" v-model="activeNames" @change="handleChange">
                <el-collapse-item name="1">
                    <template slot="title">
                        <div class="list-title">
                            <!-- 25*25 -->
                            <div>行政管理</div>
                            <div>查看详情</div>
                        </div>
                    </template>
                    <div class="main-wrap">
                        <div class="infoes-box">
                            <div class="row clearfix">
                                <div>工作地点： 广州</div>
                                <div>工作地点： 广州</div>
                                <div>工作地点： 广州</div>
                                <div>工作地点： 广州</div>
                            </div>
                            <div class="row clearfix">
                                <div>工作地点： 广州</div>
                                <div>工作地点： 广州</div>
                                <div>工作地点： 广州</div>
                                <div>工作地点： 广州</div>
                            </div>
                        </div>
                        <div class="accuse-box">
                            <div class="sub-tit">岗位职责：</div>
                            <div class="items">
                                <div>1、制定华为商城日常和大促运营策略，形成店铺销售及促销计划；</div>
                                <div>1、制定华为商城日常和大促运营策略，形成店铺销售及促销计划；</div>
                                <div>1、制定华为商城日常和大促运营策略，形成店铺销售及促销计划；</div>
                                <div>1、制定华为商城日常和大促运营策略，形成店铺销售及促销计划；</div>
                            </div>
                        </div>
                        <div class="bluebtn mt20">立即申请</div>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>

    </div>
</template>

<script>
import { Collapse  } from 'element-ui';

export default {
    data() {
        return {
            listData: [],
            activeNames: ['1']
        }
    },
    methods: {
        _initCreatedData() {
            let keyMap = {
                location: '工作地点',

            }
            this.listData = [
               {  }
            ]
        }
    },
    components: {
        Collapse
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
