/* S'occupe de savoir quel journée est saisie lorsque les boutons sont cliqué */
AFRAME.registerComponent("jour-bouton", {

	  init: function () {

			/* Référence à l'écran */
      var texteEcranJour = document.querySelector("#ecranJour");

			/* Bouton */
			var el = this.el;

			/* Permet d'aider pour l'écriture de la journée */
			var phraseDefaut = "value: Day : ";

      /* Lorsque qu'on appuit le bouton */
      el.addEventListener('pressed', function() {

				// Vérifier si la date est bonne sinon retourner erreur
				if(el.getAttribute("data-btn") == "ok") {

					console.log("ok");

				}

				/* Remet le texte par défaut */
				else if(el.getAttribute("data-btn") == "reset") {

					texteEcranJour.setAttribute("data-jour-choisi", "");
					console.log("reset");

				}

				/* Si nous n'avons pas entrer trois valeur et que c'est un chiffre &&
					(this.el.getAttribute("data-btn") != "reset" ||
					 this.el.getAttribute("data-btn") != "ok")*/
				else if(texteEcranJour.getAttribute("data-jour-choisi").length < 2) {

					// On lit le date du bouton et l'ajoute à la variable jour.
					texteEcranJour.setAttribute("data-jour-choisi",
												 texteEcranJour.getAttribute("data-jour-choisi") +
												 el.getAttribute("data-btn"));

				}

				/* A MODIFIER LORS DU PROTOTYPE CHANGER LA VALEUR SELON */
				if(parseInt(texteEcranJour.getAttribute("data-jour-choisi")) < 32) {

					texteEcranJour.setAttribute("text__t", "color:green");

				}

				else {

					texteEcranJour.setAttribute("text__t", "color:red");

				}

				texteEcranJour.setAttribute("text__t",
											phraseDefaut + texteEcranJour.getAttribute("data-jour-choisi"));

      });

	  }

});
