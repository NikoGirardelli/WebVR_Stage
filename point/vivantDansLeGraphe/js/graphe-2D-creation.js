/* S'occupe de créer les axes et le sol du graphe */
/* Constantes pour les couleurs, gris, blanc, noir */
const couleur = [0x808b96,0xfbfcfc,0x000000];

/* Sous-programme qui crée le sol du graphe */
function creerSol(graphe,callback) {

	var sol = new THREE.BoxBufferGeometry(1.5,0.25,1.5);
	var solLecture = new THREE.PlaneGeometry(1,1);
	var texture = new THREE.TextureLoader().load( ".../textures/grid_2.png" );
	texture.wrapS = THREE.RepeatWrapping;
	texture.wrapT = THREE.RepeatWrapping;
	texture.offset.x = 1;
	texture.offset.y = 1;
	texture.repeat.set(1,1);//0.35,5

	var materialGris = new THREE.MeshBasicMaterial( {color: couleur[0] } );
	var materialBlanc = new THREE.MeshBasicMaterial( {color: couleur[1] } );
	var materialTexture = new THREE.MeshBasicMaterial( {side: THREE.FrontSide,
		 																									map:texture } );

	var cubeSol = new THREE.Mesh( sol, materialGris );
	var planeSolLecture = new THREE.Mesh( solLecture, materialTexture );

	planeSolLecture.position.set(0,0.13,0);
	planeSolLecture.rotation.set(4.71,0,0);

	graphe.object3D.add(cubeSol);
	graphe.object3D.add(planeSolLecture);
	callback(graphe,creerAxeZ);
}

function creerAxeX(graphe,callback) {

	var parent = document.createElement("a-entity");
	//var texteX = document.createElement("a-text");

	var texteT = document.createElement("a-text");
	texteT.setAttribute("rotation",{x:0,y:0,z:0});
	texteT.setAttribute("position",{x:7.5,y:0.25,z:0});
	texteT.setAttribute("text",{

		color:"black",
		align:"center",
		width:5,
		wrapCount:16,
		lineHeight:80,
		value:"Income"

	});

	var value = "";

	/* On écrit tous les chiffres de 0 à 100
	for(var i = 130; i >= 0;i--) {

		/* Si modulo de i par 5 et que le restant de la divison est pair
		if(i%5 == 0 && (i/5) % 2 == 0) {
			 /*On ajoute la valeur
			value += " " + i + "k";

		}

	}*/

	var positions = new Float32Array([0,1.45,0,
																	 	 0,7.7,0]);

	var materialBlanc = new THREE.MeshBasicMaterial( {color: couleur[1] } );
	var geometry = new THREE.BufferGeometry();

  for(var j = 1;j<11;j++) {

		var texteX = document.createElement("a-text");
		texteX.setAttribute("rotation",{x:0,y:0,z:0});
		texteX.setAttribute("position",{x:j*1.25,y:1,z:0});
		texteX.setAttribute("text",{

			color:"black",
			width:1,
			wrapCount:4,
			lineHeight:82,
			align:"center"

		});

		/* Le texte de l'axe */
		switch (j) {
			case 2:
				texteX.setAttribute("value", 500);
				break;
			case 3:
				texteX.setAttribute("value", 1000);
				break;
			case 4:
				texteX.setAttribute("value", 2000);
				break;
			case 5:
				texteX.setAttribute("value", 4000);
				break;
			case 6:
				texteX.setAttribute("value", 8000);
				break;
			case 7:
				texteX.setAttribute("value", "16k");
				break;
			case 8:
				texteX.setAttribute("value", "32k");
				break;
			case 9:
				texteX.setAttribute("value", "64k");
				break;
			case 10:
				texteX.setAttribute("value", "128k");
				break;

		}
		parent.appendChild(texteX);

    geometry.addAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ));
    geometry.computeBoundingSphere();

    mesh = new THREE.Line(geometry, materialBlanc);
		mesh.position.set((j*1.25),0,0);
    graphe.object3D.add(mesh);

  }

	parent.appendChild(texteT);
	graphe.appendChild(parent)
	callback(graphe);

}

