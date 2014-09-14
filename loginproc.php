<?php
// Inialize session
session_start();

// Include database connection settings
require_once 'db.php';
$db = new db();
$con = $db->getConnection();

// Retrieve username and password from database according to user's input
$login = mysql_query("SELECT * FROM campus_master_table WHERE (CampusCard_ID  = '" . mysql_real_escape_string($_POST['username']) . "') and (password = '" . mysql_real_escape_string($_POST['password']) . "')");

// Check username and password match
	if (mysql_num_rows($login) == 1) {
		$_SESSION['username'] = $_POST['username'];  // Set username session variable
			if ( $_SESSION['username'] == '1000') {
				header('Location: adminsecuredpage.php');   // Jump to admin secured page
			}
			else{
				header('Location: securedpage.php');  // Jump to user secured page
			}
	
	}
	else {
		header('Location: my page.php');  // Jump to login page
	}

?>