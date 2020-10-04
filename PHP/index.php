<?php
    // 引入框架  只引用一次
    require_once "flight/Flight.php";

    header('Content-Type: text/html;charset=utf8');
    header('Access-Control-Allow-Origin:*');   //*表示允许任何网址请求
    header('Access-Control-Allow-Methods:POST,OPTIONS,DELETE'); //允许请求的类型
    header('Access-Control-Allow-Credentials:true'); //设置是否允许发送cookies
    header('Access-Control-Allow-Header:Content-Type,Content-Length,Accept-Encoding,X-Requested-width,Origin');//设置允许自定义请求头的字段






    //  指定路由   第一个参数为路径，网站的跟
    Flight::route('/',function(){
        echo 'Hello world!';
    });

    // 第一个参数为连接串——php如何连接到数据库，127.0.0.1为本机地址,也可写成localhost
    // dbname=mytest表示要连接的数据库为mytest   数据库用户名为root 密码为空

    // $conn = new PDO('mysql:host=127.0.0.1;dbname=mytest','root','');

    // 使用框架 注册PDO自动创建连接 设置字符集防止乱码

    Flight::register('db',
    'PDO',
    array('mysql:host=127.0.0.1;dbname=mytest','root','',array(PDO::MYSQL_ATTR_INIT_COMMAND => "set names utf8"))
);

Flight::route('/bookList',function(){
    // 连接数据库对象
    $db = Flight::db();

    // sql查询语句  查询t_books表类内所有记录
    $sql = 'SELECT * FROM `t_books`';
    
    // 执行sql语句查询，返回值为所查询的数据
    $datas = $db->query($sql);

    // 将php数据转换成json数据输出到页面
    echo Flight::json($datas->fetchAll(PDO::FETCH_ASSOC));
});

// 单个书籍记录

Flight::route( '/book/@id',function($id){
    $db = Flight::db();
    //根据id查询书籍 $id动态输入   用点号连接
    $sql = 'SELECT * FROM `t_books` WHERE id = '.$id;
    $datas = $db->query($sql);
    echo Flight::json($datas->fetch(PDO::FETCH_ASSOC));
});

// 增加一本书籍
// 指定访问方式为POST  默认为GET
Flight::route('POST /bookAdd',function() {
    $db = Flight::db();
    // sprintf  格式化数据
    $sql = sprintf("INSERT INTO `t_books`(`name`,`author`,`isbn`,`price`,`memo`) VALUES ('%s','%s','%s','%s','%s')",
            Flight::request()->data->name,
            Flight::request()->data->author,
            Flight::request()->data->isbn,
            Flight::request()->data->price,
            Flight::request()->data->memo
);
// 执行操作
    $db->exec($sql);
    echo 'Insert successfully!';
});

//删除指定的书籍
Flight::route('/bookDel/@id',function($id) {
    $db = Flight::db();
    $sql = 'DELETE FROM `t_books` WHERE id = '.$id;
    $db->exec($sql);
    echo 'Delete successfully!';
});

//修改指定书籍

Flight::route('POST /bookModify',function() {
    $db = Flight::db();
    $sql = sprintf("UPDATE `t_books` SET `name`='%s',`author`='%s',`isbn`='%s',`price`='%s',`memo`='%s' WHERE `id` = '%s'",
    Flight::request()->data->name,
    Flight::request()->data->author,
    Flight::request()->data->isbn,
    Flight::request()->data->price,
    Flight::request()->data->memo,
    Flight::request()->data->id
    );

    $db->exec($sql);
    echo 'Update successfully!';
});



    // 调用start函数
    Flight::start();
?>