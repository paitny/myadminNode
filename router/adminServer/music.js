const express = require("express")
const router = express.Router()
const multer = require("multer")
const path = require("path")
const musicDB = require("../../db/music")
const articleDB = require("../../db/article");


let music_upload = multer({
    storage: multer.diskStorage({
        //文件存储的目录
        destination(req, file, cb) {
            cb(null, path.join(__dirname, '../../public/file/music'))
        },
        //文件的名字
        filename(req, file, cb) {
            let {ext} = path.parse(file.originalname)
            req.music_name = `music-${Date.now()}${ext}`
            cb(null, req.music_name)
        }
    })
}).single('file')
//歌词上传
let lyric_upload = multer({
    storage: multer.diskStorage({
        //文件存储的目录
        destination(req, file, cb) {
            cb(null, path.join(__dirname, '../../public/file/lyric'))
        },
        //文件的名字
        filename(req, file, cb) {
            let {ext} = path.parse(file.originalname)
            req.lyric_name = `lyric-${Date.now()}${ext}`
            cb(null, req.lyric_name)
        }
    })
}).single('file')
//封面上传
let cover_upload = multer({
    storage: multer.diskStorage({
        //文件存储的目录
        destination(req, file, cb) {
            cb(null, path.join(__dirname, '../../public/file/mcover'))
        },
        //文件的名字
        filename(req, file, cb) {
            let {ext} = path.parse(file.originalname)
            req.cover_name = `cover-${Date.now()}${ext}`
            cb(null, req.cover_name)
        }
    })
}).single('file')
//上传音乐
router.post("/musicAdd", (req, res) => {
    music_upload(req, res, async (err) => {
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
            msg: "音乐上传成功",
            url: `/file/music/${req.music_name}`
        })
    })
})

//上传歌词
router.post("/lrc", (req, res) => {
    lyric_upload(req, res, async (err) => {
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
            msg: "歌词上传成功",
            url: `/file/lyric/${req.lyric_name}`
        })
    })
})
//上传cover封面图
router.post("/cover", (req, res) => {
    cover_upload(req, res, async (err) => {
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
            msg: "cover上传成功",
            url: `/file/mcover/${req.cover_name}`
        })
    })
})
//音乐发表
router.post("/add", async (req, res) => {
    let {name, artist,url,lrc, cover,theme} = req.body
    let doc = await musicDB.create({
        name: name || undefined,
        artist:artist||undefined,
        url,
        lrc: lrc || undefined,
        cover:cover||undefined,
        theme:theme||undefined,
    })

    res.send({
        code: 0,
        msg: "音乐发布成功",
        data: {id: doc._id}
    })
})
//音乐修改
router.post("/update", async (req, res) => {
    let {id, doc} = req.body
    await musicDB.findByIdAndUpdate(id,doc)

    res.send({
        code: 0,
        msg: "修改成功"
    })
})

//音乐删除
router.delete("/delete", async (req, res) => {
    let {id} = req.body

    await musicDB.findByIdAndRemove(id)

    res.send({
        code: 0,
        msg: "删除完成"
    })
})

router.post("/lrcupdate", async (req, res) => {
    let {id, doc} = req.body
    await musicDB.findByIdAndUpdate(id,doc)

    res.send({
        code: 0,
        msg: "修改成功"
    })
})

module.exports = router



