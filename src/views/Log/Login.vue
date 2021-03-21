<template>
  <div id="log">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.paw" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit" style="margin-right: 10px">立即登录</el-button>
        <el-popover placement="top-start" width="200" trigger="click" content="♥ 亲，这边建议你重新注册哦 ♥">
          <el-button slot="reference">忘记密码？</el-button>
        </el-popover>
        <router-link to="register" id="reg">没有账号？立即注册</router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    computed: {
      ...mapState({
        token: (state) => state.login.token,
      }),
    },
    data() {
      return {
        form: {
          name: "",
          paw: "",
          rpaw: "",
        },
      };
    },
    methods: {
      onSubmit() {
        const { name, paw, rpaw } = this.form
        if (name && paw) {
          return this.$store.commit("settoken", this.form);
        }
      },
    },
    mounted() {
      if (this.$store.state.login.token) {
        this.$router.push("/");
      }
    },
  };
</script>
<style scoped lang="less">
  #log {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95vw;
    height: 90vh;

    .el-form {
      width: 35vw;
      min-width: 450px;
      padding: 3%;
      padding-right: 5%;
      padding-top: 4%;
      border: 1px solid black;
      border-radius: 5%;
      box-shadow: darkgrey 10px 10px 30px 5px;

      #reg {
        text-decoration: none;
        position: absolute;
        right: 0;
      }

      #reg:hover {
        text-decoration: underline;
        color: red;
      }
    }
  }
</style>