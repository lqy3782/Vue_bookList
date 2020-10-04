<template>
  <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="login-container">
    <h3 class="login-title">系统登录</h3>
    <el-form-item label="用户名" prop="username">
      <el-input type="input" autocomplete="off" placeholder="请输入用户名" v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item class="login-submit">
      <el-button type="primary" @click="login">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "admin",
        password: "admin",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, message: "用户名长度不能小于3位", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    login() {
      try {
        this.$http.post("/permission/getMenu", this.form).then((res) => {
          const resData = res.data || {};
          if (resData.code === 200) {
            this.$store.commit("clearMenu");
            this.$store.commit("setMenu", resData.data.menu);
            this.$store.commit("setToken", resData.data.token);
            this.$store.commit("addMenu", this.$router);

            this.$router.push({ name: "home" });
          } else {
            this.$message.console.warning(resData.data.message);
          }
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  border-radius: 15px;
  box-shadow: 0 0 25px #cac6c6;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
}
.login-title {
  margin: 0 auto 40px auto;
  text-align: center;
  color: #505428;
}
.login-submit {
  margin: 10px auto 0 auto;
}
</style>