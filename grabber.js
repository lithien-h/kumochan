var catalog;

var corsProxy = "https://cors-anywhere.herokuapp.com";
var url = "https://a.4cdn.org/g/catalog.json";

var xHttp = new XMLHttpRequest();
// attach a function to the requester that runs when we successfully request something
xHttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200)  { // readyState = 4: the request is done. status = 200: the server's status response, i think 200 means good things.
	var responseText = this.responseText;
	
	catalog = JSON.parse(responseText);
	console.log("This is the data straight from 4chan:");
	console.log(catalog);
	
	drawCatalog(catalog);
	}
}

// so something called a CORS proxy has to be used here because it breaks if it's not used?
// i should look into requests more.
xHttp.open("GET", corsProxy + "/" + url, "true");
xHttp.send();