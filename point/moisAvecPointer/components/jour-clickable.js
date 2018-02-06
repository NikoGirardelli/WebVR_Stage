/* S'occupe de savoir quel journée est saisie
 * lorsque les boutons sont cliqué
 */
AFRAME.registerComponent("jour-clickable", {

		init: function () {

			/* Référence à l'écran */
      var txtJour = document.querySelector("#textJour"),

			/* Bouton */
			el = this.el,
			leThis = this,

			/* Permet d'aider pour l'écriture de la journée */
			phraseDefaut = "Day Selected : ";

			/* Hover-start */
			this.eventScalingBegining = function() {

				el.setAttribute("scale","1.2 1.2 1.2");

      };

			/* Hover-end */
			this.eventScalingEnding = function() {

				el.setAttribute("scale","1 1 1");

      };

			/* Ajoute ou supprime la journée de choisisse */
			this.calendrierAction = function() {


				var txtJour = document.querySelector("#textJour"),
						phraseDefaut = "Day Selected : ",
						jourChoisi = JSON.parse(sessionStorage.getItem('jourChoisi'));

				/* Si on ne aucun jour choisi dernièrement */
				if(jourChoisi == null) {

					jourChoisi = new Array();

				}

				/* Cherche notre jour dans le tableau */
				if(jourChoisi.indexOf(el.getAttribute("data-jour")) == -1) {

					/* Ajout du jour dans notre tableau */
					jourChoisi.push(el.getAttribute("data-jour"));

				}
				/* Si le jour est déjà dans le tableau */
				else if(jourChoisi.indexOf(el.getAttribute("data-jour")) != -1) {

					/* Supprime le jour */
					var posJour = jourChoisi.indexOf(el.getAttribute("data-jour"));
					jourChoisi.splice(posJour,1);

				}

				/* Joue l'animation de fade-in/fade-out */
				el.emit("playFade");

				/* Enregistrement de la variable jourChoisi dans la sessionStorage */
				sessionStorage.setItem("jourChoisi", JSON.stringify(jourChoisi));
				txtJour.setAttribute("value", phraseDefaut + jourChoisi.toString());

			};

	  },

		play:function () {

			/* Lorsqu'on clique le jour */
			this.el.addEventListener("click",this.calendrierAction);

			/* Lorsque qu'on hover le bouton */
      this.el.addEventListener('hover-start', this.eventScalingBegining);

			/* Lorsque qu'on ne hover plus le bouton */
      this.el.addEventListener('hover-end', this.eventScalingEnding);

		},

		pause:function() {

			this.el.removeEventListener("click",this.calendrierAction);
			this.el.removeEventListener("hover-start",this.eventScalingBegining);
			this.el.removeEventListener("hover-end",this.eventScalingEnding);

		},

		remove:function() {

			this.el.removeEventListener("click",this.calendrierAction);
			this.el.removeEventListener("hover-start",this.eventScalingBegining);
			this.el.removeEventListener("hover-end",this.eventScalingEnding);

		}

});
