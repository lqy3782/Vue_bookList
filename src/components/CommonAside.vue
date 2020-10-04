<template>
    <!-- $route.path为一开始打开页面默认显示的页面路由-->
     <el-menu 
     :default-active="$route.path" 
     active-text-color="#ffd04b"
     :collapse="isCollapse"
     class="el-menu-vertical-demo"
     >
     <!-- 频繁切换时使用v-show -->
     <h3 v-show = "!isCollapse">一灯后台管理系统</h3>
     <h3 v-show = "isCollapse">一灯</h3>
     <!-- 关键字k必须写且必须是唯一的 -->
      <el-menu-item
        v-for="item in menu"
        :key="item.path"       
        :index="item.path" 
        @click="handleNavClick(item.name)"
        >
        <!-- 动态拼接字符串 -->
        <i :class="'el-icon-'+ item.icon"></i>       
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
    </el-menu>
</template>
<script>
export default {
    // 组件会进行重复使用 应使用函数
    data() {
        return {
        };
    },
    //利用computed计算属性获取状态
    computed: {
        isCollapse() {
            return this.$store.state.tab.isCollapse;
        },
        menu() {
            return this.$store.state.tab.menu;
        }
    },
    methods: {
        handleNavClick(routerName) {
            // route表示单个路由    router表示路由管理器
            this.$router.push({name: routerName});
        },
    },
};
</script>
<style lang="scss" scoped>
.el-menu {
    height: 100%;
    border: none;
    color: #fff;
    background-color: #545c64;
    h3 {
        color: #fff;
        text-align: center;
        line-height: 48px;
    }
}
.el-menu-item:focus, .el-menu-item:hover {
    outline: 0;
    background-color: #4c4e5291;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>