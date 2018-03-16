/* S'occupe de créer les statues à l'initialisation de la scène */
/* Constantes pour les couleurs, gris, blanc, noir */
//const couleur = [0x808b96,0xfbfcfc,0x000000];




/* Dès le chargement de la page, on crée nos statues. */
document.addEventListener("DOMContentLoaded", function(event) {

	var ensembleStatue = document.querySelector("#ensembleStatue");

	for(var i = 1; i < 3; i++) {

		creerStatue(ensembleStatue,i);
		console.log("statue fini " + i)

	}

});
