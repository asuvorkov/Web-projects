<?php
$current_data = file_get_contents('reports.json');

$array_data   = json_decode($current_data, true);

$extra_data = array(
    'name' => $_POST["name"],
    'date' => $_POST["date"],
    'message' => $_POST["message"]
);
array_unshift($array_data['reports'], $extra_data);
$final_data = json_encode($array_data);
file_put_contents( 'reports.json', $final_data );
?>