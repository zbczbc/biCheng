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
					{ name: '加入我们', id: '4', path: '/about'},
					{ name: '新闻中心', id: '5', path: '/about'},
					{ name: '友情链接', id: '6', path: '/about'},
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
				this.$root.$emit('getNavSuccess', {
					1: aboutList,
					3: schemeList,
					5: caseClassifyList,
					productList})

				//给首页的首banner用
				this.$root.$emit('getSchemeSuccess', schemeList)

				this.$root.$emit('getFooterSuccess', { qcCode, copyright })

            })
        },
	},
	watch: {
		$route(route) {
			//location.reload()

			// this.refreshing = false
			// setTimeout(() => {
			// 	this.refreshing = true

			// }, 100)
		}
	},
	mounted() {
		function animate() {
			$('.flash-move').each(function () {
				var win = $(window);
				var winScrollTop = win.scrollTop();
				var othis = $(this);
				var oTop = parseInt(othis.offset().top);

				//console.log(oTop, parseInt(win.height() + winScrollTop))
				if (oTop <= parseInt(win.height() + winScrollTop)) {
					othis.addClass('animated fadeInUp ');
				}
			});
		}

		$(window).on('scroll', animate);
        animate();
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
