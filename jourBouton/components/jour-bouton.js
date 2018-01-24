/* S'occupe de savoir quel journée est saisie lorsque les boutons sont cliqué */
AFRAME.registerComponent("jour-bouton", {

	  init: function () {

			/* Référence à l'écran */
      var texteEcranJour = document.querySelector("#ecranJour");

			/* Permet d'aider pour l'écriture de la journée */
			var jour = "";
			var phraseDefaut = "value: Day : ";
			var compteur = 0;

      /* Lorsque qu'on appuit le bouton */
      this.el.addEventListener('pressed', function() {

				// Vérifier si la date est bonne sinon retourner erreur
				if(this.el.getAttribute("data-btn") == "ok") {

					console.log("ok");

				}

				/* Remet le texte par défaut */
				else if(this.el.getAttribute("data-btn") == "reset") {

					texteEcranJour.setAttribute("text__t", phraseDefaut);
					compteur = 0;

				}

				/* Si nous n'avons pas entrer trois valeur et que c'est un chiffre &&
					(this.el.getAttribute("data-btn") != "reset" ||
					 this.el.getAttribute("data-btn") != "ok")*/
				else if(compteur < 3) {

					// On lit le date du bouton et l'ajoute à la variable jour.
					jour = this.el.getAttribute("data-btn");
					texteEcranJour.setAttribute("text__t", phraseDefaut + jour);
					compteur ++;

				}

      });

	  }

});
