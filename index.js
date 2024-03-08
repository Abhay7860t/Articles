var requestBody = ""; 

var client=new XMLHttpRequest();
client.open("get","https://newsapi.org/v2/everything?q=medicine&apiKey=559f0ae26e104b08aaea5461ae22e48c");

client.setRequestHeader('Accept','application/json');
client.setRequestHeader('Content-Type','application/json');

//Eg. UserName="admin", Password="admin" for this code sample.
client.setRequestHeader('Authorization', 'Basic '+btoa('AbhaySingh'+':'+'Abha@123'));

client.onreadystatechange = function() { 
	if(this.readyState == this.DONE) {
		document.getElementById("response").innerHTML=this.status + this.response; 
	}
}; 
client.send(requestBody);