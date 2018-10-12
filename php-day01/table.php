<?php
include_once'../pub/publics.php';
// 查询对应数据
$sql = "select * from students";
// 获取数据
$result = $mysql -> query($sql) -> fetch_all(MYSQLI_ASSOC);
// 转化为json格式并返回
echo json_encode($result);
