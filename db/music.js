const mongoose = require("mongoose")
let Schema = mongoose.Schema
let musicSchema = new Schema({
    //歌曲名
    name: {
        type: String,
        default:"暂无歌名"
    },

    //歌曲演唱者
    artist: {
        type: String,
        default:"暂无演唱者"

    },
    url:{
        type:String,
        required:true
    },
    //封面
    cover:{
        type: String,
        default: "/file/mcover/default.jpg"
    },
    //歌词
    lrc: {
        type: String,
        default: "/file/lyric/default.lrc"
    },
    //上传日期
    theme:{
        type:String,
        default:"#626aef"

    },
    date:{
        type: Number,
        default: Date.now
    }
})

module.exports = mongoose.model("music", musicSchema)







