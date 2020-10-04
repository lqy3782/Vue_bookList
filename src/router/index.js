import Vue from 'vue'
import VueRouter from 'vue-router/'     //文件名为index.js时可以省略index

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


// 实例化  进行动态路由配置
export default new VueRouter({
    routes: [// 页面路由注册
        {
            path: '/',        //跟路由
            name: 'login',
            component: () => import('@/views/Login/Login'),   //跟路由对应的跳转页面
        }
    ]
})