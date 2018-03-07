/* S'occupe de savoir quel journée est saisie
 * lorsque les boutons sont cliqué
 */
AFRAME.registerComponent("pays-selection", {

		init: function () {

			/* Pays */
			var el = this.el,
					anim = document.createElement('a-animation'),
					//animText = document.createElement('a-animation'),
					leThis = this,
					hoverEnCours = false;

			this.animerCouleur = function(anim) {

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

					default:
					anim.setAttribute("mixin","fadeBouton");
					break;

				}

			}

			this.animerCouleur(anim);
			//animText.setAttribute("mixin","fadeCouleur");
			//el.firstElementChild.appendChild(animText);
			el.appendChild(anim);

			/* Raycaster-intersected */
			this.eventScalingBegining = function() {

				leThis.peutHover();
				el.setAttribute("scale","1.2 1.2 1.2");

      };

			/* Raycaster-intersected-cleared */
			this.eventScalingEnding = function() {

				hoverEnCours = false;
				el.setAttribute("scale","1 1 1");

      };

			/* Ajoute ou supprime le pays */
			this.selectionnerPays = function() {

				if(hoverEnCours == true) {

					leThis.animerPanneau();

					if(el.getAttribute("data-pays") != "SelectAll" &&
						 el.getAttribute("data-pays") != "RemoveAll") {

						var maSphere = document.querySelector('[data-pays-sphere="'+
													 el.getAttribute("data-pays")+'"]');
						var visible = maSphere.getAttribute("visible");
						maSphere.setAttribute("visible",!visible);

					}

					else {

							var lesPays = document.querySelectorAll(".sphereGraphe");
							var lesBoutons = document.querySelectorAll(".panneauSelectionPays"); // Doit ne pas prendre les 2 premiers
							var l = lesPays.length;
							var couleurGrise = { r: 0.2980392156862745, g: 0.29803921568627456, b: 0.2980392156862745 }

							for(var i = 0;i < l;i++) {

								lesBoutons[i + 2].removeChild(lesBoutons[i + 2].children[1]);
								var anim = document.createElement("a-animation");
								lesBoutons[i + 2].appendChild(anim);

								if(el.getAttribute("data-pays") == "SelectAll") {

									lesBoutons[i + 2].components["pays-selection"].animerCouleur(anim);
									lesPays[i].setAttribute("visible",true);
									//console.log(lesBoutons[i + 2].lastElementChild.tween._object );

								}

								else {

									anim.setAttribute("mixin","fadeAuGris");
									lesPays[i].setAttribute("visible",false);

								}

								lesBoutons[i + 2].components["pays-selection"].animerPanneau();

							}

					}

				}

			};

			this.peutHover = function() {

        var mainPointeur = document.querySelector("#rhand");

          if(mainPointeur.components['raycaster'].intersectedEls.length == 1) {

            hoverEnCours = true;

          }

          if(mainPointeur.components['raycaster'].intersectedEls.length > 2) {

            hoverEnCours = false;

          }

      };

	  },

	 animerPanneau:function() {

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

					default:
					el.emit("playFadeBouton")
					break;
			 }

		},

		play:function () {

			this.animerPanneau();

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
