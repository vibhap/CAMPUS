
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<script type='text/javascript' src="http://code.jquery.com/jquery-latest.min.js"></script>
		<script type="text/javascript" src="http://localhost/web programing/Example4_AJAX/ajaxhandle.js"></script>
		<link rel="stylesheet" href="styles/mystyle.css"/>
		<title>Campus Smart Food Inc-Reviews</title>
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
							<li><a href="#">My Page</a></li>
						</ul>
					</nav>
						
				</div>
				<div id="Content">
					<h1>Reviews </h1>
						<div id="addReviewForm">
							<form action="http://localhost/web programing/COEN 276_project/Project_TeamC/addReview.php" method="post">
								<h3> Write you review/feedback here </h3>
								Campus Card ID <input type="text" name="cardId" id="cardId" size="5" /><br />
								<p>Select Food Joint 
									<select name="foodJoint">
										<option value="none">Choose One</option>
										<option value="The Healthy Hut">The Healthy Hut</option>
										<option value="Natural Nourishment">Natural Nourishment</option>
									</select></p>
								<p>Select a rating for the food joint (5 is highest) :
								<select name="rating">
									<option value="none">Choose One</option>
									<option value="1">1 star</option>
									<option value="2">2 star</option>
									<option value="3">3 star</option>
									<option value="4">4 star</option>
									<option value="5">5 star</option>
								</select></p>
								<p>Comments:<br />
									<textarea name="comments" rows="10" cols="40"></textarea></p>
								<input type="submit" name="btnSendForm" value="Submit" />
							</form>
						</div>
						<div id="fetchReviewForm">
							
						</div>
				</div>
				
			</div>
			
			
		</div>
		<div id="footer" class="footer">
				<p>Copyright@ Team C</p>
		</div>
	</body>
</html> 
