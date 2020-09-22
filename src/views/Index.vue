<template>
  <div class="">
		<iw-header></iw-header>
		<!-- 文件上传输入框不允许使用v-model 做双向数据绑定 -->
		<!-- <input type="file" @change="doFileChange($event)">
		<br>
		<button @click="doFileUpload()">执行文件上传</button> -->
    <!-- banner -->
        <div class="banner">
            <!-- 图片列表 -->
            <ul>
                <li style="background: url(../assets/images/banner01.jpg) center 0 no-repeat; display: block;z-index: 20;"><a
                        href="#"></a></li>
												
               <!-- <li style="background: url(../assets/images/banner02.jpg) center 0 no-repeat;"><a href="#"></a></li>
                <li style="background: url(../assets/images/banner03.jpg) center 0 no-repeat;"><a href="#"></a></li>
                <li style="background: url(../assets/images/banner04.jpg) center 0 no-repeat;"><a href="#" class="link"></a></li>
           -->
					 </ul>
            <!-- 左右箭头-->
            <span class="cut prev"></span>
            <span class="cut next"></span>
            <!-- 小圆点指示器-->
            <div class="indicator">
                <a href="" class="cur"></a><a href=""></a><a href=""></a><a href=""></a>
            </div>
        </div>
    
        <!--主体内容-->
				
        <div class="container">
					<!-- 最新课程 -->
            <section class="ind_1">
                <h2 class="title"><span>最新课程</span><router-link to="/course">更多</router-link></h2>
                <ul class="course clearfloat">
                 <li v-for="(item,index) of newCourse" :key=index>
                    <router-link :to="'/course-detail/:'+item.cid" class="a_img"><img :src="require('../assets/'+item.pic)" alt=""/></router-link>
                    <router-link :to="'/course-detail/:'+item.cid" class="a_text">{{item.title}}</router-link>
                    <p>讲师：{{item.tname}}</p>
                    <strong>¥{{item.price}}</strong>
									</li>
               <!-- <li>
                    <a href="" class="a_img"><img src="img-course/02.png" alt=""/></a>
                    <a href="" class="a_text">HTML5基础入门</a>
                    <p>讲师：成亮</p>
                    <strong>¥ 799.00</strong>
                </li>
                <li>
                    <a href="" class="a_img"><img src="img-course/03.png" alt=""/></a>
                    <a href="" class="a_text">HTML5基础入门</a>
                    <p>讲师：成亮</p>
                    <strong>¥ 799.00</strong>
                </li>
                <li>
                    <a href="" class="a_img"><img src="img-course/04.png" alt=""/></a>
                    <a href="" class="a_text">HTML5基础入门</a>
                    <p>讲师：成亮</p>
                    <strong>¥ 799.00</strong>
                </li>   -->
                </ul>
            </section>
						<!-- 热门课程 -->
            <section class="ind_2">
                <h2 class="title"><span>热门课程</span><router-link trouter-link="/course">更多</router-link></h2>
                <ul class="course clearfloat">
                    <li v-for="(item,index) of hotCourse" :key=index>
                       <router-link :to="'/course-detail/:'+item.cid" class="a_img"><img :src="require('../assets/'+item.pic)" alt=""/></router-link>
                       <router-link :to="'/course-detail/:'+item.cid" class="a_text">{{item.title}}</router-link>
                       <p>讲师：{{item.tname}}</p>
                       <strong>¥{{item.price}}</strong>
                    </li>
                    <!-- <li>
                        <a href="" class="a_img"><img src="../assets/img-course/05.png" alt="" /></a>
                        <a href="" class="a_text">HTML5基础入门</a>
                        <p>讲师：成亮</p>
                        <strong>¥ 799.00</strong>
                    </li>
                    <li>
                        <a href="" class="a_img"><img src="../assets/img-course/02.png" alt="" /></a>
                        <a href="" class="a_text">HTML5基础入门</a>
                        <p>讲师：成亮</p>
                        <strong>¥ 799.00</strong>
                    </li>
                    <li>
                        <a href="" class="a_img"><img src="../assets/img-course/01.png" alt="" /></a>
                        <a href="" class="a_text">HTML5基础入门</a>
                        <p>讲师：成亮</p>
                        <strong>¥ 799.00</strong>
                    </li> -->
                </ul>
            </section>
            <section class="ind_3">
                <h2 class="title"><span>名师堂</span><router-link to="/teachers">更多</router-link></h2>
                <ul class="ind_teacher clearfloat">
                  <li v-for="(item,index) of teacherList" :key=index>
                    <router-link to="/teachers">
											<img :src="require('../assets/'+item.tpic)">
										</router-link>
                    <!-- <img src="../assets/img-teacher/cl.jpg"> -->
										<p>讲师：{{item.tname}}</p>
                    <span>主讲：{{item.maincourse}}</span>
									</li>
                <!-- <li>
                    <a href=""><img src="img-teacher/cl.jpg" alt=""/></a>
                    <p>讲师：成亮</p>
                    <span>主讲：HTML&CSS</span>
                </li>
                <li>
                    <a href=""><img src="img-teacher/cl.jpg" alt=""/></a>
                    <p>讲师：成亮</p>
                    <span>主讲：AngularJS</span>
                </li> -->
                </ul>
            </section>
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
				// 最新课程
				newCourse:[],
				// 热门课程
				hotCourse:[],
				// 讲师列表
				teacherList:[],
				
			}
		},
		methods:{
			// doFileChange(e){
			// 	// console.dir(e.target)  //输出事件源对象——<input type='file'>
			// 	this.avatarFile=e.target.files[0]  //从FilesList文件取出
			// 	// 把客户端选中的文件列表的第0个存为data属性
			// },
			// doFileUpload(){
			// 	// 执行异步文件上传——把用户选中的图片文件上传给后端服务器
			// 	let data=new FormData()  //表单数据
			// 	data.append('desc','这是我的图像文件')
			// 	data.append('avatar',this.avatarFile)
				
			// 	let config={
			// 		headers:{'Content-Type':'multipart/form-data'}
			// 	}
				
			// 	this.$http.post('/user/upload/avatar',data,config).then(res=>{
			// 		console.log(res)
			// 	}).catch(err=>{
			// 		console.log(err)
			// 	})
			// },
			
		},
		mounted() {
			// 最新课程
			this.$http.get('/course/newest?count=4').then(res=>{
				// console.log(res.data)
				this.newCourse=res.data
			}).catch(err=>{
				console.log(err)
			})
			// 讲师列表
			this.$http.get('/teacher/list?format=short').then(res=>{
				// console.log(res.data)
				this.teacherList=res.data
				
			}).catch(err=>{
				console.log(err)
			}),
			// 热门课程
			this.$http.get('/course/hottest?count=4').then(res=>{
				// console.log(res.data)
				this.hotCourse=res.data
			}).catch(err=>{
				console.log(err)
			})
		},
		components:{
			'iw-header':Header,
			'iw-footer':Footer
		}
	}
