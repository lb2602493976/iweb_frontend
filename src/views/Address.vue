<template>
	<div class="">
		<iw-header></iw-header>
		<!-- 面包屑 -->
		<iw-breadcrumb>&gt;校区</iw-breadcrumb>
		<!--主体内容-->
		<article class="address">
			<section class="clearfloat">
				<em class="icon-location"></em>
				<div class="address_detail">
					<h3>北京中关村中心</h3>
					<p>校区地址：北京市海淀区北三环西路甲18号（大钟寺附近）中鼎大厦B座7层</p>
					<p>咨询电话：010-62130963</p>
					<p>邮编：100098</p>
				</div>
			</section>
			<section class="clearfloat">
				<em class="icon-location"></em>
				<div class="address_detail">
					<h3>北京天坛中心</h3>
					<p>校区地址：北京市崇文区珠市口东大街6号珍贝大厦西侧3层达内科技</p>
					<p>咨询电话：010-67028668</p>
					<p>邮编：100050</p>
				</div>
			</section>
			<section class="clearfloat">
				<em class="icon-location"></em>
				<div class="address_detail">
					<h3>北京广渠门中心</h3>
					<p>校区地址：北京市东城区广渠门东广渠家园25号楼启达大厦一层</p>
					<p>咨询电话：15321130620</p>
					<p>邮编：100010</p>
				</div>
			</section>
			<section class="clearfloat">
				<em class="icon-location"></em>
				<div class="address_detail">
					<h3>北京北京清华园中心</h3>
					<p>校区地址：北京市海淀区花园路小关街120号万盛商务会馆A区三层</p>
					<p>咨询电话：010-82676916</p>
					<p>邮编：100088</p>
				</div>
			</section>
		</article>
		<iw-footer></iw-footer>
	</div>
</template>

<script>
	// @相当于 /src
	import Header from '@/components/Header.vue'
	import Footer from '@/components/Footer.vue'
	import Breadcrumb from '@/components/Breadcrumb.vue'
	
	export default {
		data: () => {
			return {

			}
		},
		components: {
			'iw-header': Header,
			'iw-footer': Footer,
			'iw-breadcrumb':Breadcrumb
		}
	}
</script>

<style>
	/*校区*/
	.address {
	    width: 800px;
	    margin: 0 auto;
	}
	.address>section {
	    padding: 30px 0;
	    border-bottom: 1px dotted #ccc;
	}
	.address>section:last-child {
	    border-bottom: none;
	}
	.address .icon-location {
	    float: left;
	    width: 31px;
	    height: 47px;
	    background: url(../assets/images/iconlist.png) no-repeat 0 -530px;
	    margin: 3px 70px 0;
	}
	.address_detail {
	    float: left;
	    width: 580px;
	}
	.address_detail>h3 {
	    font-size: 18px;
	    font-weight: lighter;
	    margin-bottom: 10px;
	}
	.address_detail>p {
	    font-size: 14px;
	    color: #999;
	}
</style>
