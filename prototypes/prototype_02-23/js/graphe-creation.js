/* S'occupe de créer les axes et le sol du graphe */
/* Constantes pour les couleurs, gris, blanc, noir */
const couleur = [0x808b96,0xfbfcfc,0x000000];

/* Sous-programme qui crée le sol du graphe */
function creerSol(graphe,callback) {

	var sol = new THREE.BoxBufferGeometry(1.5,0.25,3);
	var solLecture = new THREE.PlaneGeometry(1,2.4);
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

	var texteX = document.createElement("a-text");
	texteX.setAttribute("rotation",{x:270,y:0,z:270});
	texteX.setAttribute("position",{x:0,y:0.13,z:1.25});
	texteX.setAttribute("text",{

		color:"black",
		width:0.1,
		wrapCount:3,
		lineHeight:82

	});

	var texteT = document.createElement("a-text");
	texteT.setAttribute("rotation",{x:270,y:90,z:270});
	texteT.setAttribute("position",{x:0,y:0.13,z:1.4});
	texteT.setAttribute("text",{

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

	texteX.setAttribute("value", value);
	graphe.appendChild(texteX);
	graphe.appendChild(texteT);
	callback(graphe,creerAxeY);

}

function creerAxeZ(graphe,callback) {

		var texteZ = document.createElement("a-text");
		texteZ.setAttribute("rotation",{x:270,y:0,z:0});
		texteZ.setAttribute("position",{x:-0.64,y:0.13,z:0});
		texteZ.setAttribute("text",{

			color:"black",
			width:0.1,
			wrapCount:4,
			lineHeight:112

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

	var texteY = document.createElement("a-text");
	texteY.setAttribute("rotation",{x:0,y:270,z:0});
	texteY.setAttribute("position",{x:-0.5,y:1.724,z:1.25});
	texteY.setAttribute("text",{

		color:"black",
		width:0.17,
		wrapCount:4,
		lineHeight:141

	});

	var texteYD = document.createElement("a-text");
	texteYD.setAttribute("rotation",{x:0,y:90,z:0});
	texteYD.setAttribute("position",{x:-0.5,y:1.724,z:1.35});
	texteYD.setAttribute("text",{

		color:"black",
		width:0.17,
		wrapCount:4,
		lineHeight:141

	});

	var texteT = document.createElement("a-text");
	texteT.setAttribute("rotation",{x:0,y:270,z:90});
	texteT.setAttribute("position",{x:-0.50,y:1.724,z:1.5});
	texteT.setAttribute("text",{

		color:"black",
		align:"center",
		width:0.8,
		wrapCount:16,
		lineHeight:80,
		value:"Income"

	});

	var texteTD = document.createElement("a-text");
	texteTD.setAttribute("rotation",{x:0,y:90,z:90});
	texteTD.setAttribute("position",{x:-0.50,y:1.724,z:1.5});
	texteTD.setAttribute("text",{

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

	texteY.setAttribute("value", value);
	texteYD.setAttribute("value", value);
	graphe.appendChild(texteY);
	graphe.appendChild(texteYD);
	graphe.appendChild(texteT);
	graphe.appendChild(texteTD);

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
