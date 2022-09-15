# 开发文档

## 1. 返回数据格式说明
- **code** *Number*
    - 0 请求成功
    - 1 格式错误-数据格式不正确
    - 2 用户名冲突-用户已存在
    - 3 验证失败-用户不存在
    - 4 服务器错误
    - 5 登陆失败-密码错误
    - 6 鉴权失败-用户未登录
    - 7 修改失败-新用户名与原用户名相同
    - 8 修改失败-新旧密码相同
    - 9 上传失败
    - 10 友链添加失败-友链已存在
    - 11 文章查询失败-找不到对应id的文章
    
- **msg** *String*
    用于描述请求状况
  
- **data** *Object*
    请求需要返回数据时，会存放在data选项

## 2. 接口说明

### 普通接口
//注册
router.use("/reg",require("./reg/index"))

//登录
router.use("/login", require("./login/index"))

//个人信息修改
router.use("/personal", require("./personal/index"))

//留言
router.use("/msg", require("./msg/index"))

//管理员
router.use("/adminServer", require("./adminServer/index"))

//请求各种数据
router.use("/get", require("./get/index"))

//反馈消息
router.use("/contact", require("./contact/index"))

//返回各种json数据
router.use("/route",require("./data/index"))
### 后台管理系统接口
//鉴权
router.use((req, res, next) => {
if (!req.session.userInfo || !req.session.userInfo.admin) {
return res.send({
code: 6,
msg: "您不是管理员",
})
}
next()
})

//check
router.post("/check", (req, res) => {
res.send({
code: 0,
msg: "您拥有管理员权限",
data:req.session.userInfo
})
})

//友链相关
router.use("/link", require("./link"))

//文章相关
router.use("/article", require("./article"))

//contact
router.use("/contact", require("./contact"))
//swiper
router.use("/swiper",require("./swiper"))
//video
router.use("/video",require("./video"))
//用户
router.use("/consumer",require("./consumer"))
//音乐
router.use("/music",require("./music"))
//后台文章
router.use("/articleAdmin",require("./articleAdmin"))
//留言
router.use("/leaveMsg",require("./leaveMsg"))
