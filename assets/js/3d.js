
//  `./models/${objToRender}/scene.gltf`

var myJSON= {"myObject": {
"q": {
    "id": "q",
    "posx": "0",
    "posy": "0",
    "color": "0xFFFFFF",
    "layer": "2",
    "text0":{"coloralt":"black","content":"q","pos":"1",font:"Monico"}
},
"w": { 
    "id": "w",
    "posx": "1",
    "posy": "0",
    "color": "0xFFFFFF",
    "layer": "2",
    "text0":{"coloralt":"black","content":"w","pos":"1",font:"Monico"}
},
"e": {
   "id": "e",	
   "posx": "2", 
   "posy": "0",
   "color": "0xFFFFFF",
   "coloralt": "black",
   "layer": "2",
   "text0":{"coloralt":"black","content":"e","pos":"1",font:"Monico"}
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

			const color = new THREE.Color().setHex( 0xFA8072 );
			const white = new THREE.Color().setHex( 0xFA8072 );
			const loader = new GLTFLoader();
			let object;
loader.load(
  `./models/untitled.glb`,
  function (gltf) {
    //If the file is loaded, add it to the scene
    object = gltf.scene.getObjectByName( '1' );
    init();
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
							//mesh.name(key);
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

					if ( color.equals( white ) ) {

						mesh.setColorAt( instanceId, color.setHex( Math.random() * 0xffffff ) );

						mesh.instanceColor.needsUpdate = true;

					}

				}

				renderer.render( scene, camera );
reloader();
			}

var brush = "grey";
var aspect1 = "color";
var aspect2;

function setbrush(brsh, aspct1, aspct2) {
brush = brsh;
aspect1 = aspct1;
aspect2 = aspct2;	
}

//called when clicking on a key to quick apply a style     uses saved value and aspect, imediately defined key
function update(clickedkey){
	if(aspect2 == "none")
	{
	myJSON["myObject"][clickedkey][aspect1] = brush;
	}
	else{
	myJSON["myObject"][clickedkey][aspect1][aspect2] = brush;
	}
        selectedkey = clickedkey;
	reloader();
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
	reloader();
}
function reloader(){
	for(var key in myJSON["myObject"])
	{
		mesh.setColorAt( i, json[key].color);
		i++;
		renderer.render( scene, camera );
	}
}

