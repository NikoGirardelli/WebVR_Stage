/* S'occupe de montrer le texte de tous les pays
*  appartenant au continent choisi et affiche les données du pays visé.
*/
AFRAME.registerComponent("sphere-hover", {

		init: function () {

			/* Référence à l'écran */
      //var txtJour = document.querySelector("#textJour"),

			/* Sphere */
			var el = this.el,
					continentAppartenant;
					//anim = document.createElement('a-animation'),
					//animText = document.createElement('a-animation');
					//console.log(el)
			switch(el.parentEl.getAttribute("data-mur-continent")) {

				case "Americas":
				continentAppartenant = el.parentEl.getAttribute("data-mur-continent");
				break;

				case "Africa":
				continentAppartenant = el.parentEl.getAttribute("data-mur-continent");
				break;

				case "Europe":
				continentAppartenant = el.parentEl.getAttribute("data-mur-continent");
				break;

				case "Asia":
				continentAppartenant = el.parentEl.getAttribute("data-mur-continent");
				break;

			}/*
			animText.setAttribute("mixin","fadeCouleur");
			el.firstElementChild.appendChild(animText);
			el.appendChild(anim);*/

			/* Raycaster-intersected */
			this.eventScalingBegining = function() {
				//console.log(el)
				console.log(continentAppartenant.children)

      };

			/* Raycaster-intersected-cleared */
			this.eventScalingEnding = function() {

				//el.setAttribute("scale","1 1 1");

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

				el.firstElementChild.emit("playFadeCouleur");
				var maSphere = document.querySelector('[data-pays-sphere="'+ el.getAttribute("data-pays")+'"]');
				//console.log(maSphere);

				var visible = maSphere.getAttribute("visible");
				maSphere.setAttribute("visible",!visible);

				/* Enregistrement de la variable paysChoisi dans la sessionStorage
				sessionStorage.setItem("paysChoisi", JSON.stringify(paysChoisi));*/

			};

	  },

		play:function () {

			/* Lorsque qu'on hover le sphere */
      this.el.addEventListener('raycaster-intersected', this.eventScalingBegining);

			/* Lorsque qu'on ne hover plus le sphere */
      this.el.addEventListener('raycaster-intersected-cleared', this.eventScalingEnding);

		},

		pause:function() {

			this.el.removeEventListener("raycaster-intersected",this.eventScalingBegining);
			this.el.removeEventListener("raycaster-intersected-cleared",this.eventScalingEnding);

		},

		remove:function() {

			this.el.removeEventListener("raycaster-intersected",this.eventScalingBegining);
			this.el.removeEventListener("raycaster-intersected-cleared",this.eventScalingEnding);

		}

});
