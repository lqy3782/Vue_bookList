import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'
import user from './user'

// 如果需要使用第三方插件，需要使用use
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {    //模块化
        tab,
        user
    }
})