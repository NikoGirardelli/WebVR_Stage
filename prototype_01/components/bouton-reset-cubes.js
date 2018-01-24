/* S'occupe des boutons resets 																							NE FONCTIONNE PAS POUR L'INSTANT */
AFRAME.registerComponent("bouton-reset-cubes", {

	  init: function () {

			/* Référence au parent */
      var selecteurMois = document.querySelector("#selecteurMois");

			/* Référence aux cubes */
      var lesCubesMois = document.querySelectorAll(".cube");

			var lesMois = ["#jan","#feb","#dec","#mar","#apr","#may",
										 "#june","#july","#aug","#nov","#sept","#oct"];

			var lesDataMois = ["JAN","FEB","DEC","MAR","APR","MAY",
												 "JUNE","JULY","AUG","NOV","SEPT","OCT"];

			var lesPositionsMois = ["-0.5 5 -1.5","0.5 5 -1.5","1.5 5 -1.5",
															"-0.5 5 -2.5","0.5 5 -2.5","1.5 5 -2.5",
															"-0.5 5 -3.5","0.5 5 -3.5","1.5 5 -3.5",
															"1.5 5 -4.5","-0.5 5 -4.5","0.5 5 -4.5"];

			/* Bouton */
			var el = this.el;

      /* Lorsque qu'on appuit le bouton */
      el.addEventListener('pressed', function() {

				selecteurMois.removeChild(lesCubesMois[0]);
/*
					// On instancie des cubes à leur position de départ en supprimant les anciens.
					for(var i = 0; i < 12;i++) {
						console.log(i);

						if(lesCubesMois.length > 0) {

							selecteurMois.removeChild(lesCubesMois[i]);

						}

						else  {


							var cube = document.createElement("a-entity");
							cube.setAttribute("mixin", "cubeMois");
							cube.setAttribute("class", "cube");
							cube.setAttribute("material","src:" + lesMois[i]);
							cube.setAttribute("data-mois", lesDataMois[i]);
							cube.setAttribute("position", lesPositionsMois[i]);
							selecteurMois.appendChild(cube);

						}

					}*/

					if(lesCubesMois.length === 0) {

						console.log("vide");
						//selecteurMois.removeChild(lesCubesMois[i]);

					}

      });

	  },

		tick: function () {

    var entity = this.el; /*
		var lesCubesMois = document.querySelectorAll(".cube");

    if (lesCubesMois.length == 12) {

      selecteurMois.removeChild(lesCubesMois);
			console.log("devrait marcher");
    }
			*/
  }

});
