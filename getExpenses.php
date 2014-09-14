<?php
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

	$query = "select sum(total_amount) as expense, week(Date_Time) as week from order_summary  where CampusCard_ID = $cardnumber group by week";
	$result = mysql_query($query);
	
	if(!$result ||  mysql_num_rows($result) == 0 ) { 
		echo $response;
		return;
	}
	
	$resultresponse = array();
	$resultresponse[] = array("weekoftheyear","expenses");
	while ($row = mysql_fetch_assoc($result)) {
		$resultresponse[] = array($row['week'], floatval($row['expense']));
	}
	
	$response =  json_encode($resultresponse);
	mysql_close($con);
	
}

echo $response;


