/* S'occupe de savoir quel journée est saisie
 * lorsque les boutons sont cliqué
 */
AFRAME.registerComponent("pays-selection", {

		init: function () {

			/* Pays */
			var el = this.el,
					anim = document.createElement('a-animation'),
					animText = document.createElement('a-animation'),
					leThis = this;

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
			animText.setAttribute("mixin","fadeCouleur");
			el.firstElementChild.appendChild(animText);
			el.appendChild(anim);

			/* Raycaster-intersected */
			this.eventScalingBegining = function() {

				el.setAttribute("scale","1.2 1.2 1.2");

      };

			/* Raycaster-intersected-cleared */
			this.eventScalingEnding = function() {

				el.setAttribute("scale","1 1 1");

      };

			/* Ajoute ou supprime le pays */
			this.selectionnerPays = function() {

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

				leThis.animPanneau();
				var maSphere = document.querySelector('[data-pays-sphere="'+ el.getAttribute("data-pays")+'"]');
				var visible = maSphere.getAttribute("visible");
				maSphere.setAttribute("visible",!visible);

				/* Enregistrement de la variable paysChoisi dans la sessionStorage
				sessionStorage.setItem("paysChoisi", JSON.stringify(paysChoisi));*/

			};

	  },

	 animPanneau:function() {

			 var el = this.el;

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

			 //el.firstElementChild.emit("playFadeCouleur");

		},

		play:function () {

			this.animPanneau();

			/* Lorsqu'on clique le jour */
			this.el.addEventListener("click",this.selectionnerPays);

			/* Lorsque qu'on hover le bouton */
      this.el.addEventListener('raycaster-intersected', this.eventScalingBegining);

			/* Lorsque qu'on ne hover plus le bouton */
      this.el.addEventListener('raycaster-intersected-cleared', this.eventScalingEnding);

		},

		pause:function() {

			this.el.removeEventListener("click",this.selectionnerPays);
			this.el.removeEventListener("raycaster-intersected",this.eventScalingBegining);
			this.el.removeEventListener("raycaster-intersected-cleared",this.eventScalingEnding);

		},

		remove:function() {

			this.el.removeEventListener("click",this.selectionnerPays);
			this.el.removeEventListener("raycaster-intersected",this.eventScalingBegining);
			this.el.removeEventListener("raycaster-intersected-cleared",this.eventScalingEnding);

		}

});
