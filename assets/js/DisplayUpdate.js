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

	  var json = myJSON["myObject"];
  //change values of json
  if(jsonedit == "true"){
	  //finds the aspect from all imputs
//get key match
	//  for (var key in json) {
 		// if (json[key].id == key_) {
//get aspect match
	         //for (var aspectjson in json[key]) {
			 	//	  alert(Object.keys(json[key]));
 		      //  if(Object.keys(json[key]) == aspect) {
				//myJSON[key][aspectjson] = brush;
				// alert(myJSON[key][aspectjson]);
	            //    }
	       //  }		
		// }
	 //  }
		myJSON[key_][aspect] = brush;
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
		  button.onclick = function(){update("false", "true", currentKey.id)};
                      
		
  		  button.style.top = "10px"; 
  		  const test = parseInt(currentKey.posx) * 100;
		  button.style.marginLeft = test.toString().concat("px"); 
 		  button.style.height = "90px"
	  	  button.style.width = "90px"
		  button.style.zIndex = "100"
 		  button.style.background = currentKey.color;

		    // Add the button to the container
  		  container.appendChild(button); 
	      }
			//edit style of one    
	      if(reload == "false" && key === key_){

		  var singbutton = document.getElementById(key); 
  		  singbutton.style.top = "10px"; 
  		  const test = parseInt(currentKey.posx) * 100;
		  singbutton.style.marginLeft = test.toString().concat("px"); 
 		  singbutton.style.height = "90px"
	  	  singbutton.style.width = "90px"
		  singbutton.style.zIndex = "100"
 		  singbutton.style.background = currentKey.color;
		
	     }
	 }

}
