const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const articleSchema = new Schema({
    rank: { type: Number }, // 排名
    title: { type: String, default: "暂无标题" }, //标题
    description: { type: String, default: "暂无描述" },//文章描述
    date: { type: Number },//发表时间
    author: { type: String },//发表人（作者）
    content: { type: String } // 内容
});
module.exports = mongoose.model("articleAdmin", articleSchema);
