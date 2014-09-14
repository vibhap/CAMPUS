<?php
$cardnumber = isset($_POST['cardnumber'])?$_POST['cardnumber']:null;
if(empty($cardnumber)) {
echo "nonmember";
return;
}
if (!empty( $cardnumber )) {
	require_once 'db.php';
	$db = new db();
	$con = $db->getConnection();
}
$result=mysql_query("SELECT DailyCalorie FROM Campus_Master_Table where CampusCard_ID = ".$cardnumber );
$row = mysql_fetch_row($result);

	if (!empty($row) && isset($row[0])){
		echo $row[0];
	} else {
		echo "Daily calorie limit not set";
	}
	mysql_close($con);
 
?>
