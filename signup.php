<?php
 require_once 'db.php';

 
 $CampusCard_ID = $_POST['CampusCard_ID'];
 $Email=$_POST['Email'];
 $Password=$_POST['Password'];
 $FirstName = $_POST['FirstName'];
 $LastName = $_POST['LastName'];
 $FoodPreference=$_POST['FoodPreference'];
 $MonthlyBudget=$_POST['MonthlyBudget'];
 $DailyCalorie=$_POST['DailyCalorie'];
 
$db = new db();
$con = $db->getConnection();
$query="INSERT INTO Campus_Master_Table(CampusCard_ID,Email,Password,FirstName,LastName,FoodPreference,MonthlyBudget,DailyCalorie,Amount) 
VALUES ('$CampusCard_ID','$Email','$Password','$FirstName','$LastName','$FoodPreference','$MonthlyBudget','$DailyCalorie',500) 
 ON DUPLICATE KEY UPDATE FoodPreference='$FoodPreference', MonthlyBudget='$MonthlyBudget',DailyCalorie='$DailyCalorie'" ;

$result = mysql_query($query);
if (!$result) {
    //echo mysql_error();
	echo "error";
} else {
 
	echo "success";
}
mysql_close($con);

?>