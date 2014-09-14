<?php
// Inialize session
session_start();

// Check, if user is already login, then jump to secured page
if (isset($_SESSION['username'])) {
	if ($_SESSION['username'] == '1000') {
		header('Location: adminsecuredpage.php');
	}
	else {
		header('Location: securedpage.php');
	}
}

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<script type='text/javascript' src="http://code.jquery.com/jquery-latest.min.js"></script>
		<link rel="stylesheet" href="styles/mystyle.css"/>
		<title>Campus Smart Food Inc-Home </title>
		<script type="text/javascript" >
			
		</script>
	</head>

	<body>
		<div id="Container" >
			<div id="Header">
				
				<h1>Campus Smart Foods Inc.</h1>
				
			</div>
			<div id="Body">
				<div id="Menu">
					<nav>
						<ul>
							<li><a href="index.html">Home</a></li>
							<li><a href="#">Food Joints</a>
								<ul>
									<li><a href="HealthyHut.html">The Healthy Hut</a></li>
									<li><a href="NaturalNourishment.php">Natural Nourishment</a></li>
								</ul>
							</li>
							<li><a href="Reviews.html">Reviews</a></li>
							<li><a href="#">Nutrition</a>
								<ul>
									<li><a href="Nutrition value.html">Nutritional Values</a></li>
									<li><a href="Nutrition Basics.html">Basic Nutrition</a></li>
									<li><a href="Assement tool.html">Assement Tools</a></li>
								</ul>
							</li>
							<li><a href="My Page.php">My Page</a></li>
						</ul>
					</nav>
						
				</div>
				<div id="Content">
					<h1>Campus Member Login </h1>
					<form method="post" action="loginproc.php">
						<p><b>Campus Card ID:  </b><input type="text" name="username" size="20"></p>
						<p><b>Password:        </b><input type="password" name="password" size="20">
						<p><input type="submit" value="Login"></p>
						<p> <b><a href="SignUp.html"> Please Click here to Become a Member with us!! </a> </b></p>
					</form>
					
				</div>
				
			</div>
			
			
		</div>
		<div id="footer" class="footer">
				<p>Copyright@ Team C</p>
		</div>
	</body>
</html> 
