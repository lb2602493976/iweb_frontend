<template>
  <div class="">
		<iw-header></iw-header>
    <!-- 面包屑 -->
    <iw-breadcrumb>&gt;校区</iw-breadcrumb>
    <!--主体内容-->
    <!--页面主体-->
    <div class="main container">
        <div class="cart">
            <div class="cart_header">
                <a href="" class="cart_delete">删除</a>
                <a href="" class="cart_clear">清空购物车</a>
                <span>已选课程<em>0</em>门</span>
                <span>总金额：<strong>0.00</strong></span>
                <button type="button" class="pay">结算</button>
            </div>
            <div class="cart_con">
                <div class="cartcon_title clearfloat">
                    <span><input type="checkbox" class="checkbox_all"/> 全选</span>
                    <span>课程信息</span>
                    <span>单价</span>
                    <span>数量</span>
                    <span>金额</span>
                    <span>操作</span>
                </div>
                <div class="cartcon_list">
                    <h2>请登录后查看您的购物车 <router-link to="/login">去登录</router-link></h2>
                    <!--<h2>购物车中没有任何课程！<a href="product.html">查看全部课程</a></h2>-->
                    <!--<ul>
                        <li class="clearfloat">
                            <span><input type="checkbox" class="cart_checkbox"/></span>
                            <a href="" class="cart_img"><img src="img-course/01.png" alt=""/></a>
                            <a href="" class="cart_title">HTML5基础入门</a>
                            <i>¥1599</i>
                            <div>
                                <span>-</span><input type="text" value="2"/><span>+</span>
                            </div>
                            <strong>¥1599.00</strong>
                            <em></em>
                        </li>
                        <li class="clearfloat">
                            <span><input type="checkbox" class="cart_checkbox"/></span>
                            <a href="" class="cart_img"><img src="img-course/02.png" alt=""/></a>
                            <a href="" class="cart_title">JavaScript核心知识讲解</a>
                            <i>¥1599</i>
                            <div>
                                <span>-</span><input type="text" value="2"/><span>+</span>
                            </div>
                            <strong>¥1599.00</strong>
                            <em></em>
                        </li>
                    </ul>-->
                </div>
            </div>
            <div class="cart_header">
                <p><input type="checkbox" class="checkbox_all"/> 全选</p>
                <a href="" class="cart_delete">删除</a>
                <a href="" class="cart_clear">清空购物车</a>
                <span>已选课程<em>0</em>门</span>
                <span>总金额：<strong>0.00</strong></span>
                <button type="button" class="pay">结算</button>
            </div>
        </div>
    </div>
		<iw-footer></iw-footer>
  </div>
</template>

<script>
	// @相当于 /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
export default{
		data:()=>{
			return {
				
			}
		},
		components:{
			'iw-header':Header,
			'iw-footer':Footer,
			'iw-breadcrumb':Breadcrumb
		}
	}
</script>

<style>
	/*购物车*/
	.cart {
	    margin-top:20px;
	}
	.cart_header {
	    text-align: right;
	    font-size: 14px;
	    line-height: 36px;
	}
	.cart_header>button{
	    display: inline-block;
	    vertical-align: middle;
	    width: 100px;
	    height: 36px;
	    background: #f63;
	    border:none;
	    color:#fff;
	    font-size: 18px;
	}
	.cart_header>span,.cart_header>a {
	    margin-right: 10px;
	    display: inline-block;
	    vertical-align: middle;
	}
	.cart_header>span>em {
	    font-style: normal;
	    color:#f63;
	}
	.cart_header>span>strong{
	    font-size: 18px;
	    color:#f63;
	}
	.cart_header>p {
	    float: left;
	    width: 110px;
	    text-align: center;
	}
	.cart_con {
	    margin: 10px 0;
	    font-size: 14px;
	}
	.cartcon_title {
	    background: #eee;
	    border:1px solid #ddd;
	}
	.cartcon_title>span {
	    line-height: 33px;
	    display: inline-block;
	    vertical-align: middle;
	    text-align: center;
	}
	.cartcon_title>span:nth-child(1){
	    width: 80px;
	}
	.cartcon_title>span:nth-child(2){
	    width: 500px;
	}
	.cartcon_title>span:nth-child(3){
	    width: 100px;
	}
	.cartcon_title>span:nth-child(4){
	    width: 120px;
	}
	.cartcon_title>span:nth-child(5){
	    width: 100px;
	}
	.cartcon_title>span:nth-child(6){
	    margin-left: 15px;
	}
</style>
