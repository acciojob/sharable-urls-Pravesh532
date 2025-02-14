// your code here
 document.getElementById("myform").addEventListener("submit",function(event) {
 	event.preventDefault(); 

	 let value = ducument.getElementById("name").value;
	 let vlue2 = document.getElementById("year").value;
 let updatedUrl = `https://localhost:8080/?name=${encodeURIComponent(nameValue)}&year=${encodeURIComponent(yearValue)}`; })
 document.getElementById("url").textContent = updatedUrl;