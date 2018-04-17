const LES_VILLES = ["Jupiter","Mars","Earth"];
var tempsRestant;
var duree = 300,
		estEnTrainDeCompter = false,
		indiceVille = 1;

/* S'occupe de changer de ville et d'afficher la ville courante. */
AFRAME.registerComponent("spaceship", {

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

			laVille.children[1].setAttribute("animation",{
						dur:300,
						property:"material.opacity",
						from:"0",
						to:'0.4',
						autoplay:true
					});
			//laVille.setAttribute("scale",{x:1.2,y:1.2,z:1.2});
			this.data.lieuActif = LES_VILLES[indiceVille];

		},

		/* Met une ville invisible */
		villeInvisible:function(laVille) {

			laVille.children[1].setAttribute("animation",{
						dur:300,
						property:"material.opacity",
						from:"0.4",
						to:'0',
						autoplay:true
					});
		//	laVille.setAttribute("scale",{x:0.9,y:0.9,z:0.9});

		},

		chronoTrain:function() {

			var el = this.el,
					lesVilles = el.children,
					panneauETA = document.querySelector("#ui-prochain-arret"),
					joueur = document.querySelector("#player");

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

				/* On pert de l'argent à chaque fois qu'on change de lieu */
				joueur.components["joueur"].perteArgent();

				/* Met la nouvelle ville visible */
				this.villeVisible(lesVilles[indiceVille], indiceVille);

			}

		},

		tick:function () {

			this.chronoTrain();

		}

});
