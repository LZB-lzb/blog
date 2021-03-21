const mongoose = require('mongoose');
var Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/itcast');
// 构造数据库集合的文档结构
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    paw: {
        type: String,
        required: true
    },
    rpaw: {
        type: String,
        required: true
    }
})
const User = mongoose.model('User', userSchema);
var admin = new User({
    name:123,
    paw:'abc',
    rpaw:'abc'
})
var dmin = new User({
    name:321,
    paw:'cba',
    rpaw:'cba'
})
// 数据持久化
// admin.save().then(() => console.log('success1'))
// dmin.save().then(() => console.log('success2'))
// / User.remove({
//     name: '王小虎'
//     },function(err,ret){
//         if(err){
//             console.log('删除失败')
//         }else{
//             console.log('删除成功')
//         }
//     })
module.exports=mongoose.model('User',userSchema)