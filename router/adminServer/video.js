const express = require("express")
const router = express.Router()
const multer = require("multer")
const path = require("path")
const VideoDB = require("../../db/video")
const fs = require("fs");
let vd_upload = multer({
    storage: multer.diskStorage({
        //文件存储的目录
        destination(req, file, cb) {
            cb(null, path.join(__dirname, '../../public/file/videoPlayer'))
        },
        //文件的名字
        filename(req, file, cb) {
            let {ext} = path.parse(file.originalname)
            req.video_name = `video-${Date.now()}${ext}`
            cb(null, req.video_name)
        }
    })
}).single('file')

let vc_upload = multer({
    storage: multer.diskStorage({
        //文件存储的目录
        destination(req, file, cb) {
            cb(null, path.join(__dirname, '../../public/file/videoCover'))
        },
        //文件的名字
        filename(req, file, cb) {
            let {ext} = path.parse(file.originalname)
            req.videoCover_name = `videoCover-${Date.now()}${ext}`
            cb(null, req.videoCover_name)
        }
    })
}).single('file')
//上传video
router.post("/videoAdd", (req, res) => {

    vd_upload(req, res, async (err) => {
        //上传失败
        if (err) {
            return res.send({
                code: 9,
                msg: "上传失败"
            })
        }
        //上传成功
        res.send({
            code: 0,
            msg: "video上传成功",
            url: `/file/videoPlayer/${req.video_name}`
        })
    })

})
//video背景上传
router.post("/videoCover", (req, res) => {
    vc_upload(req, res, async (err) => {
        //上传失败
        if (err) {
            return res.send({
                code: 9,
                msg: "上传失败"
            })
        }
        //上传成功
        res.send({
            code: 0,
            msg: "videoCover上传成功",
            url: `/file/videoCover/${req.videoCover_name}`
        })
    })

})


//video发表
router.post("/add", async (req, res) => {
    let {title, video, videoCover} = req.body
    let doc = await VideoDB.create({
        title: title || undefined,
        video: video || undefined,
        videoCover: videoCover || undefined
    })
    res.send({
        code: 0,
        msg: "视频上传成功",
        data: {id: doc._id}
    })
})
//视频封面以及视频文件修改
router.post("/update", async (req, res) => {
    let {id, doc, vdUrl} = req.body

    let url = path.resolve(__dirname, "../../public" + vdUrl)
    if (vdUrl === "/file/videoCover/default.jpg" || !vdUrl) {
        await VideoDB.findByIdAndUpdate(id, doc)
        return res.send({
            code: 0,
            msg: "修改成功"
        })
    }
    fs.unlinkSync(url)
    await VideoDB.findByIdAndUpdate(id, doc)
    res.send({
        code: 0,
        msg: "修改成功"
    })
})
//视频删除
router.delete("/delete", async (req, res) => {
    let {id, videoUrl, coverUrl} = req.body
    let vdFile = path.resolve(__dirname, "../../public" + videoUrl)
    let cover = path.resolve(__dirname, "../../public" + coverUrl)
    if (coverUrl === "/file/videoCover/default.jpg") {
        fs.unlinkSync(vdFile)
        await VideoDB.findByIdAndRemove(id)
        return res.send({
            code: 0,
            msg: "删除完成"
        })
    }
    fs.unlinkSync(vdFile)
    fs.unlinkSync(cover)
    await VideoDB.findByIdAndRemove(id)
    res.send({
        code: 0,
        msg: "删除完成"
    })
})


module.exports = router



