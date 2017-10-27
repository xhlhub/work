const TmpData  = function(tmpDefault){
					this["id"]="",
					this["systemCode"]= "",
					this["systemName"]= "",
					this["systemIconCls"]="",
					this["systemSeqnum"]="" ,
					this["created"]= "",
					this["creator"]= "",
					this["modified"]= "",
					this["modifier"]= "",
					this["remark"]= "",
					this["expand1"]= "",
					this["expand2"]= "",
					this["expand3"]= "",
					this["expand4"]= "",
					this["expand5"]= "",
					this["delState"]= 0,
					this["systemUrl"]= "",
					this["checked"]= false,
					this["systemVisible"]= 0,
					this["systemPortalIconStyle"]= "",
					this["tenantIds"]= null,
					this["systemDeviceType"]= null	
					if(tmpDefault){
						for(var attr in tmpDefault )
						this[attr] = tmpDefault[attr]
					}
}
export default TmpData

