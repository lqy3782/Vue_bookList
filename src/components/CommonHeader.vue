<template>
<!-- header为语义化标签 类似的还有nav article section  aside footer-->
  <header>
    <div class="l-content">
      <!-- 使用element-ui 按钮组件 -->
      <el-button plain icon="el-icon-menu" size="mini" class="el-button" @click="handleBtnClick"></el-button>
      <h3>首页</h3>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img src="@/assets/images/logo.png" alt="" class="user-img">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    handleBtnClick() {
      this.$store.commit('collapseMenu')
    },
    logOut() {
      this.$store.commit('clearToken');
      this.$store.commit('clearMenu');
      location.reload();
    }
  }
};
</script>
<style lang="scss" scoped>
// scoped --- 样式只在本组件内起作用
header {
  display: flex;         //弹性盒模型布局
  height: 100%;
  align-items: center;         //上下居中
  justify-content: space-between;   //两端对齐
  .l-content {
    display: flex;
    align-items: center;
    .el-button {
      margin-right: 20px;
    }
    h3 {
      color: #fff;
    }
  }
  .r-content {
      .user-img {
         width: 40px;
         height: 40px;
         border-radius: 50%;
      }
  }
}
</style>