<template>
  <div class="">
		<iw-header></iw-header>
    <!--主体内容-->
    <section class="login_box container">
        <h2 class="title2">
					<router-link to="/register">新用户注册</router-link><span>用户登录</span></h2>
        <div class="clearfloat">
            <div class="login">
                <dl class="clearfloat">
                    <dt><span  class="tips" :style="{display:msgShow}">{{unameMsg}}</span>用户名：</dt>
                    <dd>
                        <input type="text" v-model="uname" @blur="checkUname" placeholder="邮箱/手机号"/>
                        <em class="icon_user"></em>
                        <i  class="icon_error" :style="{display:errorShow}"></i>
                    </dd>
                </dl>
                <dl>
                    <dt><span class="tips" :style="{display:msg1Show}">{{upwdMsg}}</span>密码：</dt>
                    <dd>
                        <input type="password" v-model="upwd" @blur="checkUpwd" placeholder="密码"/>
                        <em class="icon_pwd"></em>
                        <i class="icon_error" :style="{display:error1Show}"></i>
                    </dd>
                </dl>
                <p class="clearfloat">
                    <label>
                        <input type="checkbox"/>
                        <span>自动登录</span>
                    </label>
                    <button type="button" @click="doLogin">立 即 登 录</button>
                </p>
    
            </div>
            <em class="linebetween"></em>
            <p class="qrcode">
                <i></i>
                <span>扫码登录</span>
            </p>
        </div>
    </section>
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
				uname:'',
				msgShow:'none',
				errorShow:'none',
				unameMsg:'',
				upwd:'',
				msg1Show:'none',
				error1Show:'none',
				upwdMsg:'',
			}
		},
		methods:{
			// 验证用户名是否为空
			checkUname(){
				if(!this.uname){
					this.msgShow='block';
					this.errorShow='block';
					this.unameMsg="用户名/邮箱不能为空";
				}else{
					this.msgShow='none';
					this.errorShow='none';
					console.log(this.uname)
				}
				},
				// 验证密码是否为空
			checkUpwd(){
				if(!this.upwd){
					this.msg1Show='block';
					this.error1Show='block';
					this.upwdMsg="用户名/邮箱不能为空";
				}else{
					this.msg1Show='none';
					this.error1Show='none';
					console.log(this.upwd)
				}
			},
			// 登录按钮
			doLogin(){
				let data={
					uname:this.uname,
					upwd:this.upwd,
				}
				this.$http.post('/user/login',data).then(res=>{
					if(res.data.code===200){
						alert('登录成功!点击确定按钮跳转到首页')
						// $store.state.userInfo.uid=res.data.userInfo.uid
						// this.$router.push({name:'/',params:{$store.state.userInfo.uid:res.data.userInfo.uid}})
						console.log(res.data)
					}else{
						alert('登录失败'+res.data.msg)
					}
					// console.log(res.data)
				}).catch(err=>{
					console.log(err)
				})
			}
		},
		components:{
			'iw-header':Header,
			'iw-footer':Footer
		},
		
	}
</script>

<style>
	/*登录*/
	.login_box {
	    margin-top:40px;
	    box-shadow: 0px 0px 3px #ccc;
	    background: #fff;
	    padding: 34px 40px 70px;
	    box-sizing: border-box;
	}
	.login {
	    float: left;
	    width: 360px;
	    margin-top: 35px;
	}
	.login dl {
	    margin-bottom: 5px;
	}
	.login dl dt {
	    font-size: 16px;
	    color:#555;
	    line-height: 40px;
	}
	.login .tips {
	    font-size: 12px;
	    color:#f00;
	    float: right;
	    display: none;
	}
	
	.login dl dd {
	    position: relative;
	}
	.login dl dd input {
	    box-sizing: border-box;
	    width: 100%;
	    display: block;
	    padding-left: 45px;
	    height:38px;
	    border:1px solid #c6efc2;
	}
	.login dl dd em {
	    position: absolute;
	    top: 1px;
	    left:1px;
	    width: 36px;
	    height: 36px;
	    background: #f5f5f5 url(../assets/images/iconlist.png) no-repeat;
	    border-right: 1px solid #c6efc2;
	    border-radius: 2px 0 0 2px;
	}
	.login dl dd em.icon_user {
	    background-position: 6px -584px;
	}
	.login dl dd em.icon_pwd {
	    background-position: 9px -622px;
	}
	.login dl dd i {
	    position: absolute;
	    width:20px;
	    height:14px;
	    background:url(../assets/images/iconlist.png) no-repeat;
	    right:6px;
	    top:12px;
	    display: none;
	}
	.login dl dd i.icon_error {
	    background-position:0 -670px;
	}
	.login p {
	    line-height: 38px;
	    margin-top: 45px;
	}
	.login p label {
	    float: left;
	}
	.login p input {
	    vertical-align: middle;
	}
	.login p span {
	    font-size: 14px;
	    color:#666;
	    display: inline-block;
	    vertical-align: middle;
	}
	.login p button {
	    float: right;
	    outline: none;
	    width: 160px;
	    height:38px;
	    border:0;
	    background: #72b134;
	    color:#fff;
	    font-size: 18px;
	}
	.login button:hover {
	    background: #7dbc3f;
	}
	.login button:active {
	    background: #85c447;
	}
	.login_box .linebetween {
	    float: left;
	    width: 9px;
	    height: 240px;
	    background: url(../assets/images/line.png) no-repeat 0 0;
	    margin: 40px 0 0 166px;
	}
	.login_box .qrcode {
	    float: left;
	    margin: 75px 0 0 132px;
	    text-align: center;
	    font-size: 14px;
	}
	.login_box .qrcode i{
	    display: block;
	    width: 129px;
	    height: 129px;
	    background: url(../assets/images/qrcode.png) no-repeat 0 0;
			background-size:cover;
	    margin-bottom: 10px;
	}
</style>
