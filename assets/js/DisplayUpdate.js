window.onload = function() {

var myJSON= {"myObject": {
"JAVA": {
    "id": "q",
    "path": "json/data.json",
    "posx": "0",
    "posy": "0"
},
"C#": { 
    "id": "w",
    "path": "json/data1.json",
    "posx": "1",
    "posy": "0"
},
"C++": {
   "id": "e",
   "path": "json/data2.json",
   "posx": "2", 
   "posy": "0"
}
}
}
	 alert("let's go!");

  var dctLanguages = myJSON["myObject"];
  var container= document.getElementById('buttons');
  for (var key in dctLanguages)
  {


    var language = dctLanguages[key];

    // Create a new div element
    var button = document.createElement("div"); 
    button.classList.add("key"); 
    button.id = language.id; // Set the id attribute
    button.setAttribute("value", key); 
    button.style.top = "1000px"; 
    cost test = parseInt(language.posx) * 100;
    button.style.marginLeft = test.toString().concat(px); 
    button.style.height = "100px"
    // Add the button to the container
    container.appendChild(button); 
	  
  //   var language = dctLanguages[key];
     //  var button ='<div class="key" id="????" value="'+language.id+'"/>';
	  
	//var sample = document.getElementById(language.id); // using var
	//button.style.top = "10px"; // Changes color, adds style property.   ="'+language.id+'"  "'+language.id+'"       "'+key+'"
	  
  //   button.top = "10px"; 

      // container.innerHTML+=button;
  }
}
