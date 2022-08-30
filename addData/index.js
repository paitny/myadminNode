// // // 添加一些原始用户 // 用于登录
//
// const userDB=require("../db/user")
// userDB.create(
//     {
//         username:"paity",
//         password:"ty709920",
//         admin:true
//     },
//     {
//         username:"王五",
//         password:"123456"
//     },
//     {
//         username:"lisa",
//         password:"123456"
//     },
//     {
//         username:"vue",
//         password:"123456"
//     },
//     {
//         username:"paity99",
//         password:"123456"
//     },
// )

//
// // // 添加学员信息
//
// const studentDB = require('../schemas/student')
// const randomNum = (num1, num2) => {
//   return Math.floor(Math.random() * (num2 - num1 + 1) + num1)
// }
// // 随机电话号码
// const randomPhone = () => {
//   let str = '1'
//
//   for (let i = 0; i < 10; i++) {
//     str += randomNum(0, 9)
//   }
//   return str
// }
//
// const arr = [
//   {
//     kindName: '后端',
//     courseName: 'Python基础核心语法',
//     className: [
//       "55期开发基础班",
//       "53期开发基础班",
//       "52期开发基础班",
//       "51期开发基础班"
//     ]
//   },
//   {
//     kindName: '后端',
//     courseName: 'Python全栈开发',
//     className: [
//       "6-7全栈开发班",
//       "4-28全栈开发班",
//       "3-17全栈开发班"
//     ]
//   },
//   {
//     kindName: '前端',
//     courseName: 'web前端基础班',
//     className: [
//       "三十七期javacript",
//       "三十九期javacript"
//     ]
//   },
//   {
//     kindName: '前端',
//     courseName: 'web前端全栈进阶班',
//     className: [
//       "web-前端进阶框架-朱雀",
//       "web-前端进阶框架-cherry ",
//       "web-前端进阶框架-丸子"
//     ]
//   },
// ]
//
// for (let i = 0; i < 500; i++) {
//   // 去arr中取数组项的随机下标
//   const num = randomNum(0, arr.length - 1)
//   const randomPhoneNumber = randomPhone()
//   const item = arr[num]
//   studentDB.create(
//     {
//       phoneNumber: randomPhoneNumber,
//       kindName: item.kindName,
//       courseName: item.courseName,
//       className: item.className[randomNum(0, item.className.length - 1)],
//       updatePeople: '铁锤',
//       updateTime: Date.now(),
//       info: {
//         phoneNumber: randomPhoneNumber
//       }
//     }
//   )
// }
//
//
//
// const courseDB = require("../schemas/course")
// // 前端   web前端基础班 web前端全栈进阶班
//
// courseDB.create({
//   kindName: '前端',
//   // 课程名称
//   courseName: "web前端基础班",
//   // 原价
//   originalPrice: 1750,
//   // 售价
//   sellingPrice: 1300,
//
//   // 底价
//   downPrice: 1300,
//   // 更新人
//   updatePeople: "雀雀",
//   // 课程描述
//   description: 'web前端基础班',
//   // 封面图片
//   coverImage: '/images/coverImage/01.png',
//   updateTime: Date.now()
// })
// courseDB.create({
//   updateTime: Date.now(),
//   kindName: '前端',
//   // 课程名称
//   courseName: "web前端全栈进阶班",
//   // 原价
//   originalPrice: 4080,
//   // 售价
//   sellingPrice: 4080,
//
//   // 底价
//   downPrice: 4080,
//   // 更新人
//   updatePeople: "雀雀",
//   // 课程描述
//   description: 'web-前端全栈学习课程',
//   // 封面图片
//   coverImage: '/images/coverImage/02.png',
// })
//
// courseDB.create({
//   updateTime: Date.now(),
//   kindName: '后端',
//   // 课程名称
//   courseName: "Python基础核心语法",
//   // 原价
//   originalPrice: 1590,
//   // 售价
//   sellingPrice: 1390,
//
//   // 底价
//   downPrice: 1390,
//   // 更新人
//   updatePeople: "雀雀",
//   // 课程描述
//   description: 'Python基础核心语法课程',
//   // 封面图片
//   coverImage: '/images/coverImage/03.png'
// })
// courseDB.create({
//   updateTime: Date.now(),
//   kindName: '后端',
//   // 课程名称
//   courseName: "Python全栈开发",
//   // 原价
//   originalPrice: 7880,
//   // 售价
//   sellingPrice: 7880,
//
//   // 底价
//   downPrice: 7880,
//   // 更新人
//   updatePeople: "雀雀",
//   // 课程描述
//   description: 'Python全栈开发课程',
//   // 封面图片
//   coverImage: '/images/coverImage/04.png'
// })
//
//
// courseDB.create({
//   updateTime: Date.now(),
//   kindName: '日语',
//   // 课程名称
//   courseName: "日语初级班",
//   // 原价
//   originalPrice: 2180,
//   // 售价
//   sellingPrice: 2180,
//
//   // 底价
//   downPrice: 2180,
//   // 更新人
//   updatePeople: "雀雀",
//   // 课程描述
//   description: '日语初级课程',
//   // 封面图片
//   coverImage: '/images/coverImage/05.png'
// })
// courseDB.create({
//   updateTime: Date.now(),
//   kindName: '日语',
//   // 课程名称
//   courseName: "日语进阶班",
//   // 原价
//   originalPrice: 2880,
//   // 售价
//   sellingPrice: 2880,
//
//   // 底价
//   downPrice: 1880,
//   // 更新人
//   updatePeople: "雀雀",
//   // 课程描述
//   description: '日语进阶课程',
//   // 封面图片
//   coverImage: '/images/coverImage/06.png'
// })
// courseDB.create({
//   updateTime: Date.now(),
//   kindName: '日语',
//   // 课程名称
//   courseName: "日语N3一对一",
//   // 原价
//   originalPrice: 1880,
//   // 售价
//   sellingPrice: 1880,
//   // 底价
//   downPrice: 1880,
//   // 更新人
//   updatePeople: "雀雀",
//   // 课程描述
//   description: '日语一对一课程',
//   // 封面图片
//   coverImage: '/images/coverImage/07.png'
// })
// courseDB.create({
//   updateTime: Date.now(),
//   kindName: '日语',
//   // 课程名称
//   courseName: "日语发音班",
//   // 原价
//   originalPrice: 1000,
//   // 售价
//   sellingPrice: 1000,
//   // 底价
//   downPrice: 1000,
//   // 更新人
//   updatePeople: "雀雀",
//   // 课程描述
//   description: '日语发音班',
//   // 封面图片
//   coverImage: '/images/coverImage/09.png'
// })
// courseDB.create({
//   updateTime: Date.now(),
//   kindName: '日语',
//   // 课程名称
//   courseName: "日语零基础直达N1班",
//   // 原价
//   originalPrice: 9380,
//   // 售价
//   sellingPrice: 9380,
//   // 底价
//   downPrice: 9380,
//   // 更新人
//   updatePeople: "雀雀",
//   // 课程描述
//   description: '日语零基础直达N1班',
//   // 封面图片
//   coverImage: '/images/coverImage/10.png'
// })
//
// courseDB.create({
//   updateTime: Date.now(),
//   kindName: '原画',
//   // 课程名称
//   courseName: "绘画基础班",
//   // 原价
//   originalPrice: 9180,
//   // 售价
//   sellingPrice: 9180,
//   // 底价
//   downPrice: 9180,
//   // 更新人
//   updatePeople: "雀雀",
//   // 课程描述
//   description: '绘画基础班',
//   // 封面图片
//   coverImage: '/images/coverImage/11.png'
// })
// courseDB.create({
//   updateTime: Date.now(),
//   kindName: '原画',
//   // 课程名称
//   courseName: "角色原画进阶班",
//   // 原价
//   originalPrice: 4100,
//   // 售价
//   sellingPrice: 4100,
//   // 底价
//   downPrice: 3800,
//   // 更新人
//   updatePeople: "雀雀",
//   // 课程描述
//   description: '角色原画进阶班',
//   // 封面图片
//   coverImage: '/images/coverImage/12.png'
// })
//
// courseDB.create({
//   updateTime: Date.now(),
//   kindName: '原画',
//   // 课程名称
//   courseName: "厚涂头像班",
//   // 原价
//   originalPrice: 999,
//   // 售价
//   sellingPrice: 999,
//   // 底价
//   downPrice: 999,
//   // 更新人
//   updatePeople: "雀雀",
//   // 课程描述
//   description: '厚涂头像班',
//   // 封面图片
//   coverImage: '/images/coverImage/13.png'
// })
// courseDB.create({
//   updateTime: Date.now(),
//   kindName: '原画',
//   // 课程名称
//   courseName: "二次元绘制",
//   // 原价
//   originalPrice: 4100,
//   // 售价
//   sellingPrice: 4100,
//   // 底价
//   downPrice: 3800,
//   // 更新人
//   updatePeople: "雀雀",
//   // 课程描述
//   description: '二次元绘制',
//   // 封面图片
//   coverImage: '/images/coverImage/14.png'
// })
//
//
//
// // 新增直播列表数据
//
// const liveDB = require('../schemas/live')
// const classDB = require('../schemas/class')
// let date = new Date(2022, 6, 23, 20, 30)
// // 朱雀的班期以及直播列表
// liveDB.create({
//   liveList: [
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-朱雀',
//       liveName: '01 vue启程',
//       liveTime: date - 1000 * 60 * 60 * 24 * 7,
//       liveDuration: 120,
//       teacher: '朱雀',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-朱雀',
//       liveName: '02 Vue指令',
//       liveTime: date - 1000 * 60 * 60 * 24 * 6,
//       liveDuration: 120,
//       teacher: '朱雀',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-朱雀',
//       liveName: '03 Vue指令2',
//       liveTime: date - 1000 * 60 * 60 * 24 * 5,
//       liveDuration: 120,
//       teacher: '朱雀',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-朱雀',
//       liveName: '04 Vue指令+配置项',
//       liveTime: date - 1000 * 60 * 60 * 24 * 4,
//       liveDuration: 120,
//       teacher: '朱雀',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-朱雀',
//       liveName: '05 Vue选项',
//       liveTime: date - 1000 * 60 * 60 * 24 * 3,
//       liveDuration: 120,
//       teacher: '朱雀',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-朱雀',
//       liveName: '06 生命周期',
//       liveTime: date - 1000 * 60 * 60 * 24 * 2,
//       liveDuration: 120,
//       teacher: '朱雀',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-朱雀',
//       liveName: '07 组件',
//       liveTime: date - 1000 * 60 * 60 * 24 * 1,
//       liveDuration: 120,
//       teacher: '朱雀',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-朱雀',
//       liveName: '08 组件通信',
//       liveTime: date / 0,
//       liveDuration: 120,
//       teacher: '朱雀',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-朱雀',
//       liveName: '09 组件通信',
//       liveTime: date / 1 + 1000 * 60 * 60 * 24 * 1,
//       liveDuration: 120,
//       teacher: '朱雀',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-朱雀',
//       liveName: '10 Vue语法',
//       liveTime: date / 1 + 1000 * 60 * 60 * 24 * 2,
//       liveDuration: 120,
//       teacher: '朱雀',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-朱雀',
//       liveName: '11 Vue过渡',
//       liveTime: date / 1 + 1000 * 60 * 60 * 24 * 3,
//       liveDuration: 120,
//       teacher: '朱雀',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-朱雀',
//       liveName: '12 过渡动画',
//       liveTime: date / 1 + 1000 * 60 * 60 * 24 * 4,
//       liveDuration: 120,
//       teacher: '朱雀',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-朱雀',
//       liveName: '13 Vuex',
//       liveTime: date / 1 + 1000 * 60 * 60 * 24 * 5,
//       liveDuration: 120,
//       teacher: '朱雀',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-朱雀',
//       liveName: '14 vuex',
//       liveTime: date / 1 + 1000 * 60 * 60 * 24 * 6,
//       liveDuration: 120,
//       teacher: '朱雀',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-朱雀',
//       liveName: '15 vue-router',
//       liveTime: date / 1 + 1000 * 60 * 60 * 24 * 7,
//       liveDuration: 120,
//       teacher: '朱雀',
//     },
//   ]
// }).then(res => {
//   let liveID = res._id
//   // 班期
//   classDB.create({
//     courseName: 'web前端全栈进阶班',
//     className: 'web-前端进阶框架-朱雀',
//     // 过去30-20的招生时间
//     enrollTime: [date - 1000 * 60 * 60 * 24 * 30, date - 1000 * 60 * 60 * 24 * 20],
//     studentNum: 100,
//     updatePeople: '朱雀',
//     // 创建班期的时间
//     updateTime: date - 1000 * 60 * 60 * 24 * 30,
//     liveList: liveID
//   })
// })
//
//
// liveDB.create({
//   liveList: [
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-丸子',
//       liveName: '01 vue启程',
//       liveTime: date - 1000 * 60 * 60 * 24 * 7,
//       liveDuration: 120,
//       teacher: '丸子',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-丸子',
//       liveName: '02 Vue指令',
//       liveTime: date - 1000 * 60 * 60 * 24 * 6,
//       liveDuration: 120,
//       teacher: '丸子',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-丸子',
//       liveName: '03 Vue指令2',
//       liveTime: date - 1000 * 60 * 60 * 24 * 5,
//       liveDuration: 120,
//       teacher: '丸子',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-丸子',
//       liveName: '04 Vue指令+配置项',
//       liveTime: date - 1000 * 60 * 60 * 24 * 4,
//       liveDuration: 120,
//       teacher: '丸子',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-丸子',
//       liveName: '05 Vue选项',
//       liveTime: date - 1000 * 60 * 60 * 24 * 3,
//       liveDuration: 120,
//       teacher: '丸子',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-丸子',
//       liveName: '06 生命周期',
//       liveTime: date - 1000 * 60 * 60 * 24 * 2,
//       liveDuration: 120,
//       teacher: '丸子',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-丸子',
//       liveName: '07 组件',
//       liveTime: date - 1000 * 60 * 60 * 24 * 1,
//       liveDuration: 120,
//       teacher: '丸子',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-丸子',
//       liveName: '08 组件通信',
//       liveTime: date / 0,
//       liveDuration: 120,
//       teacher: '丸子',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-丸子',
//       liveName: '09 组件通信',
//       liveTime: date / 1 + 1000 * 60 * 60 * 24 * 1,
//       liveDuration: 120,
//       teacher: '丸子',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-丸子',
//       liveName: '10 Vue语法',
//       liveTime: date / 1 + 1000 * 60 * 60 * 24 * 2,
//       liveDuration: 120,
//       teacher: '丸子',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-丸子',
//       liveName: '11 Vue过渡',
//       liveTime: date / 1 + 1000 * 60 * 60 * 24 * 3,
//       liveDuration: 120,
//       teacher: '丸子',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-丸子',
//       liveName: '12 过渡动画',
//       liveTime: date / 1 + 1000 * 60 * 60 * 24 * 4,
//       liveDuration: 120,
//       teacher: '丸子',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-丸子',
//       liveName: '13 Vuex',
//       liveTime: date / 1 + 1000 * 60 * 60 * 24 * 5,
//       liveDuration: 120,
//       teacher: '丸子',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-丸子',
//       liveName: '14 vuex',
//       liveTime: date / 1 + 1000 * 60 * 60 * 24 * 6,
//       liveDuration: 120,
//       teacher: '丸子',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-丸子',
//       liveName: '15 vue-router',
//       liveTime: date / 1 + 1000 * 60 * 60 * 24 * 7,
//       liveDuration: 120,
//       teacher: '丸子',
//     },
//   ]
// }).then(res => {
//   let liveID = res._id
//   // 班期
//   classDB.create({
//     courseName: 'web前端全栈进阶班',
//     className: 'web-前端进阶框架-丸子',
//     // 过去30-20的招生时间
//     enrollTime: [date - 1000 * 60 * 60 * 24 * 30, date - 1000 * 60 * 60 * 24 * 20],
//     studentNum: 100,
//     updatePeople: '丸子',
//     // 创建班期的时间
//     updateTime: date - 1000 * 60 * 60 * 24 * 30,
//     liveList: liveID
//   })
// })
//
//
// liveDB.create({
//   liveList: [
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-cherry',
//       liveName: '01 vue启程',
//       liveTime: date - 1000 * 60 * 60 * 24 * 7,
//       liveDuration: 120,
//       teacher: 'cherry',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-cherry',
//       liveName: '02 Vue指令',
//       liveTime: date - 1000 * 60 * 60 * 24 * 6,
//       liveDuration: 120,
//       teacher: 'cherry',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-cherry',
//       liveName: '03 Vue指令2',
//       liveTime: date - 1000 * 60 * 60 * 24 * 5,
//       liveDuration: 120,
//       teacher: 'cherry',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-cherry',
//       liveName: '04 Vue指令+配置项',
//       liveTime: date - 1000 * 60 * 60 * 24 * 4,
//       liveDuration: 120,
//       teacher: 'cherry',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-cherry',
//       liveName: '05 Vue选项',
//       liveTime: date - 1000 * 60 * 60 * 24 * 3,
//       liveDuration: 120,
//       teacher: 'cherry',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-cherry',
//       liveName: '06 生命周期',
//       liveTime: date - 1000 * 60 * 60 * 24 * 2,
//       liveDuration: 120,
//       teacher: 'cherry',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-cherry',
//       liveName: '07 组件',
//       liveTime: date - 1000 * 60 * 60 * 24 * 1,
//       liveDuration: 120,
//       teacher: 'cherry',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-cherry',
//       liveName: '08 组件通信',
//       liveTime: date / 0,
//       liveDuration: 120,
//       teacher: 'cherry',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-cherry',
//       liveName: '09 组件通信',
//       liveTime: date / 1 + 1000 * 60 * 60 * 24 * 1,
//       liveDuration: 120,
//       teacher: 'cherry',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-cherry',
//       liveName: '10 Vue语法',
//       liveTime: date / 1 + 1000 * 60 * 60 * 24 * 2,
//       liveDuration: 120,
//       teacher: 'cherry',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-cherry',
//       liveName: '11 Vue过渡',
//       liveTime: date / 1 + 1000 * 60 * 60 * 24 * 3,
//       liveDuration: 120,
//       teacher: 'cherry',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-cherry',
//       liveName: '12 过渡动画',
//       liveTime: date / 1 + 1000 * 60 * 60 * 24 * 4,
//       liveDuration: 120,
//       teacher: 'cherry',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-朱雀',
//       liveName: '13 Vuex',
//       liveTime: date / 1 + 1000 * 60 * 60 * 24 * 5,
//       liveDuration: 120,
//       teacher: 'cherry',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-cherry',
//       liveName: '14 vuex',
//       liveTime: date / 1 + 1000 * 60 * 60 * 24 * 6,
//       liveDuration: 120,
//       teacher: 'cherry',
//     },
//     {
//       courseName: 'web前端全栈进阶班',
//       className: 'web-前端进阶框架-cherry',
//       liveName: '15 vue-router',
//       liveTime: date / 1 + 1000 * 60 * 60 * 24 * 7,
//       liveDuration: 120,
//       teacher: 'cherry',
//     },
//   ]
// }).then(res => {
//   let liveID = res._id
//   // 班期
//   classDB.create({
//     courseName: 'web前端全栈进阶班',
//     className: 'web-前端进阶框架-cherry',
//     // 过去30-20的招生时间
//     enrollTime: [date - 1000 * 60 * 60 * 24 * 30, date - 1000 * 60 * 60 * 24 * 20],
//     studentNum: 100,
//     updatePeople: 'cherry',
//     // 创建班期的时间
//     updateTime: date - 1000 * 60 * 60 * 24 * 30,
//     liveList: liveID
//   })
// })
//
//
