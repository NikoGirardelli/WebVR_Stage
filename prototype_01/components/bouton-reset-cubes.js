/* S'occupe des boutons resets 																							NE FONCTIONNE PAS POUR L'INSTANT */
AFRAME.registerComponent("bouton-reset-cubes", {

	  init: function () {

			/* Référence à l'écran */
      var texteEcranJour = document.querySelector("#ecranJour");

			/* Référence aux cubes */
      var lesCubesMois = document.querySelectorAll(".cube");

			/* Bouton */
			var el = this.el;

      /* Lorsque qu'on appuit le bouton */
      el.addEventListener('pressed', function() {
				/*console.log("test reset cubes");
				console.log(lesCubesMois[0].getAttribute("position"));
				console.log(lesCubesMois[0].getAttribute("data-pos-init"))*/
					// On remet tous les cubes à leur position de départ.
					for(var i = 0; i < lesCubesMois.length;i++) {

							lesCubesMois[i].removeAttribute('postion');
							lesCubesMois[i].setAttribute("position", {x: 0, y: 0, z: 0});
					}

      });

	  }

});
