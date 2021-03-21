import axios from 'axios'
import Cookie from 'js-cookie'
export default {
    state: {
        token: true,
        user: [],
    },
    mutations: {
        gettoken(state) {
            if (!Cookie.get('token')) {
                return Cookie.set('token', JSON.stringify(false), { expires: 1, path: '/' })
            }
            state.token = JSON.parse(Cookie.get('token'))
            axios.get('/api').then(res => {
                // console.log(res.data[0])
                state.user = res.data.filter(item => item.paw)
                console.log(state.user)
            })
        },
        settoken(state, val) {
            if (!Cookie.get('token')) {
                return
            }
            let u = state.user.filter(item => item.name == val.name && item.paw == val.paw)
            if (u.length) {
                return state.token = Cookie.set('token', JSON.stringify(true), { expires: 1, path: '/' })
            }
            return alert('密码错误')
        },
        rsettoken(state, val) {
            if (!Cookie.get('token')) {
                return
            }
            let u = state.user.filter(item => item.name == val.name)
            if (u.length) {
                return alert('该用户名已经被注册')
            }
            console.log(val)
            // state.user.push(val)
            axios.get(`/api/add?name=${val.name}&&paw=${val.paw}`).then(res => { })
            return state.token = Cookie.set('token', JSON.stringify(true), { expires: 1, path: '/' })
        },
        quittoken(state) {
            if (!Cookie.get('token')) {
                return
            }
            state.token = Cookie.set('token', JSON.stringify(false), { expires: 1, path: '/' })
            location.reload()
        },
    },
    actions: {
    },
    modules: {
    }
}