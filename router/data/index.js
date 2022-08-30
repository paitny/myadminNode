const express = require('express')
const router = express.Router()
const path = require('path')

// 返回前端路由表
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dataJson/clientRoute.json'))
})

module.exports = router
