<?php
$phone = $_REQUEST['phone'];
$name = $_REQUEST['name'];
$report = $_REQUEST['report'];
$message = "Tel: " . $phone . "\nName: " . $name . "\nMessage: " . $report;


mail("rabota@1trudovoy.ru", "Obratnii Zvonok" , $message , "From: rabota@1trudovoy.ru");


echo "Ваша заявка принята. Менеджер свяжется с Вами в ближайшее время.";

?>
