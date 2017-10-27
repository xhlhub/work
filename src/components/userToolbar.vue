<template>
	<div class="user-toolbar">
		<el-row>
			<el-col :span="10">
				<div class="personPic">
					<div class="personPicBox" v-if="userInfo.userPic">
						<img :src="userInfo.userPic" alt="" />

					</div>
					<div v-else class="personPicBox">
						<img src="../assets/img/img-per@2x.png" alt="" />
					</div>
				</div>
				<div class="personInfo">
					<h4>Hi，<span>{{userInfo.userName}}</span>，欢迎回来！</h4>
					<h4>{{userInfo.orgName}}</h4>
					<p>{{userInfo.currDate}}</p>
				</div>
			</el-col>
			<el-col :span="14">
				<div class="personMange clearfix">
					<dl>
						<a @click="openDialog">
							<dt>
			  				<span class="iconfont">&#xe7d4;</span>
			  			</dt>
							<dd>密码管理</dd>
						</a>
					</dl>
					<dl @click="getInfo">
						<router-link  :to="{path:'bossTenantInformationImg',query: {chain:1,name:'定制信息'}}">
							<dt><span class="iconfont">&#xe7b4;</span></dt>
							<dd>定制信息</dd>
							</router-link>
					</dl>
					<dl @click="getHelpCenter">
							<router-link  :to="{path:'bossHelp',query: {chain:1,name:'帮助中心'}}">
							<dt><span class="iconfont">&#xe7b0;</span></dt>
							<dd>帮助中心</dd>
						</router-link>
					</dl>
				</div>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	import router from '../router'
	import bus from "@/assets/js/bus"

	export default {
		name: "userToolbar",
		props: ['userInfoUrl'],
		data() {
			return {
				userInfo: {},
			}
		},
		computed: {

		},
		methods: {
			getHelpCenter() {
				var arr = ["帮助中心"]
				bus.bus.$emit("setRoute", arr)
			},
			openDialog() {

				this.$emit("open-dialog")
			},
			getInfo() {
				var arr = ["租户管理", "我的定制信息"]
				bus.bus.$emit("setRoute", arr)
			}
		},
		created() {
			axios.get(this.userInfoUrl).then((response) => {
				this.userInfo = response.data.userInfo;
			});
		}
	}
</script>

<style type="text/css">
	.user-toolbar {
		background: #fff;
		padding: 15px;
		height: 130px;
	}
	
	.user-toolbar .el-row {
		margin-top: 20px;
	}
	
	.personPic {
		float: left;
		width: 30%;
	}
	
	.personInfo {
		float: left;
		width: 70%;
	}
	
	.personInfo h4 {
		font-size: 16px;
		color: #393C3E;
		margin-bottom: 4px;
	}
	
	.personPicBox {
		width: 84px;
		height: 84px;
		border-radius: 42px;
		overflow: hidden;
		margin: 0 auto;
	}
	
	.personPicBox img {
		width: 84px;
		height: 84px;
	}
	
	.personInfo h4 {
		line-height: 26px;
		font-weight: 400;
	}
	
	.personInfo h5 {
		line-height: 30px;
		font-size: 14px;
		/*margin: 20px 0;*/
	}
	
	.personInfo p {
		color: #71787E;
		font-size: 12px;
		margin-top: 10px;
	}
	
	.user-toolbar .el-col-10 {
		border-right: 1px dashed #dee5e7;
	}
	
	.personMange {
		padding-top: 10px;
	}
	
	.personMange dl {
		border: 1px solid #F7B2B7;
		background: #FEF8F8;
		float: left;
		width: 70px;
		height: 70px;
		margin-left: 100px;
		border-radius: 4px;
		text-align: center;
	}
	
	.personMange dd,
	.personMange span {
		color: #E60012;
	}
	
	.personMange dl:hover {
		border-color: #E60012;
	}
	
	.personMange dl dt {
		line-height: 40px;
		/*padding-top: 10px;*/
	}
	
	.personMange dl dd {
		line-height: 20px;
	}
</style>