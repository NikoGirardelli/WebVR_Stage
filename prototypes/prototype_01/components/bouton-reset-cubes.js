/* S'occupe des boutons resets CRASH LORSQU'ON A UN CUBE DANS LES MAINS ET QU'ON APPUIT */
AFRAME.registerComponent("bouton-reset-cubes", {

		schema: {
			enabled: {type: 'boolean', default: true}
		},

	  update: function () {

			/* Référence au parent */
      var selecteurMois = document.querySelector("#selecteurMois");

			/* Data et bouton*/
			var el = this.el;
			var data = this.data;

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

			/* Suppression complete */
			var suppressionComplete = false;

			/* Lorsque qu'on appuit le bouton */
      el.addEventListener('pressed', function() {

				selecteurMois.setAttribute("data-mois-choisi", "");

				/* Si on a coché enabled
				if(data.enabled == true) {

					/* On supprime les anciens cubes.
					if(suppressionComplete == false) {

						for(var i = 0; i < 12; i++) {

							lesCubesMois[i].removeAttribute("mixin");
							selecteurMois.removeChild(lesCubesMois[i]);

						}

						suppressionComplete = true;

					}

					if(suppressionComplete == true) {

						/* On instancie des cubes à leur position de départ.
						for(var j = 0; j < 12; j++) {

							var cube = document.createElement("a-entity");
							cube.setAttribute("mixin", "cubeMois");
							cube.setAttribute("class", "cube");
							cube.setAttribute("material","src:" + lesMois[j]);
							cube.setAttribute("data-mois", lesDataMois[j]);
							cube.setAttribute("position", lesPositionsMois[j]);
							selecteurMois.appendChild(cube);

						}

						lesCubesMois = document.querySelectorAll(".cube");
						suppressionComplete = false;

					}

				}*/

      });

	  },

		tick: function () {

     //console.log(this.data.enabled);

	 }

});
