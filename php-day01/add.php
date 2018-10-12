<?php
include_once'../pub/publics.php';
$sql = "insert into students (age,sex,phone,address) value ('0','','','')";
$mysql -> query($sql);
if ($mysql -> affected_rows == 1) {
    echo $mysql -> insert_id;
}
else {
    echo "0";
}
