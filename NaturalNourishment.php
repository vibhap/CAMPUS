
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

	<head>  <!-- Jquery library files, css and js files used !-->
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<link rel="stylesheet" href="styles/mystyle.css"/>
		<link rel="stylesheet" href="styles/NaturalStyle.css"/>
		<link rel="stylesheet" type="text/css" href="http://www.jeasyui.com/easyui/themes/default/easyui.css"/>
	    <link rel="stylesheet" type="text/css" href="http://www.jeasyui.com/easyui/themes/icon.css"/>
		<link rel="stylesheet" type="text/css" href="styles/jquery-ui-1.9.1.custom.min.css"/>

		<script type='text/javascript' src="http://code.jquery.com/jquery-latest.min.js"></script>
        <script  type='text/javascript' src="javascript/jquery-ui-1.9.1.custom.min.js" ></script>
	    <script type="text/javascript" src="http://code.jquery.com/jquery-1.6.1.min.js"></script>
	    <script type="text/javascript" src="http://www.jeasyui.com/easyui/jquery.easyui.min.js"></script>
		<script type='text/javascript' src="javascript/Natural.js" ></script> 		 	
		<title> Natural Nourishment Cafe Page</title>
		<script type="text/javascript" ></script>
	</head>

	<body onload="init()">
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
							<li><a href="My page.php">My Page</a></li>
						</ul>
					</nav>
						
				</div>
				<div id="Content">
				   <div id="Detailsandnumber">   <!-- Div to get card number with input box !-->
				      <div id="CafeDetails"> <h3>Welcome to Natural Nourishment !!</h3> </div>
					  <div id="Cardnumber">
					    <div id="cardtitle"> <b>ENTER CARD NUMBER </b></div>
					     <input id="cardnumbertext" type="text" name="Answer"/> <br></br>
						 <button id="mealbutton" onclick="getMealPreferece()">MealPreference</button>
					  </div>
				   </div>
				   <div id="Orderform">   <!-- Type of order is selected!-->
				             <p size="30px"> <b>ORDER TYPE : </b></p>
				   <button id="b1" type="button" class="button" onclick="Delivery()"> DELIVERY </button> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; <br></br>
				           <button id="b2" type="button" class="button" onclick="TakeOut()"> CHECK OUT </button>  <br></br>
						   
						    <div id="discount"> ENTER YOUR CARD NUMBER TO GET DISCOUNT <br></br>
                                                <b>NOTE : </b>FOR REGISTERED MEMBERS ONLY!	</div>
					     <input id="cardnumberfordiscount" type="text" name="Answer" /> 
						 <button onclick="getdiscount()">GetDiscount</button>
				   </div>
				   <div id="ordersummary">     <!-- Order summary display!-->
				   <div id="summaryheading"> <b>ORDER SUMMARY </b></div>
				   <div id="enjoy"> ENJOY YOUR ORDER!! <img src="images/smiley.jpg" alt="smiley" width="45" height="45"/> </div>
				   <div id="building"></div><div id="cost"></div>
				   <div id="discountdiv"></div>
				   <div id="deliverydiv"></div>
				   <div id="time"></div><div id="calories"></div>
				   <p align="center">---------------------------------------------------------------------</p>
				   <div id="Moneydue"></div>
				   <p align="center">---------------------------------------------------------------------</p>
				   
				   </div>
				   <div id="deliveryform">     <!-- Choosing the destination for delivery!-->
				   <p size="40px"><b>PLEASE CHOOSE YOUR DESTINATON ADDRESS</b></p>
				    <form name="myform" action="">
				   <input type="radio" name="group1" id="rad1" value="1"/> <label for="rad1">   Building 1, Room 2</label><br></br>
				   <input type="radio" name="group1" id="rad2" value="2"/> <label for="rad1">   Building 2, Room 5</label><br></br>
				   <input type="radio" name="group1" id="rad3" value="3"/> <label for="rad1">   Building 3,Room 7</label><br></br>
				   <input type="radio" name="group1" id="rad4" value="4"/> <label for="rad1">   Building 4, Room 6</label><br></br>
				   <input type="radio" name="group1" id="rad5" value="5"/> <label for="rad1">   Building 5, Room 9</label><br></br>
				   <input type="radio" name="group1" id="rad6" value="6"/> <label for="rad1">   Building 6, Room 1</label><br></br>
				   <input type="radio" name="group1" id="rad7" value="7"/> <label for="rad1">   Building 7, Room 7</label><br></br>
				   <input type="radio" name="group1" id="rad8" value="8"/> <label for="rad1">   Building 8, Room 1</label><br></br>
				   <input type="radio" name="group1" id="rad9" value="9"/> <label for="rad1">   Building 9 , Room 4</label><br></br>
				   <input type="radio" name="group1" id="rad10" value="10"/> <label for="rad1"> Building 10, Room 2</label><br></br>
				     <button id="b5" type="button" class="button" onclick="GetSelectedItem()">SUBMIT</button>								
                           	</form>			 
				   </div>
				  
				   <div id="BreakFast">
				   
					   <div class="Products">    <!-- Menu for the cafe, including vegan, gluten free and regular types!-->
					  
		                        <ul style="list-style: none">
			                      <li> 
			                        <a href="#" class="item vegan">
				                     <img src="images/almondbuttertoast.jpg" width="100px" height="100px" alt="almondbuttertoast"/>
				                 	<div id="menu1" class="menufirst" >
					                <p>Almond Toast</p>
					                <p>Price:$10</p>
									<p>Calories:252</p>
									<p> (Vegan)</p>
					              	</div>
			                        </a>
			                      </li>
			                      <li>
								   
			                        <a href="#" class="item vegan">
				                    <img src="images/scrambledtofu.jpg" width="100px" height="100px" alt="scrambledtofu"/>
					                <div id="menu2" class="menufirst vegan">
					                 	<p>Scarmbled Tofu</p>
					                 	<p>Price:$13</p>
										<p>Calories:184</p>
									    <p> (Vegan)</p>
					                </div>
				                     </a>
			                      </li>
					             <li>

			                        <a href="#" class="item glutenfree">
					                 <img src="images/orangejuice.jpg" width="100px" height="100px" alt="orangejuice"/>
					                <div id="menu3" class="menufirst">
					                	<p>Orange Juice</p>
					                	<p>Price:$7</p>
										<p>Calories:97</p>
										<p> (Gluten Free) </p>
					                </div>
				                     </a>
			                      </li>
			                      <li>
			                        <a href="#" class="item glutenfree">
						            <img src="images/riceandpancake.jpg" width="100px" height="100px" alt="riceandpancake"/>
					                <div id="menu4" class="menufirst">
						               <p>Pancake</p>
						               <p>Price:$12</p>
									   	<p>Calories:45</p>
										<p> (Gluten Free) </p>
					                </div>
				                    </a>
						        </li>
								 <li>
			                       	<a href="#" class="item regular">
				                    <img src="images/cheeseravioli.jpg" width="100px" height="100px" alt="cheeseravioli"/>
				                 	<div id="menu5" class="menufirst">
					                	<p>Cheese Ravioli</p>
						                <p>Price:$15</p>
										<p>Calories:355</p>
										<p> (Regular) </p>
				                    </div>
				                    </a>
			                     </li>
			                    <li>
			                        <a href="#" class="item regular">
			                        <img src="images/vanillaicecream.jpg" width="100px" height="100px" alt="vanillaicecream"/>
			                 		<div id="menu6" class="menufirst">
			                  			<p>Vanilla Icecream</p>
			                			<p>Price:$8</p>
										<p>Calories:200</p>
										<p> (Regular) </p>
			                		</div>
			                        </a>
			                    </li>
			                    <li>
			                         <a href="#" class="item regular">
			                        <img src="images/greenapplejuice.jpg" width="100px" height="100px" alt="greenapplejuice"/>
			                 		<div id="menu7" class="menufirst">
			                  			<p>Apple Juice</p>
			                			<p>Price:$8</p>
										<p>Calories:70</p>
									<p> (Regular) </p>
			                		</div>
			                        </a>
			                    </li>
			                    <li>
			                        <a href="#" class="item vegan">
			                        <img src="images/falafel.jpg" width="100px" height="100px" alt="falafel"/>
			                 		<div id="menu8" class="menufirst">
			                  			<p>Falafel</p>
			                			<p>Price:$8</p>
										<p>Calories:340</p>
										<p> (Vegan)</p>
			                		</div>
			                        </a>
			                    </li>
			                    <li>
			                        <a href="#" class="item vegan">
			                        <img src="images/bananacake.jpg" width="100px" height="100px" alt="bananacake"/>
			                 		<div id="menu9" class="menufirst">
			                  			<p>Banana Cake</p>
			                			<p>Price:$8</p>
										<p>Calories:180</p>
										<p> (Vegan)</p>
			                		</div>
			                        </a>
			                    </li>
				           </ul>
	               </div>
				   </div>
				   <div class="cart">   <!-- Cart to drag and drop!-->
		                 <div class="ctitle">Shopping Cart</div>
		                 <table id="cartcontent" fitColumns="true" style="width:265px;height:auto">
			                  <thead>
				                  <tr>
								     <th class="head" field="name" width="130">Name</th>
					                 <th  class="head" field="quantity" width="70" align="right">Quantity</th>
					                 <th  class="head" field="price" width="60" align="right">Price</th>
									 <th  class="head" field="Calories" width="67" align="right">Calories</th>
				                  </tr>
			                 </thead>
		                </table>
		           <p class="total">Total: $0</p>
				   <p class="totalcalories">Calories: 0</p>
                   <h4><p>Drop here to add to cart</p></h4>
		           <button id="orderbutton" type="button" class="button" onclick="order()"> ORDER </button>   
		            </div>
             
		</div>
</div>
			
			
	</div>
		<div id="footer" class="footer">   <!-- Footer of the page!-->
				<p>Copyright@ Team C</p>
		</div>
	</body>
</html> 
