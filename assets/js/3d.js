
//  `./models/${objToRender}/scene.gltf`

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

var u = 1.1;
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

			const color = new THREE.Color();
			const white = new THREE.Color().setHex( 0xffffff );
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

				const light = new THREE.HemisphereLight( 0xffffff, 0x888888, 3 );
				light.position.set( 0, 1, 0 );
				scene.add( light );

				const geometry = object.geometry.scale(60,60,60);//new THREE.BoxGeometry( 1, 1 );
				const material = new THREE.MeshPhongMaterial( { color: 0xffffff } );
				


				mesh = new THREE.InstancedMesh( geometry, material, count );
				
					mesh.rotation.x = -1;
					mesh.rotation.y = 0;
					mesh.rotation.z = 0;
				
				let i = 0;
				const offset = ( amount - 1 ) / 2;

				const matrix = new THREE.Matrix4();

				//for ( let x = 0; x < amount; x ++ ) {
//
				//	for ( let y = 0; y < amount; y ++ ) {
//
					//	for ( let z = 0; z < amount; z ++ ) {

					//		matrix.setPosition( offset - x, offset - y, offset - z );
//
					//		mesh.setMatrixAt( i, matrix );
					//		mesh.setColorAt( i, color );

					//		i ++;

						//}

					//}

				//}
				        var json = myJSON["myObject"];
					for (var key in json){
						  var currentKey = json[key];
						  const spacex = parseInt(currentKey.posx) * u;
						
							matrix.setPosition(1, spacex, 1);
							mesh.setMatrixAt( i, matrix );
							mesh.setColorAt( i, color );
							
						i++;
					}


				
				scene.add( mesh );

				//

	//			const gui = new GUI();
//				gui.add( mesh, 'count', 0, count );

				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth/1.2, window.innerHeight/1.2 );
				renderer.setAnimationLoop( animate );
			//	document.body.appendChild( renderer.domElement );
				document.getElementById("container3D").appendChild(renderer.domElement);
				controls = new OrbitControls( camera, renderer.domElement );
				controls.enableDamping = true;
				controls.enableZoom = true;
				controls.enablePan = true;

				//stats = new Stats();
				//document.body.appendChild( stats.dom );

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

			}
