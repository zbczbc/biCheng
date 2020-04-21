
export default {
    data() {
        return {
            pageNo:1,
            pageSize: 12,
            total: 0
        }
    },
    methods: {
        // 分页, 每页条数
		handleCurrentChange (val) {
			this.page = val
			this.getDataList()
		},
    },
    components: {
        MyForm
    }
}
