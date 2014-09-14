<?php

// $return = array(array("week", "Cafe1", "Cafe2"), array("24", 234, 234));
// echo json_encode($return);
// return;


$response = "nodata";
session_start();
if(isset($_SESSION['username'])) {
	$cardnumber = (int)$_SESSION['username'];
} else {
	$response = "notloggedin";
	$cardnumber = null;
}

// calculating the expenses by grouping on week criteria
if (!empty( $cardnumber )) {
	require_once 'db.php';
	$db = new db();
	$con = $db->getConnection();

	$query = "select sum(total_amount) as sales, week(Date_Time) as week, Cafe_ID as cafe from order_summary  group by week , Cafe_ID";
	$result = mysql_query($query);
	
	if(!$result ||  mysql_num_rows($result) == 0 ) { 
		echo $response;
		return;
	}
	
	$cafemapping = array();
	while ($row = mysql_fetch_assoc($result)) {
		$cafemapping[$row['week']][$row['cafe']] = $row['sales'];
	}
	
	
	$resultresponse = array();
	
	$resultresponse[] = array("weekoftheyear","Healthy Hut", "Natural Nourishment");
	foreach($cafemapping as $weeknumber => $weekrow) {
		$cafe1sales = isset($weekrow[1])?floatval($weekrow[1]):0;
		$cafe2sales = isset($weekrow[2])?floatval($weekrow[2]):0;
		$resultresponse[] = array($weeknumber, $cafe1sales, $cafe2sales);
	}
	//$resultresponse[] = array($row['week'], floatval($row['sales']));
	
	$response =  json_encode($resultresponse);
	mysql_close($con);
	
}

echo $response;


