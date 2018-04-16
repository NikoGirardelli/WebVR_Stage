/* Ajoute ou supprime un objet de notre inventaire.
*  S'occupe de mettre notre argent à jour aussi.
*/
AFRAME.registerComponent("bouton-achat-vente", {

		init: function () {

			var el = this.el,
					panneauParent = el.parentEl.parentEl;

			this.hoverStart = function() {

				if(panneauParent.getAttribute("grabbable").maxGrabbers == 0) {

					el.setAttribute("material",{opacity:0.5});
					el.setAttribute("scale",{x:3,y:3,z:1});

				}

      };

			this.hoverEnd = function() {

				if(panneauParent.getAttribute("grabbable").maxGrabbers == 0) {

					el.setAttribute("material",{opacity:1});
					el.setAttribute("scale",{x:2.6,y:2.6,z:1});

			  }

      };

	  },

		modifierInventaire: function() {

			var el = this,
					joueur = document.querySelector("#player"),
					panneauParent = this.parentEl.parentEl;

			if(panneauParent.getAttribute("grabbable").maxGrabbers == 0) {

				el.setAttribute("animation",{
					dur:300,
					property:"material.color",
					from:"#000000",
					to:'#c4c4c4',
					startEvents:"click",
					autoplay:false
				});

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
