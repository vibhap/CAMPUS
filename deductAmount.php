<?php
require_once 'db.php';

$response = 'nonmember';
$cardnumber = isset($_POST['cardnumber'])?$_POST['cardnumber']:null;

if(empty($cardnumber)) {
echo $response;
return;
}

$moneydue =  isset($_POST['moneydue'])?$_POST['moneydue']:null; //get moneydue and calories from javascript
$calories =  isset($_POST['calories'])?$_POST['calories']:null;

$db = new db();
$con = $db->getConnection();

$response = 'error';
// Now deduct amount. 
$query = "select Amount From Campus_Master_Table where CampusCard_ID = $cardnumber"; 
$result = mysql_query($query);
if ($result) {
	$row = mysql_fetch_row($result);
	if (!empty($row) && isset($row[0])){
		$amount = $row[0];
		if ($amount - $moneydue < 0) {
			$response = 'nofunds';
		} else {
			//Update table;
			$query = "update Campus_Master_Table set Amount = Amount - $moneydue where CampusCard_ID = $cardnumber";
			$result = mysql_query($query);
			$query = "INSERT into Order_Summary (CampusCard_ID, Total_Amount, Total_Calories, Date_Time, Cafe_ID) values ( $cardnumber, $moneydue, $calories, UTC_TIMESTAMP(), 2)";
			$result = mysql_query($query);
			$response = 'success';
				
		}
	} else {
		$response = 'error';
	}
}

if ($response == 'success') {
// now check for alert.
	$query = "select sum(os.Total_Amount) as Expense , cm.MonthlyBudget from order_summary as os, Campus_Master_Table as cm where cm.CampusCard_ID = os.CampusCard_ID and os.CampusCard_ID = $cardnumber and month(Date_Time) = month(UTC_TIMESTAMP());";
	$result = mysql_query($query);
	$row = mysql_fetch_assoc($result);
	if ($row['MonthlyBudget'] - $row['Expense'] < 100) {
		$response = "alert,".($row['MonthlyBudget']- $row['Expense']);
	}
} 

mysql_close($con);

echo $response;	
?>
