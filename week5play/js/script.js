//DOM manipulate

function sayHello(){

	var name =
	 document.getElementById("name").value;

	var message = "<h2>Hello " + name + ", have a nice day!</h2>";
	 if (name==="zyx") {message = "<h2>Hello " + name + ", fuck off!</h2>";}
	document.getElementById("content").innerHTML = message;

	
	if (name==="zyx") {
		var title = "Fuck off"
		document.querySelector("#title").textContent = title;
	}
}