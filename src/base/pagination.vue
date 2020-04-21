<template>
    <div class="pager mt20" v-if="total">
        <el-pagination  :current-page.sync="currentPage" 
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange" 
                        :page-size="pageSize" 
                        :page-sizes="pageSizes" 
                        :layout="layout"
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
</style>
