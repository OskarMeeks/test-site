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
    "color2": "black"
},
"w": { 
    "id": "w",
    "path": "json/data1.json",
    "posx": "1",
    "posy": "0",
    "color": "white",
    "color2": "black"
},
"e": {
   "id": "e",
   "path": "json/data2.json",
   "posx": "2", 
   "posy": "0",
   "color": "white",
   "color2": "black"
}
}
}
	 alert("let's go!");
  //change values
  if(jsonedit == "true"){

	  
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
  		  button.style.top = "10px"; 
  		  const test = parseInt(language.posx) * 100;
		  button.style.marginLeft = test.toString().concat("px"); 
 		  button.style.height = "90px"
	  	  button.style.width = "90px"
		  button.style.zIndex = "100"
 		  button.style.background = language.color;
		  button.addEventListener("click", update);
		    // Add the button to the container
  		  container.appendChild(button); 
	}
	}
	//edit style of one
	if(reload == "false"){
		var language = dctLanguages[key_];

		
	}
}
