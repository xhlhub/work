<template>
	<div id="indexView">
		<div style="min-width: 1000px;">
		<user-toolbar :userInfoUrl="userInfoUrl" @open-dialog="openDialog"></user-toolbar>
		<!--<div v-for="sys  in systemInfo">-->
		<!--<div>{{sys.systemName}},{{sys.systemPortalIconStyle}},{{sys.systemUrl}},{{sys.test}}</div>
		<!--</div>-->

		<div class="myApp">
			<div class="title-border ">
				<h5 class="clear">
					<span></span>
					<p><a href="javascript:viod(0)">
						我的应用
					</a></p>
				</h5>
			</div>
			<div class="myAppContent clear">
				<dl class="appCell clear" v-for="item in appData">
					<dt><img  class="appImg" :src="MISCURL+item.systemPortalIconStyle?MISCURL+item.systemPortalIconStyle:'../assets/img/lczx.png'"  alt="" /></dt>
					<dd class="inApp">
						<h4>{{item.systemName}}</h4>
						<p>有效期：</p>
						<div class="btn-div">
							<a :href="item.systemUrl" target="_blank">
								<el-button size="big" type="primary">进入应用</el-button>
							</a>
						</div>
					</dd>
					<dd class="tip"></dd>
				</dl>

			</div>
		</div>
		<div class="myRecomend">
			<div class="title-border ">
				<h5 class="clear">
					<span></span>
					<p><a href="javascript:viod(0)">
						{{tenantHomeName}}
					</a></p>
				</h5>
			</div>
			<div class="recomendContent">
				<ul class="licellBox">
					<li class="licell" v-for="item in recommendData">
						<a  target="_blank"  :href="'http://'+item.tenantImgUrl">
							<dl style="">
								<dt>
						            <img :src="item.tenantImgAddress">
						         </dt>
								<dd>
									<span>{{item.tenantImgName}}</span>
								</dd>
							</dl>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<el-dialog title="提示" :visible.sync="dialogVisible">
			<el-form label-position="right" label-width="160px" :model="formData" ref="form" :inline="true" :rules="rules">
				<el-row>
					<el-form-item label="原密码" prop="userPassword">
						<el-input v-model="formData.userPassword" type="password"></el-input>
					</el-form-item>

				</el-row>
				<el-row>
					<el-form-item label="新密码" prop="newPassword">
						<el-input v-model="formData.newPassword" type="password"></el-input>
					</el-form-item>
				</el-row>
				<el-row>
					<el-form-item label="确认密码" prop="confirmPassword">
						<el-input v-model="formData.confirmPassword" type="password"></el-input>
					</el-form-item>
				</el-row>
			</el-form>
			<span slot="footer" class="dialog-footer">
    <el-button @click="cancel">取 消</el-button>
    <el-button type="primary" @click="saveData">保存</el-button>
  </span>
		</el-dialog>
</div>
	</div>
</template>

<script>
	/*
	 * 引入组件以及js模块
	 * 组件使用说明参考具体组件
	 */
	import userToolbar from "../components/userToolbar";
	import TmpData from "@/assets/model/bossUserPwdReset/bossUserPwdResetModel.js"
	import api from "@/assets/js/api.js"
		import qs from "qs"

	export default {
		name: "index",
		components: {
			userToolbar
		},
		data() {
			return {
				dialogVisible: false,
				formData: new TmpData(),
				emptyData: new TmpData(),
				appUrl: this.BASEURL + "/bossTenantSystem/getBossSystemByUserAndBmp",
				userInfoUrl: this.BASEURL + "/getLoginInfo",
				recommendUrl: this.BASEURL + "tenantInfo/getMyRecommendInfo",
				systemInfo: {},
				appData: [],
				tenantHomeName:"我的推荐",
				recommendData: {},
				roleData: [],
				rules: {
					userCode: [{
						required: true,
						message: '用户名不能为空',
						trigger: 'blur,change'
					}],
					oldPassword: [{
						required: true,
						message: '原密码不能为空',
						trigger: 'blur,change'
					}],
					newPassword: [{
						required: true,
						message: '新密码不能为空',
						trigger: 'blur,change'
					}],
					userPassword: [{
						required: true,
						message: '确认密码不能为空',
						trigger: 'blur,change'
					}]
				}
			}
		},
		methods: {
			openDialog() {
				this.dialogVisible = true;
			},
			openUrl(tourl){
				//window.history.go(tourl)
			},
			cancel(){
				
				this.dialogVisible = false
				Object.assign(this.formData,this.emptyData)	
				this.$refs.form.resetFields()
			},
			saveData() {
				var _this = this
				//console.log(this.formData.newPassword,this.formData.userPassword)
				if(this.formData.newPassword !== this.formData.confirmPassword) {
					this.$message("两次密码输入不一致,请重新输入");
					return;
				}

				this.$refs.form.validate((valid) => {
					
					if(valid) {
						axios.post(this.BASEURL + "bossUser/passwordResetCurrentUser",qs.stringify(_this.formData)).then(function(response){
							if(response.data.success){
									_this.$message("密码修改成功");
									_this.dialogVisible = false
									Object.assign(_this.formData,_this.emptyData)
									_this.$refs.form.resetFields()
								}else{
										_this.$message({
										message: response.data.errorMessage
								});
								}
						}).catch(function(error){
							_this.$message({
										message: error.message
								});
						})
				}

			
				});

			}

		},
		created() {
			//			var that=this;
			axios.get(this.appUrl).then((response) => {
				response.data.forEach(function(item){
					if(!(item.id==19 || item.id==29))
					item.systemUrl = item.systemUrl+"toIndex"					
				})
				this.appData = response.data;
			});
			axios.get(this.recommendUrl).then((response) => {
				this.recommendData = response.data.map.recommend;
				this.tenantHomeName = response.data.map.tenantHomeName
			});
			axios.get(this.BASEURL+"bossTenantInformation/getImgUrl").then((response) => {
				if(response.data.fileTabIconIdList.length && response.data.fileTabIconIdList[0].tenantTabImgAddress)
					document.getElementById("linkIcon").setAttribute("href",response.data.fileTabIconIdList[0].tenantTabImgAddress);
				else
					document.getElementById("linkIcon").setAttribute("href","");
				if( response.data.logoFileIdList.length&&response.data.logoFileIdList[0].tenantTabName)
				document.getElementById("title").innerHTML = response.data.logoFileIdList[0].tenantTabName		
			});
		}
	}
