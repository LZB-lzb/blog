<template>
    <el-row class="tac">
        <el-col :span="3">
            <el-menu default-active="/" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
                <el-menu-item index="/">
                    <i class="el-icon-setting"></i>
                    <span slot="title">首页</span>
                </el-menu-item>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>文章管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/article">文章列表</el-menu-item>
                        <el-menu-item index="/edit">发表文章</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="user">
                    <i class="el-icon-setting"></i>
                    <span slot="title">用户管理</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>

</template>
<script>
    export default {
        methods: {
            handleOpen(key, keyPath) {
                // console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                // console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .el-menu {
        height: 92vh;
        width: 12vw;
        min-width: 160px;
    }

    .el-submenu .el-menu-item {
        min-width: 10vw;
    }
</style>