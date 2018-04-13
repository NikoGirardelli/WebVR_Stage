var valeurArticles = [["Boston",["Grain",4,7,6],["Poutine",10,8,12],["Steel",15,22,19]],
											["Montreal",["Grain",6,2,3],["Poutine",4,8,5],["Steel",25,27,17]],
											["Toronto",["Grain",5,7,6],["Poutine",6,8,12],["Steel",30,22,19]]
										 ];
// valeurArticles[0][0] = "Boston", valeurArticles[0][2][0] = "Poutine", valeurArticles[0][2][1] = 10,

/* S'occupe de l'inventaire du joueur et de son argent. */
AFRAME.registerComponent("joueur", {

	schema: {

		argent: {default:100, type:"int"},
		grain:{default:3, type:"int"},
		poutine:{default:3, type:"int"},
		steel:{default:3, type:"int"}

	},

	init: function () {

		//this.creationTitre();
		/* Lorsqu'on vend ou achète un article, on modifie le texte de l'ui. */
		this.changerTexteArgent();
		this.changerTexteInventaire();
		this.changerTextePanneauxValeur();

	},

	/* Acheter article */
	acheterArticle:function(indiceArticle) {

		var el = this.el,
				argentJoueur = this.data.argent,
				grainJoueur = this.data.grain,
				poutineJoueur = this.data.poutine,
				steelJoueur = this.data.steel;

		/* Vérifie si on a assé d'argent */
		if(argentJoueur - valeurArticles[indiceVille][indiceArticle][1] >= 0) {

			/* Enlève le coût de l'item. */
			el.setAttribute("joueur",{argent: argentJoueur - valeurArticles[indiceVille][indiceArticle][1]});

			/* Ajout de l'item à notre inventaire. */
			switch (indiceArticle) {
				case 1: el.setAttribute("joueur",{grain:++grainJoueur});
					break;
				case 2: el.setAttribute("joueur",{poutine:++poutineJoueur});
	 				 break;
			  case 3: el.setAttribute("joueur",{steel:++steelJoueur});
					 break;

			}

		}

		else {
			console.log("pas assé");
		}

	},

	/* vendre article */
	vendreArticle:function(indiceArticle) {

		var el = this.el,
				argentJoueur = this.data.argent,
				grainJoueur = this.data.grain,
				poutineJoueur = this.data.poutine,
				steelJoueur = this.data.steel,
				articleVendu = false;

		/* Vérifie si on a assé d'article à vendre et enlève l'item */
		if(grainJoueur > 0 && indiceArticle == 1) {

			el.setAttribute("joueur",{grain:--grainJoueur});
			articleVendu = true;

		}

		else if(poutineJoueur > 0 && indiceArticle == 2) {

			el.setAttribute("joueur",{poutine:--poutineJoueur});
			articleVendu = true;

		}

		else if(steelJoueur > 0 && indiceArticle == 3) {

			el.setAttribute("joueur",{steel:--steelJoueur});
			articleVendu = true;

		}

		else {

			console.log("pas assé item")

		}

		/* On reçoit notre argent de la vente. */
		if(articleVendu == true) {

			el.setAttribute("joueur",{argent: argentJoueur + valeurArticles[indiceVille][indiceArticle][1]});
			articleVendu = false;

		}

	},

	/* Modifie le texte de la valeur des articles pour Boston*/
	changerTextePanneauxValeur:function() {

		var uiArticles = document.querySelectorAll(".ui-article");

		for(var i = 0;i < 3;i++) {

			uiArticles[i].children[1].children[1].setAttribute("text", {value:"Grain's value: " + valeurArticles[i][1][1]});
			uiArticles[i].children[1].children[2].setAttribute("text", {value:"Poutine's value: " + valeurArticles[i][2][1]});
			uiArticles[i].children[1].children[3].setAttribute("text", {value:"Steel's value: " + valeurArticles[i][3][1]});

		}

	},

	/* Modifie le texte du nombre d'article du joueur */
	changerTexteInventaire:function() {

		var uiInventaire = document.querySelector("#ui-inventaire"),
				grainJoueur = this.data.grain,
				poutineJoueur = this.data.poutine,
				steelJoueur = this.data.steel;

		uiInventaire.children[1].children[1].setAttribute("text", {value:grainJoueur + " x Grain"});
		uiInventaire.children[1].children[2].setAttribute("text", {value:poutineJoueur + " x Poutine"});
		uiInventaire.children[1].children[3].setAttribute("text", {value:steelJoueur + " x Steel"});

	},

	/* Modifie le texte du nombre d'argent du joueur */
	changerTexteArgent:function() {

		var uiArgent = document.querySelector("#ui-argent"),
				argentJoueur = this.data.argent;

		uiArgent.children[1].children[1].setAttribute("text",{value:argentJoueur + " $"});

	},

	update:function() {

		/* Lorsqu'on vend ou achète un article, on modifie le texte de l'ui. */
		this.changerTexteArgent();
		this.changerTexteInventaire();

	}

});
