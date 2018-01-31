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

/* Action d'ajouter la valeur au titre de jour */
function calendrierAction(event) {

	/* Référence à l'écran, le jour, la phrase de défaut */
	var txtJour = document.querySelector("#textJour"),
	el = event.target,
	phraseDefaut = "Day Selected : ",
	jourChoisi = JSON.parse(sessionStorage.getItem(jourChoisi));

	/* Si on ne aucun jour choisi dernièrement */
	if(jourChoisi == null) {
		console.log("est null");
		jourChoisi = new Array();

	}

	/* Joue l'animation de fade-in/fade-out */
	el.emit("playFade");
jourChoisi.push(el.getAttribute("data-jour"));
	/* Cherche notre jour dans le tableau, si rien est trouvé, on l'ajoute */
	if(jourChoisi.indexOf(el.getAttribute("data-jour")) == -1) {


		console.log("ajout du jour dans array " + jourChoisi);

	}
	/* Si non on l'enlève
	else {

		var posJour = jourChoisi.indexOf(el.getAttribute("data-jour"));
		jourChoisi.splice(posJour);
		console.log("retrait du jour dans array " + jourChoisi);

	}*/

	sessionStorage.setItem("jourChoisi", JSON.stringify(jourChoisi));
	txtJour.setAttribute("value", phraseDefaut + jourChoisi.toString());


}
