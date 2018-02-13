/* S'occupe de savoir quel journée est saisie
 * lorsque les boutons sont cliqué
 */
AFRAME.registerComponent("annee-selection", {

		init: function () {

			/* Pays */
			var el = this.el,
					anim = document.createElement('a-animation'),
					els = document.querySelectorAll(".panneauSelectionAnnees"),
					deuxièmeAnneeChiffre = document.querySelectorAll(".zoneDeuxiemeAnnee");

			anim.setAttribute("mixin","fadeAnnee");

			el.appendChild(anim);

			/* Hover-start */
			this.eventScalingBegining = function() {

				el.setAttribute("scale","1.2 1.2 1.2");

      };

			/* Hover-end */
			this.eventScalingEnding = function() {

				el.setAttribute("scale","1 1 1");

      };

			this.deuxiemeAnneeActiver = function() {

				for(var j=0;j < deuxièmeAnneeChiffre.length;j++) {

					deuxièmeAnneeChiffre[j].setAttribute("material","color","grey");
					deuxièmeAnneeChiffre[j].setAttribute("changer-annee","");

				}

			};

			this.deuxiemeAnneeDesactiver = function() {

				for(var k=0;k < deuxièmeAnneeChiffre.length;k++) {

					deuxièmeAnneeChiffre[k].setAttribute("material","color","red");
					deuxièmeAnneeChiffre[k].removeAttribute("changer-annee");

				}

			};

			/* Permet d'avoir une année ou plusieurs */
			this.boutonAnneeSelection = function() {

				if(el.getAttribute("data-appuyer") == "false") {

					/* S'occupe de mettre le data de l'autre bouton à false */
					for(var i = 0; i < els.length; i++) {

						if(els[i].getAttribute("data-appuyer") == "true") {

							els[i].setAttribute("data-appuyer","false");

						}

						els[i].emit("playFadeAnnee");

					}

					el.setAttribute("data-appuyer","true");

					/* Si le bouton 'From' est choisi on rend la deuxième année active */
					if(el.getAttribute("data-btn-annee") == "From") {

						this.components["annee-selection"].deuxiemeAnneeActiver();

					}

					else if(el.getAttribute("data-btn-annee") == "Only") {

						this.components["annee-selection"].deuxiemeAnneeDesactiver();

					}

				}

			};

	  },

		play:function () {

			/* Joue l'animation au bouton 'One year' */
			if(this.el.getAttribute("data-appuyer") == "true") {

				this.el.emit("playFadeAnnee");
				this.deuxiemeAnneeDesactiver();

			}

			/* Lorsqu'on clique le jour */
			this.el.addEventListener("click",this.boutonAnneeSelection);

			/* Lorsque qu'on hover le bouton */
      this.el.addEventListener('hover-start', this.eventScalingBegining);

			/* Lorsque qu'on ne hover plus le bouton */
      this.el.addEventListener('hover-end', this.eventScalingEnding);

		},

		pause:function() {

			this.el.removeEventListener("click",this.boutonAnneeSelection);
			this.el.removeEventListener("hover-start",this.eventScalingBegining);
			this.el.removeEventListener("hover-end",this.eventScalingEnding);

		},

		remove:function() {

			this.el.removeEventListener("click",this.boutonAnneeSelection);
			this.el.removeEventListener("hover-start",this.eventScalingBegining);
			this.el.removeEventListener("hover-end",this.eventScalingEnding);

		}

});
