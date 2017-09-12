<?php
$phone = $_REQUEST['phone'];
$name = $_REQUEST['name'];
$report = $_REQUEST['report'];

$message = "Tel: " . $phone . "\n\nName: " . $name . "\n\nMessage: " . $report;

mail("Rabota@uvcentre.ru", "Call back", $message, "From: Rabota@uvcentre.ru");

?>
