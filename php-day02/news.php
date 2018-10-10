<?php
/**
 * Created by PhpStorm.
 * User: 忧郁xiao流氓
 * Date: 2018/10/8
 * Time: 15:57
 */

header('Content-type:text/html;charset=utf-8');

$skill = [
    ["title" => "异步ajax和xml","times" => "10.8"],
    ["title" => "php超文本预处理器","times" => "10.9"],
    ["title" => "单线程异步机制","times" => "10.10"],
    ["title" => "setTimeout 事件 ajax","times" => "10.11"]
];

$tiyu = [
    ["title" => "恒大国脚级飞翼成下赛季离队第一热门，未来的路在何方","times" => "10.8"],
    ["title" => "意甲第8轮综述：C罗进球尤文8连胜 米兰双雄奏凯","times" => "10.9"],
    ["title" => "火箭末节发力击退马刺 哈登18+9甜瓜12分","times" => "10.10"],
    ["title" => "龚翔宇:一传越接越敢接 打美国女排盼延续好状态","times" => "10.11"]
];

$yule = [
    ["title" => "汪小菲晒照为大S庆生 甜蜜喊话：老婆生日快乐","times" => "10.8"],
    ["title" => "李小龙扮演者陈国坤VS奥运冠军邹市明，到底谁赢了？","times" => "10.9"],
    ["title" => "周迅亮相机场 造型随性十足","times" => "10.10"],
    ["title" => "张馨予五年前素颜旧照曝光，不化妆时她长这样！","times" => "10.11"]
];

//print_r($news);
//var_dump($news);

$type = $_GET['t'];
if ($type == 'skill') {
    echo json_encode($skill);
}
else if ($type == 'tiyu') {
    echo json_encode($tiyu);
}
else if ($type == 'yule') {
    echo json_encode($yule);
}
else {
    echo json_encode([["title" => "参数错误","times" => "10.11"]]);
}

