<template>
  <div id="log">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.paw" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.rpaw" type="password" placeholder="请再次输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <router-link to="login" id="reg">已有账号？立即登录</router-link>
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
        if (!name) {
          return alert('请输入用户名')
        }
        if(!paw){
          return alert('请输入密码')
        }
        if (paw !== rpaw) {
          return alert('两次密码输入不一致')
        }
        return this.$store.commit("rsettoken", this.form);
      },
    },
    mounted() {
      if (this.$store.state.login.token) {
        this.$router.push('/')
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
      min-width: 400px;
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
        color: red;
        text-decoration: underline;
      }
    }
  }
</style>