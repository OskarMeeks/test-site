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
       var button ='<div class="key" id="'+language.id+'" value="'+key+'"/>';
	  
	var sample = document.getElementById(language.id.toString()); // using var
	sample.style.top = "10px"; // Changes color, adds style property.
	  
  //   button.top = "10px"; 
 //      button.style.marginLeft = parseInt(language.posx) * 100; 
       container.innerHTML+=button;
  }
}
