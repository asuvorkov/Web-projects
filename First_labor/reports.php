<?php

require 'head.html';

if (isset($_REQUEST['submit'])) {
	
	require_once 'mail.php';	

}
echo "Ваш отзыв принят";
require 'footer.html';

?>