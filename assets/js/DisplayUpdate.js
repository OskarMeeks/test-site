window.onload = function() {
reloader("true");
tabmanager("tab1");
}

var brush = "grey";
var aspect1 = "color";
var aspect2;
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
    "text0":{"coloralt":"black","content":"q","pos":"1",font:"Monico"}
},
"w": { 
    "id": "w",
    "posx": "1",
    "posy": "0",
    "color": "sepia(100%) saturate(255%) brightness(255%) hue-rotate(20deg)",
    "layer": "2",
    "text0":{"coloralt":"black","content":"w","pos":"1",font:"Monico"}
},
"e": {
   "id": "e",	
   "posx": "2", 
   "posy": "0",
   "color": "sepia(100%) saturate(255%) brightness(255%) hue-rotate(20deg)",
   "coloralt": "black",
   "layer": "2",
   "text0":{"coloralt":"black","content":"e","pos":"1",font:"Monico"}
    }
}
};


function setbrush(brsh, aspct1, aspct2) {
brush = brsh;
aspect1 = aspct1;
aspect2 = aspct2;	
}

//called when clicking on a key to quick apply a style     uses saved value and aspect, imediately defined key
function update(reload, clickedkey){
	if(aspect2 == "none")
	{
	myJSON["myObject"][clickedkey][aspect1] = brush;
	}
	else{
	myJSON["myObject"][clickedkey][aspect1][aspect2] = brush;
	}

	reloader(reload);
}
//called when editing properties pannel                       uses saved key, immediate defined aspects and value
function updatespecial(reload, aspct1, aspct2, value){
	myJSON["myObject"][selectedkey][aspct1][aspct2] = value;
	reloader(reload);
}

function tabmanager(selectedtab){
	var tabs = ["tab1","tab2","tab3"];
	for(var tab in tabs){
		var currenttab = tabs[tab]
		//alert(tab);
		var tabb = document.getElementById(currenttab); 
		if(currenttab == selectedtab){
		tabb.style.visibility = "visible"
		}
		else{
		tabb.style.visibility = "hidden"
		}
		
	}

}


function reloader(reloads){
	//this json object is the specific keyboard
  var json = myJSON["myObject"];
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
