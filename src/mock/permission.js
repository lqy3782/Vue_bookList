import Mock from 'mockjs';
export default {
    getMenu: config => {
        const {
            username,
            password
        } = JSON.parse(config.body);
        if (username === 'admin' || username === 'ydadmin') {
            if (username === 'admin' && password === "admin") {
                // 超级管理员登陆成功显示可以跳转到首页和用户管理页面
                return {
                    code: 200,
                    data: {
                        menu: [{
                                path: '/',
                                name: 'home',
                                label: '首页',
                                icon: "s-home",
                                url: 'Home/Home'

                            },
                            {
                                path: '/user',
                                name: 'user',
                                label: '用户管理',
                                icon: "user",
                                url: 'UserManage/UserManage'

                            }
                        ],
                        token: Mock.Random.guid(),
                        message: '获取成功'
                    }
                }
            } else if (username === 'ydadmin' && password === 'ydadmin') {
                // 普通用户登陆成功只能显示首页
                return {
                    code: 200,  // 成功状态码
                    data: {
                        menu: [{
                            path: '/',
                            name: 'home',
                            label: '首页',
                            icon: "s-home",
                            url: 'Home/Home'

                        }],
                        token: Mock.Random.guid(),
                        message: '获取成功'
                    }
                }
            } else {
                return {
                    code: -999,
                    data: {
                        message: "密码错误"
                    }
                }
            }
        } else {
            return { 
                code: -999,    //错误状态码
                data: {
                    message: "用户不存在"
                }
            }
        }
    }
}