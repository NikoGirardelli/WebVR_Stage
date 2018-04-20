/* Ajoute ou supprime un objet de notre inventaire.
*  S'occupe de mettre notre argent à jour aussi.
*/
AFRAME.registerComponent("bouton-achat-vente", {

		init: function () {

			var el = this.el,
					panneauParent = el.parentEl.parentEl,
					positionAnimY = el.getAttribute("position").y;
				  positionAnim = {x:0,y:positionAnimY,z:-0.08},
					positionInit = {x:0,y:positionAnimY,z:0.2};

			/* Animation posiiton et couleur */
			el.setAttribute("animation__text",{
				dur:300,
				property:"text.color",
				from:"#0099ff",
				to:"#FFFFFF",
				startEvents:"activerBouton",
				autoplay:false
			});

			el.setAttribute("animation__position",{
				dur:300,
				property:"position",
				from:positionAnim,
				to:positionInit,
				startEvents:"activerBouton",
				autoplay:false
			});

			this.hoverStart = function() {

				if(outilSelection == 1 && jeuLancer == true) {

					el.setAttribute("material",{opacity:0.5});
					el.setAttribute("text",{color:0x0099ff});
					el.setAttribute("scale",{x:3.2,y:3.2,z:1});

				}

      };

			this.hoverEnd = function() {

				el.setAttribute("material",{opacity:1});
				el.setAttribute("text",{color:0xffffff});
				el.setAttribute("scale",{x:2.6,y:2.6,z:1});

      };

	  },

		modifierInventaire: function() {

			var el = this,
					joueur = document.querySelector("#player"),
					panneauParent = this.parentEl.parentEl;

			if(outilSelection == 1 && jeuLancer == true) {

				/* Joue l'animation */
				el.emit("activerBouton");

				/* Achat ou vente de l'article */
				switch(el.getAttribute("data-btn")) {

					/* Achats */
					case "1":
							 joueur.components["joueur"].acheterArticle(1);
							 break;
				  case "3":
							 joueur.components["joueur"].acheterArticle(2);
							 break;
				  case "5":
	 					 	 joueur.components["joueur"].acheterArticle(3);
	 					 	 break;

					/* Ventes */
					case "2":
							 joueur.components["joueur"].vendreArticle(1);
							 break;
					case "4":
							 joueur.components["joueur"].vendreArticle(2);
							 break;
					case "6":
						 	 joueur.components["joueur"].vendreArticle(3);
						 	 break;

				}

			}

		},

		play:function () {

				/* Lorsqu'on clique le bouton */
				this.el.addEventListener("click",this.modifierInventaire);
				this.el.addEventListener('hover-start', this.hoverStart);
	      this.el.addEventListener('hover-end', this.hoverEnd);
		},

		pause:function() {

			this.el.removeEventListener("click",this.modifierInventaire);
			this.el.removeEventListener('hover-start', this.hoverStart);
			this.el.removeEventListener('hover-end', this.hoverEnd);

		},

		remove:function() {

			this.el.removeEventListener("click",this.modifierInventaire);
			this.el.removeEventListener('hover-start', this.hoverStart);
      this.el.removeEventListener('hover-end', this.hoverEnd);

		}

});
