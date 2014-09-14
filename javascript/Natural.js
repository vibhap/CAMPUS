        //Global Variables
	    var data = {"total":0,"rows":[]};
		var totalCost = 0;
		var totalCalories = 0;
		var totalDiscount = 0;
		var chosen=0;
		var deliverytime=0;
		var deliverycharge=2;
		
		function init() //Hides and displays the divs required.
		{ 
			document.getElementById("Orderform").style.display="none";
            document.getElementById("Orderform").style.visibility='hidden';
			document.getElementById("deliveryform").style.display="none";
            document.getElementById("deliveryform").style.visibility='hidden';
			document.getElementById("ordersummary").style.display="none";
            document.getElementById("ordersummary").style.visibility='hidden';
		}
			
		$(function(){
			$('#cartcontent').datagrid({
				singleSelect:true
			});
			$('.item').draggable({   //gets the source and its properties when drag function is perfformed.
				revert:true,
				proxy:'clone',    
				onStartDrag:function(){
					$(this).draggable('options').cursor = 'not-allowed';
					$(this).draggable('proxy').css('z-index',10);
				},
				onStopDrag:function(){
					$(this).draggable('options').cursor='move';
				}
			});
			$('.cart').droppable({
				onDragEnter:function(e,source){
					$(source).draggable('options').cursor='auto';
				},
				onDragLeave:function(e,source){
					$(source).draggable('options').cursor='not-allowed';
				},
				onDrop:function(e,source){
					var name = $(source).find('p:eq(0)').html(); //adds the properties along with the image
					var price = $(source).find('p:eq(1)').html();
					var Calories= $(source).find('p:eq(2)').html();
					addProduct(name, parseFloat(price.split('$')[1]),parseFloat(Calories.split(':')[1]));
				}
			});
		});
		
		function addProduct(name,price,calories)
		{

			function add(){
					for(var i=0; i<data.total; i++){
					var row = data.rows[i];
					if (row.name == name){  //adds the product when more Quantity is chosen 
						row.quantity += 1;
						return;
					}
				}
				data.total += 1;
				data.rows.push({
					name:name,
					quantity:1,
					price:price,
					Calories:calories
				});
			}
			add();
			totalCost += price;  //adds the Calories and total amount according to the dragged property.
			totalCalories += calories;
			$('#cartcontent').datagrid('loadData', data);
			$('div.cart .total').html('Total: $'+totalCost);
			$('div.cart .totalcalories').html('Calories:'+totalCalories);
		}
  
		function getMealPreferece()
		{
			var cardnumber = document.getElementById('cardnumbertext').value;
			//ajax call is made to get the card number and get the meal preference of that card number.
			
			var geturl = "getmealpreference.php?cardnumber=" + cardnumber;
			$.ajax({
				type : "GET",
				url : geturl,
				dataType : "html",
				success: function(data) {
					highlight(data);  //Highlight function is called with respect to the meal preference
				},
				error : function() {
					alert("Sorry, The requested property could not be found.");
				}
			});	
		}
		
		function getdiscount() //Make a ajax call and get the card number
		{
		var cardnumber = document.getElementById('cardnumberfordiscount').value;
		 var geturl = "getdiscount.php?cardnumber=" + cardnumber;
			$.ajax({
				type : "GET",
				url : geturl,
				dataType : "html",
				success: function(data) {
					discount(data); //Calls discount function
				},
				error : function() {
					alert("Sorry, You are Not a Registered member!");
				}
			});	
		}
		
          function discount(data) //Discount function to give 10% discount for the card holders.
        {
		   if (data == 'registered') 
		    {
			 totalDiscount=parseFloat(totalCost*0.1);
			 totalDiscount=totalDiscount.toFixed(2);
			alert(" You got a Discount of "+totalDiscount); 
			}
			else 
			{
			 alert("Not a registered user");
			}
         }

		function highlight(data) //highlight function to highlight the divs chosen
		{
		   var foodtype=data.toString();
		   if (foodtype =="vegan")
		   {
			   $(".vegan").css("backgroundColor", "red");  //For vegan food preference
			   $(".glutenfree").css("backgroundColor", "transparent ");
			   $(".regular").css("backgroundColor", "transparent ");
			   
		   }
		   else if (foodtype =="glutenfree")
		   {
			   $(".vegan").css("backgroundColor", "transparent ");
			   $(".glutenfree").css("backgroundColor", "red"); //for glutenfree food preference
			   $(".regular").css("backgroundColor", "transparent ");
		   }
		   else if (foodtype =="regular")
		   {
			   $(".vegan").css("backgroundColor", "transparent ");
			   $(".glutenfree").css("backgroundColor", "transparent ");
			   $(".regular").css("backgroundColor", "red");   //for regular food preference
		  }  
    	}
		
		function order() //Hides and displays the required divs when order function is called
		{
		   	document.getElementById("BreakFast").style.display="none";
            document.getElementById("BreakFast").style.visibility='hidden';
			document.getElementById("Orderform").style.visibility='visible';
			document.getElementById("Orderform").style.display="block";
			document.getElementById("deliveryform").style.display="none";
            document.getElementById("deliveryform").style.visibility='hidden';
			document.getElementById("ordersummary").style.display="none";
            document.getElementById("ordersummary").style.visibility='hidden';
			document.getElementById("mealbutton").style.display = 'none';
            document.getElementById("orderbutton").style.display = 'none';
		}
		
      		function Delivery() //Order type option is chosen
		{
		
		    document.getElementById("BreakFast").style.display="none";
            document.getElementById("BreakFast").style.visibility='hidden';
			document.getElementById("Orderform").style.visibility='hidden';
			document.getElementById("Orderform").style.display="none";
			document.getElementById("deliveryform").style.visibility='visible';
			document.getElementById("deliveryform").style.display="block";
			document.getElementById("ordersummary").style.display="none";
            document.getElementById("ordersummary").style.visibility='hidden';
		}
		
		  function GetSelectedItem() //Selects the Delivery location
       {
	     var chosen = ""
         var len = document.myform.group1.length;

           for (i = 0; i <len; i++) 
		   {
             if (document.myform.group1[i].checked)
	         {
              chosen = document.myform.group1[i].value
             }
            }
             if (chosen == "") 
		    {
             alert("No Location Chosen");
            }
             else {
		       calculatetime(chosen);//calls the time function
		    }
         }
 
       function calculatetime(chosen) //Calucuates the time depending on the location(building) chosen.
     {
	      if (chosen<5)
            { 
            deliverytime=15;
	        }
	       else
	       {
	         deliverytime=25;
	       }
		   totalmoney(chosen,deliverytime);
     }

	function TakeOut() //If Order type is check out, hides the required divs
       {     
	      	document.getElementById("BreakFast").style.display="none";
            document.getElementById("BreakFast").style.visibility='hidden';
			document.getElementById("Orderform").style.visibility='hidden';
			document.getElementById("Orderform").style.display="none";
			document.getElementById("deliveryform").style.visibility='hidden';
			document.getElementById("deliveryform").style.display="none";
			document.getElementById("ordersummary").style.display="block";
            document.getElementById("ordersummary").style.visibility='visible';
			totalmoney(chosen,deliverytime);
     }
		 
		 function totalmoney(chosen,deliverytime) //Calculate  the delivery charge according to the cardnumber and location chosen
		 {
		     var cardnumber = 0; 
			 var div = document.getElementById('cardnumberfordiscount');
			 if (typeof div != 'undefined') {
				cardnumber = document.getElementById('cardnumberfordiscount').value;
			 } 
			 if (cardnumber=='')
			 {
			    deliverycharge=0;     //card number validation
			 }
			 else 
			 {deliverycharge=2;
			 }
			 
			 	if (chosen=='')
				{
				deliverycharge=0; //Location chosen validation
				}
				else
				{deliverycharge=2;
				}
				
				
			 var moneyafterdiscount=totalCost-totalDiscount;
			 var moneydue=moneyafterdiscount+deliverycharge; //Adding delivery cahrge to the total amount
			 var calories=totalCalories;
						 	
			$.post("deductamount.php",
			{'cardnumber':cardnumber,'moneydue': moneydue,'calories':calories}, 
				function(result) {
					if (result == 'success' || result == 'nonmember') {
						ordersummary(chosen,moneydue,totalDiscount,totalCalories,deliverytime,totalCost,deliverycharge);
					} else if (result.search('alert') != -1) {
						var message = result.split(',');
						amount = message[1];
						if (amount > 0) {
							alert ("You are about to exceed your monthly budget, You are left with "+ amount+" in your monthly budget. ");//alert showing that they will exceed there monthly budget
						} else {
							amount = amount * -1;
							alert ("You have exceeded your monthly budget by  " + amount); //If budget is exceeded, but still user will be allowed to order
						}
						ordersummary(chosen,moneydue,totalDiscount,totalCalories,deliverytime,totalCost,deliverycharge);
					} else if (result == 'nofunds') {
						alert ("You do not have suffecient funds in your account"); // No sufficient funds alert
						return;
					} else if (result == 'error') {
						alert("error occured while connecting to database. Please try again.");  //Database connection error
						return;
					}
				}
			);
		 }
		 

        function ordersummary(chosen,moneydue,totalDiscount,totalCalories,deliverytime,totalCost,deliverycharge)
    {    //Final order summary displaying all the details calculated
       var a=chosen;
	   var b=totalCost;
	   var c=totalDiscount;
	   var d=deliverycharge;
	   var e=deliverytime;
	   var f=totalCalories;
	   var g=moneydue;
            document.getElementById("BreakFast").style.display="none";
            document.getElementById("BreakFast").style.visibility='hidden';
			document.getElementById("Orderform").style.visibility='hidden';
			document.getElementById("Orderform").style.display="none";
			document.getElementById("deliveryform").style.visibility='hidden';
			document.getElementById("deliveryform").style.display="none";
			document.getElementById("ordersummary").style.display="block";
            document.getElementById("ordersummary").style.visibility='visible';
			
			   var l=document.getElementById('building');
	         l.innerHTML="DELIVERY BUILDING : # " + a;
			   var m=document.getElementById('cost');
	         m.innerHTML="TOTAL COST: $ " + b;
               var n=document.getElementById('discountdiv'); // Getting the respective divs to display
             n.innerHTML=" YOU GOT: $ " + c + " Discount";   
               var o=document.getElementById('deliverydiv');
             o.innerHTML=" YOUR DELIVERY CHARGE IS: $" + d;
			   var p=document.getElementById('time');
             p.innerHTML=" DELIVERY TIME : " + e + " Minutes";
			   var q=document.getElementById('calories');
             q.innerHTML=" TOTAL CALORIES : " + f;
			   var r=document.getElementById('Moneydue');
			  r.innerHTML="MONEY DUE : $ " + g;

}

