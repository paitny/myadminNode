const express = require("express")
const router = express.Router()
const messageDB = require("../../db/message")
const linkDB = require("../../db/link")
const articleDB = require("../../db/article")
const visitorDB = require("../../db/visitor")
const swiperDB=require("../../db/swiper")
const videoDB=require("../../db/video")
const userDB=require("../../db/user")
const musicDB=require("../../db/music")
const contactDB=require("../../db/contact")
const articleAdminDB=require("../../db/ArticleAdmin")
const path = require('path')
// 返回项目功能数组
router.get('/feature', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dataJson/feature.json'))
})
//请求留言
router.get('/msg', async (req, res) => {
  let doc = await messageDB
    .find({}, {}, {sort: {date: -1}})
    .populate('author', {pass: 0, __v: 0})
    .populate('children.author', {pass: 0, __v: 0})
    .populate('children.replyUser', {pass: 0, __v: 0})

  res.send({
    code: 0,
    msg: "请求成功",
    data: doc
  })
})

//请求友链
router.get("/link", async (req, res) => {
  let data = await linkDB.find()
  res.send({
    code: 0,
    msg: "请求完成",
    data
  })
})

//请求文章
router.get("/article", async (req, res) => {
//文章分页
  let {page,perPage}=req.query
  let pages=+page||1
  let perPages=+perPage||5
  let doc = await articleDB.find(
      {},
      {},
      {
        skip:perPages*(pages-1),
        limit:perPages,
        sort:{_id:-1}
      }
      )
  //计算文章的总页数
  const total=await articleDB.countDocuments()
    res.send({
      code: 0,
      msg: "请求成功",
      data:doc,total
  })
})

//请求id对应的文章
router.get("/articleID", async (req, res) => {
  let {id} = req.query
  let doc = null
  try {
    doc = await articleDB.findById(id)
    if (doc) {

      //pv + 1
      await articleDB.findByIdAndUpdate(id, {$inc: {pv: 1}})

      res.send({
        code: 0,
        msg: "查询成功",
        data: doc
      })
    } else {
      res.send({
        code: 11,
        msg: "文章查询失败"
      })
    }
  } catch (e) {
    if (e.kind === "ObjectId") {
      res.send({
        code: 11,
        msg: "文章查询失败"
      })
    } else {
      res.send({
        code: 4,
        msg: "服务器错误，请稍后再试"
      })
    }
  }

})

//请求visitor
router.get("/visitor", async (req, res) => {
  let doc = await visitorDB
    .find({}, {}, {sort: {date: -1}})
    .populate("visitor", {pass: 0, __v: 0})

  res.send({
    code: 0,
    msg: "请求完成",
    data: doc
  })
})

//请求轮播图
router.get("/swiper",async (req,res)=>{
  let doc = await swiperDB.find()
  res.send({
    code: 0,
    msg: "请求成功",
    data: doc
  })
})
//请求视频
router.get("/video",async (req,res)=>{
  let doc = await videoDB.find()
  res.send({
    code: 0,
    msg: "请求成功",
    data: doc
  })
})
//请求所有用户
router.get("/user", async (req, res) => {
  let doc = await userDB
      .find({}, {}, {sort: {admin: -1}})
      .populate("user._id", {pass: 0, __v: 0})

  res.send({
    code: 0,
    msg: "请求完成",
    data: doc
  })
})
//请求所有音乐信息进行分页操作
router.get("/music", async (req, res) => {
  //文章分页
  let {page,perPage}=req.query
  let pages=+page||1
  let perPages=+perPage||5
  let doc = await musicDB.find(
      {},
      {},
      {
        skip:perPages*(pages-1),
        limit:perPages,
        sort:{_id:-1}
      }
  )
  const total=await musicDB.countDocuments()
  res.send({
    code: 0,
    msg: "请求完成",
    data: doc,total
  })
})
//音乐展示
router.get("/musicAll", async (req, res) => {

  let doc = await musicDB.find({},{},{sort:{_id:-1}})
  res.send({
    code: 0,
    msg: "请求完成",
    data: doc
  })
})
//计算所有数据
router.get('/data',async (req,res)=>{
      let userTotal=await userDB.countDocuments()
      let MsgTotal=await messageDB.countDocuments()
      let MusicTotal=await musicDB.countDocuments()
      let SwiperTotal=await swiperDB.countDocuments()
      let ArticleTotal=await articleDB.countDocuments()
      let ContactTotal=await contactDB.countDocuments()
      let VisitorTotal=await visitorDB.countDocuments()
      let VideoTotal=await videoDB.countDocuments()
      let LinkTotal=await linkDB.countDocuments()
      let AdminArticleTotal=await articleAdminDB.countDocuments()
  res.send({
    code: 0,
    msg: "请求完成",
    data: {userTotal,
      MsgTotal,
      MusicTotal,
      SwiperTotal,
      ArticleTotal,
      ContactTotal,
      VisitorTotal,
      VideoTotal,
      LinkTotal,
      AdminArticleTotal}
  })
})
module.exports = router









