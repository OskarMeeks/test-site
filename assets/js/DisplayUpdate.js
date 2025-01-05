window.onload = function() {
update("true", "false", "all", "na");
}
var brush = "grey";
var aspect = "color";

function setbrush(brsh, aspct) {
brush = brsh;
aspect = aspct;

		 alert("brush changed");
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
  //change values of one
  if(jsonedit == "true" && brush != null && brush != null){
	  //finds the aspect from all imputs
	  for (var i = 0; i < myJSON.length; i++) {
		  alert("1");
 		 if (myJSON[i].id === key_) {
			 		  alert("2");
	         for (var p = 0; p < myJSON[i].length; p++) {
			 		  alert("3");
 		        if (myJSON[i][p] === aspect) {
				myJSON[i][p] = brush;
				 alert(myJSON[i][p]);
	                }
	         }		
		 }
	   }
		//myJSON[key_][aspect] = brush;
  }

  var dctLanguages = myJSON["myObject"];
  var container= document.getElementById('buttons');

	 //regernerate all 

	for (var key in dctLanguages)
	{
		//into current key
		var language = dctLanguages[key];
		//edit all   uses key for each id
	     if(reload == "true"){


  		  // Create a new div element
  		  var button = document.createElement("div"); 
 		  button.classList.add("key"); 
 		  button.id = language.id; // Set the id attribute
		//  button.setAttribute("value", key); 
		  button.onclick = function(){update("false", "true", language.id)};
                      
		
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
			//edit style of one    
	      if(reload == "false" && key === key_){

		  var singbutton = document.getElementById(key); 
  		  singbutton.style.top = "10px"; 
  		  const test = parseInt(language.posx) * 100;
		  singbutton.style.marginLeft = test.toString().concat("px"); 
 		  singbutton.style.height = "90px"
	  	  singbutton.style.width = "90px"
		  singbutton.style.zIndex = "100"
 		  singbutton.style.background = language.color;
		
	     }
	 }

}
