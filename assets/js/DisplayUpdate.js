window.onload = function() {
update("true", "false", "all", "white", "black");
}
function update(reload, jsonedit, key_, color1, color2) {

var myJSON= {"myObject": {
"q": {
    "id": "q",
    "path": "json/data.json",
    "posx": "0",
    "posy": "0",
    "color": "white",
    "coloralt": "black"
},
"w": { 
    "id": "w",
    "path": "json/data1.json",
    "posx": "1",
    "posy": "0",
    "color": "white",
    "coloralt": "black"
},
"e": {
   "id": "e",
   "path": "json/data2.json",
   "posx": "2", 
   "posy": "0",
   "color": "white",
   "coloralt": "black"
}
}
}
	 alert("let's go!");
  //change values of one
  if(jsonedit == "true"){
		myJSON.key_.color = color1;
	  	myJSON.key_.coloralt = color12;
  }

  var dctLanguages = myJSON["myObject"];
  var container= document.getElementById('buttons');

	 //regernerate all 
	if(reload == "true"){
	for (var key in dctLanguages)
	{

  		  var language = dctLanguages[key];

  		  // Create a new div element
  		  var button = document.createElement("div"); 
 		  button.classList.add("key"); 
 		  button.id = language.id; // Set the id attribute
		  button.setAttribute("value", key); 
		  button.addEventListener("click", update);

		
  		  button.style.top = "10px"; 
  		  const test = parseInt(language.posx) * 100;
		  button.style.marginLeft = test.toString().concat("px"); 
 		  button.style.height = "90px"
	  	  button.style.width = "90px"
		  button.style.zIndex = "100"
 		  button.style.background = language.color;

		    // Add the button to the container
  		  container.appendChild(button); 
	}
	}
	//edit style of one
	if(reload == "false"){
		  var button = document.getElementById("myElementId"); 
  		  button.style.top = "10px"; 
  		  const test = parseInt(language.posx) * 100;
		  button.style.marginLeft = test.toString().concat("px"); 
 		  button.style.height = "90px"
	  	  button.style.width = "90px"
		  button.style.zIndex = "100"
 		  button.style.background = language.color;
		
	}
}
