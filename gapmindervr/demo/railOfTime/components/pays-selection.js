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

					case "Bouton":
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

					if(el.getAttribute("data-pays") != "SelectAll" &&
						 el.getAttribute("data-pays") != "RemoveAll") {

						el.removeChild(el.children[1]);
	 					var anim = document.createElement("a-animation");
						el.components["pays-selection"].animerCouleur(anim);
						el.appendChild(anim);
						var maSphere = document.querySelector('[data-pays-sphere="'+
													 el.getAttribute("data-pays")+'"]');
						var visible = maSphere.getAttribute("visible");
						maSphere.setAttribute("visible",!visible);

						if(visible == false) {

							el.children[1].setAttribute("direction","normal");

						}
						else if(visible == true) {

							el.children[1].setAttribute("direction","reverse");

						}

						maSphere.setAttribute("material",{visible:!visible});

					}

					else {

							var lesPays = document.querySelectorAll(".sphereGraphe");
							var lesBoutons = document.querySelectorAll(".panneauSelectionPays"); // Doit ne pas prendre les 2 premiers
							var l = lesPays.length;

							for(var i = 0;i < l;i++) {

								var anim = document.createElement("a-animation");
								lesBoutons[i + 2].removeChild(lesBoutons[i + 2].children[1]);
								lesBoutons[i + 2].appendChild(anim);

								if(el.getAttribute("data-pays") == "SelectAll") {

									lesBoutons[i + 2].children[1].setAttribute("direction","alternate");
									lesBoutons[i + 2].components["pays-selection"].animerCouleur(anim);
									lesPays[i].setAttribute("visible",true);
									lesPays[i].setAttribute("material",{visible:true});

								}

								else {

									anim.setAttribute("mixin","fadeAuGris");
									lesPays[i].setAttribute("visible",false);
									lesPays[i].setAttribute("material",{visible:false});

								}

							}

					}

					leThis.animerPanneau();

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

					case "Bouton":
					el.emit("playFadeBouton");
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
