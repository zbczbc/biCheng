<template>
	<div id="app">
		<m-header></m-header>
		<router-view></router-view>
		<m-footer @showDialog=showDialog></m-footer>
		<index-dialog v-if="dialogVisible" ref="dialog"></index-dialog>
	</div>
</template>

<script>
import MHeader from "./components/header"
import MFooter from "./components/footer"

import IndexDialog from "@/views/home/indexDialog"

import Vue from "vue"


export default {
	name: '',
	data() {
		return {
			dialogVisible: false
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
		showDialog(type) {
			this.dialogVisible = true
			this.$nextTick(() => {
				if(Vue.prototype.$device.isPC) {
					this.$refs.dialog.init(type)
				}
			})
		}
	},
	created() {
		this.onResize()

		window.onresize = () => {
			this.onResize()
		}
		
		this.$root.$on('showVideo', () => {
			this.showDialog('video')
		})

	},
	components: {
		MHeader, MFooter, IndexDialog
	}
}
</script>

<style lang="stylus">
@import 'common/stylus/index.styl';
</style>
