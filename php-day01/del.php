<?php
include_once'../pub/publics.php';
$id = $_GET['id'];
$sql = "delete from students where id=$id";
$mysql -> query($sql);
if ($mysql -> affected_rows == 1) {
    echo "yes";
}
else {
    echo "no";
}