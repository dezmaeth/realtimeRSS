<?php
if (array_key_exists("req", $_POST)) {

include("main.class.php");

switch ($_POST['req']){

		case 'getRSS':
			$reply = array();
			$rss = new RSSReader($_POST['feedURL']);
			while ($rss->hasNext()) {
				$reply[] = $rss->next();
			}
			echo json_encode($reply);
		break;
	}

} else {
	header("Content-Type: application/json");
	echo '{ error: "no request"}';
}
?>