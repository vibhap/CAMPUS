<?php

if (isset($_GET['cardnumber'])) {
	$cardnumber = (int)$_GET['cardnumber'];
}else {
	$cardnumber = null;
}
if (!empty( $cardnumber )) {
	require_once 'db.php';         //Database localhost, usernam ena dpassword details
	$db = new db();
	$con = $db->getConnection();  // establishing connection to database

	$result = mysql_query("SELECT FoodPreference FROM Campus_Master_Table where CampusCard_ID = ".$cardnumber ); //Asking for food preference by sending card number

	$row = mysql_fetch_row($result); //food preference fetched in the row

	if (!empty($row) && isset($row[0])){
		echo $row[0];
	} else {
		echo "nopreference";
	}
	mysql_close($con);
} else {
	echo "nopreference";
}
	
?>
