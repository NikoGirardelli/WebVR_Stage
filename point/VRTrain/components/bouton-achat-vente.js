/* Ajoute ou supprime un objet de notre inventaire.
*  S'occupe de mettre notre argent à jour aussi.
*/
AFRAME.registerComponent("bouton-achat-vente", {

		init: function () {

	  },

		modifierInventaire:function() {

			var el = this,
					joueur = document.querySelector("#player");

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

		},

		play:function () {

				/* Lorsqu'on clique le bouton */
				this.el.addEventListener("click",this.modifierInventaire);

		},

		pause:function() {


		},

		remove:function() {

			this.el.removeEventListener("click",this.modifierInventaire);

		}

});
