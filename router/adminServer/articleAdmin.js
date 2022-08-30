const express = require('express')
const router = express.Router()
const articleAdminDB = require('../../db/ArticleAdmin')
const path = require('path')

router.post('/createArticle', async (req, res) => {
    let {
        title,
        description,
        content,
    } = req.body
    console.log( title,
        description,
        content,)

    const { user } = req.session.userInfo
    if (!title || !description || !content) {
        // 走到这里 说明 条件中有空值
        return res.send({
            code: 1,
            txt: '文章创建失败'
        })
    }
    let reg = /<img [^>]*src=['"]([^'"]+)[^>]*>/g

    content = content.replace(reg, '')

    const articleList = await articleAdminDB.find()


    const rank = articleList ? articleList.length + 1 : 1
    await articleAdminDB.create({
        title,
        rank,
        description,
        content,
        author: user,
        date: Date.now()
    })
    res.send({
        code: 0,
        txt: '文章创建成功'
    })
})


router.get('/articleList', async (req, res) => {
    let {
        pageSize,
        currentPage
    } = req.query

    const articleList = await articleAdminDB.find()

    const total = articleList.length
    articleList.sort((a,b) => a.rank - b.rank)
    const data = articleList.splice((currentPage - 1) * pageSize, pageSize)

    res.send({
        code: 0,
        data,
        total
    })
})

router.post('/reviseRank', async (req, res) => {
    let {
        first,
        second
    } = req.body
    console.log(1111);
    let firstIndex = first.rank //被拖拽dom的index值
    let secondIndex = second.rank //被替换dom的index值

    //修改 被拖拽元素first rank
    await articleAdminDB.findByIdAndUpdate({ _id: first._id }, { rank: secondIndex })
    // 修改 被替换dom的index值
    await articleAdminDB.findByIdAndUpdate({ _id: second._id }, { rank: firstIndex })

    res.send({
        code: 0,
    })
})


router.post('/delete', async (req, res) => {
    let {
        _id
    } = req.body

    //删除指定文章数据
    await articleAdminDB.findByIdAndDelete({ _id })


    res.send({
        code: 0,
    })
})
module.exports = router

