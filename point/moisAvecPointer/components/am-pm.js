/* S'occupe de savoir quel journée est saisie
 * lorsque les boutons sont cliqué
 */
AFRAME.registerComponent("am-pm", {

		init:function () {

			var el = this.el;

			this.verifierValeur = function() {

				var horloge = document.querySelector('#horloge');

				/* Si le slider est à 0 (haut) = AM */
				if(el.getAttribute("ui-toggle").value == 1) {

					horloge.setAttribute("data-am-pm","PM");
					el.setAttribute("ui-toggle","value:0");

				}

				/* Sinon si le slider est à 1 (bas) = PM */
				else if(el.getAttribute("ui-toggle").value == 0) {

					horloge.setAttribute("data-am-pm","AM");
					el.setAttribute("ui-toggle","value:1");

				}

			};

		},

		play:function() {

				this.el.addEventListener("change",this.verifierValeur);

		},

		pause:function() {

			this.el.removeEventListener("change",this.verifierValeur);

		}

});
