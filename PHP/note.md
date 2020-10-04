实训第八天，主要学习了项目整体构架分析，创建项目。

TCP    192.168.1.3:56135      183.192.195.139:8080   ESTABLISHED     15884  查看占用8080端口的PID

1. 配置好环境是项目开发的首要前提。
(1) 安装node,node npm 是随着node一起安装的。node -v查看node版本， npm -v 查看npm版本信息。

(2) 利用npm安装webpack，。webpack是一个模块打包器，可以分析各个模块的依赖关系，最终打包成我们常见的静态文件。vue-cli是基于webpack进行封装的。
安装命令：npm init (初始化） 
安装webpack：npm install --save-dev webpack， 
安装webpack-cli：npm install --save-dev webpack-cli，

(3) 安装Vue-cli  $ npm install -g @vue/cli  查看版本信息 ：vue -V

2. 技术栈：vue vue-cli element-ui vue-router axios  vuex mock Echarts

3. 项目整体架构
    左侧菜单栏部分
    顶部header部分  ——使用语义化标签<header></header>，右侧logo和下拉菜单使用element-ui提供的组件
    内容展示区 ——动态更新(vue-router)

4. 进入目录创建项目   
    命令：vue create vue_stu
    项目目录：
        —— src 编写代码的文件夹
        —— assets 存放静态资源文件夹
        —— components 公共组件 header aside
        —— mock 处理模拟数据
        —— router 管理页面跳转的路由配置信息
5. 运行项目 npm run serve 
    访问页面 
            - Local:   http://localhost:8080/
            - Network: http://192.168.1.3:8080/
6. 项目打包 npm run build
    打包后生成dist目录 ——>css img js favicon.icon index.html

7. 实现侧边栏和顶部模块的初步布局。
8. 安装sass：npm install node-sass --save-dv
            npm install sass-loader --save -dv



1. 跨组件通信——Vuex，相当于本地数据库 安装命令：npm install vuex
2. 使用第三方插件时需要在vue中使用use引用

3. 状态管理时，state的状态只能在mutations中改变

4. /store/index.vue 需要在每个页面引入，因此需要对其进行全局配置。即在main.js中引入，并将其挂载到Vue实例上，后续使用时通过this调用。

4. computed 获取状态

5. 和模型布局：
    display:flex
    flex-wrap: wrap;   //当宽度不够时进行自动换行
    justify-content: space-between; //两端对齐

6.  表格等的数据类型、布局形式相同，应使用v-for遍历定义的data{}数据集合，动态获取数据。

7. 模拟真实接口 安装axios： npm install axios 
       request—— 请求拦截：请求发出前被拦截
      response——相应拦截：响应被拦截

8. 安装mockjs  npm install mockjs 
    Mock.Random,float(100,1000,0,2) ---> table随机数模拟
    Mock.mock(/\/home\/getData/,homeApi.getHomeLocalData) ---> mock拦截后返回本地模拟数据

9. echarts图表  官网在线配置后直接引入
    ref="echarts"---> 获取dom实例，数据渲染 
    props   --->接收外部数据
                    横轴数据、纵轴数据、图标类型


1. web服务器   XAMPP 集成环境  7.4.8/PHP 7.4.8 第3个

    http://localhost:8080/dashboard/

2. 安装完毕后启动Apache Web Server 

3. 打开浏览器。在地址栏中输入域名：http://localhost

4. PHP——开源脚本语言，运行在服务器上.

5. PHP扩展名为.php,可以包含文本、HTML、JS、PHP，执行时只处理PHP代码，结果以纯HTML返回给浏览器

6. XAMPP环境中，网站的路径再hcdocs目录下

7. PHP的用途：—— 生成动态页面内容
             —— 操作服务器上的文件：创建、打开、读取、写入、关闭操作
             —— 处理表单数据
             —— 处理数据库中的数据，如增删改查
             —— 对用户进行权限控制：限制用户访问网站上的某些数据

8. PHP脚本以 <?php 开始，以?>结束  //为单行注释     /* */为多行注释

9. PHP变量：
        —— 声明变量  $变量名   语句结束时必须加分号 
        —— 变量名必须以字母或下划线开头,不能以数字开头 
        —— 变量只能包含字母数字和下划线
        —— 变量名中不能包含空格、区分大小写
        —— 弱类型 声明变量时不需要指定类型

10. PHP输出语句：
            —— echo： 可以输出多个字符串
            —— print: 只允许输出一个字符串

10. PHP数据类型
        —— String

        —— Intiger 
            (1) 整型：整数不能包含逗号和空格   包括正数和负数   
            (2)三种表示格式：十进制、十六进制(0x为前缀)、八进制(0为前缀)

        —— Float
            浮点数：带小数部分的数字  科学记数法  $b = 3.5e4   //3.5*10^4  

        —— Boolean     返回true false

        —— Array 数组     $arr = arry('red','blue', 'green')

        —— Object 对象    
               (1) PHP是完全面向对象的对象语言，在PHP使用对象，必须先声明
               (2) 用class关键字声明。
              （3）必须先在类中定义数据类型，然后对类进行实例化后才能使用
               (4)PHP中this关键字指向当前对象实例的指针

        ——null  空值 小写

11. 条件判断 循环 与js语法相同 也支持foreach循环  foreach($value as $array) {};

12. 函数 function functionName() {}   参数也是变量形式 必须加$  return $变量

13. PHP面向对象  
     定义类：class Person {
            var $name;   //成员变量，即类属性
            var $age;
            <!-- 构造函数 -->
            function __construct($$name, $age, $height) {
                $this->name = 
            }
            <!-- 成员函数，即类方法 -->
            function setNmae($name) {
                $this->name = $name
            }

        }
        ——创建对象：$person01 = new Person;   创建对象必须使用new Person后可以加(),也可以不加
        ——类的变量要用var来声明，声明变量的同时可以进行初始化
        __类中定义方法需要用function声明  
        ——类中定义的属性和方法必须实例化之后才能调用$this->name

14. 构造函数——创建对象时 初始化对象

15. 析构函数——当对象的生命周期结束时，用来释放资源

16. $_GET 和$_POST 均为PHP内置变量
    $_GET:向服务器发送请求,获取URL中的数据
    $_POST一般用于表单中


1. 数据库使按照数据结构来组织、存储和管理数据的系统。

2. MySql使关系型数据库

3. 数据库相关术语：
            —— 数据库：一些关联表的集合
            —— 数据表： 表使用来存放数据的结构
            —— 列： 一列包含了相同类型的数据
            —— 行： 一行是一组相关的数据
            —— 索引： 使用索引可以快速访问数据库表中特定的信息

4. 数据表四种基本操作：
                —— 增： insert
                —— 删： delete
                —— 改： update
                —— 查: select

5. PHP操作数据库
    再PHP中有多种方式操作数据库：MySQLi、PDO
    MySQLi只针对mysql数据库，PDO也可支持其他数据库，两者都支持面向对象

6. phpMyAdmin中information_shema、mysql、performance_schema以及phpmyadmin为系统内置库，不能修改。

7. utf8mb4_generral_ci包含几乎所有国家的语言，包括一些表情

8. varchar——变长：节省空间，检索性能差
   char——定长：耗费空间，检索性能较强

9. 程序结构分3层：  前端 —— PHP —— 数据库
    （1） 前端页面通过js向后端那请求数据
    （2） PHP收到请求后进行内部处理，获取数据库数据或向数据库存数据

10. Flight依赖框架：实现RESTful接口

11. RESTful接口基于http协议，以json格式去承载数据

12.  定义接口：

    （1）接口1：获取所有书籍的列表
    （2）接口2：获取单个书籍的详情
    （3）接口3：增加一本书籍的记录
    （4）接口4：删除一本书籍的记录
    （5）接口5：针对指定的书籍进行修改


实训第十四天
今天学习的内容是接着昨天小程序实战。新知识点有动画示例的创建，百度地图城市信息转换成经纬度，天气信息的获取及接口请求，更新时间的实现，地理编码的请求地址处理函数等，比较系统的知识整合起来感觉还是有些难度，还要继续加油。
进度：后台管理系统已经完成了。微信小程序在跟着老师的学习，明天开始准备毕业设计的小程序。


