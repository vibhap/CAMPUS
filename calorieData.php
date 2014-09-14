<?php
$response = "nodata";
session_start();
if(isset($_SESSION['username'])) {
	$cardnumber = (int)$_SESSION['username'];
} else {
	$response = "notloggedin";
	$cardnumber = null;
}

if (!empty( $cardnumber )) {
	require_once 'db.php';
	$db = new db();
	$con = $db->getConnection();

	$query = "select sum(Total_Calories) as calories, week(Date_Time) as week
	from Order_Summary where CampusCard_ID = $cardnumber 
	group by  week "; 
	$result = mysql_query($query);
	
	if(!$result ||  mysql_num_rows($result) == 0 ) { 
		echo $response;
		return;
	}
	
	$resultresponse = array();
	$resultresponse[] = array("week","calories");
	while ($row = mysql_fetch_assoc($result)) {
		$resultresponse[] = array($row['week'], floatval($row['calories']));
	}
	
	$response =  json_encode($resultresponse);
	mysql_close($con);
	
}

echo $response;