</script>
<style>
	body {
		color: #393C3E;
	}
	.change-right #indexView{
		left: 90px;
	}
	#indexView {
		font-size: 14px;
		transition: left 0.2s;
		width: auto;
		left: 220px;
		position: absolute;
		top: 20px;
		bottom: 20px;
		right: 20px;
		overflow: auto;
		border-radius: 4px;
	}
	
	.myApp {
		margin-top: 20px;
		background: #fff;
		min-height: 100px;
	}
	#indexView h5{
		padding-top: 10px;
	}
	.title-border span {
		display: block;
		float: left;
		width: 3px;
		height: 30px;
		background: #E60012;
	}
	
	.title-border p {
		float: left;
		line-height: 30px;
	}
	
	.title-border p a {
		color: inherit;
		font-size: 18px;
		font-weight: 400;
		padding-left: 15px;
	}
	
	.myAppContent {
		padding: 10px 5px;
	}
	
	.appCell {
		box-sizing: border-box;
		width: 230px;
		height: 130px;
		border: 1px solid #DCE0E9;
		float: left;
		margin:10px;
		border-radius: 4px;
	}
	/*.appCell:nth-of-type(4),.appCell:nth-of-type(8){
		margin-right: 0;
	}*/
	
	.appCell:hover {
		background: #E3F4FF;
	}
	.appCell:hover h4{
		color: #393C3E;
	}
	
	.appCell dt {
		width: 80px;
		text-align: center;
		float: left;
		padding-top: 25px;
	}
	
	.appImg {
		width: 60px;
		height: 60px;
	}
	
	.appCell .inApp {
		width: 146px;
		float: left;
		padding-top: 25px;
		position: relative;
	}
	.appCell{
		cursor: pointer;
	}
	.appCell h4 {
		font-size: 16px;
		line-height: 20px;
		font-weight: 700;
    font-style: normal;
    color: #71787E;
	}
	
	.appCell .inApp p {
		line-height: 40px;
		font-size: 12px;
		color: #71787E;
	}
	
	.btn-div {
		display: none;
		position: absolute;
		top: 66px
	}
	
	.appCell:hover .btn-div {
		display: block;
	}
	
	.appCell:hover .inApp p {
		display: none;
	}
	
	.btn-div .el-button {
		padding: 10px 20px;
	}
	
	.btn-div .el-button:hover {
		background: #1985CD;
	}
	
	.myRecomend {
		background: #fff;
		margin-top: 20px;
		min-height: 80px;
	}
	
	.recomendContent dl img {
		height: 98px;
		width: 98px;
		border: 0;
	}
	
	.recomendContent {
		overflow: hidden;
		padding: 10px 20px;
	}
	
	.recomendContent dl {
		margin-bottom: 0;
		text-align: center;
	}
	
	.recomendContent dt {
		width: 100px;
		height: 100px;
		background: #FFFFFF;
		border: 1px solid #DDDDDD;
		border-radius: 10px;
		overflow: hidden;
	}
	
	.recomendContent dd {
		width: 100px;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #393C3E;
		letter-spacing: 0;
	}
	
	.recomendContent ul li {
		width: 100px;
		float: left;
		margin-right: 60px;
	}
	
	.recomendContent ul {
		width: 100%;
		overflow: hidden;
	}
	
	.recomendContent dd span {
		font-size: 14px;
		color: #333333;
		line-height: 30px;
	}
</style>