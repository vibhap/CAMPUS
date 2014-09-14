var orderedItem=[];
            var calories=[];
            var cost=[];
			var preference;
			var bananaQuan;
			var bluberryQuan;
			var penneQuan;
			var pumpkinQuan;
			var sodaQuan;
			var almondQuan;
			var padthaiQuan;
			var bundtQuan;
			var lemonadeQuan;
			var mushroomQuan;
			var burgerQuan;
			var biryaniQuan;
			var appleQuan;
			var choclateQuan;
			var bananaCost;
			var totalCost =0;
			var bananaCalorie;
			var totalCalorie =0;
			var bluberryCalorie;
			var bluberryCost;
			var penneCost;
			var penneCalorie;
			var discountprice=0;
			var delTime=0;
			var deliverycharges = 0;
			var finalTotal = 0;
			var NoDelivery = 0;
			var cardnumber=0;
			var monthlybudget=0;
			var amountAfterDeduction=0;
			var deliveryaddr=0;
			var upperCalorieLimit1=0;
			var dailyCalorieConsumption1=0;
			
			function initialize()
			{
				$('#glutenfree1_hh').hide();
				$('#vegan1_hh').hide();
				$('#regular1_hh').hide();
				$('#buttons_hh').hide();
				$('#deliveryControl_hh').hide();
				$('#building_hh').hide();
				$('#discountDiv_hh').hide();
				$('#confirmbutton_hh').hide();
				$('#ordersummary_hh').hide();
				$('#totalordersummary_hh').hide();
				$('#confirmorder_hh').hide();
				
				
				//document.getElementById("glutenfree").style.visibility="none";
				//document.getElementById("glutenfree").style.visibility="hidden";
				//document.getElementById("vegan").style.visibility="none";
				//document.getElementById("vegan").style.visibility="hidden";
				//document.getElementById("regular").style.visibility="none";
				//document.getElementById("regular").style.visibility="hidden";
				//document.getElementById("buttons").style.visibility="none";
				//document.getElementById("buttons").style.visibility="hidden";
				//document.getElementById("deliveryControl").style.visibility="none";
				//document.getElementById("deliveryControl").style.visibility="hidden";
				//document.getElementById("building").style.visibility="none";
				//document.getElementById("building").style.visibility="hidden";
				//document.getElementById("discountDiv").style.visibility="none";
				//document.getElementById("discountDiv").style.visibility="hidden";
				//document.getElementById("confirmbutton").style.visibility="none";
				//document.getElementById("confirmbutton").style.visibility="hidden";
				//document.getElementById("ordersummary").style.visibility="none";
				//document.getElementById("ordersummary").style.visibility="hidden";
				
				
			}
			
			function getmealPreference()
			{
				cardnumber = document.getElementById("cardno").value;
				var geturl = "getmealpreference.php?cardnumber=" + cardnumber;
				$.ajax({
				type : "GET",
				url : geturl,
				dataType : "html",
				success: function(data) {
				preference=data;
				//alert(preference);
				showDiv();},
				error : function() {
					alert("Sorry, The requested property could not be found.");
				}
			});	
			}
			
			function showDiv()
			{
			
				$('#cafecontent_hh').hide();
				//$('#cardtitle').hide();
				//alert(preference);
				if(preference=="glutenfree")
				
					{
						$('#vegan1_hh').hide();
						$('#glutenfree1_hh').show();
						$('#regular1_hh').hide();
						$('#buttons_hh').show();
						
					}
					if(preference=="vegan")
					{
						$('#vegan1_hh').show();
						$('#buttons_hh').show();
						$('#glutenfree1_hh').hide();
						$('#regular1_hh').hide();
						
					}
					if(preference=="regular")
					{
						$('#regular1_hh').show();
						$('#buttons_hh').show();
						$('#glutenfree1_hh').hide();
						$('#vegan1_hh').hide();
					}
					if(preference=="nopreference")
					{
						$('#glutenfree1_hh').show();
						$('#vegan1_hh').show();
						$('#regular1_hh').show();
						$('#buttons_hh').show();
					}
			}
			function showOtherItems()
			{
				if(preference=="glutenfree")
				
					{
						//document.getElementById("glutenfree").style.visibility="visible";
						//$('#glutenfree').show();
						$('#vegan1_hh').show();
						$('#regular1_hh').show();
					}
					if(preference=="vegan")
					{
						$('#glutenfree1_hh').show();
						$('#regular1_hh').show();
						//document.getElementById("glutenfree").style.visibility="none";
						//document.getElementById("vegan").style.visibility="visible";
					}
					if(preference=="regular")
					{
						$('#glutenfree1_hh').show();
						$('#vegan1_hh').show();
						//$('#regular').show();
					}
			}
			
			function orderfood()
			{
				var bananaQuan=document.getElementById("m1").value;
				var bluberryQuan=document.getElementById("m2").value;
				var penneQuan=document.getElementById("m3").value;
				var pumpkinQuan=document.getElementById("m4").value;
				var sodaQuan=document.getElementById("m5").value;
				var almondQuan=document.getElementById("m6").value;
				var padthaiQuan=document.getElementById("m7").value;
				var bundtQuan=document.getElementById("m8").value;
				var lemonadeQuan=document.getElementById("m9").value;
				var mushroomQuan=document.getElementById("m10").value;
				var burgerQuan=document.getElementById("m11").value;
				var biryaniQuan=document.getElementById("m12").value;
				var appleQuan=document.getElementById("m13").value;
				var choclateQuan=document.getElementById("m14").value;
				
				if (bananaQuan=="")
				{
					bananaQuan=0;
					orderedItem[0] = 0;
				}
				else
				{
					bananaCost=6*bananaQuan;
                    cost[0]=6*bananaQuan;
					totalCost+=bananaCost;
					bananaCalorie=350;
                    calories[0] = 350;
					totalCalorie += bananaCalorie;
					orderedItem[0] = "Banana Pecan Waffles";
                    //alert(totalCost);
					//PrintOrderItems();
				}
				
				if (bluberryQuan=="")
				{
					bluberryQuan=0;
					orderedItem[1] = 0;
				}
				else
				{
					blueberryCost=3*bluberryQuan;
                    cost[1]=3*bluberryQuan;
                    totalCost+=blueberryCost;
					bluberryCalorie=220;
                    calories[1]=220;
					totalCalorie += bluberryCalorie;
					orderedItem[1] = "Bluberry Corn muffins";
				}
				if (penneQuan=="")
				{
					penneQuan=0;
					orderedItem[2] = 0;
				}
				else
				{
					penneCost=9*penneQuan;
                    cost[2]= 9*penneQuan ;
                    calories[2]= 490;
                    orderedItem[2] = "Penne Rigate Pomodoro";
					totalCost+=penneCost;
					penneCalorie=490;
					totalCalorie += penneCalorie;
					
				}

                /**/
                if (pumpkinQuan=="")
				{
					pumpkinQuan=0;
					orderedItem[3] = 0;
				}
				else
				{
					pumpkinCost=3*pumpkinQuan;
                    cost[3]= 3*pumpkinQuan ;
                    calories[3]= 300;
                    orderedItem[3] = "Pumpkin cheesecake";
					totalCost+=pumpkinCost;
					pumpkinCalorie=300;
					totalCalorie += pumpkinCalorie;
					
					//PrintOrderItems();
				}
				
				if (sodaQuan=="")
				{
					sodaQuan=0;
					orderedItem[4] = 0;
				}
				else
				{
					sodaCost=1*sodaQuan;
                    cost[4]= 1*sodaQuan ;
                    calories[4]= 160;
                    orderedItem[4] = "Soda";
					totalCost+=sodaCost;
					sodaCalorie=160;
					totalCalorie += sodaCalorie;
					
				}
				if (almondQuan=="")
				{
					almondQuan=0;
					orderedItem[5] = 0;
				}
				else
				{
					almondCost=2*almondQuan;
                    cost[5]= 2*almondQuan ;
                    calories[5]= 250;
                    orderedItem[5] = "Almond Butter Toast";
					totalCost+=almondCost;
					almondCalorie=250;
					totalCalorie += almondCalorie;
				}
				if (padthaiQuan=="")
				{
					padthaiQuan=0;
					orderedItem[6] = 0;
				}
				else
				{
					padthaiCost=11*padthaiQuan;
                    cost[6]= 11*padthaiQuan ;
                    calories[6]= 500;
                    orderedItem[6] = "Pad Thai with tofu";
					totalCost+=padthaiCost;
					padthaiCalorie=500;
					totalCalorie += padthaiCalorie;
				}
				if (bundtQuan=="")
				{
					bundtQuan=0;
					orderedItem[7] = 0;
				}
				else
				{
					bundtCost=3*bundtQuan;
                    cost[7]= 3*bundtQuan ;
                    calories[7]= 300;
                    orderedItem[7] = "Chocolate Bundt cake";
					totalCost+=bundtCost;
					bundtCalorie=300;
					totalCalorie += bundtCalorie;
				}
				if (lemonadeQuan=="")
				{
					lemonadeQuan=0;
					orderedItem[8] = 0;
				}
				else
				{
					lemonadeCost=1*lemonadeQuan;
                    cost[8]= 1*lemonadeQuan ;
                    calories[8]= 150;
                    orderedItem[8] = "Lemonade";
					totalCost+=lemonadeCost;
					lemonadeCalorie=150;
					totalCalorie += lemonadeCalorie;
				}
				if (mushroomQuan=="")
				{
					mushroomQuan=0;
					orderedItem[9] = 0;
				}
				else
				{
					mushroomCost=8*mushroomQuan;
                    cost[9]= 8*mushroomQuan ;
                    calories[9]= 330;
                    orderedItem[9] = "Mushroom & Tomato omlette";
					totalCost+=mushroomCost;
					mushroomCalorie=330;
					totalCalorie += mushroomCalorie;
				}
				if (burgerQuan=="")
				{
					burgerQuan=0;
					orderedItem[10] = 0;
				}
				else
				{
					burgerCost=9*burgerQuan;
                    cost[10]= 9*burgerQuan ;
                    calories[10]= 540;
                    orderedItem[10] = "Veggie Burger";
					totalCost+=burgerCost;
					burgerCalorie=540;
					totalCalorie += burgerCalorie;
				}
				if (biryaniQuan=="")
				{
					biryaniQuan=0;
					orderedItem[11] = 0;
				}
				else
				{
					biryaniCost=6*biryaniQuan;
                    cost[11]= 6*biryaniQuan ;
                    calories[11]= 550;
                    orderedItem[11] = "Indian Veg Biriyani";
					totalCost+=biryaniCost;
					biryaniCalorie=550;
					totalCalorie += biryaniCalorie;
				}
				if (appleQuan=="")
				{
					appleQuan=0;
					orderedItem[12] = 0;
				}
				else
				{
					appleCost=3*appleQuan;
                    cost[12]= 3*appleQuan ;
                    calories[12]= 450;
                    orderedItem[12] = "Apple Pie";
					totalCost+=appleCost;
					appleCalorie=450;
					totalCalorie += appleCalorie;
				}
				if (choclateQuan=="")
				{
					choclateQuan=0;
					orderedItem[13] = 0;
				}
				else
				{
					choclateCost=2*choclateQuan;
                    cost[13]= 2*choclateQuan ;
                    calories[13]= 100;
                    orderedItem[13] = "Pad Thai with tofu";
					totalCost+=choclateCost;
					choclateCalorie=100;
					totalCalorie += choclateCalorie;
				}
				calorieLimit();
				//alert("1");
				dailyCalorieConsumption();
				//alert("2");
				//checkCalorie();
			}
					
				
			function showDiscountDiv()
			{
				
				$('#cafetitle_hh').show();
				$('#cardtitle_hh').hide();
				$('#cardnodiv_hh').hide();
				$('#glutenfree1_hh').hide();
				$('#vegan1_hh').hide();
				$('#regular1_hh').hide();
				$('#buttons_hh').hide();
				
				
				//document.getElementById("cardtitle")="Order Options";
				$('#deliveryControl_hh').hide();
				$('#discountDiv_hh').show();
				orderfood();
				
				
			}
			/*
			function checkTextBox()
			{
				var bananaQuan=document.getElementById("m1").value;
				var bluberryQuan=document.getElementById("m2").value;
				var penneQuan=document.getElementById("m3").value;
				var pumpkinQuan=document.getElementById("m4").value;
				var sodaQuan=document.getElementById("m5").value;
				var almondQuan=document.getElementById("m6").value;
				var padthaiQuan=document.getElementById("m7").value;
				var bundtQuan=document.getElementById("m8").value;
				var lemonadeQuan=document.getElementById("m9").value;
				var mushroomQuan=document.getElementById("m10").value;
				var burgerQuan=document.getElementById("m11").value;
				var biryaniQuan=document.getElementById("m12").value;
				var appleQuan=document.getElementById("m13").value;
				var choclateQuan=document.getElementById("m14").value;
				var abc = 0;
				
				alert(bananaQuan);
				alert(bluberryQuan);
				alert(penneQuan);
				alert(pumpkinQuan);
				alert(sodaQuan);
				alert(almondQuan);
				alert(padthaiQuan);
				alert(bundtQuan);
				alert(lemonadeQuan);
				alert(mushroomQuan);
				alert(burgerQuan);
				alert(biryaniQuan);
				alert(appleQuan);
				alert(""2choclateQuan);
				
				
				if (abc = ((bananaQuan != null) || (bananaQuan != "") || (bluberryQuan != null) || (bluberryQuan != "") || (penneQuan != null) || 
					(penneQuan != "") || (pumpkinQuan != null) || (pumpkinQuan != "") || (sodaQuan != null) || (sodaQuan != "") || (almondQuan != null)
					|| (almondQuan != "") || (padthaiQuan != null) || (padthaiQuan != "") || (bundtQuan != null) || (bundtQuan != "") || (lemonadeQuan != null)
					|| (lemonadeQuan != "") || (mushroomQuan != null) || (mushroomQuan != "") || (burgerQuan != null) || (burgerQuan != "") || (biryaniQuan != null) || (biryaniQuan != "") || (appleQuan != null) || (appleQuan != "") || (choclateQuan != null) || (choclateQuan != "")))
					{
						alert(abc);
						showDiscountDiv();
					}
				else
				{
					alert(abc);
					alert(" Please select a menu to continue");
						return false;
				}
			}*/
			
			function showDeliveryPreference()
			{
				$('#deliveryControl_hh').show();
				$('#discountDiv_hh').hide();
			}
			
			function showRadio()
			{
				$('#glutenfree1_hh').hide();
				$('#vegan1_hh').hide();
				$('#regular1_hh').hide();
				$('#buttons_hh').hide();
				//$('#cafename').hide();
				$('#deliveryControl_hh').hide();
				$('#building_hh').show();
				$('#cafetitle_hh').show();
				$('#discountDiv_hh').hide();
				
			}
			var inputs = document.getElementsByName("rd");
			
			function checkRadioValue()
			{
				for (var i = 0; i < inputs.length; i++) /* checks for the selected choice*/
				{
					if (inputs[i].checked) 
					{
						var z=1;
						deliveryaddr = inputs[i].value;
						delTime = (deliveryaddr*1+20);
						deliverycharges = 5;
						//alert(result);
						//$("#returnedvalue").html("<h4>Time Taken: "+"<br/>"+result+"<h4>");
						//$("#order").show();
						//var x= document.getElementById("delivery");
						//x.innerHTML=" Delivery Charges: $2";
						//var y= document.getElementById("discount");
						//y.innerHTML= "Delivery Time:" +result;
						//$("#address").hide();
						//$("#total").show();
						//$("#deliverybutton").show();
						printOrderSummary();
					}
					
				}
				if(!z)
				{
					alert("No location selected,Please select one");
				}
				
			}
			
			
			function printOrderSummary()
			{
				$('#building_hh').hide();
				$('#discountDiv_hh').hide();
				$('#ordersummary_hh').show();
				
				if(orderedItem[0])
				document.getElementById('d1').innerHTML = "<b>Item Name:</b> "+orderedItem[0] +" <br/> "+"<b>Calorie:</b>"+" "+calories[0]+"<br/>"+"<b>Price:</b>$"+" "+cost[0]+"<br/> ";
				if(orderedItem[1])
				document.getElementById('d2').innerHTML = "<br/>"+"<b>Item Name:</b> "+orderedItem[1] +"<br/> "+"<b>Calorie:</b>"+" "+calories[1]+"<br/> "+"<b>Price:</b>$"+" "+cost[1]+"<br/> ";
				if(orderedItem[2])
				document.getElementById('d3').innerHTML = "<br/>"+"<b>Item Name:</b> "+orderedItem[2] +"<br/>"+"<b>Calorie:</b>"+" "+calories[2]+"<br/> "+"<b>Price:</b>$"+" "+cost[2]+"<br/> ";
				if(orderedItem[3])
				document.getElementById('d4').innerHTML = "<br/>"+"<b>Item Name:</b> "+orderedItem[3] +"<br/> "+"<b>Calorie:</b>"+" "+calories[3]+"<br/> "+"<b>Price:</b>$"+" "+cost[3]+"<br/> ";
				if(orderedItem[4])
				document.getElementById('d5').innerHTML = "<br/>"+"<b>Item Name:</b> "+orderedItem[4] +"<br/> "+"<b>Calorie:</b>"+" "+calories[4]+"<br/> "+"<b>Price:</b>$"+" "+cost[4]+"<br/> ";
				if(orderedItem[5])
				document.getElementById('d6').innerHTML = "<br/>"+"<b>Item Name:</b> "+orderedItem[5] +"<br/> "+"<b>Calorie:</b>"+" "+calories[5]+"<br/> "+"<b>Price:</b>$"+" "+cost[5]+"<br/> ";
				if(orderedItem[6])
				document.getElementById('d7').innerHTML = "<br/>"+"<b>Item Name:</b> "+orderedItem[6] +"<br/> "+"<b>Calorie:</b>"+" "+calories[6]+"<br/> "+"<b>Price:</b>$"+" "+cost[6]+"<br/> ";
				if(orderedItem[7])
				document.getElementById('d8').innerHTML = "<br/>"+"<b>Item Name:</b> "+orderedItem[7] +"<br/> "+"<b>Calorie:</b>"+" "+calories[7]+"<br/> "+"<b>Price:</b>$"+" "+cost[7]+"<br/> ";
				if(orderedItem[8])
				document.getElementById('d9').innerHTML = "<br/>"+"<b>Item Name:</b> "+orderedItem[8] +"<br/> "+"<b>Calorie:</b>"+" "+calories[8]+"<br/> "+"<b>Price:</b>$"+" "+cost[8]+"<br/> ";
				if(orderedItem[9])
				document.getElementById('d10').innerHTML ="<br/>"+ "<b>Item Name:</b> "+orderedItem[9] +"<br/>  "+"<b>Calorie:</b>"+" "+calories[9]+"<br/> "+"<b>Price:</b>$"+" "+cost[9]+"<br/> ";
				if(orderedItem[10])
				document.getElementById('d11').innerHTML = "<br/>"+"<b>Item Name:</b> "+orderedItem[10] +"<br/> "+"<b>Calorie:</b>"+" "+calories[10]+"<br/> "+"<b>Price:</b>$"+" "+cost[10]+"<br/> ";
				if(orderedItem[11])
				document.getElementById('d12').innerHTML = "<br/>"+"<b>Item Name:</b> "+orderedItem[11] +"<br/> "+"<b>Calorie:</b>"+" "+calories[11]+"<br/> "+"<b>Price:</b>$"+" "+cost[11]+"<br/> ";
				if(orderedItem[12])
				document.getElementById('d13').innerHTML = "<br/>"+"<b>Item Name:</b> "+orderedItem[12] +"<br/> "+"<b>Calorie:</b>"+" "+calories[12]+"<br/> "+"<b>Price:</b>$"+" "+cost[12]+"<br/> ";
				if(orderedItem[13])
				document.getElementById('d14').innerHTML ="<br/>"+ "<b>Item Name:</b> "+orderedItem[13] +"<br/> "+"<b>Calorie:</b>"+" "+calories[13]+"<br/> "+"<b>Price:</b>$"+" "+cost[13]+"<br/> ";
				ordertotal();
				$('#deliveryControl_hh').hide();
				$('#confirmbutton_hh').show();	
			}
			
			function discount()
			{
				cardnumber = document.getElementById('discountno').value;
				var geturl = "discount.php?cardnumber=" + cardnumber;
				$.ajax({
				type : "GET",
				url : geturl,
				dataType : "html",
				success: function(data) {
					//alert(data);
					discountUsers(data);
				},
				error : function() {
					alert("Sorry, You are Not a Registered member!");
					}
				});	
			}
			
			function discountUsers(data)
			{
				if (data=="registered")	
				{
					discountprice=parseFloat(totalCost*0.1).toFixed(2);
					alert("you got a discount of  $"+discountprice);
					//alert("Please go ahead and select the order type");
					showDeliveryPreference();
				}
				else
				{
					alert("Not a registered user");
				}
			}
			
			function ordertotal()
			{
                $('#totalordersummary_hh').show();
				//alert(totalCost , discountprice);
                //alert(totalCost);
				checkCalorie();
				var a=document.getElementById("totalcost1_hh");
				a.innerHTML="Total Cost: $" + totalCost;
				var b=document.getElementById("discountprice_hh");
				b.innerHTML="Discount Price: $ " + discountprice;
				var c=document.getElementById("totalcalories_hh");
				c.innerHTML="Total Calories: " + totalCalorie;
				var e=document.getElementById("totalorder_hh");
				e.innerHTML="<b><u>Order Total: <b></u>$"+CalcOrderTotal();
				if(delTime)
				{
				var d=document.getElementById("deliverycharges_hh");
				d.innerHTML="Delivery Charges: $"+deliverycharges;
				var f=document.getElementById("deliverytime_hh");
				f.innerHTML="Delivery Time: "+delTime+ "min";
				var g=document.getElementById("deliveryaddress_hh");
				g.innerHTML="Delivery Address: Building "+deliveryaddr;
				
				}
				insertIntoDb();
				
			}
			
			function insertIntoDb()
			{
				$.post("insertIntoDb.php",
				{'cardnumber':cardnumber,'finalTotal': finalTotal,'totalCalorie':totalCalorie}, 
				function(data) {
					//alert(data);
					monthlybudget = data;
					if (isNaN(monthlybudget)==false)
					{
						deductFromBudget();
						insertUpdatedAmount();
						printRemainingBalance();
						
						//alert("asda"+dailyCalorieConsumption1);
						//alert("asdfasd"+upperCalorieLimit1);
						//checkCalorie();
						
					}
				});
			}
			
			function checkCalorie()
			{
				
				//alert("5:calorie limit:"+upperCalorieLimit1);
				//alert("6:calorie consumed today:"+dailyCalorieConsumption1);
				if (dailyCalorieConsumption1 > upperCalorieLimit1)
				{
						alert("you have crossed your daily calorie limit of " +upperCalorieLimit1);
				}
			}
			function calorieLimit()
			{
			    $.post("calorieLimit.php",
				{'cardnumber':cardnumber}, 
				function(data) {
					//alert("3.calorie limit"+data);
					upperCalorieLimit1 = data;
				});
			}
			
			function dailyCalorieConsumption()
			{
				$.post("dailyCalorieConsumption.php",
				{'cardnumber':cardnumber}, 
				function(data) {
					//alert("4"+data);
					dailyCalorieConsumption1 = data;
					
				});
				
			}
			
			function printRemainingBalance()
			{
				if (isNaN(monthlybudget)==false)
				{
					var h=document.getElementById("remainingbalance_hh");
					h.innerHTML="Remaining Balance: $"+amountAfterDeduction;
				}
				
				if (amountAfterDeduction < 100)
				{
					alert("You have less than $100 in your account");
				}
			}
			function deductFromBudget()
			{
				amountAfterDeduction = monthlybudget - totalCost;
				//alert (amountAfterDeduction);
				return amountAfterDeduction;
				
			}
			
			function insertUpdatedAmount()
			{
				//alert("inside insertupdateamount");
				$.post("insertUpdatedAmount.php",
				{'cardnumber':cardnumber,'amountAfterDeduction': amountAfterDeduction}, 
				function(data) {
					//alert(data);
				});
			}
			function CalcOrderTotal()
			{
				finalTotal = totalCost - discountprice;
				if(deliverycharges)
				{
					finalTotal += deliverycharges;
				}
				return finalTotal;
			}
			function confirmOrder()
			{
				$('#ordersummary_hh').hide();
				$('#confirmorder_hh').show();
			}
			
