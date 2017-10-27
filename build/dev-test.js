require('./check-versions')()

var express = require('express')
var webpack = require('webpack')
var path = require('path')
var opn = require('opn')
const fs = require('fs');
var bodyParser = require('body-parser');
//var webpackConfig = require('./webpack.test.conf')

var app = express()
//var compiler = webpack(webpackConfig)
app.use("/dist",express.static('static'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.get('/', function(req, res, next) {
		
     res.sendFile(process.cwd()+"/dist/"+"index.html")
})

app.get('/static/*', function(req, res) {
	 console.log('get请求参数对象 :',req.url);  
	 
	res.sendFile(process.cwd()+"/dist"+req.url);
})


var data =[
	{
		"imageUrl": "",
		"id":1,
		"title": "这是一个标题啊",
		"resource": "女",
		"name": "1",
		"email": "adasdasdad@qq.com"
	}, {
		"imageUrl": "",
		"id":2,
		"title": "这是一个标题啊2",
		"resource": "男",
		"name": "2",
		"email": "asdad@qq.com"
	}, {
		"imageUrl": "",
		"id":3,
		"title": "这是一个标题啊3",
		"resource": "男",
		"name": "3",
		"email": "asdad1@qq.com"
	}, {
		"imageUrl": "",
		"id":4,
		"title": "这是一个标题啊4",
		"resource": "男",
		"name": "4",
		"email": "asdad1@qq.com"
	}
] 
var totalId = 4;
app.use("/dist", express.static('./static'))
app.post("/addUser",function(req,res){
			totalId++;
			req.body.info.id = totalId;
			//console.log(typeof req.body.info)
				data.unshift(req.body.info)
				setTimeout(function(){
					res.send(data);
				},1000)
})
app.post("/changeUser",function(req,res){
			data.forEach((value,index)=>{
				if(value.id==req.body.item.id)
					data[index] = req.body.item
			})
			//console.log(typeof req.body.info)			
				setTimeout(function(){
					res.send(data);
				},1000)
})
app.post("/delUser",function(req,res){
			
			data.forEach((value,index)=>{
				if(value.id==req.body.id)
					data.splice(index,1)
			})
			//console.log(typeof req.body.info)
				setTimeout(function(){
					res.send(data);
				},1000)
})
app.post("/getData", function(paramRequest, paramResponse) {
	
				var arr =[]
				data.forEach(function(item, index) {
					if(item.name.indexOf(paramRequest.body.searchContent) != -1)
						arr.push(item)
				})
				setTimeout(function(){
					paramResponse.send(arr);
				},1000)
				
		
})



module.exports = app.listen(8080, function (err) {
	opn('http://localhost:8080')
})

