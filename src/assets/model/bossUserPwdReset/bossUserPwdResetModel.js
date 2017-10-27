const BossUserPwdResetModel = function(options){
//用户ID
	this["id"]="",
	//用户编号(用户登录名称)
	this["userCode"]="",
	//确认新密码
	this["confirmPassword"]="",
	//新密码
	this["newPassword"]="",
	//原密码
	this["userPassword"]=""
	if(options){
		for(var attr in options )
		this[attr] = options[attr]
	}
}
export default BossUserPwdResetModel 