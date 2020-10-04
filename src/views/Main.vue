<template>
  <!-- 进行页面布局 -->
  <el-container style="height:100%">
      <!-- 左侧菜单栏 -->
    <el-aside width="auto">
        <common-aside />
    </el-aside>
    <el-container>
        <!-- 顶部header部分 -->
      <el-header>
          <common-header />
      </el-header>
      <!-- 内容展示区 -->
      <el-main>
          <!-- 占位符——页面跳转时先通过跟路由渲染到Main.vue组件，再由占位符渲染到el-main部分-->
          <router-view />

      </el-main>
    </el-container>
  </el-container>
</template>
<script>
// 引入组件
import CommonHeader from '@/components/CommonHeader';
import CommonAside from '@/components/CommonAside';
export default {
  // 组件声明
    components: {
        CommonHeader,
        CommonAside,
    }
}
</script>
<style lang="scss">
.el-header {
  background-color: #333;
}
.el-main {
  background-color: #e9eef3;
  padding: 0;
}
</style>