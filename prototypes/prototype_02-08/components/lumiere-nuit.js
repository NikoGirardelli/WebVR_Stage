/* S'occupe d'afficher une lumière lorsqu'il fait trop sombre durant la nuit */
AFRAME.registerComponent("lumiere-nuit", {

		init:function () {

			var el = this.el,
					horloge = document.querySelector('#horloge');

			el.setAttribute("light", {

				color: "#ff8000",
				groundColor: "#ff0000",
				type: "point",
				distance: 20,
				intensity: 1.5,
				decay:2.98

			});

			el.setAttribute("visible","false");

			this.eclairer = function() {

				/* Si c'est sombre */
				if((horloge.getAttribute("data-am-pm") == "PM" &&
						(horloge.getAttribute("data-heure-choisisse") == 6 ||
					 	 horloge.getAttribute("data-heure-choisisse") == 7 ||
						 horloge.getAttribute("data-heure-choisisse") == 8 ||
						 horloge.getAttribute("data-heure-choisisse") == 9 ||
						 horloge.getAttribute("data-heure-choisisse") == 10 ||
						 horloge.getAttribute("data-heure-choisisse") == 11)) ||
					 (horloge.getAttribute("data-am-pm") == "AM" &&
						(horloge.getAttribute("data-heure-choisisse") == 12 ||
						 horloge.getAttribute("data-heure-choisisse") == 1 ||
						 horloge.getAttribute("data-heure-choisisse") == 2 ||
						 horloge.getAttribute("data-heure-choisisse") == 3 ||
						 horloge.getAttribute("data-heure-choisisse") == 4 ||
						 horloge.getAttribute("data-heure-choisisse") == 5 ||
						 horloge.getAttribute("data-heure-choisisse") == 6))) {

						 el.setAttribute("visible","true");

				}

				/* Sinon c'est clair */
				else {

					el.setAttribute("visible","false");

				}

			};

		},

		play:function() {

			var horloge = document.querySelector('#horloge');

			horloge.addEventListener("change",this.eclairer);

		},

		pause:function() {

			var horloge = document.querySelector('#horloge');

			horloge.removeEventListener("change",this.eclairer);

		}

});
