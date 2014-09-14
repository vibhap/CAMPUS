
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<script type='text/javascript' src="http://code.jquery.com/jquery-latest.min.js"></script>
	<link rel="stylesheet" href="styles/mystyle.css"/>
	<title>Campus Smart Food Inc-Reviews </title>
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
						<li><a href="Home.html">Home</a></li>
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
								<li><a href="#">Useful Resources</a></li>
							</ul>
						</li>
						<li><a href="My Page.php">My Page</a></li>
					</ul>
				</nav>
				
			</div>
			<div id="Content">
				<h1>Reviews </h1>
				
				<div id="inp">
					<?php
					if( isset($_POST["cardId"],
						$_POST["foodJoint"],
						$_POST["rating"],
						$_POST["comments"] )){
						$cardId = $_POST["cardId"];
					$foodJoint = $_POST["foodJoint"];
					$rating = $_POST["rating"];
					$comments = $_POST["comments"];
					
					require_once 'db.php';
					$db = new db();
					$con = $db->getConnection();
					
					
					if ($cardId =="") {
						echo "Please enter a valid Campus Card ID. <br></br>";
					}
					if ($foodJoint == ""){
						echo "Please select the food joint. <br></br>";
					}
					if ($rating == "") {
						echo "Please select the rating. <br></br>";
					}
					else {
						$selectsql="SELECT CampusCard_ID from campus_master_table where CampusCard_ID = $cardId";
						
						$selectedId = null;
						$result = mysql_query($selectsql);
						if ($result) {
							$row = mysql_fetch_row($result);
							$selectedId = $row[0];
						}
						
						if ( $cardId == $selectedId) {
							
							$sql="INSERT INTO review_master (CampusCard_ID, item_cafe, Rating, Comments)
							VALUES
							('$_POST[cardId]','$_POST[foodJoint]','$_POST[rating]','$_POST[comments]')";

							if (!mysql_query($sql,$con))
							{
								die('Error: ' . mysql_error());
							}
							echo "Your review has been posted.<br/><br/>";
							echo "Campus Card ID:  " . $cardId . "<br/><br/>";
							echo "Food Joint:  " . $foodJoint . "<br/><br/>";
							echo "Rating:  " . $rating . "<br/><br/>";
							echo "Comments:  " . $comments . "<br/><br/>";

							mysql_close($con);
						}
						else {
							echo "Your review could not be posted due to following reason: <br/><br/>";
							echo "Not a valid Campus Card ID.<br/><br/>";
						}
					}
				}
				?>
			</div>
			<div id="reviewPage">
				<a href="Reviews.html">Review page</a>
			</div>
		</div>
		
	</div>
	
	
</div>

<div id="footer" class="footer">
	<p>Copyright@ Team C</p>
</div>
</body>
</html> 

