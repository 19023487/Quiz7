function processForm (){
	var number1 = document.getElementById("number1");
	var number2 = document.getElementById("number2");
	var number3 = document.getElementById("number3");
   
	var output = document.getElementById("output");
   for(var i = number1.value; i <= number2.value; i++){
	   if(i % number3.value == 0 ) {
   output.innerHTML += "<div>" + i + "</div>";
		}
	}
}