
console.log("checking access");
if(localStorage.getItem("logged_in") == "false")
{
	console.log("user has not logged in");
	$(location).attr("href", "index.html");
}


function logout()
{
	localStorage.setItem("logged_in", "false");
	$(location).attr("href", "index.html");
}