</script>
	
<style>
	.banner {
	    height: 380px;
	    position: relative;
	    border-bottom: 3px solid #ddd;
	}
	.banner ul li {
	    height: 100%;
	    width: 100%;
	    position: absolute;
	    display: none;
	    z-index:10;
	}
	.banner ul li a {
	    display: block;
	    width: 100%;
	    height: 100%;
	}
	.banner .cut {
	    position: absolute;
	    width: 43px;
	    height: 75px;
	    opacity: 0.3;
	    top:50%;
	    margin-top: -38px;
	    left:50%;
	    background: #000 url(../assets/images/iconlist.png) no-repeat;
	    display: none;
	    z-index: 20;
	}
	.banner:hover .cut {
	    display: block;
	}
	.banner .cut:hover {
	    opacity: 0.5;
	    cursor: pointer;
	}
	.banner .prev {
	    margin-left:-485px;
	    background-position: 10px -275px;
	}
	.banner .next {
	    margin-left:442px;
	    background-position: 10px -335px;
	}
	.banner .indicator {
	    position: absolute;
	    width: 100%;
	    left:0;
	    bottom:10px;
	    text-align: center;
	    z-index: 20;
	}
	.banner .indicator a {
	    display: inline-block;
	    width: 14px;
	    height: 14px;
	    border-radius: 50%;
	    background: #ccc;
	    margin: 0 5px;
	}
	.banner .indicator a.cur {
	    background: #f90;
	}
	/*首页主体内容*/
	.title {
	    height: 38px;
	    border-bottom: 2px solid #ddd;
	    font-weight: lighter;
	    margin-top: 20px;
	}
	.title>span {
	    float: left;
	    min-width: 100px;
	    line-height: 38px;
	    text-align: center;
	    font-size: 18px;
	    border-bottom: 2px solid #57bc4c;
	}
	.title>a {
	    float: right;
	    font-size: 14px;
	    color: #999;
	    margin-top:12px;
	}
	.title>a:hover {
	    color: #f60;
	}
	/*课程列表*/
	.course>li {
	    float: left;
	    margin: 20px 40px 0 0;
	}
	.course>li:nth-child(4n) {
	    margin-right:0;
	}
	.course>li>a,.course>li>a>img,.course>li>p,.course>li>strong {
	    display: block;
	}
	.course>li>a.a_img {
	    overflow: hidden;
	}
	.course>li>a>img {
	    transition: all .5s;
	}
	.course>li:hover img {
	    transform:scale(1.1,1.1) ;
	}
	.course>li>a.a_text {
	    font-size: 14px;
	    line-height: 18px;
	    margin-top: 10px;
	}
	.course>li>p {
	    color: #999;
	}
	.course>li>strong {
	    font-size: 16px;
	    color: #f60;
	    font-weight: bold;
	}
	/*名师堂*/
	.ind_teacher {
	    margin-top: 20px;
	}
	.ind_teacher>li {
	    float: left;
	    margin-right: 25px;
	    text-align: center;
	}
	.ind_teacher>li:last-child {
	    margin-right: 0;
	}
	.ind_teacher>li>a,.ind_teacher>li>a>img,.ind_teacher>li>span {
	    display: block;
	}
	.ind_teacher>li>p {
	    font-size: 14px;
	    line-height: 20px;
	    margin-top: 8px;
	}
	.ind_teacher>li>span {
	    color: #999;
	}

</style>
