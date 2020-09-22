<template>
	<div class="header_box">
		<!--顶部-->
		<div class="top">
			<div class="container">
				<ul>
					<li class="favorite"><a href="">收藏i前端</a></li>
					<li class="mobilephone"><a href="">下载手机客户端</a></li>
					<li class="email">反馈邮箱：iweb@126.com</li>
					<li class="telephone">客服热线：4008-200-200</li>
				</ul>
			</div>
		</div>

		<!--header-->
		<header class="header">
			<div class="container">
				<h1 class="logo"><a href="index.html"></a></h1>
				<div class="h_right">
					<div class="search">
						<input type="text" placeholder="课程搜索" /><button type="button"></button>
					</div>
					<div class="h_cart">
						<router-link to="/cart">
							<em class="icon-cart">

							</em>
							我的购物车(<strong id="cart_sum">0</strong>)<em class="icon-arrows">
							</em>
						</router-link>
						<div class="cart_dropdown">
							<h3 v-if="!$store.state.userInfo.uid">请登录后查看您的购物车</h3>
							<template v-else>
								<h3>您的购物车为空~</h3>
								<ul>
									<li class="clearfloat">
										<a href=""><img src="img-course/01.png" alt="" /></a>
										<dl>
											<dt><a href="">HTML零基础入门零基础入门零基础入门</a></dt>
											<dd>¥599.00 <span>x 2</span></dd>
										</dl>
										<em class="icon-remove"></em>
									</li>
									<li class="clearfloat">
										<a href=""><img src="img-course/02.png" alt="" /></a>
										<dl>
											<dt><a href="">HTML零基础入门</a></dt>
											<dd>¥599.00 <span>x 1</span></dd>
										</dl>
										<em class="icon-remove"></em>
									</li>
								</ul>
								<div class="sum clearfloat">
									<p>共计：<span>¥1298.00</span></p>
									<a href="">去结算</a>
								</div>
							</template>
						</div>
					</div>
				</div>
			</div>
		</header>

		<!--导航-->
		<nav class="navbar">
			<div class="container">
				<div class="nav">
					<ul>
						<li>
							<router-link to="/">首页</router-link>
						</li>
						<li>
							<router-link to="/course">全部课程</router-link>
						</li>
						<!-- 循环 -->
						<li v-for="(t,i) of $store.state.courseTypes" :key=i>
							<router-link :to="'/course?type='+t.tpid">{{t.tpname}}</router-link>
						</li>
						<li>
							<router-link to="/teachers">名师堂</router-link>
						</li>
						<li>
							<router-link to="/address">校区</router-link>
						</li>
					</ul>
				</div>
				<div class="nav_user">
					<!-- 登录前-->
					<p v-if="!$store.state.userInfo.uid">
						<router-link to="/login">登录</router-link> |
						<router-link to="/register">注册</router-link>
					</p>
					<!-- 登录后-->
					<template v-else>
						<a href=""><em class="icon-user"></em>个人中心<em class="icon-triangle"></em></a>
						<div class="user_dropdown">
							<p><span>丁当</span>，您好~<br>您在i前端共购买了<span>6</span>门课程。</p>
							<div class="userlink_1 clearfloat">
								<a href="">我购买的课程</a>
								<a href="">我的收藏</a>
							</div>
							<div class="userlink_2 clearfloat">
								<a href="">进入个人中心</a>
								<a href="">退出登录</a>
							</div>
						</div>
					</template>

				</div>
			</div>
		</nav>
	</div>
</template>

<script>
	export default {
		data: () => {
			return {}
		},
		mounted() {
			// 若组件挂载完成,异步获取所有课程类型
			// $http=axios Vue实例 main.js中
			this.$http.get('/type').then(res => {
				// console.log(res.data)
				// 服务器端返回的课程数据保存到Vue中
				this.$store.commit('setCourseTypes', res.data)
			}).catch(err => {
				console.log(err)
			})
		},
		components: {

		}
	}
</script>

<style>

</style>
