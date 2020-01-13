<template>
	<div id="app">
		<m-header :navList=navList></m-header>
		<router-view v-if="refreshing"></router-view>
		<custom-dialog ref="dialog"></custom-dialog>
		<m-footer :footerNavList=footerNavList></m-footer>
	</div>
</template>

<script>
import MHeader from "./components/header"
import MFooter from "./components/footer"

import CustomDialog from "base/dialog"

import Vue from "vue"
import { router } from "@/router"



export default {
	name: 'app',
	data() {
		return {
			dialogVisible: false,
			refreshing: true,
			navList: [],
			footerNavList: []
		}
	},
	methods: {
		onResize() {
			let _w = window.innerWidth,
				_h = window.innerHeight,
				isM = false,
				isPC = false;

            if(_w < 768) {
				isM = true
				this.$root.$emit('onChangeToMobile', { _w, _h })
			}else{
				isPC = true
				this.$root.$emit('onChangeToPC', { _w, _h })
			}

			Vue.prototype.$device = { isM,  isPC}
		},
		_setNavList() {
			let arr = router.routes,
				aboutList = [
					{ name: '公司简介', id: '1' , path: '/about'},
					{ name: '组织架构', id: '2' , path: '/about'},
					{ name: '资质荣誉', id: '3' , path: '/about'},
				]


            this.$api.menuList().then(data => {
                let { caseClassifyList, productList, schemeList, qcCode, copyright } = data

                //console.log(data)
                this.navList = arr.map(item => {
                    switch (item.meta.index) {
                        case 1:
                            item.children = aboutList
                            break;
                        case 2:
							item.children = productList

                            break;
                        case 3:
                            item.children = schemeList
                            break;
                        case 5:
                            item.children = caseClassifyList
                        default:
                            break;
					}

					if(item.children) {
						this.footerNavList.push(item)
					}

					return item
				})

				console.log(this.footerNavList)

				// 给breadnav用
				this.$root.$emit('getNavSuccess', {1:aboutList, 3: schemeList,5: caseClassifyList, productList})

				this.$root.$emit('getFooterSuccess', { qcCode, copyright })

            })
        },
	},
	watch: {
		$route(route) {
			location.reload()

			// this.refreshing = false
			// setTimeout(() => {
			// 	this.refreshing = true

			// }, 100)
		}
	},
	created() {
		this.onResize()
		this._setNavList()

		window.onresize = () => {
			this.onResize()
		}


	},
	components: {
		MHeader, MFooter, CustomDialog
	}
}
</script>

<style lang="stylus">
@import 'common/stylus/index.styl';
</style>
