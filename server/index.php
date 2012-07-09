<?php
if (array_key_exists("req", $_POST)) {

include("main.class.php");

switch ($_POST['req']){

		case 'getRSS':
			$rss = new RSSReader($_POST['feedURL']);
			echo $rss->next();
		break;
	}

} else {
	header("Content-Type: application/json");
	echo '{ error: "no request"}';
}
?>