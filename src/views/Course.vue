<template>
  <div class="">
		<iw-header></iw-header>
    <!-- 面包屑 -->
    <iw-breadcrumb>&gt;校区</iw-breadcrumb>
    <!--主体内容-->
    <article class="container">
        <section class="course_tag">
            <span>课程等级：</span>
						<router-link to="" :class="{active:true}">不限</router-link>
						<router-link :to="'/course?type='+item.tpid" :class="{active:pageNum==item}" v-for="(item,index) of course" :key="index">{{item.tpname}}</router-link>
        </section>
        <section class="course_list">
            <ul>
                <li class="clearfloat" v-for="(item,index) of list" :key="index">
                    <router-link :to="'/course-detail/:'+item.cid" class="course_img">
											<img :src="require('../assets/'+item.pic)" >
											<!-- <img src="../assets/img-course/06.png"> -->
										</router-link>
                    <div class="information">
                        <h2>{{item.title}}</h2>
                        <p>讲师：{{item.tname}}</p>
                        <p>课时：{{item.clength}}</p>
                        <p>开课时间：{{item.startTime}}</p>
												<!-- 查看各校区有待补充 -->
                        <p>上课地点：{{item.address}} <router-link to="/address">查看各校区地址</router-link></p> 
                    </div>
                    <span>¥ {{item.price}}</span>
                    <router-link :to="'/course-detail/:'+item.cid" class="course_btn">查看详情</router-link>
                </li><!-- 
                <li class="clearfloat">
                    <a href="" class="course_img"><img src="img-course/05.png" alt=""/></a>
                    <div class="information">
                        <h2>HTML零基础入门</h2>
                        <p>讲师：赵旭</p>
                        <p>课时：1天</p>
                        <p>开课时间：每周一开课</p>
                        <p>上课地点：i前端各校区 <a href="">查看各校区地址</a></p>
                    </div>
                    <span>¥ 799.00</span>
                    <a href="" class="course_btn">查看详情</a>
                </li>
                <li class="clearfloat">
                    <a href="" class="course_img"><img src="img-course/05.png" alt=""/></a>
                    <div class="information">
                        <h2>HTML零基础入门</h2>
                        <p>讲师：赵旭</p>
                        <p>课时：1天</p>
                        <p>开课时间：每周一开课</p>
                        <p>上课地点：i前端各校区 <a href="">查看各校区地址</a></p>
                    </div>
                    <span>¥ 799.00</span>
                    <a href="" class="course_btn">查看详情</a>
                </li>
                <li class="clearfloat">
                    <a href="" class="course_img"><img src="img-course/05.png" alt=""/></a>
                    <div class="information">
                        <h2>HTML零基础入门</h2>
                        <p>讲师：赵旭</p>
                        <p>课时：1天</p>
                        <p>开课时间：每周一开课</p>
                        <p>上课地点：i前端各校区 <a href="">查看各校区地址</a></p>
                    </div>
                    <span>¥ 799.00</span>
                    <a href="" class="course_btn">查看详情</a>
                </li> -->
            </ul>
        </section>
        <!-- 分页导航-->
              <div class="pages">
                <a :class="{default: pageNum==1}" @click="getNews(pageNum-1)">上一页</a>
        
                <!-- 当前页, 有cur样式, 否则没有 -->
                <!-- 样式写法: :class="{样式名:true/false}" -->
                <!-- 通过true和false 来代表样式是否生效  -->
                <a
                  @click="getNews(item)"
                  :class="{cur: pageNum==item}"
                  v-for="(item, index) in pageCount"
                  :key="index"
                >{{item}}</a>
                <!-- <a>2</a> -->
                <!--<a href="">3</a>-->
                <!--<a href="">4</a>-->
                <!--<a href="">5</a>-->
        
                <!-- 根据条件, 来显示 能点 和 不能点的下一页 -->
                <a @click="getNews(pageNum+1)" v-if="pageNum<pageCount">下一页</a>
                <a class="default" v-else>下一页</a>
              </div>
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
				// 课程类型
				course:[],
				// 绑定class
				isActive:true,
				// 课程列表
				
				totalRecord: 0,
				pageCount: 0,
				pageNum: 0,
				pageSize: 0,
				list: []
			}
		},
		mounted() {
			this.getNews(1);
		},
		methods:{
			// 获取指定页数的数据
			getNews(page){
				// 如果页数小于1, 则return. 让下方代码不执行
				if (page < 1) return;
				// 页面挂载成功
				// 课程类型
				this.$http.get('/type').then(res=>{
					// console.log(res.data)
					this.course=res.data
					// console.log(this.course)
				}).catch(err=>{
					console.log(err)
				}),
				// 课程列表
				this.$http.get('/course/list',{params:{pageNum:page,typeId:0}}).then(res=>{
					// console.log(res)
					console.log(res.data)
					this.list=res.data.list
					this.pageCount = res.data.pageCount;
					this.pageNum = res.data.pageNum;
					this.pageSize = res.data.pageSize;
					this.totalRecord = res.data.totalRecord;
				}).catch(err=>{
					console.log(err)
				})
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
	/*课程列表*/
	.course_tag {
	    padding: 26px 16px;
	    background: #f5f5f5;
	    line-height: 26px;
	    font-size: 16px;
	}
	.course_tag span,.course_tag a {
	    display: inline-block;
	    vertical-align: middle;
	    margin-right: 4px;
	}
	.course_tag a {
	    padding: 0 16px;
	}
	.course_tag a.active {
	    background: #57bc4c;
	    color:#fff;
	}
	.course_list {
	    border-top:2px solid #b2ee86;
	    margin-top: 20px;
	}
	.course_list>ul>li {
	    border-bottom:1px dotted #ccc;
	    padding: 36px 0;
	}
	.course_list .course_img {
	    float: left;
	}
	.course_list .course_img>img {
	    display: block;
	}
	.course_list .information {
	    float: left;
	    margin-left: 60px;
	    width: 410px;
	}
	.course_list .information>h2 {
	    font-size: 16px;
	    font-weight: lighter;
	    margin:4px 0 16px;
	}
	.course_list .information>p>a {
	    color: #f60;
	    text-decoration: underline;
	}
	.course_list .information>p>a:hover {
	    color: #f30;
	}
	.course_list>ul>li>span {
	    float: left;
	    font-size: 20px;
	    color: #f60;
	    line-height: 34px;
	    margin-top: 54px;
	}
	.course_list .course_btn {
	    float: right;
	    width: 120px;
	    height: 34px;
	    line-height: 34px;
	    text-align: center;
	    color: #fff;
	    background: #77c558;
	    font-size: 16px;
	    margin-top: 54px;
	}
	/*分页导航*/
	.pages {
	    text-align: center;
	    margin-top: 50px;
	}
	.pages a {
	    color:#999;
	    box-sizing: border-box;
	    height: 20px;
	    min-width: 20px;
	    display: inline-block;
	    border:1px solid #ddd;
	    margin: 0 2px;
	    padding: 0 4px;
	    line-height: 18px;
	}
	.pages a:hover {
	    border-color:#a8d885;
	}
	.pages a.cur {
	    border-color:#a8d885;
	    background: #a8d885;
	    color: #fff;
	}
	.pages a.default {
	    border-color: #ddd;
	    color:#ddd;
	    cursor: default;
	}
</style>
