<template>
	<div class="">
		<iw-header></iw-header>
		<!--主体内容-->
		<section class="register_box container">
			<div class="register">
				<h2>新用户注册</h2>
				<ul>
					<li>
						<span>邮箱：</span>
						<input type="text" v-model="uname" @blur="checkUname" placeholder="请输入邮箱名" />
						<em v-show="unameMsg" :class="unameIconClass"></em>
						<i>{{unameMsg}}</i>
					</li>
					<li>
						<span>手机号：</span>
						<input type="text" v-model="phone" @blur="checkPhone" placeholder="请输入手机号" />
						<em v-show="phoneMsg" :class="phoneIconClass"></em>
						<i>{{phoneMsg}}</i>
					</li>
					<li>
						<span>密码：</span>
						<input type="password" v-model="upwd" @blur="checkUpwd" placeholder="请输入密码" />
						<em v-show="upwdMsg" :class="upwdIconClass"></em>
						<i>{{upwdMsg}}</i>
					</li>
					<li>
						<span>重复密码：</span>
						<input type="password" v-model="upwd2" @blur="checkUpwd2" placeholder="请重复输入密码" />
						<em v-show="upwd2Msg" :class="upwd2IconClass"></em>
						<i>{{upwd2Msg}}</i>
					</li>
					<li>
						<span>验证码：</span>
						<input type="text" v-model="captcha" class="inp_yzm" placeholder="请输入验证码" />
						<!-- <img src="http://127.0.0.1:9090/user/register/captcha" /> -->
						<img :src="captchaURL" />
						<strong class="icon_refresh" @click="refreshCaptcha"></strong>
					</li>
					<li class="li_checkbox"><label>
							<input type="checkbox" checked />
							<span>我已阅读并同意用户注册协议</span>
						</label>
					</li>
					<li class="li_btn">
						<button type="button" @click="doRegister">提交注册</button>
					</li>
				</ul>
			</div>
		</section>
		<iw-footer></iw-footer>
	</div>
</template>

<script>
	import Header from '@/components/Header.vue'
	import Footer from '@/components/Footer.vue'

	export default {
		data: () => {
			return {
				//captchaURL: this.$http.defaults.baseURL + '/user/register/captcha'
				//对象的属性中，不能使用另一个属性的值进行拼接——不能使用this
				randNum: Math.random(),	//为了拼接一个随机的查询字符串而准备的随机数
				uname: '',		//用户名（邮箱）
				unameIconClass: {'icon_error':true, 'icon_ok':false},
				unameMsg: '',
				phone: '',		//手机号码
				phoneIconClass:{'icon_error':true, 'icon_ok':false},
				phoneMsg:'',
				upwd: '',				//密码
				upwdIconClass:{'icon_error':true, 'icon_ok':false},
				upwdMsg:'',
				upwd2:'',				//重复密码
				upwd2IconClass:{'icon_error':true, 'icon_ok':false},
				upwd2Msg:'',
				captcha: '',			//验证码
			}
		},
		computed: {
			captchaURL(){
				return  this.$http.defaults.baseURL+'/user/register/captcha?'+this.randNum
			}
		},
		methods: {
			refreshCaptcha(){
				this.captchaURL = this.$http.defaults.baseURL + '/user/register/captcha'
				//错误①：计算属性不能修改		错误②：验证码图片的地址与之前的值一样，浏览器不会重新刷新图片
				/*提示：浏览器认为下面的两个地址是不同的：
				  http://127.0.0.1:9090/user/register/captcha?0.123
				  http://127.0.0.1:9090/user/register/captcha?0.456  
				*/
			   this.randNum = Math.random()		//修改随机小数为一个新值
			},
			// 验证邮箱
			checkUname(){
				let regEmail= /^\w+@\w+\.\w+(\.\w+)?$/;
				if(!this.uname){	//邮箱为空时
					this.unameIconClass.icon_error = true
					this.unameIconClass.icon_ok = false
					this.unameMsg = "请输入您的注册邮箱" 
				}else if(!regEmail.test(this.uname)){
					this.unameIconClass.icon_error = true
					this.unameIconClass.icon_ok = false
					this.unameMsg = "请输入正确的邮箱格式"
				}else {
					this.emailExist(this.uname).then(res=>{
						if(res.data.code===200){
							this.unameIconClass.icon_error = true
							this.unameIconClass.icon_ok = false
							this.unameMsg = "此邮箱已被其他用户注册"
						}else {
							this.unameIconClass.icon_error = false
							this.unameIconClass.icon_ok = true
							this.unameMsg = '  ' //此处的消息为空格，不是空白字符串
						}
					})
				}
			},
			emailExist(n){	//发起异步请求验证用户名是否已被占用
				return  this.$http.get('/user/check_uname?uname='+n)
			},
			// 验证手机号
			checkPhone(){
				let regPhone=/^((\+86|0086)\s+)?1[3-8]\d{9}$/
				if(!this.phone){	//手机号为空时
					this.phoneIconClass.icon_error = true
					this.phoneIconClass.icon_ok = false
					this.phoneMsg = "请输入您的手机号" 
				}else if(!regPhone.test(this.phone)){
					this.phoneIconClass.icon_error = true
					this.phoneIconClass.icon_ok = false
					this.phoneMsg = "请输入正确的手机号"
				}else {
					this.phoneExist(this.phone).then(res=>{
						if(res.data.code===200){
							this.phoneIconClass.icon_error = true
							this.phoneIconClass.icon_ok = false
							this.phoneMsg = "此手机号已被其他用户注册"
						}else {
							this.phoneIconClass.icon_error = false
							this.phoneIconClass.icon_ok = true
							this.phoneMsg = '  ' //此处的消息为空格，不是空白字符串
						}
					})
				}
			},
			phoneExist(n){	//发起异步请求验证手机号是否已被占用
				return  this.$http.get('/user/check_phone?phone='+n)
			},
			// 设置密码
			checkUpwd(){
				// 0宽断言
				let regUpwd=/^(?![0-9a-z]+$)(?![A-Za-z]+$)[0-9A-Za-z]{6,}$/
				if(!this.upwd){
					this.upwdIconClass.icon_error=true
					this.upwdIconClass.icon_ok=false
					this.upwdMsg='密码不能为空'
				}else if(regUpwd.test(this.upwd)){
					this.upwdIconClass.icon_error=false
					this.upwdIconClass.icon_ok=true
					this.upwdMsg=' '   //空格刷新
				}else{
					this.upwdIconClass.icon_error=true
					this.upwdIconClass.icon_ok=false
					this.upwdMsg = "密码至少含有一位大写字母,至少含有一位数字,不能含有特殊字符,6位以上)"
				}
			},
			// 验证重复密码
			checkUpwd2(){
				if(this.upwd2!==this.upwd){
					this.upwd2IconClass.icon_error=true
					this.upwd2IconClass.icon_ok=false
					this.upwd2Msg='两次密码不一致,请重新输入'
				}else if(!this.upwd2){
					this.upwd2IconClass.icon_error=true
					this.upwd2IconClass.icon_ok=false
					this.upwd2Msg='密码不能为空'
				}else{
					this.upwd2IconClass.icon_error=false
					this.upwd2IconClass.icon_ok=true
					this.upwd2Msg=' '  //空格
				}
			},
			doRegister(){
				let data = {
					uname: this.uname,
					upwd: this.upwd,
					phone: this.phone,
					captcha: this.captcha
				}
				console.log(this.captcha)
				//异步请求服务器端“用户注册API”
				this.$http.post('/user/register', data).then(res=>{
					if(res.data.code===200){
						alert('注册成功！点击确定按钮后将跳转到登录页。')
						this.$router.push('/login')	//执行路由跳转
					}else {
						alert('注册失败！错误原因：'+res.data.msg)
					}
				}).catch(err=>{
					console.log(err)
				})
			},
		},
		components: {
			'iw-header': Header,
			'iw-footer': Footer
		}
	}
