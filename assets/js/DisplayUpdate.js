window.onload = function() {
update("true", "false", "all", "na");
}
var brush = "grey";
var aspect = "color";
function setbursh(brsh, aspct) {
brush = inp;
aspect = aspct;

	
}
function update(reload, jsonedit, key_) {

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
  if(jsonedit == "true" && brush != null && brush != null){
	  
	  for (var i = 0; i < myJSON.length; i++) {
 		 if (myJSON[i].id === key_) {
	         for (var p = 0; p < myJSON[i].length; p++) {
 		        if (myJSON[i][p] === aspect) {
				myJSON[i][p] = brush;
	      }
	  }		
		 }
	  }
		//myJSON[key_][aspect] = brush;
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
		  button.addEventListener("click", update("false", "true", language.id));

		
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
		  var button = document.getElementById(key); 
  		  button.style.top = "10px"; 
  		  const test = parseInt(language.posx) * 100;
		  button.style.marginLeft = test.toString().concat("px"); 
 		  button.style.height = "90px"
	  	  button.style.width = "90px"
		  button.style.zIndex = "100"
 		  button.style.background = language.color;
		
	}
}
