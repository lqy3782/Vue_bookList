import axios from 'axios';
// 请求头配置
const service = axios.create({
    timeout: 3000,    //请求时间超过300秒时请求失败
})
// 请求拦截  将请求发至服务器前拦截
service.interceptors.request.use(
    config => {
        // 请求数据校验
        return config;
    },
    err => {        //监听错误
        console.log(err);
    }
)

// 响应拦截   对服务端返回数据进行拦截
service.interceptors.response.use(
    response => {
        let res = {};
        res.status = response.status;
        res.data = response.data;
        return res;
    },
    err => {        //监听错误
        console.log(err);
    }
)

export default service;  // 导出后才能再其他页面进行使用