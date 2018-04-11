/* S'occupe de savoir quel journée est saisie
 * lorsque les boutons sont cliqué
 */
AFRAME.registerComponent("pays-selection", {

		init: function () {

			/* Référence à l'écran */
      //var txtJour = document.querySelector("#textJour"),

			/* Pays */
			var el = this.el,
					anim = document.createElement('a-animation');

			switch(el.attributes[1].nodeValue) {

				case "Americas":
				anim.setAttribute("mixin","fadeAmericas");
				break;

				case "Africa":
				anim.setAttribute("mixin","fadeAfrica");
				break;

				case "Europe":
				anim.setAttribute("mixin","fadeEurope");
				break;

				case "Asia":
				anim.setAttribute("mixin","fadeAsia");
				break;

			}

			el.appendChild(anim);

			/* Hover-start */
			this.eventScalingBegining = function() {

				el.setAttribute("scale","1.2 1.2 1.2");

      };

			/* Hover-end */
			this.eventScalingEnding = function() {

				el.setAttribute("scale","1 1 1");

      };

			/* Ajoute ou supprime le pays */
			this.calendrierAction = function() {

				/*var paysChoisi = JSON.parse(sessionStorage.getItem('paysChoisi'));

				/* Si on ne aucun pays choisi dernièrement
				if(paysChoisi == null) {

					paysChoisi = new Array();

				}

				// Cherche notre pays dans le tableau
				if(paysChoisi.indexOf(el.getAttribute("data-pays")) == -1) {

					/* Ajout du pays dans notre tableau
					paysChoisi.push(el.getAttribute("data-pays"));

				}
				/* Si le pays est déjà dans le tableau
				else if(paysChoisi.indexOf(el.getAttribute("data-pays")) != -1) {

					/* Supprime le pays
					var posPays = paysChoisi.indexOf(el.getAttribute("data-pays"));
					paysChoisi.splice(posPays,1);

				}*/

				/* Joue l'animation de fade-in/fade-out */
				switch(el.attributes[1].nodeValue) {
					case "Americas":
					el.emit("playFadeAmericas");
					break;

					case "Africa":
					el.emit("playFadeAfrica");
					break;

					case "Europe":
					el.emit("playFadeEurope");
					break;

					case "Asia":
					el.emit("playFadeAsia");
					break;
				}

				var maLigne = document.querySelector('[data-pays-ligne="'+el.getAttribute("data-pays")+'"]');
				var visible = maLigne.getAttribute("visible");
				maLigne.setAttribute("visible",!visible);

				/* Enregistrement de la variable paysChoisi dans la sessionStorage
				sessionStorage.setItem("paysChoisi", JSON.stringify(paysChoisi));*/

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
