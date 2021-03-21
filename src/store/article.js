import axios from 'axios'
import Cookie from 'js-cookie'
export default {
    state: {
        tableData: [
            {
                title: 'vue入土',
                date: '2016-05-05',
                name: '王小虎',
                pub: false,
                message: 'Vue是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。'
            }, {
                title: 'vue高级架构',
                date: '2016-05-04',
                name: '王小虎',
                pub: false,
                message: 'Vue是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。'
            }, {
                title: 'vue深入学习',
                date: '2016-05-03',
                name: '王小虎',
                pub: true,
                message: 'Vue是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。'
            }, {
                title: 'vue入门',
                date: '2016-05-01',
                name: '王大虎',
                pub: true,
                message: 'Vue是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。'
            }
        ],
        rubtableData: [
            {
                title: '入门到跑路',
                date: '2016-06-05',
                name: '王小虎',
                pub: false,
                message: '删库跑路'
            }, {
                title: '程序员的自我修养',
                date: '2016-06-04',
                name: '王小虎',
                pub: false,
                message: '就恩敲，就恩改'
            }],
        editdata: {},
    },
    mutations: {
        getdata(state) {
            axios.get('/api/addart').then(res => {
                // console.log(res.data[0])
                state.tableData = res.data
                state.tableData.forEach(item=>item.date=item.date.substr(0,10))
                console.log(state.tableData)
            })
        },
        geteditdata(state, val) {

            state.editdata = val
            // console.log(state.editdata)
            return
        },
        finishedit(state, val) {
            if (val.name) {
                let v = state.tableData.find(item => item.title == val.title)
                if (v) {
                    v.pub = true
                    Object.assign(v, val)
                    // state.tableData.find((item, index) => {
                    //     if (item.title == v.title) {
                    //         return state.tableData.splice(index, 1)
                    //     }
                    // })
                    let newtable = state.tableData.filter(item => item.title !== v.title)
                    state.tableData = newtable
                    return state.tableData.unshift(v)
                }
            }
            val.pub = true
            val.name = '王小虎'
            val.date = '2016-06-04'
            return state.tableData.unshift(val)
            // state.editdata = val
            // console.log(state.editdata)
        },
        unpubedit(state, val) {
            if (val.name) {
                let v = state.tableData.find(item => item.title == val.title)
                if (v) {
                    v.pub = false
                    Object.assign(v, val)
                    let newtable = state.tableData.filter(item => item.title !== v.title)
                    state.tableData = newtable
                    return state.tableData.unshift(v)
                }
            }
            val.pub = false
            val.name = '王小虎'
            val.date = '2016-06-04'
            return state.tableData.unshift(val)
        },
        torubbish(state, val) {
            let newtable = state.tableData.filter(item => item !== val)
            state.rubtableData.unshift(val)
            state.tableData = newtable
            //   axios.get(`/api/del?name=${val}`).then(res => {
            //     // console.log(res.data[0])
            //     // state.user=res.data.filter(item=>item.paw)
            //     // console.log(state.user)
            //   })
        },
        leaverubbish(state, val) {
            let newtable = state.rubtableData.filter(item => item !== val)
            val.pub = false
            state.tableData.unshift(val)
            state.rubtableData = newtable
        },
    },
    actions: {
    },
    modules: {
    }
}