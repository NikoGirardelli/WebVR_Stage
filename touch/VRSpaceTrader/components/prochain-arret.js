/* S'occupe d'afficher la prochaine ville à visiter
et le temps restant pour y aller. */
AFRAME.registerComponent("prochain-arret", {

		/* Modifie le nom de la prochaine ville */
		changerTitreProchaineVille:function(indiceVille) {

			if(indiceVille == 2) {

				indiceVille = 0;

			} else {

				indiceVille++;

			}

			/* Modifie le texte pour celui du prochain arrêt */
			this.el.children[1].children[0].setAttribute("value","Spaceship arrives  at " + LES_VILLES[indiceVille]);

		},

		/* Modifie le temps restant pour aller à la prochaine ville */
		changerETAProchaineVille:function() {

			if(jeuLancer == false) {

				tempsRestant = duree;

			}

			/* Accède au train pour connaître son prochain arrêt */
			this.el.children[1].children[1].setAttribute("value","ETA:  " + tempsRestant);

		},

		tick:function () {

			this.changerETAProchaineVille();

		}

});