function creerAxeZ(graphe,callback) {

		var texteZ = document.createElement("a-text");
		texteZ.setAttribute("rotation",{x:270,y:0,z:0});
		texteZ.setAttribute("position",{x:-0.64,y:0.13,z:0});
		texteZ.setAttribute("text",{

			color:"black",
			width:0.09,
			wrapCount:4,
			lineHeight:55

		});

		var texteT = document.createElement("a-text");
		texteT.setAttribute("rotation",{x:270,y:270,z:0});
		texteT.setAttribute("position",{x:-0.7,y:0.13,z:0});
		texteT.setAttribute("text",{

			color:"black",
			align:"center",
			width:0.4,
			wrapCount:16,
			lineHeight:80,
			value:"Years"

		});

		var value = "";

		/* On écrit tous les chiffres de 0 à 100 */
		for(var i = 2015; i >= 1910;i--) {

			/* Si modulo de i par 5 et que le restant de la divison est pair */
			if(i%5 == 0) {
				/* On ajoute la valeur */
				value += " " + i;

			}

		}

		texteZ.setAttribute("value", value);
		graphe.appendChild(texteZ);
		graphe.appendChild(texteT);
		callback(graphe);

}

function creerAxeY(graphe) {

	var parent = document.createElement("a-entity");
	var texteY = document.createElement("a-text");
	texteY.setAttribute("rotation",{x:0,y:0,z:0});
	texteY.setAttribute("position",{x:12.75,y:4.875,z:0});
	texteY.setAttribute("text",{

		color:"black",
		width:1,
		wrapCount:4,
		lineHeight:78

	});


	var texteT = document.createElement("a-text");
	texteT.setAttribute("rotation",{x:0,y:0,z:90});
	texteT.setAttribute("position",{x:13.75,y:4.875,z:0});
	texteT.setAttribute("text",{

		color:"black",
		align:"center",
		width:5,
		wrapCount:16,
		lineHeight:80,
		value:"Life Expectency"

	});

	var texteYD = document.createElement("a-text");
	texteYD.setAttribute("rotation",{x:0,y:0,z:0});
	texteYD.setAttribute("position",{x:0.5,y:4.875,z:0});
	texteYD.setAttribute("text",{

		color:"black",
		width:1,
		wrapCount:4,
		lineHeight:78

	});


	var texteTD = document.createElement("a-text");
	texteTD.setAttribute("rotation",{x:0,y:0,z:90});
	texteTD.setAttribute("position",{x:0,y:4.875,z:0});
	texteTD.setAttribute("text",{

		color:"black",
		align:"center",
		width:5,
		wrapCount:16,
		lineHeight:80,
		value:"Life Expectency"

	});

	var value = "";

	/* On écrit tous les chiffres de 0 à 100 */
	for(var i = 90; i >= 20;i--) {

		/* Si modulo de i par 5 et que le restant de la divison est pair */
		if(i%5 == 0 && (i/5) % 2 == 0) {
			/* On ajoute la valeur */
			value += " " + i;

		}

	}

	texteY.setAttribute("value", value);
	texteYD.setAttribute("value", value);
	parent.appendChild(texteY);
	parent.appendChild(texteT);
	parent.appendChild(texteYD);
	parent.appendChild(texteTD);
	graphe.appendChild(parent);
	var positions = new Float32Array([1.25,-0.125,0,
																	 	 12.5,-0.125,0]);

	var materialBlanc = new THREE.MeshBasicMaterial( {color: couleur[1] } );
	var geometry = new THREE.BufferGeometry();

  for(var j = 2;j<11;j++) {

    geometry.addAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ));
    geometry.computeBoundingSphere();

    mesh = new THREE.Line(geometry, materialBlanc);
		mesh.position.set(0,(j/1.28),0);
    graphe.object3D.add(mesh);

  }

}

/* Dès le chargement de la page, on crée le graphe en commencant par le sol */
document.addEventListener("DOMContentLoaded", function(event) {

	var graphe = document.querySelector("#graphe");
  creerAxeX(graphe, creerAxeY);

});
