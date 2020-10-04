import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import http from './api/config'
import './mock';

// 全局配置

//   引入初始化样式    @为根目录src  
import "@/assets/scss/reset.scss";
// element-ui 引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引用第三方插件时必须使用use
Vue.use(ElementUI);

// 将http挂载到Vue原型上
Vue.prototype.$http = http;
// 路由检查站
router.beforeEach((to,from,next) => {
  store.commit('getToken');
  let token = store.state.user.token;
  if(!token && to.name !== 'login') {
    next({
      name: 'login'
    })
  } else {
    next({})
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    store.commit('addMenu',router);
  }
}).$mount('#app')
