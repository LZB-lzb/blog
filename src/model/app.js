var express = require('express')
var User = require('./user')
var Art = require('./article')
var app = express()


app.get('/', function (req, res) {
    User.find(function (err, ret) {
        if (err) {
            return console.log('查询失败')
        }
        // console.log(ret)
        let da = ret
        res.send(da)
    })
})
app.get('/addart', function (req, res) {
    Art.find(function (err, ret) {
        if (err) {
            return console.log('查询失败')
        }
        // console.log(ret)
        let da = ret
        res.send(da)
    })
})
app.get(`/del`, function (req, res) {
    console.log(req.query)
    User.remove(req.query, function (err, ret) {
        if (err) {
            console.log('删除失败')
        } else {
            console.log('删除成功')
        }
    })
})
app.get(`/add`, function (req, res) {
    // console.log(req.query)
    let admin = req.query
    admin.rpaw = admin.paw
    let newu = new User(admin)
    newu.save().then(() => console.log('success1'))
})

app.get(`/editartone`, function (req, res) {
    // console.log(req.query)
    Art.remove({ title: req.query.title }, function (err, ret) {
        if (err) {
            console.log('删除失败')
        } else {
            console.log('删除成功')
            let newu = new Art(req.query)
            newu.save().then(() => console.log('success1'))
        }
    })
})
app.get(`/editarttwo`, function (req, res) {
    let newu = new Art(req.query)
    newu.save().then(() => console.log('success1'))
})

app.listen(3000, function () {
    console.log('app is running')
})