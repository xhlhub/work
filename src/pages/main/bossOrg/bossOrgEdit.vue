<template>
	<div class="edit-page">
		<div class="list-view">
			<h3>基础信息</h3>
			<el-form label-position="right" label-width="160px" :model="formData" ref="form" :inline="true" :rules="rules">
				<el-row>

					<el-form-item label="上级组织机构" >
						<el-input v-model="formData.orgPName" :disabled="true"></el-input>
					</el-form-item>
					<el-form-item label="组织机构编码" prop="orgCode">
						<el-input v-model="formData.orgCode"></el-input>
					</el-form-item>

				</el-row>
				<el-row>

					<el-form-item label="组织机构名称" prop="orgName">
						<el-input v-model="formData.orgName"></el-input>
					</el-form-item>
					<el-form-item label="组织机构代码证" prop="orgCodeCertificate">
						<el-input v-model="formData.orgCodeCertificate"></el-input>
					</el-form-item>
					

				</el-row>
				<el-row>
					<el-form-item label="法人代表">
						<el-input v-model="formData.orgLawPerson"></el-input>
					</el-form-item>
					<el-form-item label="代理许可证号">
						<el-input v-model="formData.orgAgentLicenseNo"></el-input>
					</el-form-item>
					

				</el-row>
				<el-row>
					<el-form-item label="通讯地址">
						<el-input v-model="formData.orgAddress"></el-input>
					</el-form-item>
					
					<el-form-item label="单位职能">
						<el-select v-model="formData.listOrgFunction">
							<el-option :label="item.text" :value="item.value" v-for="item in options.pubDic.DIC_ORG_FUNCTION" :key="item.value"></el-option>
						</el-select>
					</el-form-item>
				</el-row>
				<el-row>
					<el-form-item label="单位属性">
						<el-select v-model="formData.listOrgProperty">
							<el-option :label="item.text" :value="item.value" v-for="item in options.pubDic.DIC_ORG_PROPERTY" :key="item.value"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="是否常用">
						<el-select v-model="formData.orgIsUsed">
							<el-option :label="item.text" :value="item.value" v-for="item in options.pubDic.DIC_TF_TYPE" :key="item.value"></el-option>
						</el-select>
					</el-form-item>
					
					
				</el-row>
				<el-row>
					<el-form-item label="传真">
						<el-input v-model="formData.orgFax"></el-input>
					</el-form-item>
					<el-form-item label="办公电话">
						<el-input v-model="formData.orgTel"></el-input>
					</el-form-item>
				</el-row>

				<el-row>
					<el-form-item label="邮政编码">
						<el-input v-model="formData.orgZipCode"></el-input>
					</el-form-item>
					<el-form-item label="电子邮箱" prop="orgEmail">
						<el-input v-model="formData.orgEmail"></el-input>
					</el-form-item>
					
				</el-row>
				<el-row>
					<el-form-item label="备注">
						<el-input type="textarea" v-model="formData.remark"></el-input>
					</el-form-item>
				</el-row>

				<h3>联系人基本信息</h3>
				<el-row>

					<el-form-item label="姓名" prop="orgUrgencyName">
						<el-input v-model="formData.orgUrgencyName"></el-input>
					</el-form-item>
					<el-form-item label="电话">
						<el-input v-model="formData.orgUrgencyTel"></el-input>
					</el-form-item>

				</el-row>
				<el-row>

					<el-form-item label="手机" prop="orgUrgencyPhone">
						<el-input v-model.number="formData.orgUrgencyPhone"></el-input>
					</el-form-item>

					<el-form-item label="传真">
						<el-input v-model="formData.orgUrgencyFax"></el-input>
					</el-form-item>

				</el-row>
				<el-row>
					<el-form-item label="地址">
						<el-input v-model="formData.orgUrgencyEmail"></el-input>
					</el-form-item>
				</el-row>
			</el-form>

		</div>
		<div class="button-bottom">
			<div class="bottom-parent">
			<el-button @click="saveData" size="large" type="success">保存</el-button>
			<el-button @click="cancel" size="large">取消</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	//获取公用提交，删除接口
	import api from "@/assets/js/api"
	/*
	 @props {formData} 动态地保定父组件地formData值，当父组件改变该数据时，编辑页可以动态地更新数据
	 * */
	export default {
		props: ['formData','options'],
		data() {
			return {
				rules:{
					orgCode:[
						{ required: true, message: '请输入组织机构编码', trigger: 'blur,change' }
					],
					orgName:[
					{ required: true, message: '请输入组织机构名称', trigger: 'blur,change' }
					],
					orgEmail:[
						{required: true,message: '电子邮箱不能为空', trigger: 'blur,change' },
						{type:"email",message: '请输入正确的邮箱', trigger: 'blur,change' }
					],
					orgUrgencyName:[
					{required: true,message: '请输入联系人姓名', trigger: 'blur,change' }
					],
					orgUrgencyPhone:[
						{required: true,message: '请输入联系人手机'},
						{type: 'number',message: '手机号码为数字',trigger: 'change'}
					]
				}
			}
		},
		methods: {
			/*
			 	提交hide事件，由父组件监听（返回列表页）
			 * */
			cancel() {
				this.$emit("hide")
			},
			resetForm(){
				this.$refs.form.resetFields()
			},
			/*
			 	保存数据
			 	调用保存数据的通用API，API说明参考api.js
			 * */
			saveData() {
				var _this = this
				this.$refs.form.validate((valid) => {
					if(valid) {
						api.saveData({
							data() {
								return {
									baseUrl: this.BASEURL + "/bossOrg/insertOrUpdate",
									formData: _this.formData,
									currentComponent: _this,
									currentTable: _this.$parent.$refs.childTable,
									callbackMethods: false
								}
							}
						})
					} else {

						return false;
					}
				});

			}
		}

	}
</script>

<style>

</style>