const express = require("express")
const app = express()
const bodyParser = require('body-parser');
//handle request entity too large
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}));


// app.use(history())
//连接数据库
require("./middleware/mongoose")

//中间件
app.use(require("./middleware/cors"))
app.use(require("./middleware/session"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static("./public"))
//路由监听
app.use("/", require("./router/index"))

// // //让后端路径正确的跳转到前端路由
app.get("*", (req, res)=>{
  res.sendFile( require("path").join(__dirname, './public/index.html') )
})

app.get("./", (req, res)=>{
  res.sendFile( require("path").join(__dirname, './public/myadmin/index.html') )
})
app.get("./", (req, res)=>{
  res.sendFile( require("path").join(__dirname, './public/sport/index.html') )
})
app.listen(4000, () => {
  console.log("服务启动，端口4000")
})


