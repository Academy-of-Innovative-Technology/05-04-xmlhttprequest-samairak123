const data = document.querySelector("#name");
const food = document.querySelector("#food");
const but1 = document.querySelector(".press");

but1.addEventListener("click", function(event) {
   console.log("Click successful!");

   let xhttp = new XMLHttpRequest();


xhttp.onreadystatechange = function() {
   if (this.readyState === 4 && this.status === 200) {
       console.log(JSON.parse(xhttp.responseText));
   }
};

var obj = {
firstName: data.value,
favoriteFood: food.value
};

console.log(JSON.stringify( obj ))
const dataString = (JSON.stringify( obj ));

xhttp.open("POST", "http://100.66.169.122:3000", true);
xhttp.setRequestHeader("Content-Type", "application/json");
xhttp.send(dataString);
});

