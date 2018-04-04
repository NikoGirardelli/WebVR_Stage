/* S'occupe de savoir quel journée est saisie
 * lorsque les boutons sont cliqué
 */

var laSelectionDesPays = [];

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

				/* Vérifie si c'est le panneau dans la pièce Country */
				if(piece.getAttribute("modification-piece").piece == LES_PIECES[2]) {

					leThis.desactiverBouton();

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

					leThis.animerPanneau();

				}

				/* Vérifie si c'est le panneau dans la pièce Customize */
				if(piece.getAttribute("modification-piece").piece == LES_PIECES[3]) {

					/* Met l'année choisi comme titre
					titreContinent.setAttribute("text",{
						value:dataLife[0][autresStatues[0].getAttribute("statue").annee],
						wrapCount:18,
						width:5
					});*/
					/* On ajoute notre pays de sélectionner au tableau */
					laSelectionDesPays.push(numeroDuPaysChoisi);
					/* Si on a moins que 5 pays pour nos statue
					if(laSelectionDesPays.length <= 5) {



					}*/

					/* Si on a plus que 5 pays pour nos statue */
					if(laSelectionDesPays.length > 5) {

						/* Désactive le premier choix */
						var premierChoix = document.querySelector('[data-nombre-pays="'
																											+ laSelectionDesPays[0]
																											+ '"]');
						premierChoix.setAttribute("material",{color:0x4c4c4c});
						laSelectionDesPays.splice(0,1);
						//laSelectionDesPays[0] = laSelectionDesPays[laSelectionDesPays.length - 1];
						//laSelectionDesPays.pop();

						/* On ajoute notre pays de sélectionner au tableau */
						//laSelectionDesPays.push(numeroDuPaysChoisi);

					}

					/* Modifie les cinq statues */
					for(var i = 0;i < laSelectionDesPays.length;i++) {

						/* Animer les choix */
						var choix = document.querySelector('[data-nombre-pays="' +laSelectionDesPays[i] + '"]');
						choix.components["pays-selection"].animerPanneau();


						/* Mets le numeroPays des statues */
						autresStatues[i].setAttribute("statue",{
							numeroPays:laSelectionDesPays[i]
						});

						/* Affiche l'année sur la base
						autresStatues[i].children[3].children[0].setAttribute('text',{
							value:dataLife[laSelectionDesPays[0]][0]
						});*/

					}

				}

			};

	  },

		desactiverBouton:function() {

			var lesBoutons = document.querySelectorAll(".panneauSelectionPays");

			/* Met les boutons en gris */
			for(var i = 0;i < 24;i++) {

				lesBoutons[i].setAttribute("material",{color:0x4c4c4c});

			}

		},

	 animerPanneau:function() {

			 var el = this.el,
			 					couleur = "";

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
