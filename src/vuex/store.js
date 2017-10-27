import Vue from "vue"
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		tabsInfo: {
			editableTabsValue: '',
			editableTabs: [],
			tabIndex:-1
		},
	},
	mutations: {
		changeActive(state, routePath) {
			var tmpIndex = 0;
			state.tabsInfo.editableTabs.forEach((item,index)=>{
				if(item.name ==routePath)
				tmpIndex=index				
			})
			state.tabsInfo.tabIndex = tmpIndex
			state.tabsInfo.editableTabsValue =routePath
		},
		activeTab(state,treeNode){
			//console.log(treeNode)
			state.tabsInfo.editableTabsValue = treeNode.name
		},
		setComponent(state,matchCom){
			var exist = false
			var currentIndex = 0
			for(var i = 0; i < state.tabsInfo.editableTabs.length; i++) {
				if(state.tabsInfo.editableTabs[i].name==matchCom.tabName)
				{
					exist = true
					currentIndex = i
					break;
				}
			}
			if(!exist) {				
				if(state.tabsInfo.editableTabs.length)
				state.tabsInfo.tabIndex = state.tabsInfo.editableTabs.length
				else
				state.tabsInfo.tabIndex = 0
				state.tabsInfo.editableTabs.push({
					component:matchCom.component,
					name:matchCom.tabName,
					title:matchCom.title
				})
			}else{
				//state.tabsInfo.editableTabsValue = matchCom.tabName
				state.tabsInfo.tabIndex = currentIndex
			}
			state.tabsInfo.editableTabsValue = matchCom.tabName
		},
		addTab(state, totalInfo) {
			/*var tabItem = {
				title: totalInfo.tabInfo.name,
				name: totalInfo.tabInfo.url
			}
			var exist = false*/
		/*	for(var i = 0; i < state.tabsInfo.editableTabs.length; i++) {
				if(state.tabsInfo.editableTabs[i].name==totalInfo.tabInfo.url)
				{
					exist = true
					break;
					state.tabsInfo.editableTabs[i].title = totalInfo.tabInfo.name
				}
			}*/
			
		},
		removeTag(index) {

		}
	},
	getters: {
		getRouteInfo(state) {

		}
	}

});