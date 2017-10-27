<template>
	<div>
		<div style="width: 1024px;padding-bottom: 20px;">
		<h3>基本信息</h3>
						<el-row>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">ID</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.id}}</span></el-col>
					</div>
				</el-col>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">菜单编码</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.funCode}}</span></el-col>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">项目表字段</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.itemCode}}</span></el-col>
					</div>
				</el-col>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">项目表字段中文名</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.itemShowName}}</span></el-col>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">项目表类型 0-String 1-double</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.itemType}}</span></el-col>
					</div>
				</el-col>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">项目表名</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.itemTableName}}</span></el-col>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">系统ID</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.fkSystemId}}</span></el-col>
					</div>
				</el-col>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">租户ID</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.tenantId}}</span></el-col>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">创建时间</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.created}}</span></el-col>
					</div>
				</el-col>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">创建者</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.creator}}</span></el-col>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">修改时间</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.modified}}</span></el-col>
					</div>
				</el-col>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">修改者</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.modifier}}</span></el-col>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">备注</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.remark}}</span></el-col>
					</div>
				</el-col>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">扩展字段1</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.expand1}}</span></el-col>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">扩展字段2</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.expand2}}</span></el-col>
					</div>
				</el-col>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">扩展字段3</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.expand3}}</span></el-col>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">扩展字段4</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.expand4}}</span></el-col>
					</div>
				</el-col>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">扩展字段5</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.expand5}}</span></el-col>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<div class="info-wrap">
						<el-col :span="6"><span class="detail-title">0 有效1 删除</span></el-col>
						<el-col :span="2"><span>:</span></el-col>
						<el-col :span="16"><span class="detail-info">{{detailInfo.delState}}</span></el-col>
					</div>
				</el-col>
			</el-row>
			<div class="button-bottom">
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


