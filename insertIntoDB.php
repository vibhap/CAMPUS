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


$finalTotal =  isset($_POST['finalTotal'])?$_POST['finalTotal']:null;
$totalCalorie =  isset($_POST['totalCalorie'])?$_POST['totalCalorie']:null;

$result = mysql_query("INSERT into Order_Summary (CampusCard_ID, Total_Amount, Total_Calories,Date_Time,Cafe_ID) values ( $cardnumber, $finalTotal, $totalCalorie,UTC_TIMESTAMP(),1)");
if (!$result) {
    echo mysql_error();
}
$result1 = mysql_query("SELECT MonthlyBudget FROM Campus_Master_Table where CampusCard_ID = ".$cardnumber );
	$budgetAmount = mysql_fetch_row($result1);

if (!empty($budgetAmount) && isset($budgetAmount[0])){
		echo $budgetAmount[0];
	} else {
		echo "Monthly Budget not set";
	}



$id = mysql_insert_id();

//echo $id;

mysql_close($con);

	
?>

