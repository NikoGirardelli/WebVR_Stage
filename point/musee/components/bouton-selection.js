var typesPanneau = ["panneauData","panneauAnnee","panneauPiece"];

/* S'occupe de savoir quel journée est saisie
 * lorsque les boutons sont cliqué
 */
AFRAME.registerComponent("bouton-selection", {

	schema: {

		selectionner: {default:0, type:"int"}// 0 = non 1 = oui

	},


		init: function () {

			/* Bouton */
			var el = this.el,
					anim = document.createElement('a-animation'),
					leThis = this;

			anim.setAttribute("mixin","fadeBouton");
			el.appendChild(anim);

			/* Raycaster-intersected */
			this.eventScalingBegining = function() {

				el.setAttribute("scale","1.2 1.2 1.2");

      };

			/* Raycaster-intersected-cleared */
			this.eventScalingEnding = function() {

				el.setAttribute("scale","1 1 1");

      };

			/* Ajoute ou supprime le pays
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

			};*/

			this.animerPanneau = function() {

				leThis.activerSelection();

	 			el.emit("playFadeBouton");
				console.log(el.children[1])

	 		}

	  },

		activerSelection:function() {

			var el = this.el,
					dataPiece = el.getAttribute("data-piece");
					uiJoueur = document.querySelector("#ui-joueur"),
					piece = document.querySelector("#piece");

			/* panneauData */
			if(this.el.getAttribute("class") == typesPanneau[0]) {

			}
			/* panneauAnnee */
			/* panneauPiece */
			if(this.el.getAttribute("class") == typesPanneau[2]) {

				//console.log(piece.components[0].data)
				console.log(piece.components["modification-piece"].oldData)
				piece.components["modification-piece"].data = LES_PIECES[dataPiece];
				console.log(piece.components["modification-piece"].data)

				/* Enlève l'ancienne valeur */
				uiJoueur.setAttribute("data-piece",dataPiece);

			}

		},

		play:function () {

			/* Lorsqu'on clique le jour */
			this.el.addEventListener("click",this.animerPanneau);

			/* Lorsque qu'on hover le bouton */
      this.el.addEventListener('raycaster-intersected', this.eventScalingBegining);

			/* Lorsque qu'on ne hover plus le bouton */
      this.el.addEventListener('raycaster-intersected-cleared', this.eventScalingEnding);

		},

		pause:function() {

			this.el.removeEventListener("click",this.animerPanneau);
			this.el.removeEventListener("raycaster-intersected",this.eventScalingBegining);
			this.el.removeEventListener("raycaster-intersected-cleared",this.eventScalingEnding);

		},

		remove:function() {

			this.el.removeEventListener("click",this.animerPanneau);
			this.el.removeEventListener("raycaster-intersected",this.eventScalingBegining);
			this.el.removeEventListener("raycaster-intersected-cleared",this.eventScalingEnding);

		}

});
