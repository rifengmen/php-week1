<?php

// 连接数据库
$mysql = new mysqli('localhost','root','','studentstable','3306');
// 如果错误返回报错信息，并终止
if ($mysql -> connect_errno) {
    echo "数据库连接失败，失败原因是" . $mysql -> connect_erron;
    exit();
};
// 查询字符集
$mysql -> query('set names utf8');