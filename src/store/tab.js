import Cookie from 'js-cookie';
export default {
    state: {
        isCollapse: false,
        menu: [],
    },
    // 改变state的状态只能在mutations中
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse;
        },
        setMenu(state, val) {
            state.menu = val;
            // 因为是对象，所以需要JSON.stringify处理下
            Cookie.set('menu', JSON.stringify(val));
        },
        clearMenu(state) {
            state.menu = [];
            Cookie.remove('menu');
        },
        addMenu(state, router) {
            const menu = JSON.parse(Cookie.get('menu'));
            if (!menu) {
                return;
            }
            state.menu = menu;
            // 添加动态路由
            let currentMenu = [{
                path: '/',
                component: () => import('@/views/Main'),
                children: []
            }]
            menu.forEach(item => {
                item.component = () => import(`@/views/${item.url}`);
                currentMenu[0].children.push(item);
            })
            // 添加动态路由
            router.addRoutes(currentMenu)
        }

    }
}