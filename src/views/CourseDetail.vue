<template>
  <div class="" >
		<iw-header></iw-header>
    <!-- 面包屑 -->
    <iw-breadcrumb>&gt;校区</iw-breadcrumb>
    <!--主体内容-->
    <article class="container" >
        <section class="course_head clearfloat">
            <div class="course_img">
                <img :src="require('../assets/'+detail.pic)">
            </div>
            <aside class="course_info">
                <h2></h2>
                <ul>
                    <li>讲师：{{detail.tname}}</li>
                    <li>课时：{{detail.cLength}}</li>
                    <li>开课时间：{{detail.startTime}}</li>
                    <li>上课地点：{{detail.address}} <router-link to="/address">查看各校区地址</router-link></li>
                </ul>
                <p>课程价格：<strong id="price">¥ {{detail.price}}</strong></p>
                <div class="course_link">
                    <span href="" id="addCart"><em class="icon-cart"></em>加入购物车</span>
                    <a href="" id="favorite">加入收藏</a>
                </div>
            </aside>
        </section>
        <section class="course_detail">
            <h2 class="title"><span>课程详情</span></h2>
            <div class="details" v-html="detail.details">
                {{detail.details}}
                <!--<p>本课程详细讲解了HTML5的各个方面，课程从环境搭建开始，依次讲述了HTML5新元素、Canvas、SVG、Audio、GPS定位、拖拽效果、WEB存储、App Cache、HTML5 多线程和HTML5消息推送等内容。本课程详细讲解了HTML5的各个方面，课程从环境搭建开始，依次讲述了HTML5新元素、Canvas、SVG、Audio、GPS定位、拖拽效果、WEB存储、App Cache、HTML5 多线程和HTML5消息推送等内容。</p>-->
                <!--<p>本课程详细讲解了HTML5的各个方面，课程从环境搭建开始，依次讲述了HTML5新元素、Canvas、SVG、Audio、GPS定位、拖拽效果、WEB存储、App Cache、HTML5 多线程和HTML5消息推送等内容。</p>-->
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
export default{
		data:()=>{
			return {
				
				// 课程详情
				detail:[],
				// 课程id
				cid:2,
			}
		},
		components:{
			'iw-header':Header,
			'iw-footer':Footer,
			'iw-breadcrumb':Breadcrumb
		},
		mounted() {
			// 课程列表
			
			// 课程详情
			this.$http.get('/course/detail?cid='+this.cid).then(res=>{
				console.log(res.data)
				this.detail=res.data
			}).catch(err=>{
				console.log(err)
			})
		}
	}
</script>

<style>
	/*课程详情页*/
	.course_head .course_img {
	    float: left;
	    width: 400px;
	    height: 250px;
	    overflow: hidden;
	}
	.course_head .course_img>img {
	    display: block;
	    width: 400px;
	}
	.course_info {
	    float: left;
	    margin-left: 76px;
	}
	.course_info>h2 {
	    font-size: 24px;
	    font-weight: lighter;
	}
	.course_info>ul {
	    background: #f5f5f5;
	    width: 320px;
	    height: 120px;
	    color: #888;
	    padding: 10px 0 0 14px;
	    box-sizing: border-box;
	    margin-top: 16px;
	}
	.course_info>ul>li>a {
	    color: #f60;
	    text-decoration: underline;
	}
	.course_info>ul>li>a:hover {
	    color:#f30;
	}
	.course_info>p {
	    color: #888;
	}
	.course_info>p>strong {
	    font-size: 20px;
	    color: #f60;
	    font-weight: lighter;
	    line-height: 56px;
	}
	.course_link>span {
	    display: inline-block;
	    vertical-align: middle;
	    background: #f90;
	    line-height: 34px;
	    color: #fff;
	    padding: 0 20px 0 16px;
	    font-size: 16px;
	    margin-right: 16px;
	    cursor:pointer;
	}
	.course_link>span:hover {
	    background: #ff8a00;
	}
	.course_link>span .icon-cart {
	    background-position: 0 -500px;
	}
	.course_link>a {
	    font-size: 14px;
	}
	.course_detail {
	    margin-top: 60px;
	}
	.details {
	    padding: 20px 40px;
	    font-size: 14px;
	    line-height: 28px;
	    color: #666;
	}
	.details p {
	    text-indent: 28px;
	}
</style>
