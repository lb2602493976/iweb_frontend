import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({   //Store :百货商场,存储仓库
  state: {   //状态,某一个情形下的数据 this.$store.state.xxx
		courseTypes:[],  //课程类型
		userInfo:{}   //当前登录用户信息
  },
	getters:{   //功能类似于computed属性
		
	},
  mutations: {  //变革/改变,用于修改state数据,必须是同步修改
		setCourseTypes(state,types){  //修改课程类型
			state.courseTypes=types
		},
		setUserInfo(state,info){  //修改用户登录信息
			state.userInfo=info
		}
	},
  actions: {  //动作,用于修改state数据,可以异步修改
  },
  modules: {  //state太多,可以分模块存储
  }
})
