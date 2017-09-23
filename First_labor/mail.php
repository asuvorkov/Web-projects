<?php
$phone = $_REQUEST['phone'];
$name = $_REQUEST['name'];
$report = $_REQUEST['report'];

$message = "Tel: " . $phone . "\n\nName: " . $name . "\n\nMessage: " . $report;

mail("rabota@uvcentre.ru", "Call back", $message, "From: rabota@uvcentre.ru");

?>
