/* S'occupe de créer les axes et le sol du graphe */
/* Constantes pour les couleurs, gris, blanc, noir */
const couleur = [0x808b96,0xfbfcfc,0x000000];

/* Sous-programme qui crée le sol du graphe */
function creerSol(graphe,callback) {

	var sol = new THREE.BoxBufferGeometry(1.5,0.25,3);
	var solLecture = new THREE.PlaneGeometry(1,2.4);

	// load a texture, set wrap mode to repeat
	var texture = new THREE.TextureLoader().load( ".../textures/grid_2.png" );
	texture.wrapS = THREE.RepeatWrapping;
	texture.wrapT = THREE.RepeatWrapping;
	texture.offset.x = 0.6;
	texture.offset.y = 0.5;
	texture.repeat.set(1.8,4);//0.35,5

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

	var textX = document.createElement("a-text");
	textX.setAttribute("rotation",{x:270,y:0,z:270});
	textX.setAttribute("position",{x:0,y:0.13,z:1.25});
	textX.setAttribute("text",{

		color:"black",
		width:0.1,
		wrapCount:3,
		lineHeight:82

	});

	var textT = document.createElement("a-text");
	textT.setAttribute("rotation",{x:270,y:90,z:270});
	textT.setAttribute("position",{x:0,y:0.13,z:1.4});
	textT.setAttribute("text",{

		color:"black",
		align:"center",
		width:0.4,
		wrapCount:16,
		lineHeight:80,
		value:"Life Expectency"

	});

	var value = "";

	/* On écrit tous les chiffres de 0 à 100 */
	for(var i = 100; i >= 0;i--) {

		/* Si modulo de i par 5 et que le restant de la divison est pair */
		if(i%5 == 0 && (i/5) % 2 == 0) {
			/* On ajoute la valeur */
			value += " " + i;

		}

	}

	textX.setAttribute("value", value);
	graphe.appendChild(textX);
	graphe.appendChild(textT);
	callback(graphe,creerAxeY);

}

function creerAxeZ(graphe,callback) {

		var textY = document.createElement("a-text");
		textY.setAttribute("rotation",{x:270,y:0,z:0});
		textY.setAttribute("position",{x:-0.64,y:0.13,z:0});
		textY.setAttribute("text",{

			color:"black",
			width:0.1,
			wrapCount:4,
			lineHeight:112

		});

		var textT = document.createElement("a-text");
		textT.setAttribute("rotation",{x:270,y:270,z:0});
		textT.setAttribute("position",{x:-0.7,y:0.13,z:0});
		textT.setAttribute("text",{

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

		textY.setAttribute("value", value);
		graphe.appendChild(textY);
		graphe.appendChild(textT);
		callback(graphe);

}

function creerAxeY(graphe) {

	var textY = document.createElement("a-text");
	textY.setAttribute("rotation",{x:0,y:270,z:0});
	textY.setAttribute("position",{x:-0.5,y:1.724,z:1.25});
	textY.setAttribute("text",{

		color:"black",
		width:0.17,
		wrapCount:4,
		lineHeight:141

	});

	var textYD = document.createElement("a-text");
	textYD.setAttribute("rotation",{x:0,y:90,z:0});
	textYD.setAttribute("position",{x:-0.5,y:1.724,z:1.35});
	textYD.setAttribute("text",{

		color:"black",
		width:0.17,
		wrapCount:4,
		lineHeight:141

	});

	var textT = document.createElement("a-text");
	textT.setAttribute("rotation",{x:0,y:270,z:90});
	textT.setAttribute("position",{x:-0.50,y:1.724,z:1.5});
	textT.setAttribute("text",{

		color:"black",
		align:"center",
		width:0.8,
		wrapCount:16,
		lineHeight:80,
		value:"Income"

	});

	var textTD = document.createElement("a-text");
	textTD.setAttribute("rotation",{x:0,y:90,z:90});
	textTD.setAttribute("position",{x:-0.50,y:1.724,z:1.5});
	textTD.setAttribute("text",{

		color:"black",
		align:"center",
		width:0.8,
		wrapCount:16,
		lineHeight:80,
		value:"Income"

	});

	var value = "";

	/* On écrit tous les chiffres de 0 à 100 */
	for(var i = 130; i >= 0;i--) {

		/* Si modulo de i par 5 et que le restant de la divison est pair */
		if(i%5 == 0 && (i/5) % 2 == 0) {
			/* On ajoute la valeur */
			value += " " + i + "k";

		}

	}

	textY.setAttribute("value", value);
	textYD.setAttribute("value", value);
	graphe.appendChild(textY);
	graphe.appendChild(textYD);
	graphe.appendChild(textT);
	graphe.appendChild(textTD);

	var positions = new Float32Array([
		  0.5,0.25, 1.2,
			0.5,0.25,-1.2,
		 -0.5,0.25,-1.2,
		 -0.5,0.25, 1.2
	]);

	var materialBlanc = new THREE.MeshBasicMaterial( {color: couleur[1] } );
	var geometry = new THREE.BufferGeometry();
	/* Parcourt les pays */
  for(var j = 0;j<14;j++) {

    geometry.addAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ));
    geometry.computeBoundingSphere();

    mesh = new THREE.Line(geometry, materialBlanc);
		mesh.position.set(0,(j/4.4),0);
    graphe.object3D.add(mesh);

  }

}

/* Dès le chargement de la page, on crée le graphe en commencant par le sol */
document.addEventListener("DOMContentLoaded", function(event) {

	var graphe = document.querySelector(".graphe");
  creerSol(graphe, creerAxeX);

});
