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
    "color": "180deg",
    "coloralt": "black"
},
"w": { 
    "id": "w",
    "path": "json/data1.json",
    "posx": "1",
    "posy": "0",
    "color": "20deg",
    "coloralt": "black"
},
"e": {
   "id": "e",
   "path": "json/data2.json",
   "posx": "2", 
   "posy": "0",
   "color": "240deg",
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
		
		//creates keys and sets constants
	     if(reload == "true"){

  		  var button = document.createElement("div"); 
		  var bg = document.createElement("img");
		  var content = document.createElement("label");
                  
		  button.classList.add("key"); 
 		  button.id = currentKey.id;
		  button.setAttribute("onclick","update('false', 'true','" + key + "')");

		  content.textContent=currentKey.id.toString();
		  content.id=currentKey.id.concat("text");
		     
		  bg.id=currentKey.id.concat("im");
		  bg.setAttribute("src","https://github.com/OskarMeeks/test-site/blob/main/images/key.png?raw=true");
		  bg.style.width = u2;
		  bg.style.zIndex = "-1";
		  bg.style.position = "absolute";
  		  container.appendChild(button); 
		  button.appendChild(bg);
		  button.appendChild(content);
	      }
		//sets adjustables
		  var button = document.getElementById(key); 
		  var text = document.getElementById(key+"text");
                  var bg = document.getElementById(key+"im");

		
  		  button.style.top = "10px"; 
  		  const space = parseInt(currentKey.posx) * u;
		  button.style.marginLeft = space.toString().concat("px"); 
 		  button.style.height = u2;
	  	  button.style.width = u2;
 		  //button.style.background = currentKey.color;
                  bg.style.filter = "sepia(100%) saturate(100%) brightness(70%) hue-rotate("currentKey.color")";
		  text.style.color = currentKey.coloralt;

	 }

}
