<?php
$phone = $_REQUEST['phone'];
$name = $_REQUEST['name'];
$report = $_REQUEST['report'];
$message = "Tel: " . $phone . "\n\nName: " . $name . "\n\nMessage: " . $report;


mail("rabota@1trudovoy.ru", "Call back" , $message , "From: rabota@1trudovoy.ru");


echo "Ваша заявка принята. Менеджер свяжется с Вами в ближайшее время.";

?>
