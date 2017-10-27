// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-default/index.css'
import "./assets/fonts/iconfont.css"
import "./assets/css/fn-common.css"
import "./assets/css/element-reset.css"
import ElementUI from 'element-ui'
import yonyouUi from "yonyou-ui"
import api from "@/assets/js/api.js";
import plugins from "@/assets/js/plugin.js";

Vue.config.productionTip = false
Vue.prototype.BASEURL = window.baseUrl
Vue.prototype.MISCURL = window.miscUrl
window.MISCURL = window.miscUrl;
window.BASEURL = window.baseUrl;

window.ORDER_BASEURL=window.orderConfig;
window.MAIN_BASEURL=window.mainConfig;
window.USERINFO_BASEURL=window.userinfoConfig;
window.WARES_BASEURL=window.waresConfig;

window.INDEXURL = window.indexUrl;
window.LOGINURL = window.loginUrl;
window.userInfo = {};
//解决 页签状态刷新保留上次页签
window.loginState = true;
window.bus = new Vue()
Vue.use(ElementUI)
Vue.use(yonyouUi)
localStorage.clear()
/* eslint-disable no-new */
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
// Add a request interceptor
axios.interceptors.request.use(function(config) {
	// Do something before request is sent
	if(config.method =="get"){
		if(config.url.indexOf("?")==-1)
			config.url = config.url+"?time="+new Date().getTime()
		else
			config.url = config.url+"&time="+new Date().getTime()
	}
	
	return config;
}, function(error) {
	// Do something with request error
	return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function(response) {
	var url = response.headers['ajaxurl'];
	//用户存储租户登陆keyStr的值的cookie的名称
	var cookieName = "keyStr";
	if(url) {
		var param = "";
		var loca = window.location;
		var locaHref = loca.href;
		if(locaHref.indexOf("?") > -1) {
			param = locaHref.substring(locaHref.indexOf("?"), locaHref.length);
			//设置租户的key有效期为1天
			api.setCookie(cookieName,param,1);
		}else{
			//从cookie中取到租户key
			param = api.getCookie(cookieName);
		}
		param = param ? param : "";
		//截取链接
		url = url.substring(0, url.indexOf("service"));
		//拼接登陆地址
		url = url + "service=" + window.LOGINURL + param;
		//跳转登陆页面
		window.location.href = url;
		return;
	}
	return response;
}, function(error) {

	return Promise.reject(error);
});

new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
})