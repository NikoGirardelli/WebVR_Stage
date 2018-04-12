var valeurArticles = [["Grain",2,3,3],
											["Poutine",4,3,15],
											["Steel",17,27,17]
										 ];
// [0][1] => 2 [0][1] => Grain

/* S'occupe de l'inventaire du joueur et de son argent. */
AFRAME.registerComponent("joueur", {

	schema: {

		argent: {default:100, type:"int"},
		grain:{default:3, type:"int"},
		poutine:{default:3, type:"int"},
		steel:{default:3, type:"int"}

	},

	init: function () {

		//this.creationTitre();

	},

	/* Acheter Grain */
	acheterGrain:function() {

		var argentJoueur = this.data.argent;
		console.log('acheterGrain')
		//if(argent)

	},
	acheterPoutine:function() {

		var argentJoueur = this.data.argent;
		console.log('acheterPoutine')
		//if(argent)

	},
	acheterSteel:function() {

		var argentJoueur = this.data.argent;
		console.log('acheterSteel')
		//if(argent)

	},

	/* Acheter Grain */
	vendreGrain:function() {

		var argentJoueur = this.data.argent;
		console.log('vendreGrain')
		//if(argent)

	},
	vendrePoutine:function() {

		var argentJoueur = this.data.argent;
		console.log('vendrePoutine')
		//if(argent)

	},
	vendreSteel:function() {

		var argentJoueur = this.data.argent;
		console.log('vendreSteel')
		//if(argent)

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
		//this.chargerPiece();

	}

});
