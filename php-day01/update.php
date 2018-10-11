<?php
include_once'../pub/publics.php';
$id = $_GET['id'];
$key = $_GET['key'];
$value = $_GET['value'];
$sql = "update students set $key='$value' where id=$id";
$mysql -> query($sql);
if ($mysql -> affected_rows == 1) {
    echo 'yes';
}
else {
    echo 'no';
}