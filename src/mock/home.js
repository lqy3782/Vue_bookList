import Mock from 'mockjs';

export default {
    getHomeLocalData: () => {
        return {
            code: 200,   //请求成功
            data: {
                 //10-1000随机数，保留0-2位小数
                tableData: [{
                        name: "图书一",
                        todayBuy: Mock.Random.float(10, 1000, 0, 2),    
                        monthBuy: Mock.Random.float(100, 1000, 0, 2),
                        totalByy: Mock.Random.float(100, 1000, 0, 2),
                    },
                    {
                        name: "图书一",
                        todayBuy: Mock.Random.float(10, 1000, 0, 2),
                        monthBuy: Mock.Random.float(100, 1000, 0, 2),
                        totalByy: Mock.Random.float(100, 1000, 0, 2),
                    },
                    {
                        name: "图书一",
                        todayBuy: Mock.Random.float(100, 1000, 0, 2),
                        monthBuy: Mock.Random.float(10, 1000, 0, 2),
                        totalByy: Mock.Random.float(100, 1000, 0, 2),
                    },
                    {
                        name: "图书一",
                        todayBuy: Mock.Random.float(100, 1000, 0, 2),
                        monthBuy: Mock.Random.float(100, 1000, 0, 2),
                        totalByy: Mock.Random.float(100, 1000, 0, 2),
                    },
                ]
            }
        }
    },
    getChartLocalData() {
        let list = [];
        for (let i = 0; i < 7; i++) {
            list.push({
                '图书一': Mock.Random.float(100, 8000, 0, 0),
                '图书二': Mock.Random.float(100, 8000, 0, 0),
                '图书三': Mock.Random.float(100, 8000, 0, 0),
                '图书四': Mock.Random.float(100, 8000, 0, 0),
                '图书五': Mock.Random.float(100, 8000, 0, 0),
                '图书六': Mock.Random.float(100, 8000, 0, 0),
                '图书七': Mock.Random.float(100, 8000, 0, 0)
            })
        }
        return {
            code: 200,
            data: {
                // 饼图数据 没有坐标轴，只一个数据
                countData: [{
                        name: '图书一',
                        value: Mock.Random.float(100, 8000, 0, 0)
                    },
                    {
                        name: '图书二',
                        value: Mock.Random.float(100, 8000, 0, 0)
                    },
                    {
                        name: '图书三',
                        value: Mock.Random.float(100, 8000, 0, 0)
                    },
                    {
                        name: '图书四',
                        value: Mock.Random.float(100, 8000, 0, 0)
                    },
                    {
                        name: '图书五',
                        value: Mock.Random.float(100, 8000, 0, 0)
                    },
                    {
                        name: '图书六',
                        value: Mock.Random.float(100, 8000, 0, 0)
                    }
                ],
                // 柱状图
                userData: [{
                        date: '周一',
                        new: Mock.Random.float(100, 8000, 0, 0),
                        active: Mock.Random.float(100, 8000, 0, 0)
                    },
                    {
                        date: '周二',
                        new: Mock.Random.float(100, 8000, 0, 0),
                        active: Mock.Random.float(100, 8000, 0, 0)
                    },
                    {
                        date: '周三',
                        new: Mock.Random.float(100, 8000, 0, 0),
                        active: Mock.Random.float(100, 8000, 0, 0)
                    },
                    {
                        date: '周四',
                        new: Mock.Random.float(100, 8000, 0, 0),
                        active: Mock.Random.float(100, 8000, 0, 0)
                    },
                    {
                        date: '周五',
                        new: Mock.Random.float(100, 8000, 0, 0),
                        active: Mock.Random.float(100, 8000, 0, 0)
                    },
                    {
                        date: '周六',
                        new: Mock.Random.float(100, 8000, 0, 0),
                        active: Mock.Random.float(100, 8000, 0, 0)
                    },
                    {
                        date: '周日',
                        new: Mock.Random.float(100, 8000, 0, 0),
                        active: Mock.Random.float(100, 8000, 0, 0)
                    },
                ],
                //  折线图横轴数据
                orderData: {
                    date: [
                        "20200806",
                        "20200807",
                        "20200808",
                        "20200809",
                        "20200806",
                        "20200806",
                        "20200806",
                    ],
                    data: list  //纵轴数据
                }
            }
        }
    }
}