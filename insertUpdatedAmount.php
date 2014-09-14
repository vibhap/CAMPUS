<?php
$cardnumber = isset($_POST['cardnumber'])?$_POST['cardnumber']:null;

if(empty($cardnumber)) {
echo "Not a member";
return;
}
if (!empty( $cardnumber )) {
	require_once 'db.php';
	$db = new db();
	$con = $db->getConnection();
}

$amountAfterDeduction =  isset($_POST['amountAfterDeduction'])?$_POST['amountAfterDeduction']:null;

$result = mysql_query("UPDATE Campus_Master_Table SET MonthlyBudget = '".$amountAfterDeduction."' WHERE CampusCard_ID = '".$cardnumber."'" );
if (!$result) {
    echo mysql_error();
}

$id = mysql_insert_id();

echo $id;

mysql_close($con);

	
?>

