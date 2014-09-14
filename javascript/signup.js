  
  function Validate()  // Validates all the fields entered while signing up
{
    var p=document.forms["registerblock"]["CampusCard_ID"].value;
	var q=document.forms["registerblock"]["Email"].value;
	var r=document.forms["registerblock"]["Password"].value;
	var s=document.forms["registerblock"]["FirstName"].value;
	var t=document.forms["registerblock"]["LastName"].value;
	var menuchosen = "";
    var len = document.registerblock.group1.length;

        for (i = 0; i <len; i++) 
		{
			if (document.registerblock.group1[i].checked)
			{
				menuchosen = document.registerblock.group1[i].value
			}
		}
	var v=document.forms["registerblock"]["MonthlyBudget"].value;
	var w=document.forms["registerblock"]["DailyCalorie"].value;
	                   //Checks for empty fields
	      if (p==null || p==""|| q==null || q==""||r==null || r==""||s==null || s==""||t==null || t==""||menuchosen==null || menuchosen==""||v==null || v==""||w==null || w=="")
             {
              alert("All the Fields should be filled up to Register!!");
			  return false;
			  }
			  else
			  {
			  $.post("signup.php",
				{'CampusCard_ID':p,'Email': q,'Password':r,'FirstName': s,'LastName':t,'FoodPreference':menuchosen,'MonthlyBudget':v,'DailyCalorie':w}, 
				function(data) {
					if (data=="success")
					{                          // Redirects to the Login page once successfully signed in
					   alert('You have been successfully signed up! Please sign in with the your credentials');
					   window.location.href = 'My Page.php';
					}
					else 
					{
					  alert('Sorry! Could not sign up!');
					}
					
				}
			   );
		      }
}



