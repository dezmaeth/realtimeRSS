<?php
switch ($_POST['getRSS']){
	case is_bool($_POST['getRSS']):
		return "feedData";
	break;

	default: echo("<script>location.href = '/404.html'</script>");
}
?>
