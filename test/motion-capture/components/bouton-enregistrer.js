/* S'occupe de déplacer le joueur lorsqu'on clique sur les cylindres au sol. */
AFRAME.registerComponent("bouton-enregistrer", {

		init: function () {

			/* Pays */
			var el = this.el;

			/* Raycaster-intersected */
			this.eventScalingBegining = function() {

				el.setAttribute("opacity","0.4");

      };

			/* Raycaster-intersected-cleared */
			this.eventScalingEnding = function() {

				el.setAttribute("opacity","1");

      };

			/* Déplace le joueur au point de cliquer. */
			this.teleporter = function() {

				if(el.getAttribute("visible") == true) {

					var joueur = document.querySelector("#player");

					joueur.setAttribute("position",el.getAttribute("position"));

				}

			}

	  },

		play:function () {

			/* Lorsqu'on clique le jour */
			this.el.addEventListener("click",this.teleporter);

			/* Lorsque qu'on hover le bouton */
      this.el.addEventListener('raycaster-intersected', this.eventScalingBegining);

			/* Lorsque qu'on ne hover plus le bouton */
      this.el.addEventListener('raycaster-intersected-cleared', this.eventScalingEnding);

		},

		pause:function() {

			this.el.removeEventListener("click",this.teleporte);
			this.el.removeEventListener("raycaster-intersected",this.eventScalingBegining);
			this.el.removeEventListener("raycaster-intersected-cleared",this.eventScalingEnding);

		},

		remove:function() {

			this.el.removeEventListener("click",this.teleporter);
			this.el.removeEventListener("raycaster-intersected",this.eventScalingBegining);
			this.el.removeEventListener("raycaster-intersected-cleared",this.eventScalingEnding);

		}

});
