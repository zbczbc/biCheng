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


export default {
	name: '',
	data() {
		return {
			
		}
	},
	methods: {
	},
	components: {
		MHeader, MFooter
	}	
}
</script>

<style lang="stylus">
@import 'common/stylus/index.styl';

</style>
