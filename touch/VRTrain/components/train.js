const LES_VILLES = ["Boston","Montreal","Toronto"];
var tempsRestant;
var duree = 300,
		estEnTrainDeCompter = false,
		indiceVille = 1;

/* S'occupe de changer de ville et d'afficher la ville courante. */
AFRAME.registerComponent("train", {

	schema: {

		lieuActif: {default:LES_VILLES[2], type:"string", oneOf:LES_VILLES}

	},


		init: function () {

			/* Map
			var el = this.el,
					leThis = this,
					data = this.data,
					lesVilles = el.children;*/

	  },

		/* Met une ville visible */
		villeVisible:function(laVille,indiceVille) {

			laVille.setAttribute("geometry",{thetaLength:360});
			laVille.setAttribute("scale",{x:1.2,y:1.2,z:1.2});
			this.data.lieuActif = LES_VILLES[indiceVille];

		},

		/* Met une ville invisible */
		villeInvisible:function(laVille) {

			laVille.setAttribute("geometry",{thetaLength:0});
			laVille.setAttribute("scale",{x:0.9,y:0.9,z:0.9});

		},

		chronoTrain:function() {

			var el = this.el,
					lesVilles = el.children,
					panneauETA = document.querySelector("#ui-prochain-arret");

			/* Faire l'effet d'un chrono */
			if(tempsRestant > 0) {

					tempsRestant--;

			}

			else {

					estEnTrainDeCompter = false;

			}

			/* Recommence le chrono */
			if(!estEnTrainDeCompter) {

				estEnTrainDeCompter = true;
				tempsRestant = duree;

				/* Met l'ancienne ville invisible */
				this.villeInvisible(lesVilles[indiceVille]);

				if(indiceVille == 2) {

					indiceVille = 0;

				} else {

					indiceVille++;

				}

				panneauETA.components["prochain-arret"].changerTitreProchaineVille(indiceVille);

				/* Met la nouvelle ville visible */
				this.villeVisible(lesVilles[indiceVille], indiceVille);

			}

		},

		tick:function () {

			this.chronoTrain();

		}

});
