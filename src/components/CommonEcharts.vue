<template>
    <!-- 通过ref获取dom实例，渲染图表数据 -->
     <div ref="echart" style="height:100%"></div> 
</template>

<script>
import echarts from 'echarts';
export default {
    props: {
        chartData: {
            type: Object,
            default() {
                return {
                    // 横轴数据
                    xData:[],
                    // 纵轴数据
                    series:[],
                };
            },
        },
        // 判断是否为有坐标轴的图表，默认为true，若为false则为饼图，饼图没有坐标轴
        isAxisChart: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            echart: null,
            axisOption: {
                legend: {   
                    textStyle: {
                        color: "#333",
                    },
                }, 
                //图表网格距离左侧坐标轴的距离
                grid: {
                    left: "20%",
                },
                //当鼠标移至图表上时显示的信息
                tooltip: {
                    trigger:'axis'
                },
                xAxis: {
                    // category——类目轴    time——时间轴    value——数值轴
                    type: 'category',
                    data: [],
                    axisLine: {
                        lineStyle: {
                            color:"#17b3a3",
                        },
                        axisLabel: {
                            color:"#333"
                        },
                    },
                },
                // 设置折线图和柱状图图表类目颜色,从左至右依次取色
                 color: ["#927cff", "#55aaff", "#dab1fd", "#de9472", "#aaff7f", "#00557f","#d4d469"],
                yAxis: [
                    {
                       type: 'value',
                       axisLine: {
                           lineStyle: {
                               color:"#17b3a3"
                           },
                       },
                    },
                ],
                series: [],
            },
            // 饼图配置
            normalOption: {
                tooltip: {
                    trigger:"item",
                },
                  // 设置饼图图表类目颜色
                color: ["#927cff", "#9ceaea", "#dab1fd", "#55aaff", "#aaff7f", "#17b3a3"],
                series: [],   //饼图数据系列
            },
        };
    },
    // mounted生命周期  调用resizeChart函数实现图表大小随窗口大小动态缩放
    mounted() {
        window.addEventListener("resize",this.resizeChart);
    },
    computed: {
        options() {
            return this.isAxisChart ? this.axisOption : this.normalOption;
        },
        isCollpase() {
            return this.$store.state.tab.isCollpase;
        },
    },
    watch: {
        chartData: {
            handler: function() {
                this.initChart();   //初始化图表
            },
            deep:true    //深度监听
        },
        // 防止触发太频繁
        isCollpase() {
            setTimeout(() => {
                this.resizeChart();
            },300)
        },
    },
    methods:{
        initChart() {
            // 数据处理
            this.initChartData();
            // 代码优化 若echart图表已存在，则进行渲染
            if(this.echart) {
                this.echart.setOption(this.options);
            }
            else {
                this.echart = echarts.init(this.$refs.echart);
                this.echart.setOption(this.options);
            }
            
        },
        initChartData() {
            //如果是有坐标轴的图表,则传入x轴和纵轴的数据  否则只传入纵轴的数据
            if (this.isAxisChart) {
                this.axisOption.xAxis.data = this.chartData.xData;
                this.axisOption.series = this.chartData.series;
            }else {
                this.normalOption.series = this.chartData.series;
            }
        },
        resizeChart() {
            // 容错处理  &&为短路表达式，当位于&&前面的式子成立时，后面的代码才会执行
            this.echart && this.echart.resize();  //也可使用if条件判断
        },
    },
    // 清理销毁 防止内存泄漏
    destroyed() {
        window.removeEventListener("resize",this.resizeChart);
    },
};
</script>