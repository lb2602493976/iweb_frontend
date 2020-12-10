// 整个SPA应用的打包入口文件
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// 此处可以放置的内容:全局的基础性CSS
import './assets/css/common.css' 

  
	// 此处可以放置的内容2:全局配置
Vue.config.productionTip = false

// 此处可以放置的内容3:全局对象Vue的
// String.prototype.xxx
// axios.defaults.baseURL="http://myweb.applinzi.com"  //异步请求基础地址  新浪云地址
axios.defaults.baseURL=''   //测试接口
axios.defaults.headers.post['Content-Type']='application/json'  //所有POST请求内容类型
axios.defaults.withCredentials=true  //axios解决跨域session 让异步请求携带身份认证信息(sid)
// vue自定义扩展属性 都以$开头
Vue.prototype.$http=axios  //Vue.js推荐自定义的扩展属性名以$开头

// 此处可以放置的内容4：全局Vue.js工具,例如过滤器(filter) {{123123231232|date}}
Vue.filter('currency',(value)=>{
	// 把1234转换为'￥1234.00'形式
	if(value){  //需要转换的数据 如果没提供,无需转换
		let n=Number(value)
		return '¥'+n.toFixed(2)
	}
	
})

new Vue({
	data:{},
  router,
  store,
  render: h => h(App)
}).$mount('#app')
