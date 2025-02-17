
//  `./models/${objToRender}/scene.gltf`

			//import * as THREE from 'three';
			import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
			import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";



			let camera, scene, renderer;
			let mesh;

			init();

			function init() {

				camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 100 );
				camera.position.z = 2;

				scene = new THREE.Scene();

				const texture = new THREE.TextureLoader().load( 'textures/crate.gif' );
				texture.colorSpace = THREE.SRGBColorSpace;

				const geometry = new THREE.BoxGeometry();
				const material = new THREE.MeshBasicMaterial( { map: texture } );

				mesh = new THREE.Mesh( geometry, material );
				scene.add( mesh );

				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.setAnimationLoop( animate );
				//document.body.appendChild( renderer.domElement );
                                    document.getElementById("container3D").appendChild(renderer.domElement);
				//

				window.addEventListener( 'resize', onWindowResize );

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			function animate() {

				mesh.rotation.x += 0.005;
				mesh.rotation.y += 0.01;

				renderer.render( scene, camera );

			}
