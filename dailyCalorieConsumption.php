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
$result= mysql_query("SELECT sum(Total_Calories) from Order_Summary where 
			CampusCard_ID = $cardnumber and date(Date_Time)= CURDATE()
			group by date(Date_Time)");
$row = mysql_fetch_row($result);

if (!empty($row) && isset($row[0])){
		echo $row[0];
	} else {
		echo "Cannot get your calorie data at this time";
	}
	mysql_close($con);
?>
