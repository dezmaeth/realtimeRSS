<?php
switch ($_POST['getRSS']){
	case ($_POST['getRSS']==="true"):
		return "feedData";
		break;

	default: header("location:../404.html");
}
?>
