window.onload = function() {
update("true", "false", "all", "na");
}
var brush = "grey";
var aspect = "color";
var u = 30;
var u2 = "29px";

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


function setbrush(brsh, aspct) {
brush = brsh;
aspect = aspct;
}
function update(reload, jsonedit, key_) {

	  var json = myJSON["myObject"];
  //change values of json
  if(jsonedit == "true"){
		myJSON["myObject"][key_][aspect] = brush;
  }


  var container= document.getElementById('buttons');

	 //regernerate all 

	for (var key in json)
	{
		//into current key
		var currentKey = json[key];
		//edit all   uses key for each id
	     if(reload == "true"){


  		  // Create a new div element
  		  var button = document.createElement("div"); 
 		  button.classList.add("key"); 
 		  button.id = currentKey.id; // Set the id attribute
		//  button.setAttribute("value", key); 
		  button.setAttribute("onclick","update('false', 'true','" + key + "')");
		
  		  button.style.top = "10px"; 
  		  const space = parseInt(currentKey.posx) * u;
		  button.style.marginLeft = space.toString().concat("px"); 
 		  button.style.height = u2;
	  	  button.style.width = u2;
		  button.style.zIndex = "100"
 		  button.style.background = currentKey.color;

		    // Add the button to the container
  		  container.appendChild(button); 
		  var content = document.createTextNode("<YOUR_CONTENT>");
		  button.appendChild(content);
	      }
			//edit style of one    
	      if(reload == "false" && key === key_){

		  var singbutton = document.getElementById(key_); 
  		  singbutton.style.top = "10px"; 
  		  const space = parseInt(currentKey.posx) * u;
		  singbutton.style.marginLeft = space.toString().concat("px"); 
 		  singbutton.style.height = u2;
	  	  singbutton.style.width = u2;
		  singbutton.style.zIndex = "100"
 		  singbutton.style.background = currentKey.color;
		
	     }
	 }

}
