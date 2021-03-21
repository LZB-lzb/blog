<template>
  <header>
    <div class="l-content"><h2>Vue博客平台</h2></div>
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <el-avatar :src="userImg"></el-avatar>
        <el-dropdown-menu slot="dropdown">
          <div @click="drawer = true">
            <el-dropdown-item> 个人中心</el-dropdown-item>
          </div>
          <div @click="Qlogin">
            <el-dropdown-item>退出</el-dropdown-item>
          </div>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-drawer title="个人中心" :visible.sync="drawer" :with-header="false">
      <span>我来啦!</span>
    </el-drawer>
  </header>
</template>
  
  <script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({}),
  },
  watch: {},
  data() {
    return {
      userImg: require("../assets/images/user01.jpg"),
      drawer: false,
    };
  },
  methods: {
    apperror(val) {
      switch (val) {
        case 1:
          return this.$message({
            message: "请正确输入用户名和密码",
            type: "warning",
          });
        case 2:
          return this.$message({
            message: "两次密码输入不一致",
            type: "warning",
          });
        case 3:
          return this.$message({
            type: "success",
            message: "退出成功!",
          });
        case 4:
          return this.$message({
            type: "info",
            message: "已取消",
          });
        case 5:
          return this.$message.error("用户名或密码错误");
        case 6:
          return this.$message({
            type: "success",
            message: "登陆成功!",
          });
        case 7:
          return this.$message.error("该用户名已经被注册");
      }
    },
    Qlogin() {
      // if (!this.login) {
      //   return;
      // }
      this.$confirm("此操作退出登陆, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // this.$store.commit("Qlogin");
          this.$store.commit("quittoken");
          this.$router.push('/login')
          this.apperror(3);
        })
        .catch(() => {
          this.apperror(4);
        });
    },
  },
};
</script>
  
  <style scoped lang="less">
header {
  width: 100vw;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  background-color: #5b9cf1;
  text-align: center;
  .l-content {
    margin-left: 10px;
    color: white;
    line-height: 2vh;
  }
  .r-content {
    transform: translate(-1vw, 1vh);
    .el-avatar--circle {
      cursor: pointer;
      transition: all 2s;
      animation: zhuan 8s linear infinite;
    }

    @keyframes zhuan {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>