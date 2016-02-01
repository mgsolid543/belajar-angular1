<?php
	$jsondata = file_get_contents("news.json");
	$json = json_decode($jsondata, true);
	
	$output = "<ul>";
	foreach($json['news'] as $news)
	{
		$output .= "<li>" .$news['title']. " | " .$news['date']. "</li>";
	}
	$output .= "</ul>";
	echo $output;
?>