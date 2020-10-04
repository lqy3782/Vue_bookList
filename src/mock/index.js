import Mock from 'mockjs';
import homeApi from './home';
import permissionApi from './permission';

//      正则表达式书写接口地址   \为转义字符
Mock.mock(/\/home\/getData/,homeApi.getHomeLocalData);
Mock.mock(/\/home\/getChartData/,homeApi.getChartLocalData);
Mock.mock(/\/permission\/getMenu/, permissionApi.getMenu);

