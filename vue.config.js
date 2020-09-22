/*
vue.config.js是整个Vue.js脚手架项目的基础配置文件
*/
module.exports={
	// baseUrl:'', CLI3.3开始就被publicPath替代
	publicPath:'/',   //为index.html中BASE_URL变量赋值
	outputDir:'dist',   //运行npm run build之后项目打包得到的文件
	assetsDir:'',  			//运行npm run build之后项目打包得到的静态文件输出目录
	indexPath:'index.html',//运行npm run build之后项目打包得到的index.html文件输出文件名
	pages: {
	    index: {
	      // entry for the page
	      entry: 'src/main.js',  //当前SPA打包入口文件
	      // the source template
	      template: 'public/index.html',  //当前SPA打包的模板文件
				filename: 'index.html',    //模板文件输出目标文件名
				title: '学子商城',   //index.html中变量<%= htmlWebpackPlugin.options.title %>中
	    },
			// admin:{
				
			// }
	    // subpage: 'src/subpage/main.js'
	  }

}