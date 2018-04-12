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
						 joueur.components["joueur"].acheterGrain;
						 break;
			  case "3":
						 joueur.components["joueur"].acheterPoutine();
						 break;
			  case "5":
 					 	 joueur.components["joueur"].acheterSteel();
 					 	 break;

				/* Ventes */
				case "2":
						 joueur.components["joueur"].vendreGrain();
						 break;
				case "4":
						 joueur.components["joueur"].vendrePoutine();
						 break;
				case "6":
					 	 joueur.components["joueur"].vendreSteel();
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

			this.el.removeEventListener("click",this.activerSelection);

		}

});
