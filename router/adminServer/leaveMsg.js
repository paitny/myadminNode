const express = require("express")
const router = express.Router()
const messageDB=require("../../db/message")
//文章删除
router.delete("/delete", async (req, res) => {
    let {id} = req.body
  await messageDB.findByIdAndRemove(id)

    res.send({
        code: 0,
        msg: "删除完成"
    })
})
module.exports = router
