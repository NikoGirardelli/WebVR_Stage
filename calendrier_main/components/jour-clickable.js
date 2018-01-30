/* S'occupe de savoir quel journée est saisie lorsque les boutons sont cliqué */
AFRAME.registerComponent("jour-clickable", {

	  init: function () {

			/* Bouton */
			var el = this.el;

			/* Lorsque qu'on hover le bouton */
      el.addEventListener('hover-start', function() {
				console.log(el.getAttribute("data-jour") + " est hover");

				el.setAttribute("material","wireframe:true");
      });

			/* Lorsque qu'on hover le bouton */
      el.addEventListener('hover-end', function() {

				console.log(el.getAttribute("data-jour") + " n'est plus en hover");

				el.setAttribute("material","wireframe:false");
      });

	  },

		update: function () {

			/* Référence à l'écran */
      var texteEcranJour = document.querySelector("#textJour"),

			/* Bouton */
			el = this.el,

			/* Permet d'aider pour l'écriture de la journée */
			phraseDefaut = "value: Day Selected : ";




      /* Lorsque qu'on appuit le bouton */
      el.addEventListener('triggerdown', function() {

				if(el.getAttribute("material").wireframe == true) {

					console.log(el.getAttribute("data-jour"));

					if(texteEcranJour.getAttribute("value") == "Day Selected : ") {

						// On lit le date du bouton et l'ajoute à la variable jour.
						texteEcranJour.setAttribute("value", texteEcranJour.getAttribute("value") + el.getAttribute("data-jour"));

					}
					/*
					else {

						// On lit le date du bouton et l'ajoute à la variable jour.
						texteEcranJour.setAttribute("value", texteEcranJour.getAttribute("value") + " - " + el.getAttribute("data-jour"));

					}



					 Remet le texte par défaut
					if(el.getAttribute("data-btn") == "reset") {

						texteEcranJour.setAttribute("data-jour", "");
						console.log("reset");

					}



					texteEcranJour.setAttribute("text__t", phraseDefaut + texteEcranJour.getAttribute("data-jour"));*/

				}

      });

	  }

});
