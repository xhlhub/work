<template>
	<div class="detail-page">
		<div class="list-view">
		<h3>基础信息</h3>
			<el-row>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">上级组织机构</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.orgPName}}</span></el-col>
					</div>
				</el-col>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">组织机构编码</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.orgCode}}</span></el-col>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">组织机构名称</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.orgName}}</span></el-col>
					</div>
				</el-col>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">组织机构代码证</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.orgCodeCertificate}}</span></el-col>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">法人代表</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.orgLawPerson}}</span></el-col>
					</div>
				</el-col>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">代理许可证号</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.orgAgentLicenseNo}}</span></el-col>
					</div>
				</el-col>
			</el-row>
				<el-row>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">电子邮箱</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.orgEmail}}</span></el-col>
					</div>
				</el-col>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">单位职能</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.listOrgFunctionName}}</span></el-col>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">单位属性</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.listOrgPropertyName}}</span></el-col>
					</div>
				</el-col>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">通讯地址</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.orgAddress}}</span></el-col>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">邮政编码</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.orgZipCode}}</span></el-col>
					</div>
				</el-col>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">办公电话</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.orgTel}}</span></el-col>
					</div>
				</el-col>
			</el-row>

			<el-row>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">传真</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.orgFax}}</span></el-col>
					</div>
				</el-col>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">是否常用</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.orgIsUsedName}}</span></el-col>
					</div>
				</el-col>

			</el-row>
			<el-row>
				<div class="info-wrap">
					<el-col :span="3"><span class="detail-title">备注</span></el-col>
					<el-col :span="1"><span>:</span></el-col>
					<el-col :span="17"><span class="detail-info">{{detailInfo.remark}}</span></el-col>
				</div>

			</el-row>
			<h3>联系人基本信息</h3>
			<el-row>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">姓名</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.orgUrgencyName}}</span></el-col>
					</div>
				</el-col>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">电话</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.orgUrgencyTel}}</span></el-col>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">手机</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.orgUrgencyPhone}}</span></el-col>
					</div>
				</el-col>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">传真</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.orgUrgencyFax}}</span></el-col>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">地址</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.orgUrgencyEmail}}</span></el-col>
					</div>
				</el-col>
			</el-row>
			
			</div>
			<div class="button-bottom">
				<div class="bottom-parent">
				<el-button @click="cancel" size="large">取消</el-button>
				</div>
			</div>
	</div>
</template>

<script>
	/*
	 @props {detailInfo} 动态地保定父组件地detailInfo值，当父组件改变该数据时，详情页可以动态地更新数据
	 * */
	export default{
			props:['detailInfo'],
			/*
			 	详情页所需要的数据
			 * */
			data(){
				return {
				}
			},
			/*
			  返回列表页
			 * */
			methods:{
				cancel(){
					this.$emit("hide")
				}
			}
			
		}
	
</script>

<style>
</style>