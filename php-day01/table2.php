<?php
include_once'../pub/publics.php';
// 查询对应数据
$sql = "select * from students";
// 获取数据
$result = $mysql -> query($sql) -> fetch_all(MYSQLI_ASSOC);
// 转化为json格式并返回
echo json_encode($result);


// 连接数据库

// 如果错误返回报错信息，并终止后面的

// 查询字符集

// 查询对应数据

// 获取数据

// 转化为json格式并返回