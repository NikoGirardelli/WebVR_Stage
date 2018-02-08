/* S'occupe de modifier le data-am-pm lorsqu'on utiliser la switch */
AFRAME.registerComponent("am-pm", {

		init:function () {

			var el = this.el,
					horloge = document.querySelector('#horloge');

			this.verifierAmPm = function() {

				//console.log(el.components["ui-toggle"].lever.position);

				/* Si c'est PM */
				if(horloge.getAttribute("data-am-pm") == "PM") {

					horloge.setAttribute("data-am-pm","AM");

				}

				/* Sinon (AM) */
				else if(horloge.getAttribute("data-am-pm") == "AM") {

					horloge.setAttribute("data-am-pm","PM");

				}

			};

			/* Au départ il est 12h PM */
			horloge.setAttribute("data-am-pm","PM");

		},

		play:function() {

				this.el.addEventListener("change",this.verifierAmPm);

		},

		pause:function() {

			this.el.removeEventListener("change",this.verifierAmPm);

		}

});
