<?php
include("server/main.class.php");
$rss = new RSSReader('http://news.google.com/?output=rss');
while ($rss -> next())
	print_r($rss);
?>