</script>

<style>
/* mycss.css: 683~790 */
/*注册页面*/
.register_box {
    margin-top:40px;
    box-shadow: 0px 0px 3px #ccc;
    background: #fff;
    padding: 15px 0 60px;
}
.register {
    width: 800px;
    margin: 0 auto;
}
.register>h2 {
    line-height: 70px;
    border-bottom: 1px solid #ddd;
    text-align: center;
    font-size: 18px;
    color:#f90;
    font-weight: lighter;
}
.register>ul {
    margin-top: 36px;
}
.register>ul>li {
    margin-bottom: 22px;
    line-height: 40px;
    height: 40px;
}
.register>ul>li>span,.register>ul>li>input, .register>ul>li>em, .register>ul>li>i,.register>ul>li>img,.register>ul>li>strong,.register>ul>li>button {
    float: left;
}
.register>ul>li>span {
    margin-left:120px;
    width: 120px;
    text-align: right;
    font-size: 16px;
    color:#666;
}
.register>ul>li>input {
    width: 320px;
    height: 38px;
    box-sizing: border-box;
    border:1px solid #ccc;
    border-radius: 3px;
    padding: 0 10px;
}
.register>ul>li>input.inp_yzm {
    width: 160px;
}
.register>ul>li>em {
    margin:12px 6px 0;
    width:20px;
    height:14px;
    background:url(../assets/images/iconlist.png) no-repeat;
    /* display: none; */
}
.register>ul>li>em.icon_ok {
    background-position:0 -690px;
}
.register>ul>li>em.icon_error {
    background-position:0 -670px;
}
.register>ul>li>i {
    color:#f00;
    font-style: normal;
    /* display: none; */
}
.register>ul>li>img {
    margin-left: 16px;
}
.register>ul>li>strong {
    width:22px;
    height:26px;
    margin-left: 14px;
    margin-top: 5px;
    cursor: pointer;
    background:url(../assets/images/iconlist.png) 0px -710px no-repeat;
}
.register .li_checkbox {
    margin-top: 40px;
}
.register .li_checkbox label {
    margin-left:240px;
}
.register .li_checkbox input {
    vertical-align: middle;
}
.register .li_checkbox span {
    display: inline-block;
    vertical-align: middle;
}

.register button {
    outline: none;
    margin-left: 240px;
    width: 320px;
    height:38px;
    border:0;
    background: #72b134;
    color:#fff;
    font-size: 18px;
    cursor: pointer;
}
.register button:hover {
    background: #65a428;
}
.li_btn>button.disabled{
    background: #ccc;
    cursor: default;
}
</style>
