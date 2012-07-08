<?php
switch ($_POST['getRSS']){
	case ($_POST['getRSS']==="true"):
		echo "feedData";
		break;

	default: header("location:../404.html");
}
?>
