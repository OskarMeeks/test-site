window.onload = function() {
update("true", "false", "all", "na");
}
var brush = "grey";
var aspect = "color";
var u = 60;
var u2 = "58px";

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
		  var content = document.createElement("label");

		    // Add the button to the container
		  button.classList.add("key"); 
 		  button.id = currentKey.id; // Set the id attribute
		  button.setAttribute("onclick","update('false', 'true','" + key + "')");

		  content.textContent=currentKey.id.toString();
		  content.id=currentKey.id.concat("text");
		     
  		  container.appendChild(button); 
		  button.appendChild(content);
	      }
			//edit style of all    
	      if(reload == "false"){

		  var button = document.getElementById(key); 
		  var text = document.getElementById(key+"text");


		
  		  button.style.top = "10px"; 
  		  const space = parseInt(currentKey.posx) * u;
		  button.style.marginLeft = space.toString().concat("px"); 
 		  button.style.height = u2;
	  	  button.style.width = u2;
		  button.style.zIndex = "100"
 		  button.style.background = currentKey.color;

		  text.style.color = currentKey.coloralt;

	     }
	 }

}
