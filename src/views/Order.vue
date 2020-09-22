<template>
  <div class="">
		<iw-header></iw-header>
    <!-- 面包屑 -->
    <iw-breadcrumb>&gt;校区</iw-breadcrumb>
    <!--主体内容-->
    <div class="container">
        <h2 class="order_title">选择收货地址<a href="">管理收货地址</a></h2>
        <div class="user_address">
            <ul>
                <li class="active"><span></span>韩小米	18512345678	北京 北京市 海淀区 万寿路文博大厦二楼达内科技</li>
                <li><span></span>张大胖	18512345678	北京 北京市 海淀区 北三环东路中鼎大厦B座7层</li>
                <li><span></span>王小明	18512345678	河北 石家庄市 桥西区 友谊南大街43号 翰林观天下 12栋 1-2001</li>
            </ul>
        </div>
        <h2 class="order_title">确认订单信息</h2>
        <div class="order_list">
            <h3 class="clearfloat"><span>商品信息</span><span>单价</span><span>数量</span><span>小计</span></h3>
            <ul>
                <!--<li>
                    <img src="img-course/01.png" alt=""/>
                    <h4>JAVASCRIPT基础入门</h4>
                    <span>799.00</span>
                    <em>2</em>
                    <strong>1368.00</strong>
                </li>
                <li>
                    <img src="img-course/01.png" alt=""/>
                    <h4>JAVASCRIPT基础入门</h4>
                    <span>799.00</span>
                    <em>2</em>
                    <strong>1368.00</strong>
                </li>
                <li>
                    <img src="img-course/01.png" alt=""/>
                    <h4>JAVASCRIPT基础入门</h4>
                    <span>799.00</span>
                    <em>2</em>
                    <strong>1368.00</strong>
                </li>-->
            </ul>
        </div>
        <h2 class="order_title">备注信息： <input type="text"/></h2>
        <div class="order_sum">
            <ul>
                <li><span>商品总金额：</span><span id="priceSum">¥</span></li>
                <li><span>配送费：</span><span>¥12.0</span></li>
                <li><span>应付金额：</span><strong id="paySum">¥</strong></li>
                <li><button type="button">提交订单</button></li>
            </ul>
        </div>
    </div>
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
