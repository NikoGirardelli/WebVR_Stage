/* S'occupe de savoir quel journée est saisie
 * lorsque les boutons sont cliqué
 */
AFRAME.registerComponent("annee-selection", {

		init: function () {

			/* Pays */
			var el = this.el,
					anim = document.createElement('a-animation'),
					els = document.querySelectorAll(".panneauSelectionAnnees");

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

			/* Ajoute ou supprime le pays */
			this.anneeAction = function() {

				if(el.getAttribute("data-appuyer") == "false") {

					var paysChoisi = JSON.parse(sessionStorage.getItem('paysChoisi'));

					/* S'occupe de mettre le data de l'autre bouton à false */
					for(var i = 0; i < els.length; i++) {

						if(els[i].getAttribute("data-appuyer") == "true") {

							els[i].setAttribute("data-appuyer","false");
							els[i].emit("playFadeAnnee");
							els[i].setAttribute("material","color","grey");

						}

					}

					el.setAttribute("data-appuyer","true");

					/* Si on ne aucun pays choisi dernièrement */
					if(paysChoisi == null) {

						paysChoisi = new Array();

					}

					/* Cherche notre pays dans le tableau */
					if(paysChoisi.indexOf(el.getAttribute("data-pays")) == -1) {

						/* Ajout du pays dans notre tableau */
						paysChoisi.push(el.getAttribute("data-pays"));

					}
					/* Si le pays est déjà dans le tableau */
					else if(paysChoisi.indexOf(el.getAttribute("data-pays")) != -1) {

						/* Supprime le pays */
						var posPays = paysChoisi.indexOf(el.getAttribute("data-pays"));
						paysChoisi.splice(posPays,1);

					}

					/* Joue l'animation de fade-in/fade-out */
					el.emit("playFadeAnnee");

					/* Enregistrement de la variable paysChoisi dans la sessionStorage */
					sessionStorage.setItem("paysChoisi", JSON.stringify(paysChoisi));

				}

				else {
					console.log('test')
				}

			};

			/* Joue l'animation au bouton 'One year' */
			if(el.getAttribute("data-appuyer") == "true") {

				el.emit("playFadeAnnee");
				el.setAttribute("material","color","white");


			}

	  },

		play:function () {

			/* Lorsqu'on clique le jour */
			this.el.addEventListener("click",this.anneeAction);

			/* Lorsque qu'on hover le bouton */
      this.el.addEventListener('hover-start', this.eventScalingBegining);

			/* Lorsque qu'on ne hover plus le bouton */
      this.el.addEventListener('hover-end', this.eventScalingEnding);

		},

		pause:function() {

			this.el.removeEventListener("click",this.anneeAction);
			this.el.removeEventListener("hover-start",this.eventScalingBegining);
			this.el.removeEventListener("hover-end",this.eventScalingEnding);

		},

		remove:function() {

			this.el.removeEventListener("click",this.anneeAction);
			this.el.removeEventListener("hover-start",this.eventScalingBegining);
			this.el.removeEventListener("hover-end",this.eventScalingEnding);

		}

});
