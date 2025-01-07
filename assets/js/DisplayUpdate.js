window.onload = function() {
reloader();
}

var brush = "grey";
var aspect = "color";
var u = 80;
var u2 = "78px";
var selectedkey;

var myJSON= {"myObject": {
"q": {
    "id": "q",
    "posx": "0",
    "posy": "0",
    "color": "sepia(100%) saturate(255%) brightness(255%) hue-rotate(20deg)",
    "layer": "2",
    "text0":{"coloralt":"black","content":"q","pos":"1"},
    "text1":{"coloralt":"black","content":"q","pos":"1"},
    "text2":{"coloralt":"black","content":"q","pos":"1"},
    "text3":{"coloralt":"black","content":"q","pos":"1"}
},
"w": { 
    "id": "w",
    "posx": "1",
    "posy": "0",
    "color": "sepia(100%) saturate(255%) brightness(255%) hue-rotate(20deg)",
    "layer": "2",
    "text0":{"coloralt":"black","content":"w","pos":"1"},
    "text1":{"coloralt":"black","content":"q","pos":"1"},
    "text2":{"coloralt":"black","content":"q","pos":"1"},
    "text3":{"coloralt":"black","content":"q","pos":"1"}
},
"e": {
   "id": "e",	
   "posx": "2", 
   "posy": "0",
   "color": "sepia(100%) saturate(255%) brightness(255%) hue-rotate(20deg)",
   "coloralt": "black",
   "layer": "2",
   "text0":{"coloralt":"black","content":"e","pos":"1"},
   "text1":{"coloralt":"black","content":"q","pos":"1"},
   "text2":{"coloralt":"black","content":"q","pos":"1"},
   "text3":{"coloralt":"black","content":"e","pos":"1"}
    }
}
};


function setbrush(brsh, aspct) {
brush = brsh;
aspect = aspct;
}

//called when clicking on a button to quick apply a style     uses saved value and aspect
function update(reload, clickedkey) {
  
	myJSON["myObject"][clickedkey][aspect] = brush;
  
reloader(reload);
}
//called when editing properties pannel                       uses immediate defined aspects and value
function updateall(reload, selectedkey) {
	myJSON["myObject"][selectedkey][aspect] = brush;
  
reloader(reload);
}


funciton reloader(reloads){
  var container= document.getElementById('buttons');
	for (var key in json)
	{
		//into current key
		var currentKey = json[key];
		
		//creates keys and sets constants
	     if(reloads == "true"){

  		  var button = document.createElement("div"); 
		  var bg = document.createElement("img");
		  var content = document.createElement("label");
                  
		  button.classList.add("key"); 
 		  button.id = currentKey.id.toString();
		  button.setAttribute("onclick","update('false','" + key + "')");

		  content.textContent=currentKey.id.toString();
		  content.id=currentKey.id.toString()+"text";
		  content.style.marginLeft = u/3+"px";
		  bg.id=currentKey.id.toString()+"im";;
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
                  bg.style.filter = currentKey.color;
		  text.style.color = currentKey.text0.coloralt;

	 }

}
