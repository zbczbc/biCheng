<template>
	<div id="app">
		<m-header></m-header>
		<router-view></router-view>
		<m-footer></m-footer>
	</div>
</template>

<script>
import MHeader from "./components/header"
import MFooter from "./components/footer"
import Vue from "vue"


export default {
	name: '',
	data() {
		return {

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
		}
	},
	created() {

		this.onResize()

		window.onresize = () => {
			this.onResize()
        }
	},
	components: {
		MHeader, MFooter
	}
}
</script>

<style lang="stylus">
@import 'common/stylus/index.styl';

</style>
