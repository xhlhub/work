import Vue from 'vue';
import VueRouter from "vue-router";
import qs from "qs";
import api from "@/assets/js/api.js";
import pubConf from '../config/publicConfig.js'
//import baseConf from '../config/config.js'
import store from "../vuex/store"
/**
 * 注入路由相关信息到各个组件 
 */
//commit test
Vue.use(VueRouter);
/**
 * @param {routes} 所有路由信息的数据集合
 * 					@path：匹配的路径
 *					 @component :该路径匹配时，需要动态渲染的组件(页面)
 * 
 */
var router = new VueRouter({
	routes: [{
			path: '/',
			component: function(resolve) {
				 require(["../pages/index.vue"], resolve)
			},
		}, {
			path: '/bossOrg',
			name: "bossOrg",
			component: function(resolve) {
				require(["../pages/main/bossOrg/bossOrgList.vue"], resolve)

			},
		}

	],
});
router.beforeEach((to, from, next) => {
	//解决 页签状态刷新保留上次页签
//	if(window.loginState){
//		window.loginState = false;
//		router.push({ path: '/' });
//		return 
//	}
	var falt = false;
	var dicTypeName = pubConf.dicTypeName[to.name];
	if(to.query.module)
		window.btnUrl = window.baseUrl + "getOperationInfoByModuleValue?moduleValue=" + to.query.module
	if(localStorage.getItem(to.name) || to.path == "/"|| !dicTypeName)
		falt = true
	else
		falt = false
	window.iframeSrc = to.query.outUrl + "?module=" + to.query.module
	//只有当字典数据不存在或者是字典数据存在但是路由的模块没有字典的时候
	if(!falt) {
		api.getDicData({
			dicUrl: window.baseUrl + '/getBossDicItemMapByTypeCodes',
			dicType: dicTypeName,
			callback: function(dicData) {
				if(dicData) {
					localStorage.setItem(to.name, JSON.stringify(dicData))
					if(to.path != "/");
					store.commit('setComponent', {
						component: router.getMatchedComponents(to.path)[0],
						tabName: to.path,
						title: to.query.name,
					})
				}				
				if(to.params.chain == 1) {
					next("/iframe")
				} else {
					next()
				}
			}
		});
	} else {
		if(to.path != "/")
					store.commit('setComponent', {
						component: router.getMatchedComponents(to.path)[0],
						tabName: to.path,
						title: to.query.name,
					})
		if(to.params.chain == 1) {
			next("/iframe")
		} else {
			next()
		}
	}

})

export default router