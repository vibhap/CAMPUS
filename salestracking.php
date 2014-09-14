<?php
// Inialize session
session_start();
// Check, if username session is NOT set then this page will jump to login page
if (!isset($_SESSION['username'])) {
header('Location: my page.php');
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<script type='text/javascript' src="http://code.jquery.com/jquery-latest.min.js"></script>
		<link rel="stylesheet" href="styles/Signup.css"/>
		<link rel="stylesheet" href="styles/mystyle.css"/>
		<title></title>
		<script type="text/javascript" ></script>
		<script type='text/javascript' src="javascript/signup.js" ></script> 	
		   <script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script type="text/javascript"> // TO display Bar chart
	
	 google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
	  
	    function drawChart() {
		var geturl = "getsales.php";
		$.ajax({
			type : "GET",
			url : geturl,
			dataType : "html",
			success: function(data) {
				if (data == "nodata") {
					alert("We do not have any sales data for you at this moment. ");
					return;
				}
				
				if (data == "notloggedin") {
					alert("You need to login to view sales  ");
					return;
				}

				var arrayOfObjects = eval(data);
				var data = google.visualization.arrayToDataTable(arrayOfObjects);

		        var options = {
		          title: 'Sales',
		          hAxis: {title: 'Healthy Hut and Natural Nourishment Cafes', titleTextStyle: {color: 'red'}}
		        };

		        var chart = new google.visualization.ColumnChart(document.getElementById('sales_div'));
		        chart.draw(data, options);
			},
			error : function() {
				alert("Sorry, The data could not be retrieved at this time. ");
			}
		});
		
		
		

      }
     
      
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
				
					  <div id="sales_div" style="width=900px" height="700px"> 
					  </div>
				</div>
				
			</div>
			
			
		</div>
		<div id="footer" class="footer">
				<p>Copyright@ Team C</p>
		</div>
	</body>
</html> 
