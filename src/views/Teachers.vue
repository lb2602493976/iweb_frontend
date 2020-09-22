<template>
  <div class="">
		<iw-header></iw-header>
    <!-- 面包屑 -->
    <iw-breadcrumb>&gt;校区</iw-breadcrumb>
    <!--主体内容-->
    <article class="container">
        <h2 class="title2">金牌讲师</h2>
        <section class="teacher_list">
            <ul>
                <li class="clearfloat" v-for="(item,index) of teachers">
                    <img :src="require('../assets/'+item.tpic)" alt=""/>
                    <div>
                        <h3>{{item.tname}}<span>{{item.maincourse}}</span></h3>
                        <dl>
                            <dt>工作经历：</dt>
                            <dd>{{item.experience}}</dd>
                        </dl>
                        <dl>
                            <dt>授课风格：</dt>
                            <dd>{{item.style}}</dd>
                        </dl>
                    </div>
                </li>
                <!-- <li class="clearfloat">
                    <img src="img-teacher/lwh.jpg" alt=""/>
                    <div>
                        <h3>李文华<span>HTTP&SERVER讲师</span></h3>
                        <dl>
                            <dt>工作经历：</dt>
                            <dd>美国PMP认证高级项目经理，微软认证解决方案开发专家。先后在中软国际、中国搜索、太极计算机担任高级开发工程师，架构师，项目经理。曾担任中央外汇管理中心、中国石油、二炮工程研究院、首都国际机场技术咨询顾问。</dd>
                        </dl>
                        <dl>
                            <dt>授课风格：</dt>
                            <dd>一切从实际项目出发，快速入门，学以致用。讲课极富激情，语言表达精准，有感染力。案例丰富、直观，步骤细致，清晰。注重从学习到实际工作的快速转化。</dd>
                        </dl>
                    </div>
                </li>
                <li class="clearfloat">
                    <img src="img-teacher/zx.jpg" alt=""/>
                    <div>
                        <h3>赵旭<span>Web开发讲师</span></h3>
                        <dl>
                            <dt>工作经历：</dt>
                            <dd>达内集团web讲师， 主讲 HTML5、Jquery、 Ajax 等课程。先后在一汽启明、日本インタセクト等公司担任系统开发工程师，从事软件开发和设计工作，迄今已积累5年以上的开发及教学经验，兼具技术和教学两方面的培训能力。</dd>
                        </dl>
                        <dl>
                            <dt>授课风格：</dt>
                            <dd>教学思路严谨，课堂气氛活跃。讲解时善于运用生活当中的例子，使学员能够快速理解。着重培养学员的动手能力，奉行实践是检验真理的唯一标准，教学能力受到学员们的一致好评。</dd>
                        </dl>
                    </div>
                </li>
                <li class="clearfloat">
                    <img src="img-teacher/zzl.jpg" alt=""/>
                    <div>
                        <h3>张众磊<span>JS框架专家</span></h3>
                        <dl>
                            <dt>工作经历：</dt>
                            <dd>先后就职于国家电网、凌阳科技，并担任研发组长、项目经理，具有6年Linux平台、移动APP的开发经验，具备深厚的开发和培训功底。</dd>
                        </dl>
                        <dl>
                            <dt>授课风格：</dt>
                            <dd>善于把知识结合贴切的案例，细心、耐心的传授给每个学员；将自身的工作经验和专业的授课手段全部奉献给每个学员；将“让学员就业不再困难”视为己任和奋斗目标。达内集团JS框架专家，主讲Bootstrap、AngularJS、移动开发等课程。</dd>
                        </dl>
                    </div>
                </li> -->
            </ul>
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
				teachers:[]
			}
		},
		components:{
			'iw-header':Header,
			'iw-footer':Footer,
			'iw-breadcrumb':Breadcrumb
		},
		mounted() {
			// 获取讲师详情接口
			this.$http.get("/teacher/list?format=full").then(res=>{
				console.log(res.data)
				this.teachers=res.data
			}).catch(err=>{
				console.log(err)
			})
		}
	}
</script>

<style>
	/*名师堂*/
	.title2 {
	    border-left:3px solid #77c558;
	    padding-left: 12px;
	    line-height: 20px;
	    font-weight: lighter;
	    font-size: 18px;
	}
	.title2>a {
	    float: right;
	    font-size: 14px;
	    color: #f90;
	    text-decoration: underline;
	}
	.title2>a:hover {
	    color:#f30;
	}
	.teacher_list {
	    margin-top: 13px;
	}
	.teacher_list ul li {
	    border-top:1px dotted #ccc;
	    padding: 30px 0;
	}
	.teacher_list ul li img {
	    float: left;
	    width: 150px;
	    height: 200px;
	}
	.teacher_list ul li>div {
	    float: left;
	    margin-left: 50px;
	    width: 720px;
	}
	.teacher_list ul li>div>h3 {
	    font-size: 16px;
	    font-weight: lighter;
	    color:#f60;
	    line-height: 30px;
	}
	.teacher_list ul li>div>h3>span {
	    margin-left: 20px;
	}
	.teacher_list ul li>div>dl {
	    font-size: 13px;
	    margin-top: 12px;
	}
	.teacher_list ul li>div>dl>dd {
	    color: #888;
	}
</style>
