/* S'occupe de montrer le texte de tous les pays
*  appartenant au continent choisi et affiche les données du pays visé.
*/

AFRAME.registerComponent("sphere-hover", {

		init: function () {

			/* Sphere */
			var el = this.el,
					continentAppartenant = el.parentEl,
					leThis = this,
					hoverEnCours = false,
					mainPointeur = document.querySelector("#rhand");

			/* Raycaster-intersected */
			this.eventScalingBegining = function() {

				leThis.peutHover();
			//	mainPointeur.components.raycaster.refreshObjects();
				/* Si le pays est visible */
				if(this.getAttribute("visible") == true){

					leThis.selectionnerPays(mainPointeur.components.raycaster.intersectedEls[0]);

				}

      };

			/* Raycaster-intersected-cleared.
			*  Fonctionne seulement lorsqu'on ne vise plus
			*/
			this.eventScalingEnding = function() {

				hoverEnCours = false;
				leThis.selectionnerPays(this);

      };

			/* Afficher ou ne pas afficher le nom des pays */
			this.selectionnerPays = function(objetVise) {

				var l = continentAppartenant.children.length;

				if(hoverEnCours == true) {

					for(var i = 0;i < l;i++){

						/* Titre pays du continent */
						continentAppartenant.children[i].children[0].setAttribute("visible",true);

					}

					el.children[1].setAttribute("visible",true);
          el.children[0].setAttribute("visible",false);
          el.object3D.children[0].material.opacity = 1;

				}

				else if(hoverEnCours == false) {

					for(var j = 0;j < l;j++){

						/* Titre pays du continent */
						continentAppartenant.children[j].children[0].setAttribute("visible",false);

					}

					el.children[1].setAttribute("visible",false);
          el.children[0].setAttribute("visible",false);
          el.object3D.children[0].material.opacity = 0.3;

				}

			};

      /* Si on a compté au moins pays de survoler,
      *  on ne peut pas hover un autre.
      */
      this.peutHover = function() {

				var lesPays = document.querySelectorAll(".sphereGraphe"),
						l = lesPays.length,
						compteur = 0;

				for(var i = 0;i < l;i++) {

					// Si un ui est déjà visible
					if(lesPays[i].children[1].getAttribute("visible") == true) {

						compteur ++;

					}

				}

				if(compteur > 1) {

					hoverEnCours = false;
					//leThis.selectionnerPays(mainPointeur.components.raycaster.intersectedEls[0]);

				}
				else if(compteur == 0) {

					hoverEnCours = true;
					//leThis.selectionnerPays(mainPointeur.components.raycaster.intersectedEls[0]);

				}

				return compteur;

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
