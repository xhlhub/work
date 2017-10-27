<template>
	<div id="app">
		<Head  :headInfoUrl="headInfoUrl" @set-route="setRoute" :right-icon="true"></Head>
		<div class="main" :class="{'change-right':showLeft}">
			<div class="nav">
				<nv-left @changeSate="getActiveState" @hideMenu="hideTitle" @show-index="showIndex" @set-route="setRoute"></nv-left>
			</div>
			<index-view v-show="indexShow"></index-view>
			<div class="content" v-show="!indexShow">
				<div style="min-width: 1000px;">
					<el-tabs v-model="editableTabsValue" :active-name="editableTabsValue" type="card"  @tab-click="clickTab" @tab-remove="removeTab">
						<el-tab-pane :key="item.name" v-for="(item, index) in editableTabs" :label="item.title" :name="item.name" closable>
						</el-tab-pane>
					</el-tabs>
					<component :is="item.component" v-for="(item,index) in editableTabs" :key="item.name" v-show="index==getIndex"></component>
				</div>
			</div>

		</div>

	</div>
</template>

<script>
	import bus from "./assets/js/bus"
	import indexView from "./pages/index"
	import store from "./vuex/store.js"

	export default {
		name: 'app',
		components: {
			indexView
		},
		/*
		 	组件渲染完成时的回调
		 	监听setRoute，当点击菜单时设置完整的菜单路径，显示在右侧
		 * */
		mounted() {

			var _this = this
			//var tmparr = []
			bus.bus.$on("setRoute", function(menu) {
				_this.menu = menu
				_this.indexShow = false
			})
			bus.bus.$on("setPage", function(state, btnName) {
				if(state)
					_this.menu.push(btnName)
				else
					_this.menu.pop()
					_this.indexShow = false
			})
		},
		data() {
			return {
				headInfoUrl: window.BASEURL + "/getLoginInfo",
				indexShow: false,
				showLeft: false,
				index: 0,
				menu: [""], 
				activeTab: "/apple/color/red",
				editableTabs: store.state.tabsInfo.editableTabs,
			}
		},
		computed: {
			editableTabsValue() {
				return store.state.tabsInfo.editableTabsValue;
			},
			getIndex(){
				return store.state.tabsInfo.tabIndex
			},
			/*
			 	右侧完整菜单路径的面包屑数据的信息
			 * */
			getMenuList() {
				return this.menu
			}
		},
		methods: {
			setRoute(menu){
				this.menu = menu
				this.indexShow = false
			},
			showIndex(){
				this.indexShow = true
			},
			hideTitle(state) {
				//console.log(state)
				this.showLeft = state
			},
			clickTab(tab) {
				store.commit('changeActive',tab.name)
				//console.log(tab.name)
			},
			/*
			 	tab切换时的函数(目前由于是面包屑显示，暂时用不到)
			 * */
			removeTab(targetName) {
				let tabs = store.state.tabsInfo.editableTabs
				let activeName = store.state.tabsInfo.editableTabsValue;
				if(activeName === targetName) {
					tabs.forEach((tab, index) => {
						if(tab.name === targetName) {
							let nextTab = tabs[index + 1] || tabs[index - 1];
							if(nextTab) {
								activeName = nextTab.name;
								//this.$router.push(activeName)
								store.state.tabsInfo.editableTabs.splice(index, 1)
								if( tabs[index + 1])
								store.state.tabsInfo.tabIndex = index
								else if(index==0)
								store.state.tabsInfo.tabIndex = 0
								else
								store.state.tabsInfo.tabIndex = index-1
							} else {
								this.$router.push({path:""})
								store.state.tabsInfo.editableTabs.splice(index, 1)
								
								this.indexShow = true
							}
						}
					});
					store.state.tabsInfo.editableTabsValue = activeName;
				} else {
					tabs.forEach((tab, index) => {
						if(tab.name === targetName) {							
							store.state.tabsInfo.editableTabs.splice(index, 1)
							store.state.tabsInfo.tabIndex = store.state.tabsInfo.tabIndex?store.state.tabsInfo.tabIndex-1:0
						}
					})
				}
				tabs.forEach((tab, index) => {
						if(tab.name === activeName) {							
							this.$router.push({path:tab.name,query:{name:tab.title}})
						}
					})
				//this.$router.push(window.tmpHash.substring(1))
			
			},
			/*
			 	动态改变点击的一级菜单，用来显示或者隐藏二级菜单
			 * */
			getActiveState(a, b) {
				//	console.log(a,b)
				this.activeTab = a
			}
		}
	}
</script>

<style>
	li {
		list-style: none;
	}
	
	* {
		margin: 0;
		padding: 0;
	}
	
	.main {
		position: absolute;
		top: 62px;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 20px;
		background-color: rgba(239, 243, 246, 1);
	}
	
	.change-right .content {
		left: 90px;
	}
	
	.content-title {
		height: 30px;
		padding: 10px 0px 0;
		margin-bottom: 10px;
		border-bottom: 1px solid #E6EAEE;
	}
	
	.content {
		transition: left 0.2s;
		width: auto;
		left: 220px;
		position: absolute;
		top: 20px;
		bottom: 20px;
		right: 20px;
		overflow: auto;
		border-radius: 4px;
		background: #fff;
		padding: 10px 20px 0px;
	}
	
	.pageContent {
		padding: 10px 20px 0px;
		background: #fff;
		border: 1px solid rgb(230, 234, 238);
		height: 100%;
		min-width: 1080px;
		box-sizing: border-box;
	}
	
	.route-index {
		width: 150px;
		height: 100%;
		float: left;
		background-color: #EAEDF1;
	}
	
	.fade-enter-active,
	.fade-leave-active {
		transition: all .2s;
	}
	
	.fade-enter,
	.fade-leave-active {
		opacity: 0;
	}
	
	.is-error .el-input::after {
		content: "x";
		color: #fff;
		display: block;
		position: absolute;
		right: 8px;
		line-height: 16px;
		text-align: center;
		height: 16px;
		top: 10px;
		width: 16px;
		border-radius: 16px;
		font-family: arial;
		font-size: 12px;
		font-weight: bold;
		background: #E10012;
	}
</style>