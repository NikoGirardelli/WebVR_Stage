/* S'occupe de savoir de replacer la pièce selon celle de choisisse. */
const LES_PIECES = ["Hub","All Countries","Country","Customize"];
var nomContinent = ["Americas","Europe","Asia","Africa"];
var positionNom = [{x:0,y:2,z:-5.65},
									 {x:5.65,y:2,z:0},
									 {x:0,y:2,z:5.65},
									 {x:-5.65,y:2,z:0},
								 	 {x:0,y:2,z:-5.65}];
var rotationNom = [{x:0,y:0,z:0},
									 {x:0,y:270,z:0},
									 {x:0,y:180,z:0},
									 {x:0,y:90,z:0},
								 	 {x:0,y:0,z:0}];
var couleurContinent = [0x9ef03e,0xfff37a,0xff798e,0x33dded,0x999797];

AFRAME.registerComponent("modification-piece", {

	schema: {

		piece: {default:LES_PIECES[0], type:"string", oneOf:LES_PIECES}

	},

	init: function () {

		this.creationTitre();

	},

	creationTitre:function() {

		var	positionCheckpoint = [
					{x:0,y:0,z:0},
					{x:-3,y:0,z:-3},
					{x:0,y:0,z:-3},
					{x:3,y:0,z:-3},
					{x:3,y:0,z:0},
					{x:3,y:0,z:3},
					{x:0,y:0,z:3},
					{x:-3,y:0,z:3},
					{x:-3,y:0,z:0}
				];

		/* Pour les noms des continents */
		for(var i = 0; i < 5; i++) {

			var plane = document.createElement("a-plane");
			plane.setAttribute("text", {
				value:nomContinent[i],
				align:"center",
				width:25,
				zOffset:0.005
			});
			plane.setAttribute("geometry",{height:1.5,width:5});
			plane.setAttribute("material",{color:couleurContinent[i]})
			plane.setAttribute("position",positionNom[i]);
			plane.setAttribute("rotation",rotationNom[i]);
			plane.setAttribute("class","titreContinent");
			this.el.appendChild(plane);

		}

		/* Pour les points de téléportation. */
		for(var i = 0; i < 9; i++) {

			var cylindre = document.createElement("a-cylinder");
			cylindre.setAttribute("geometry", {
				radius:0.5,
				height:0.05
			});
			cylindre.setAttribute("material",{color:0x343434});
			cylindre.setAttribute("position",positionCheckpoint[i]);
			cylindre.setAttribute("class","pointTeleportation");
			cylindre.setAttribute("teleportation","");
			this.el.appendChild(cylindre);

		}

	},

	chargerPiece:function() {

		var lesPanneauxTitre = document.querySelectorAll(".titreContinent"),
				toutesLesStatues = document.querySelector("#toutesLesStatues"),
				cinqStatues = document.querySelector("#cinqStatues"),
				lesCheckpoints = document.querySelectorAll(".pointTeleportation"),
				mainGaucheJoueur = document.querySelector("#lhand"),
				autresStatues = document.querySelector("#cinqStatues").childNodes,
				lesBoutonsAnnees = document.querySelectorAll(".panneauAnnee"),
				lesBoutonsData = document.querySelectorAll(".panneauData"),
				unBoutonPays = document.querySelector(".panneauSelectionPays"),
				texteHub = document.querySelector("#texteHub");

		/* Désactive les boutons pour les pays. */
		unBoutonPays.components["pays-selection"].desactiverBouton();

		/* All Countries */
		if(this.data.piece === LES_PIECES[1]) {

			texteHub.setAttribute("visible",false);

			/* Affiche le panneau principal et est centré */
			mainGaucheJoueur.children[0].setAttribute("position",{x:0,y:0,z:-0.07});
			mainGaucheJoueur.children[1].setAttribute("position",{x:0,y:-10,z:-0.07});

			/* Nom et les points de téléportation */
			for(var i = 0; i < 9; i++) {

				lesCheckpoints[i].setAttribute("visible",true);

				if(i < 4) {

					lesPanneauxTitre[i].setAttribute("visible",true);

				}

				if(i == 4) {

					lesPanneauxTitre[i].setAttribute("visible",false);

				}

				/* Mets les boutons d'année actif */
				if(i < 7) {

					lesBoutonsAnnees[i].setAttribute("bouton-selection");

				}

				/* Mets les boutons data actif */
				if(i < 8) {

					lesBoutonsData[i].setAttribute("bouton-selection");

				}

			}

			toutesLesStatues.setAttribute("visible",true);
			cinqStatues.setAttribute("visible",false);


		}

		/* Country */
		else if(this.data.piece === LES_PIECES[2]) {

			texteHub.setAttribute("visible",false);

			/* Affiche le panneau pour choisir le pays */
			mainGaucheJoueur.children[0].setAttribute("position",{x:-0.225,y:0,z:-0.07});
			mainGaucheJoueur.children[1].setAttribute("position",{x:0.225,y:0,z:-0.07});

			/* Les noms des continents sont visibles */
			for(var i = 0; i < 9; i++) {

				lesCheckpoints[i].setAttribute("visible",false);

				if(i < 4) {

					lesPanneauxTitre[i].setAttribute("visible",false);

				}

				if(i == 4) {

					lesPanneauxTitre[i].setAttribute("visible",true);
					lesPanneauxTitre[i].setAttribute("text",{
						value:"Choose a country",
						wrapCount:18,
						width:6
					});

				}

				if(i >= 1 && i < 4) {

					lesCheckpoints[i].setAttribute("visible",true);

				}

				/* Mets les boutons d'année inactif */
				if(i < 7) {

					lesBoutonsAnnees[i].removeAttribute("bouton-selection");

				}

				/* Mets les boutons data actif */
				if(i < 8) {

					lesBoutonsData[i].setAttribute("bouton-selection");

				}

			}

			/* Modifie les cinq statues */
			for(var i = 0;i < 5;i++) {

				/* Mets l'année à jour */
				autresStatues[i].setAttribute("statue",{annee:LES_ANNEES[i + 2]});

				/* Mets le numeroPays des statues  */
				autresStatues[i].setAttribute("statue",{
					numeroPays:0
				});

				/* Affiche l'année sur la base */
				autresStatues[i].children[3].children[0].setAttribute('text',{
					value:dataLife[0][autresStatues[i].getAttribute("statue").annee]
				});

			}

			toutesLesStatues.setAttribute("visible",false);
			cinqStatues.setAttribute("visible",true);

		}

		/* Custom */
		else if(this.data.piece === LES_PIECES[3]) {

			/* Remet le tableau des pays choisis vide */
			laSelectionDesPays = [];

			texteHub.setAttribute("visible",false);

			/* Affiche le panneau principal et est centré */
			mainGaucheJoueur.children[0].setAttribute("position",{x:-0.225,y:0,z:-0.07});
			mainGaucheJoueur.children[1].setAttribute("position",{x:0.225,y:0,z:-0.07});

			/* Les noms des continents sont visibles */
			for(var i = 0; i < 9; i++) {

				lesCheckpoints[i].setAttribute("visible",false);

				if(i < 4) {

					lesPanneauxTitre[i].setAttribute("visible",false);

				}

				if(i == 4) {

					lesPanneauxTitre[i].setAttribute("visible",true);
					lesPanneauxTitre[i].setAttribute("text",{
						value:"Customize"
					});

				}

				if(i >= 1 && i < 4) {

					lesCheckpoints[i].setAttribute("visible",true);

				}

				/* Mets les boutons d'année actif */
				if(i < 7) {

					lesBoutonsAnnees[i].setAttribute("bouton-selection");

				}

				/* Mets les boutons data actif */
				if(i < 8) {

					lesBoutonsData[i].setAttribute("bouton-selection");

				}

			}

			toutesLesStatues.setAttribute("visible",false);
			cinqStatues.setAttribute("visible",true);

		}

		/* Hub */
		else if(this.data.piece === LES_PIECES[0]) {

			texteHub.setAttribute("visible",true);

			/* Affiche le panneau principal et est centré */
			mainGaucheJoueur.children[0].setAttribute("position",{x:0,y:0,z:-0.07});
			mainGaucheJoueur.children[1].setAttribute("position",{x:0,y:-10,z:-0.07});

			/* Les noms des continents sont visibles */
			for(var i = 0; i < 9; i++) {

				if(i < 4) {

					lesPanneauxTitre[i].setAttribute("visible",false);

				}

				if(i == 4) {

					lesPanneauxTitre[i].setAttribute("visible",true);
					lesPanneauxTitre[i].setAttribute("text",{
						value:"Museum"
					});

				}

				/* Mets les boutons d'année actif */
				if(i < 7) {

					lesBoutonsAnnees[i].removeAttribute("bouton-selection");

				}

				/* Mets les boutons data actif */
				if(i < 8) {

					lesBoutonsData[i].removeAttribute("bouton-selection");

				}

				lesCheckpoints[i].setAttribute("visible",true);


			}

			toutesLesStatues.setAttribute("visible",false);
			cinqStatues.setAttribute("visible",false);

		}

	},

	update:function() {

		/* Lorsqu'on change de pièce. */
		this.chargerPiece();

	}

});
