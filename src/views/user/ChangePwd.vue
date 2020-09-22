<template>
  <div class="">
	<iw-header-usercenter></iw-header-usercenter>
    <h1>用户中心-修改密码</h1>
	<iw-footer></iw-footer>
  </div>
</template>

<script>
import HeaderUserCenter from '@/components/HeaderUserCenter.vue'
import Footer from '@/components/Footer.vue'

export  default {
	data: ()=>{
		return {}
	},
	components: {
		'iw-header-usercenter': HeaderUserCenter,
		'iw-footer': Footer
	}
}	
</script>

<style>
	
</style>
