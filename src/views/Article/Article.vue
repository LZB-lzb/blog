<template>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick" id="table">
        <el-tab-pane label="全部文章" name="first"><all></all> </el-tab-pane>
        <el-tab-pane label="已发表" name="second"><publish></publish></el-tab-pane>
        <el-tab-pane label="草稿箱" name="third"><draft></draft></el-tab-pane>
        <el-tab-pane label="回收站" name="forth"><rubbish></rubbish></el-tab-pane>
    </el-tabs>
</template>

<script>
    import all from './All.vue'
    import publish from './Publish.vue'
    import draft from './Draft.vue'
    import rubbish from './Rubbish.vue'
    export default {
        components:{
            all,
            publish,
            draft,
            rubbish
        },
        data() {
            return {
                activeName: 'first'
            };
        },
        methods: {
            handleClick(tab, event) {
                // console.log(tab, event);
            }
        },
        mounted() {
            if(!this.$store.state.login.token){
             return  this.$router.push('/login')
            }
            this.$store.commit('getdata')
        },
    };
</script>
<style scoped lang="less">
    #table{
        margin: 1vw;
        width: 82vw;
    }
</style>