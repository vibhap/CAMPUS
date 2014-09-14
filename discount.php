<?php
if (isset($_GET['cardnumber'])) {
	$cardnumber = (int)$_GET['cardnumber'];
}else {
	$cardnumber = null;
}
if (!empty( $cardnumber )) {
	require_once 'db.php';
	$db = new db();
	$con = $db->getConnection();

	$result = mysql_query("SELECT MonthlyBudget FROM Campus_Master_Table where CampusCard_ID = ".$cardnumber );

	$row = mysql_fetch_row($result);

	if (!empty($row) && isset($row[0])){
		echo "registered"; 
	} else {
		echo "notregistered";
	}
	mysql_close($con);
} else {
	echo "notregistered";
}
	
?>

