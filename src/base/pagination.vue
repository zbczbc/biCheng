<template>
    <div class="pager mt20" v-if="total">
        <el-pagination  :current-page.sync="currentPage"
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :page-size="pageSize"
                        :page-sizes="pageSizes"
                        layout="prev, pager, next"
                        :total="total">
        </el-pagination>
    </div>

</template>

<script>
export default {
    props: {
        pageSize: {
            type: Number,
            default: 10
        },
        pageSizes: {
            default: () => []
        },
        total: {
            type: Number,
            default: 0
        },
        pageNum: {
            type: Number,
            default: 1
        },
    },
    data () {
        return {
            currentPage: 1
        }
    },
    methods: {
        handleCurrentChange (val) {
            this.$emit('handleCurrentChange', val)
        },
        handleSizeChange (val) {
            this.$emit('handleSizeChange', val)
        }
    },
    watch: {
        pageNum: {
            immediate: true,
            handler (val) {
                if (val !== this.currentPage) {
                    this.currentPage = val
                }
            }
        }
    },
    computed: {
        layout () {
            return this.pageSizes.length > 0 ? "total, sizes, prev, pager, next, jumper" : "prev, pager, next, jumper"
        }
    },
}
</script>

<style lang="stylus" scoped>
.pager {
    background: #fff;
    padding: 10px 10px 10px 0;
}
/deep/ .el-pagination{
    calcmedia('m', 40px 0 80px, 20px -10px 60px); tc();
    li,.btn-prev, .btn-next{
        calcmedia('w', 40px)
        calcmedia('lhh', 40px)
        calcmedia('m', 0 10px, 0 5px)
        border: 1px solid #ececec; border-radius: 100%; pr(); disin();
        vertical-align: middle; fb(); padding: 0;

        &:hover, &.active{
            c(#fff);bg($blue);
        }
        .el-icon{
            display: inline-block;
        }
        &.more::before, &.more::after, &.btn-quicknext:hover,&.li.btn-quickprev:hover {
            calcmedia('lhh', 40px)
        }

    }
}
</style>
