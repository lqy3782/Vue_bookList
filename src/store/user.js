import Cookie from 'js-cookie';
export default {
    state: {
        token: ''
    },
    // 改变state的状态只能在mutations中
    mutations: {
        setToken(state, val) {
            state.token = val;
            Cookie.set('token', val);
        },
        clearToken(state) {
            state.token = '';
            Cookie.remove('token');
        },
        getToken(state) {
            state.token = Cookie.get('token')
        }
    }
}