
//  `./models/${objToRender}/scene.gltf`

var myJSON= {"myObject": {
"q": {
    "id": "q",
    "posx": "0",
    "posy": "0",
    "color": "0xaaffaa",
    "layer": "2",
    "text0":{"coloralt":"black","content":"q","pos":"1",font:"Monico"},
    "instance": "0"
},
"w": { 
    "id": "w",
    "posx": "1",
    "posy": "0",
    "color": "0xaaffaa",
    "layer": "2",
    "text0":{"coloralt":"black","content":"w","pos":"1",font:"Monico"},
	"instance": "1"
},
"e": {
   "id": "e",	
   "posx": "2", 
   "posy": "0",
   "color": "0xaaffaa",
   "coloralt": "black",
   "layer": "2",
   "text0":{"coloralt":"black","content":"e","pos":"1",font:"Monico"},
	"instance": "2"
    }
}
};

var u = 1.2;
var u2 = "2px";
			//import * as THREE from 'three';
			import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
			import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";

import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

			let camera, scene, renderer, controls, stats;

			let mesh;
			const amount = parseInt( window.location.search.slice( 1 ) ) || 10;
			const count = Math.pow( amount, 3 );

			const raycaster = new THREE.Raycaster();
			const mouse = new THREE.Vector2( 1, 1 );

			const color = new THREE.Color()
			const white = new THREE.Color().setHex( 0xffffff );
			const loader = new GLTFLoader();

//const instanceData = []; // Array to store data related to each instance
			let object;
let object2;
loader.load(
  `./models/untitled.glb`,
  function (gltf) {
    //If the file is loaded, add it to the scene
    object = gltf.scene.getObjectByName( '1' );
    init();
   // reloader();
  },
  function (xhr) {
    //While it is loading, log the progress
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    //If there is an error, log it
    console.error(error);
  }
);


			

			function init() {

				camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 100 );
				camera.position.set( amount, amount, amount );
				camera.lookAt( 0, 0, 0 );

				scene = new THREE.Scene();

				const light = new THREE.HemisphereLight( 0xffffff, 0x888888, 2 );
				light.position.set( 0, 1, 0 );
				scene.add( light );

				const geometry = object.geometry.scale(60,60,60);//new THREE.BoxGeometry( 1, 1 );
				const material = new THREE.MeshPhongMaterial( { color: 0xFA8072 } );
				


				mesh = new THREE.InstancedMesh( geometry, material, count );

				
				let i = 0;
				const offset = ( amount - 1 ) / 2;

				const matrix = new THREE.Matrix4();


				        var json = myJSON["myObject"];
					for (var key in json){
						  var currentKey = json[key];
						  const spacex = parseInt(currentKey.posx) * u;
						
							matrix.setPosition(1, spacex, 1);
							mesh.setMatrixAt( i, matrix );
							mesh.setColorAt( i, color );
							mesh.name = myJSON["myObject"][key].id;
					         	//myJSON["myObject"][key].instance = mesh.instanceId;
						//	console.log(mesh.name);
						i++;
					}


				
				scene.add( mesh );

				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth/1.2, window.innerHeight/1.2 );
				renderer.setAnimationLoop( animate );
				document.getElementById("container3D").appendChild(renderer.domElement);
				controls = new OrbitControls( camera, renderer.domElement );
				controls.enableDamping = true;
				controls.enableZoom = true;
				controls.enablePan = true;


				window.addEventListener( 'resize', onWindowResize );
				document.addEventListener( 'mousemove', onMouseMove );
				
				// reloader();
			}

			function onWindowResize() {

				//camera.aspect = window.innerWidth / window.innerHeight;
				//camera.updateProjectionMatrix();

				//renderer.setSize( window.innerWidth/1.2, window.innerHeight/1.2 );

			}

			function onMouseMove( event ) {

				event.preventDefault();

				mouse.x = ( (event.pageX-193) / (window.innerWidth-400)) * 2 - 1;
				mouse.y = (- ( (event.pageY-500) / window.innerHeight/1.2) * 2 + 1);
				//console.log(mouse.y);
			}

			function animate() {

				controls.update();

				raycaster.setFromCamera( mouse, camera );

				const intersection = raycaster.intersectObject( mesh );

				if ( intersection.length > 0 ) {

					const instanceId = intersection[ 0 ].instanceId;

					mesh.getColorAt( instanceId, color );
					//myJSON["myObject"][clickedkey][aspect1] = brush
					//finds the key that was clicked by id
					for(var key in myJSON["myObject"])
					{
						//update the json file         checks only for instanceid colided with
    					    if(myJSON["myObject"][key].instance == instanceId ){
						
						if(aspect2 == "none")
						{
						myJSON["myObject"][key][aspect1] = brush;
						console.log(brush);
						}
						else{
						myJSON["myObject"][key][aspect1][aspect2] = brush;
						}
				
					
					    }
							update(instanceId, key);
					}
					
					
				//	if ( color.equals( white ) ) {

				//		mesh.setColorAt( instanceId, color.setHex( Math.random() * 0xffffff ) );

			//			mesh.instanceColor.needsUpdate = true;

			//		}

				}

				renderer.render( scene, camera );

			}

var brush = "rgb(100%, 100%, 0%)";
var aspect1 = "color";
var aspect2 = "none";

function setbrush(brsh, aspct1, aspct2) {
brush = brsh;
aspect1 = aspct1;
aspect2 = aspct2;	
}

//runs every animate frame, is called once for each key
function update(keyid, keylocation){
	mesh.setColorAt(keyid, new THREE.Color(myJSON["myObject"][keylocation].color) );  
    //    mesh.setColorAt(keyid, new THREE.Color());  
	
	//mesh.setColorAt( clickedkey, color.setHex(0xaaffaa )) ;
	mesh.instanceColor.needsUpdate = true;
	//console.log(myJSON["myObject"][keylocation].color);

}
function updateall(){
	for(var key in myJSON["myObject"])
	{

		if(aspect2 == "none")
		{
		myJSON["myObject"][key][aspect1] = brush;
		
		}
		else{
		myJSON["myObject"][key][aspect1][aspect2] = brush;
		}
	
		}
	//reloader();
}
function reloader(){
	let i = 0;

	mesh.traverse((child) => {

	    if (child.isInstancedMesh) {

        console.log(child.instanceId); // Log the name of each mesh in the scene

         }

});
	
	for(var key in myJSON["myObject"])
	{
		//mesh.setColorAt( i, myJSON["myObject"][key].color);
		
		const matrix = new THREE.Matrix4();
		
		 console.log(myJSON["myObject"][key].color);

		//var object2 = instancedMesh.getMatrixAt(i, matrix);
		//		console.log(object2.name);
		const newColor = new THREE.Color();
		newColor.set(myJSON["myObject"][key].color.toString());
                mesh.setColorAt(i, newColor);
		mesh.instanceColor.needsUpdate = true;
		i++;
		renderer.render( scene, camera );
	}
}

