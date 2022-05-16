<?php
$servername = "dedi2877.your-server.de";
$username = "lmsesh_1_w";
$password = "hn1xLZc59r5wzaPU";
$dbname = "lmsesh_db1";
$conn = new mysqli($servername , $username , $password ,$dbname ) or die("Connect failed: %s\n". $conn -> error);
echo $conn;
?>