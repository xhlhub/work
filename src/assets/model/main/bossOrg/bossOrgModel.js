const BossOrgModel  = function(options){
	//组织机构ID
	this["id"]="",
	//单位属性，字典含义：1 公司 2 分公司 3部门 4办事处 5事业部 6其他 (数据字典)
	this["listOrgProperty"]="1",
	//单位职能(字典数据)
	this["listOrgFunction"]="0",
	//银行账户（关联org_bank_acc表）
	this["fkOrgBankAccId"]="",
	//一组有规律的编号4位一个级别如（一级0001 二级00010001）
	this["orgNo"]="",
	//组织机构编码
	this["orgCode"]="",
	//组织机构名称
	this["orgName"]="",
	//父组织机构ID
	this["orgPid"]="",
	//父组织机构名称
	this["orgPName"]="",
	//通讯地址
	this["orgAddress"]="",
	//邮政编码
	this["orgZipCode"]="",
	//电话
	this["orgTel"]="",
	//传真
	this["orgFax"]="",
	//电子信箱
	this["orgEmail"]="",
	//是否叶子结点：数据字典【是否】编码，含义：1-是；0-否；
	this["orgLeaf"]="",
	//级别
	this["orgLevel"]="",
	//发人代表
	this["orgLawPerson"]="",
	//代理许可证号
	this["orgAgentLicenseNo"] ="",
	//组织机构代码证
	this["orgCodeCertificate"]="",
	//是否常用 显示字段
	this["orgIsUsedName"]="",
	//联系人
	this["orgUrgencyName"]="",
	//联系人电话
	this["orgUrgencyTel"]="",
	//联系人邮箱
	this["orgUrgencyEmail"]="",
	//联系人手机
	this["orgUrgencyPhone"]="",
	//联系人传真
	this["orgUrgencyFax"]="",
	//是否常用
	this["orgIsUsed"]="0",
	//
	this["tenantId"]="",
	//创建时间
	this["created"]="",
	//创建者
	this["creator"]="",
	//修改时间
	this["modified"]="",
	//修改者
	this["modifier"]="",
	//备注
	this["remark"]="",
	//扩展字段1
	this["expand1"]="",
	//扩展字段2
	this["expand2"]="",
	//扩展字段3
	this["expand3"]="",
	//扩展字段4
	this["expand4"]="",
	//扩展字段5
	this["expand5"]="",
	//0 有效1 删除
	this["delState"]=""
	if(options){
		for(var attr in options )
		this[attr] = options[attr]
	}
}
export default BossOrgModel