import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Index,
		meta:{  //路由的元数据——其中指定任意的数据
			title:'首页——iWeb在线课堂'
		}
  },
  {
    path: '/address',
    // 懒加载 延迟加载
    component: () => import('../views/Address.vue'),
		meta:{  //路由的元数据——其中指定任意的数据
			title:'校区列表——iWeb在线课堂'
		}
  },
	{
	  path: '/cart',
	  // 懒加载 延迟加载
	  component: () => import('../views/Cart.vue'),
		meta:{  //路由的元数据——其中指定任意的数据
			title:'购物车列表——iWeb在线课堂'
		}
	},
	{
	  path: '/course',
	  // 懒加载 延迟加载
	  component: () => import('../views/Course.vue'),
		meta:{  //路由的元数据——其中指定任意的数据
			title:'课程列表——iWeb在线课堂'
		}
	},
	{
	  path: '/course-detail/:cid',
	  // 懒加载 延迟加载
	  component: () => import('../views/CourseDetail.vue'),
		meta:{  //路由的元数据——其中指定任意的数据
			title:'课程详情——iWeb在线课堂'
		}
	},
	{
	  path: '/login',
	  // 懒加载 延迟加载
	  component: () => import('../views/Login.vue'),
		meta:{  //路由的元数据——其中指定任意的数据
			title:'登录——iWeb在线课堂'
		}
	},
	{
	  path: '/order',
	  // 懒加载 延迟加载
	  component: () => import('../views/Order.vue'),
		meta:{  //路由的元数据——其中指定任意的数据
			title:'订单列表——iWeb在线课堂'
		}
	},
	{
	  path: '/register',
	  // 懒加载 延迟加载
	  component: () => import('../views/Register.vue'),
		meta:{  //路由的元数据——其中指定任意的数据
			title:'注册列表——iWeb在线课堂'
		}
	},
	{
	  path: '/teachers',
	  // 懒加载 延迟加载
	  component: () => import('../views/Teachers.vue'),
		meta:{  //路由的元数据——其中指定任意的数据
			title:'讲师列表——iWeb在线课堂'
		}
	},
	{
	  path: '*',
	  // 懒加载 延迟加载
	  component: () => import('../views/PageNotFound.vue'),
		meta:{  //路由的元数据——其中指定任意的数据
			title:'页面没有找到——iWeb在线课堂'
		}
	},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 此处可以声明全局的前置路由数位/全局后置路由守卫
// 声明全局路由守卫——在客户端访问任意一个路由时改变页面的标题 (document.title)
router.beforeEach((to,from,next)=>{
	if(to.meta && to.meta.title){  //修改index.html中页面中title,值变成即将跳转到的路由组件meta.title组件
		document.title=to.meta.title
	}
	//守卫放行,继续执行后续路由中的代码
	next()
})
export default router
