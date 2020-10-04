<template>
  <el-row class="home" :gutter="20">
    <!-- 左侧部分  占整体宽度的8/24-->
    <el-col :span="8">
      <!-- 用户信息   鼠标悬浮时显示阴影-->
      <el-card shadow="hover">
        <div class="user">
          <img src="@/assets/images/logo.png" alt />
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>
            上次登录时间：
            <span>2019</span>
          </p>
          <p>
            上次登录地点：
            <span>北京</span>
          </p>
        </div>
      </el-card>
      <!-- 订单信息 -->
      <el-card shadow="hover" style="margin-top:20px">
        <!-- :data="tableData"   使表格内数据变化 -->
        <el-table :data="tableData">   
          <!-- v-for遍历表头数据 -->
          <el-table-column v-for="(val,key) in tableLabel" :key="key" :prop="key" :label="val"></el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <!-- 右边部分 占home宽度的16/24 -->
    <el-col :span="16">
      <div class="el-num">
        <el-card
          :body-style="{display:'flex',padding:0}"
          v-for="item in countData"
          :key="item.name"
          shadow="hover"
        >
        <!-- ${item.icon}为存储countData对象中的icon属性的变量 -->
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{
                background:item.color
            }"
          ></i>
          <div class="detail">
            <p class="num">￥ {{item.value}}</p>
            <p class="txt">￥ {{item.name}}</p>
          </div>
        </el-card>
      </div>
      <el-card shadow="hover" style="height:280px">
        <!-- common-echarts为占位符 将折线图表内容渲染到该容器中 -->
        <common-echarts style="height:280px" :chartData="echartData.order" />
      </el-card>
      <div class="graph">
        <el-card shadow="hover" style="height:260px">
         <!-- common-echarts为占位符 将柱状图图表内容渲染到该容器中 -->
          <common-echarts style="height:260px" :chartData="echartData.user" />
        </el-card>
        <!-- common-echarts为占位符 将饼图图表内容渲染到该容器中 -->
        <el-card shadow="hover" style="height:260px">
          <common-echarts style="height:240px" :chartData="echartData.count" :isAxisChart="false" />
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
//  注册图表组件CommonEcharts
import CommonEcharts from "@/components/CommonEcharts";
// 引用图表组件CommonEcharts
export default {
  components: {
    CommonEcharts,
  },
  data() {
    return {
      countData: [
        {
          name: "今日支付订单1",
          value: 1233,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日支付订单2",
          value: 1344,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日支付订单3",
          value: 1455,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日支付订单4",
          value: 1566,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日支付订单5",
          value: 1677,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日支付订单6",
          value: 1788,
          icon: "success",
          color: "#2ec7c9",
        },
      ],
      // 表头数据
      tableLabel: {
        name: "品牌",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalByy: "总购买",
      },
      // 表单数据
      tableData: [],
      echartData: {
        order: {
          xData: [],
          series: [],
        },
        user: {
          xData: [],
          series: [],
        },
        count: {
          series: [],
        },
      },
    };
  },
  // 调用函数动态获取表格和表单的数据
  created() {
    this.getTableData();
    this.getChartData();
  },
  methods: {
    getTableData() {
      // 容错处理 当页面出错时抛出异常
      try {
        // 接口地址
        this.$http.get("http://yd.com/home/getData").then((res) => {
          const result = res.data;
          this.tableData = result.data.tableData;
        });
      } catch (error) {
        console.error(error);
      }
    },
    getChartData() {
      // 容错处理 当页面出错时抛出异常
      try {
        this.$http.get("http://yd.com/home/getChartData").then((res) => {
          const result = res.data;

          //   折线图
          const order = result.data.orderData;
          this.echartData.order.xData = order.date;
          //  处理series数据格式
          let keyArray = Object.keys(order.data[0]);
          keyArray.forEach((key) => {
            this.echartData.order.series.push({
              name: key,
              data: order.data.map((item) => item[key]),
              type: "line",
            });
          });

          //   柱状图   进行map遍历对象
          console.log(result.data.userData.map((item) => item.date));
          this.echartData.user.xData = result.data.userData.map(
            (item) => item.date
          );
          //使用push方法将数据渲染到对象中
          this.echartData.user.series.push({
            name: "新增用户",
            data: result.data.userData.map((item) => item.new),
            type: "bar",
          });
          this.echartData.user.series.push({
            name: "激活用户",
            data: result.data.userData.map((item) => item.active),
            type: "bar",
          });
          //   饼图
          this.echartData.count.series.push({
            type: "pie",
            data: result.data.countData,
          });
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin-top: 20px;
  padding-left: 20px;
  .user {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 2px solid #ccc;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-bottom: 40px;
    }
    .userinfo {
      .name {
        font-size: 32px;
        margin-bottom: 10px;
      }
      .acsess {
        color: #999;
      }
    }
  }
  .login-info {
    p {
      line-height: 28px;
      font-size: 14px;
      color: #999;
      span {
        color: #666;
        margin-left: 60px;
      }
    }
  }
  //   右侧层叠样式
  .el-num {
    display: flex;
    flex-wrap: wrap; //当宽度不够时进行自动换行
    justify-content: space-between;
    .el-card {
      width: 32%;
      margin-bottom: 20px;
    }
    .icon {
      font-size: 30px;
      width: 80px;
      height: 80px;
      text-align: center;
      line-height: 80px;
      color: #fff;
    }
    .detail {
      margin-left: 15px;
      display: flex;
      flex-direction: column;     //设置垂直排列，默认水平排列
      justify-content: center;   //内容水平居中显示
      .num {
        font-size: 30px;
        margin-bottom: 10px;
      }
      .txt {
        font-size: 14px;
        text-align: center;
      }
    }
  }
  .graph {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .el-card {
      width: 48%;
    }
  }
}
</style>