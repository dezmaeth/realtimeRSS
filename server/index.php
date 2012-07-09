<?php
if (array_key_exists("req", $_POST)) {

include("main.class.php");
$reply = array();
switch ($_POST['req']){

		case "getRSS":
			$rss = new RSSReader($_POST['feedURL']);
			while ($rss->hasNext()) {
				$reply[] = $rss->next();
			}
			echo json_encode($reply);
		break;


		case "updateRSS":
			$rss = new RSSReader($_POST['feedURL']);
			while ($rss->hasNext()) {
				$feed = $rss->next();
			//	if (($_POST['pubDate'] - $feed['pubDate']) > 0) { 
						$reply[] = $feed;
			//	}
			}
			echo json_encode($reply);
		break;
	}

} else {
	header("Content-Type: application/json");
	echo '{ error: "no request"}';
}
?>