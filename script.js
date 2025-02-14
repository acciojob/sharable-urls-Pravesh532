// your code here
document.getElementById("myForm").addEventListener("submit", function(event) {
            event.preventDefault();
            
            
            let nameValue = document.getElementById("name").value;
            let yearValue = document.getElementById("year").value;

            
            let updatedUrl = `https://localhost:8080/?name=${encodeURIComponent(nameValue)}&year=${encodeURIComponent(yearValue)}`;

            
            document.getElementById("url").textContent = updatedUrl;
        });