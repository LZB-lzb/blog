const mongoose = require('mongoose');
var Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/itcast');
// 构造数据库集合的文档结构
const artSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    pub: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})
const Art = mongoose.model('Art', artSchema);
var admin = new Art({
    title: 'vue深入学习',
    date: '2016-05-03',
    name: '王小虎',
    pub: true,
    message: 'Vue是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。'
})
var dmin = new Art({
    title: 'vue入门',
    date: '2016-05-01',
    name: '王大虎',
    pub: true,
    message: 'Vue是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。'
})
// 数据持久化
// admin.save().then(() => console.log('success1'))
// dmin.save().then(() => console.log('success2'))
// Art.find(function(err,ret){
//         if(err){
//             console.log('查询失败')
//         }else{
//             console.log(ret)
//         }
//     })
module.exports=mongoose.model('Art',artSchema)