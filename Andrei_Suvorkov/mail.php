<?php
$firstName = $_REQUEST['firstName'];
$lastName = $_REQUEST['lastName'];
$email = $_REQUEST['email'];
$message = $_REQUEST['message'];

$output = "Name: " . $firstName . " " . $lastName . "\n\nMessage: " . $message;
$sender = "From: " . $email;


mail("andrey.suvorkov@gmail.com", "Message from Andrei Suvorkov wesite", $output, $sender);