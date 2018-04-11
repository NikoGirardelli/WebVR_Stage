/* S'occupe de savoir quel journée est saisie
 * lorsque les boutons sont cliqué
 */
AFRAME.registerComponent("changer-annee", {

		init: function () {

			var el = this.el,
					signe = el.children[0],
					parentAnnee = el.parentEl,
					lesTextesAnnees = parentAnnee.querySelectorAll(".texteAnnee"),
					position = el.getAttribute("data-changement-annee");

			/* Hover-start */
			this.eventScalingBegining = function() {

				el.setAttribute("scale","1.2 1.2 1.2");

      };

			/* Hover-end */
			this.eventScalingEnding = function() {

				el.setAttribute("scale","1 1 1");

      };

			/* Changer le chiffre */
			this.changerAnnee = function() {

				var premierChiffre = parseInt(lesTextesAnnees[0].getAttribute("value")),
						deuxiemeChiffre = parseInt(lesTextesAnnees[1].getAttribute("value")),
						troisiemeChiffre = parseInt(lesTextesAnnees[2].getAttribute("value")),
						quatriemeChiffre = parseInt(lesTextesAnnees[3].getAttribute("value"));

				if(position == 1) {

					if(premierChiffre < 2 && signe.getAttribute("value") == "+") {

						premierChiffre++;

					}

					if(premierChiffre > 1 && signe.getAttribute("value") == "_") {

						premierChiffre--;

					}

					lesTextesAnnees[0].setAttribute("value", premierChiffre);

				}

				else if(position == 2) {

					if(deuxiemeChiffre < 9 && signe.getAttribute("value") == "+") {

						deuxiemeChiffre ++;

					}

					if(deuxiemeChiffre > 0 && signe.getAttribute("value") == "_") {

						deuxiemeChiffre --;

					}

					lesTextesAnnees[1].setAttribute("value", deuxiemeChiffre);

				}

				else if(position == 3) {

					if(troisiemeChiffre < 9 && signe.getAttribute("value") == "+") {

						troisiemeChiffre ++;

					}

					if(troisiemeChiffre > 0 && signe.getAttribute("value") == "_") {

						troisiemeChiffre --;

					}

					lesTextesAnnees[2].setAttribute("value", troisiemeChiffre);

				}

				else if(position == 4) {

					if(quatriemeChiffre < 9 && signe.getAttribute("value") == "+") {

						quatriemeChiffre ++;

					}

					if(quatriemeChiffre > 0 && signe.getAttribute("value") == "_") {

						quatriemeChiffre --;

					}

					lesTextesAnnees[3].setAttribute("value", quatriemeChiffre);

				}

				var nouvelleAnnee = "" + premierChiffre + deuxiemeChiffre +
																 troisiemeChiffre + quatriemeChiffre;

				/* Met la nouvelle année en data */
				parentAnnee.setAttribute("data-annee", nouvelleAnnee);

			};

	  },

		play:function () {

			/* Lorsqu'on clique le jour */
			this.el.addEventListener("click",this.changerAnnee);

			/* Lorsque qu'on hover le bouton */
      this.el.addEventListener('hover-start', this.eventScalingBegining);

			/* Lorsque qu'on ne hover plus le bouton */
      this.el.addEventListener('hover-end', this.eventScalingEnding);

		},

		pause:function() {

			this.el.removeEventListener("click",this.changerAnnee);
			this.el.removeEventListener("hover-start",this.eventScalingBegining);
			this.el.removeEventListener("hover-end",this.eventScalingEnding);

		},

		remove:function() {

			this.el.removeEventListener("click",this.changerAnnee);
			this.el.removeEventListener("hover-start",this.eventScalingBegining);
			this.el.removeEventListener("hover-end",this.eventScalingEnding);

		}

});
