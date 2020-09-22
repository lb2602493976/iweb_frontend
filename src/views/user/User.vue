<template>
  <div class="">
	<iw-header-usercenter></iw-header-usercenter>
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
            <h1 class="logo"><a href=""></a></h1>
            <div class="h_right">
                <div class="search">
                    <input type="text" placeholder="课程搜索"/><button type="button"></button>
                </div>
                <div class="h_cart">
                    <a href=""><em class="icon-cart"></em>我的购物车(0)<em class="icon-arrows"></em></a>
                    <div class="cart_dropdown">
                        <span class="line"></span>
                        <ul>
                            <li class="clearfloat">
                                <a href=""><img src="../img-course/01.png" alt=""/></a>
                                <dl>
                                    <dt><a href="">HTML零基础入门零基础入门零基础入门</a></dt>
                                    <dd>¥599.00</dd>
                                </dl>
                                <em class="icon-remove"></em>
                            </li>
                            <li class="clearfloat">
                                <a href=""><img src="../img-course/02.png" alt=""/></a>
                                <dl>
                                    <dt><a href="">HTML零基础入门</a></dt>
                                    <dd>¥599.00</dd>
                                </dl>
                                <em class="icon-remove"></em>
                            </li>
                        </ul>
                        <div class="sum clearfloat">
                            <p>共计：<span>¥1298.00</span></p>
                            <a href="">去结算</a>
                        </div>
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
                    <li class="active"><a href="">个人中心</a></li>
                </ul>
            </div>
            <a href="" class="backhome">回到首页</a>
        </div>
    </nav>
    
    <section class="container user clearfloat">
        <aside class="user_side">
            <ul>
                <li class="active"><a href="user.html">个人中心首页</a></li>
                <li><a href="mycourse.html">我的课程</a></li>
                <li><a href="favorite.html">我的收藏</a></li>
                <li><a href="personal.html">个人资料</a></li>
                <li><a href="changepwd.html">修改密码</a></li>
            </ul>
        </aside>
        <div class="user_main">
            <div class="user_info">
                <h2>丁当，您好~欢迎来到会员中心！</h2>
                <p><span>邮箱：ding@tedu.cn</span><span>手机号：18501051518</span><a href="">修改资料</a></p>
                <p>您在i前端共购买过10门课程，其中已学完3门，剩余7门。</p>
            </div>
            <section class="user_course">
                <h2 class="title3"><span>我购买的课程</span></h2>
                <ul class="clearfloat">
                    <li><a href="">
                        <div class="uc_img">
                            <img src="../img-course/01.png" alt=""/>
                            <span>未学习</span>
                        </div>
                        <p>HTML5基础入门</p>
                    </a></li>
                    <li><a href="">
                        <div class="uc_img">
                            <img src="../img-course/02.png" alt=""/>
                            <span>未学习</span>
                        </div>
                        <p>HTML5基础入门</p>
                    </a></li>
                    <li><a href="">
                        <div class="uc_img">
                            <img src="../img-course/03.png" alt=""/>
                            <span class="history">已学完</span>
                        </div>
                        <p>HTML5基础入门</p>
                    </a></li>
                </ul>
            </section>
            <section class="user_course">
                <h2 class="title3"><span>我的收藏</span></h2>
                <ul class="clearfloat">
                    <li><a href="">
                        <div class="uc_img">
                            <img src="../img-course/01.png" alt=""/>
                        </div>
                        <p>HTML5基础入门</p>
                    </a></li>
                    <li><a href="">
                        <div class="uc_img">
                            <img src="../img-course/02.png" alt=""/>
                        </div>
                        <p>HTML5基础入门</p>
                    </a></li>
                    <li><a href="">
                        <div class="uc_img">
                            <img src="../img-course/03.png" alt=""/>
                        </div>
                        <p>HTML5基础入门</p>
                    </a></li>
                </ul>
            </section>
        </div>
    </section>
    <!--footer-->
    <footer class="footer">
        <div class="container">
            <div class="f_1 clearfloat">
                <ul>
                    <li>
                        <h5>关于i前端</h5>
                        <a href="">发展历程</a>
                        <a href="">管理团队</a>
                        <a href="">企业文化</a>
                        <a href="">加入我们</a>
                    </li>
                    <li>
                        <h5>新手帮助</h5>
                        <a href="">学员账号</a>
                        <a href="">选课流程</a>
                        <a href="">网报流程</a>
                        <a href="">上课地点</a>
                    </li>
                    <li>
                        <h5>常见问题</h5>
                        <a href="">如何注册</a>
                        <a href="">如何搜课</a>
                        <a href="">如何报名</a>
                        <a href="">如何缴费</a>
                    </li>
                    <li>
                        <h5>联系我们</h5>
                        <a href="">校区电话</a>
                        <a href="">意见建议</a>
                        <a href="">联系邮箱</a>
                    </li>
                </ul>
                <dl>
                    <dt></dt>
                    <dd>客服热线<br/>4008-220-220 ( 9:00 - 24:00 )</dd>
                </dl>
            </div>
            <div class="f_2">
                Copyright © 2016 iqianduan.com, All Rights Reserved 版权所有<br/>
                北京前端教育科技有限公司　京ICP备123456号-1 京公网安备110180201608号
            </div>
        </div>
    </footer>
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
