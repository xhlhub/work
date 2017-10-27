<template>
	<div>
		<div style="width: 1024px;padding-bottom: 20px;">
			<h3>基本信息</h3>
			<el-form label-position="right" label-width="160px" :model="formData" ref="form" :inline="true">
							<el-row>
					<el-form-item label="ID"  prop="id">
						<el-input v-model="formData.id"></el-input>
					</el-form-item>
					<el-form-item label="菜单编码"  prop="funCode">
						<el-input v-model="formData.funCode"></el-input>
					</el-form-item>
				</el-row>
				<el-row>
					<el-form-item label="项目表字段"  prop="itemCode">
						<el-input v-model="formData.itemCode"></el-input>
					</el-form-item>
					<el-form-item label="项目表字段中文名"  prop="itemShowName">
						<el-input v-model="formData.itemShowName"></el-input>
					</el-form-item>
				</el-row>
				<el-row>
					<el-form-item label="项目表类型 0-String 1-double"  prop="itemType">
						<el-input v-model="formData.itemType"></el-input>
					</el-form-item>
					<el-form-item label="项目表名"  prop="itemTableName">
						<el-input v-model="formData.itemTableName"></el-input>
					</el-form-item>
				</el-row>
				<el-row>
					<el-form-item label="系统ID"  prop="fkSystemId">
						<el-input v-model="formData.fkSystemId"></el-input>
					</el-form-item>
					<el-form-item label="租户ID"  prop="tenantId">
						<el-input v-model="formData.tenantId"></el-input>
					</el-form-item>
				</el-row>
				<el-row>
					<el-form-item label="创建时间"  prop="created">
						<el-input v-model="formData.created"></el-input>
					</el-form-item>
					<el-form-item label="创建者"  prop="creator">
						<el-input v-model="formData.creator"></el-input>
					</el-form-item>
				</el-row>
				<el-row>
					<el-form-item label="修改时间"  prop="modified">
						<el-input v-model="formData.modified"></el-input>
					</el-form-item>
					<el-form-item label="修改者"  prop="modifier">
						<el-input v-model="formData.modifier"></el-input>
					</el-form-item>
				</el-row>
				<el-row>
					<el-form-item label="备注"  prop="remark">
						<el-input v-model="formData.remark"></el-input>
					</el-form-item>
					<el-form-item label="扩展字段1"  prop="expand1">
						<el-input v-model="formData.expand1"></el-input>
					</el-form-item>
				</el-row>
				<el-row>
					<el-form-item label="扩展字段2"  prop="expand2">
						<el-input v-model="formData.expand2"></el-input>
					</el-form-item>
					<el-form-item label="扩展字段3"  prop="expand3">
						<el-input v-model="formData.expand3"></el-input>
					</el-form-item>
				</el-row>
				<el-row>
					<el-form-item label="扩展字段4"  prop="expand4">
						<el-input v-model="formData.expand4"></el-input>
					</el-form-item>
					<el-form-item label="扩展字段5"  prop="expand5">
						<el-input v-model="formData.expand5"></el-input>
					</el-form-item>
				</el-row>
				<el-row>
					<el-form-item label="0 有效1 删除"  prop="delState">
						<el-input v-model="formData.delState"></el-input>
					</el-form-item>
				</el-row>
			</el-form>
			<div class="button-bottom">
				<el-button @click="saveData"  size="large" type="success">保存</el-button>
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
		export default{
			props:['formData'],
			data(){
				return {
					
				}
			},
			methods:{
				/*
				 	提交hide事件，由父组件监听（返回列表页）
				 * */
				cancel(){
					this.$emit("hide")
				},
				/*
				 	保存数据
				 	调用保存数据的通用API，API说明参考api.js
				 * */
				saveData(){
					var _this = this
					api.saveData({
						data(){
							return {
								baseUrl:this.BASEURL + "/bossSystem/insertOrUpdate",
								formData:_this.formData,
								callbackMethods:true,
								//当前操作的表格
								currentTable: _this.$refs.childTable,
								//当前组件
								currentComponent:_this,
							}
						},
						methods:{
							onSaveSuccess:function(success){
								_this.$emit("hide")
							},
							onSaveError:function(error){
								_this.$emit("hide")									
							}
						}
					})
				}
			}
		}
</script>

