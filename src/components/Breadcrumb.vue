<template>
	<!--面包屑导航-->
	<div class="breadcrumb container">
		<router-link to="/">首页</router-link>
		<!-- slot插槽 -->
		<router-link to="/address"><slot></slot></router-link>
	</div>
</template>

<script>
export  default {
	data: ()=>{
		return {}
	},
	components: {
		
	}
}	
</script>

<style>
	
</style>
