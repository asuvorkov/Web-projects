<?php

require 'head.html';

if (isset($_REQEST['submit'])) {
	
	require_once 'mail.php';	

}
echo "Ваш отзыв принят";
require 'footer.html';

?>