<template>
  <div class="">
		<iw-header></iw-header>
    <h1>抱歉您访问的页面不知飞到那里去了......</h1>
		<iw-footer></iw-footer>
  </div>
</template>

<script>
	// @相当于 /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default{
		data:()=>{
			return {
				
			}
		},
		components:{
			'iw-header':Header,
			'iw-footer':Footer
		}
	}
</script>

<style>
	
</style>
