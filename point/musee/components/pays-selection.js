/* S'occupe de savoir quel journée est saisie
 * lorsque les boutons sont cliqué
 */
AFRAME.registerComponent("pays-selection", {



		init: function () {

			/* Pays */
			var el = this.el,
					anim = document.createElement('a-animation'),
					animText = document.createElement('a-animation'),
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

				}

			}

			el.setAttribute("material",{color:0x4c4c4c});

			//this.animerCouleur(anim);
			//animText.setAttribute("mixin","fadeCouleur");
			//el.appendChild(animText);
			//el.appendChild(anim);

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

				var piece = document.querySelector("#piece"),
						autresStatues = document.querySelector("#cinqStatues").childNodes,
						l = autresStatues.length
						numeroDuPaysChoisi = el.getAttribute("data-nombre-pays"),
						titreContinent = piece.children[7],
						lesBoutons = document.querySelectorAll(".panneauSelectionPays");

				/* Met les boutons en gris */
				for(var i = 0;i < 24;i++) {

					lesBoutons[i].setAttribute("material",{color:0x4c4c4c});

				}

				/* Vérifie si c'est le panneau dans la pièce Country */
				if(piece.getAttribute("modification-piece").piece == LES_PIECES[2]) {

					/* Modifie les cinq statues */
					for(var i = 0;i < l;i++) {

						/* Mets le numeroPays des statues */
						autresStatues[i].setAttribute("statue",{
							numeroPays:numeroDuPaysChoisi
						});

						/* Affiche l'année sur la base */
						autresStatues[i].children[3].children[0].setAttribute('text',{
							value:dataLife[0][autresStatues[i].getAttribute("statue").annee]
						});

					}

					/* Met le titre au nom du pays choisi */
					titreContinent.setAttribute("text",{
						value:dataLife[numeroDuPaysChoisi][0],
						wrapCount:18,
						width:5
					});

				}

				/* Vérifie si c'est le panneau dans la pièce Customize */
				if(piece.getAttribute("modification-piece").piece == LES_PIECES[3]) {

					/* Verifier cinq pays ont été choisi */

					/* Modifie les cinq statues */
					for(var i = 0;i < l;i++) {

						/* Mets le numeroPays des statues */
						autresStatues[i].setAttribute("statue",{
							numeroPays:numeroDuPaysChoisi
						});

						/* Affiche l'année sur la base */
						autresStatues[i].children[3].children[0].setAttribute('text',{
							value:dataLife[numeroDuPaysChoisi][0]
						});

					}

					/* Met le titre au nom du pays choisi */
					titreContinent.setAttribute("text",{
						value:dataLife[0][autresStatues[i].getAttribute("statue").annee],
						wrapCount:18,
						width:5
					});

				}

				leThis.animerPanneau();

				/*

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
*/
			};

	  },

	 animerPanneau:function() {

			 var el = this.el,
			 					couleur = "";

			 /* Joue l'animation de fade-in/fade-out
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

			 }*/

			 switch(el.attributes[1].nodeValue) {

					case "Americas":
					couleur = "#9ef03e";
					break;

					case "Africa":
					couleur = "#33dded";
					break;

					case "Europe":
					couleur = "#fff37a";
					break;

					case "Asia":
					couleur = "#ff798e";
					break;

			 }

			 el.setAttribute("material",{color:couleur});



		},

		play:function () {

			//this.animerPanneau();

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
