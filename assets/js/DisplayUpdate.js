function myFunction() {
var myJSON= {"myObject": {
"JAVA": {
    "id": "q",
    "path": "json/data.json",
    "posx": "a0",
    "posy": "a0"
},
"C#": { 
    "id": "w",
    "path": "json/data1.json",
    "posx": "a1",
    "posy": "a0"
},
"C++": {
   "id": "e",
   "path": "json/data2.json",
   "posx": "a2", 
   "posy": "a0"
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
       container.innerHTML+=button;
  //   button.top = "10px"; 
  //   button.style.marginLeft = parseInt(language.posx) * 100px; 
  }
}
