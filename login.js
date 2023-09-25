console.clear();



function check_login(event)
{
	
	event.preventDefault();

	
	if($("#username").val() == $("#password").val())
	{
		alert("Login Successful");
		localStorage.setItem("logged_in", "true");
		$(location).attr("href", "admins.html");
	}
	else
	{
		alert("Invalid Login Credentials");
	}
}

// call function on form submit
$("#login_form").submit(check_login);

// check if login is already done
if(localStorage.getItem("logged_in") == "true")
{
	console.log("user already logged in");
	$(location).attr("href", "admins.html");
}