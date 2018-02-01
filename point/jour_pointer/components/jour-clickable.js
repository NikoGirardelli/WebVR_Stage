/* S'occupe de savoir quel journée est saisie lorsque les boutons sont cliqué */
AFRAME.registerComponent("jour-clickable", {

		init: function () {

			/* Référence à l'écran */
      var txtJour = document.querySelector("#textJour"),

			/* Bouton */
			el = this.el,

			/* Permet d'aider pour l'écriture de la journée */
			phraseDefaut = "Day Selected : ";

			/* Lorsque qu'on hover le bouton */
      el.addEventListener('hover-start', function() {

				el.setAttribute("scale","1.2 1.2 1.2");

				el.addEventListener("click",calendrierAction);

      });

			/* Lorsque qu'on ne hover plus le bouton */
      el.addEventListener('hover-end', function() {

				el.setAttribute("scale","1 1 1");

				el.removeEventListener("click",calendrierAction);

      });

	  }

});

/* Variables Globale */
var jourChoisi = JSON.parse(sessionStorage.getItem(jourChoisi));

/* Action d'ajouter la valeur au titre de jour */
function calendrierAction(event) {

	/* Référence à l'écran, le jour, la phrase de défaut */
	var txtJour = document.querySelector("#textJour"),
	el = event.target,
	phraseDefaut = "Day Selected : ";

	/* Si on ne aucun jour choisi dernièrement */
	if(jourChoisi == null) {

		jourChoisi = new Array();

	}

	/* Cherche notre jour dans le tableau, si rien est trouvé, on l'ajoute*/
	if(jourChoisi.indexOf(el.getAttribute("data-jour")) == -1) {

		/* Ajout du jour dans notre tableau */
		jourChoisi.push(el.getAttribute("data-jour"));

	}
	/* Si le jour est déjà dans le tableau */
	else if(jourChoisi.indexOf(el.getAttribute("data-jour")) != -1){

		var posJour = jourChoisi.indexOf(el.getAttribute("data-jour"));
		jourChoisi.splice(posJour,1);

	}

	/* Joue l'animation de fade-in/fade-out */
	el.emit("playFade");

	/* Enregistrement de la variable jourChoisi dans la sessionStorage */
	sessionStorage.setItem("jourChoisi", JSON.stringify(jourChoisi));
	txtJour.setAttribute("value", phraseDefaut + jourChoisi.toString());

}
